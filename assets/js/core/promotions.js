/**
 * KAYAN Luxury Fashion — Promotions & Pricing Engine
 * Pure mathematical functions for multi-buy, promo codes, shipping thresholds & currency conversions
 */

export const CURRENCY_RATES = {
  USD: 1.0,
  AED: 3.67,
  EUR: 0.92,
  SAR: 3.75,
  EGP: 50.00
};

export const CURRENCY_SYMBOLS = {
  USD: '$',
  AED: 'AED',
  EUR: '€',
  SAR: 'SAR',
  EGP: 'ج.م'
};

export const FREE_SHIPPING_THRESHOLD_USD = 150;
export const STANDARD_SHIPPING_FEE_USD = 15;

export const PROMO_CODES = {
  KAYAN15: { type: 'percent', value: 0.15, minOrderUSD: 0, label: '15% First Order Privilege' },
  CIRCLE20: { type: 'percent', value: 0.20, minOrderUSD: 100, label: 'Kayan Circle VIP 20%' },
  FREESHIP: { type: 'shipping', value: 1.0, minOrderUSD: 0, label: 'Complimentary Express Delivery' },
  EQUINOX30: { type: 'percent', value: 0.30, minOrderUSD: 250, label: 'Equinox Archive 30% Off' }
};

/**
 * Converts a base USD amount to a target currency
 */
export function convertCurrency(amountUSD, targetCurrency = 'EGP') {
  const rate = CURRENCY_RATES[targetCurrency] || (targetCurrency === 'EGP' ? 50.00 : 1.0);
  return Math.round(amountUSD * rate * 100) / 100;
}

/**
 * Calculates volume discount (Buy 2 Get 20%, Buy 3+ Get 25%)
 */
export function calculateVolumeDiscount(items) {
  const totalItemCount = items.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const eligibleSubtotalUSD = items.reduce((sum, item) => {
    const price = item.salePrice || item.price;
    return sum + (price * (item.quantity || 1));
  }, 0);

  if (totalItemCount >= 3) {
    return {
      rate: 0.25,
      amountUSD: Math.round(eligibleSubtotalUSD * 0.25 * 100) / 100,
      label: 'Equinox Bundle (3+ items: 25% Off)'
    };
  } else if (totalItemCount === 2) {
    return {
      rate: 0.20,
      amountUSD: Math.round(eligibleSubtotalUSD * 0.20 * 100) / 100,
      label: 'Equinox Pair (2 items: 20% Off)'
    };
  }

  return { rate: 0, amountUSD: 0, label: null };
}

/**
 * Validates and evaluates a promo coupon code
 */
export function evaluatePromoCode(code, subtotalUSD) {
  if (!code) return { valid: false, discountUSD: 0, freeShipping: false, message: '' };

  const cleanCode = code.trim().toUpperCase();
  const promo = PROMO_CODES[cleanCode];

  if (!promo) {
    return { valid: false, discountUSD: 0, freeShipping: false, message: 'Invalid promotional code' };
  }

  if (subtotalUSD < promo.minOrderUSD) {
    return {
      valid: false,
      discountUSD: 0,
      freeShipping: false,
      message: `Minimum order of $${promo.minOrderUSD} required for code ${cleanCode}`
    };
  }

  if (promo.type === 'percent') {
    const discountUSD = Math.round(subtotalUSD * promo.value * 100) / 100;
    return { valid: true, discountUSD, freeShipping: false, message: promo.label, code: cleanCode };
  }

  if (promo.type === 'shipping') {
    return { valid: true, discountUSD: 0, freeShipping: true, message: promo.label, code: cleanCode };
  }

  return { valid: false, discountUSD: 0, freeShipping: false, message: '' };
}

/**
 * Pure function: Calculates full cart breakdown and financials
 */
export function calculateCartTotals(items, promoCode = null, currency = 'USD') {
  const rawSubtotalUSD = items.reduce((sum, item) => {
    return sum + (item.price * (item.quantity || 1));
  }, 0);

  const saleSubtotalUSD = items.reduce((sum, item) => {
    const effectivePrice = item.salePrice || item.price;
    return sum + (effectivePrice * (item.quantity || 1));
  }, 0);

  // Markdown savings from sales
  const markdownSavingsUSD = Math.max(0, rawSubtotalUSD - saleSubtotalUSD);

  // Volume discount
  const volumeDiscount = calculateVolumeDiscount(items);

  // Promo code evaluation
  const postVolumeSubtotal = Math.max(0, saleSubtotalUSD - volumeDiscount.amountUSD);
  const promoResult = evaluatePromoCode(promoCode, postVolumeSubtotal);

  // Shipping
  const hasFreeShipping =
    postVolumeSubtotal >= FREE_SHIPPING_THRESHOLD_USD || promoResult.freeShipping;
  const shippingFeeUSD = hasFreeShipping ? 0 : STANDARD_SHIPPING_FEE_USD;

  // Free shipping threshold progress
  const freeShippingProgress = Math.min(
    100,
    Math.round((postVolumeSubtotal / FREE_SHIPPING_THRESHOLD_USD) * 100)
  );
  const freeShippingRemainingUSD = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD_USD - postVolumeSubtotal
  );

  // Total discounts
  const totalDiscountsUSD = markdownSavingsUSD + volumeDiscount.amountUSD + promoResult.discountUSD;

  // Final Total
  const finalTotalUSD = Math.max(0, postVolumeSubtotal - promoResult.discountUSD + shippingFeeUSD);

  // Convert all to target currency
  return {
    itemCount: items.reduce((acc, i) => acc + (i.quantity || 1), 0),
    rawSubtotal: convertCurrency(rawSubtotalUSD, currency),
    subtotal: convertCurrency(saleSubtotalUSD, currency),
    markdownSavings: convertCurrency(markdownSavingsUSD, currency),
    volumeDiscount: {
      rate: volumeDiscount.rate,
      amount: convertCurrency(volumeDiscount.amountUSD, currency),
      label: volumeDiscount.label
    },
    promoDiscount: {
      valid: promoResult.valid,
      code: promoResult.code || null,
      amount: convertCurrency(promoResult.discountUSD, currency),
      message: promoResult.message
    },
    totalSavings: convertCurrency(totalDiscountsUSD, currency),
    shippingFee: convertCurrency(shippingFeeUSD, currency),
    hasFreeShipping,
    freeShippingThreshold: convertCurrency(FREE_SHIPPING_THRESHOLD_USD, currency),
    freeShippingRemaining: convertCurrency(freeShippingRemainingUSD, currency),
    freeShippingProgress,
    finalTotal: convertCurrency(finalTotalUSD, currency),
    currency
  };
}
