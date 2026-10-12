# Build Standalone Single-File Bundle for KAYAN Atelier
$files = @(
  'assets/js/data/translations.js',
  'assets/js/data/categories.js',
  'assets/js/data/stores.js',
  'assets/js/data/reviews.js',
  'assets/js/data/products.js',
  'assets/js/core/storage.js',
  'assets/js/core/events.js',
  'assets/js/core/utils.js',
  'assets/js/core/promotions.js',
  'assets/js/core/store.js',
  'assets/js/core/i18n.js',
  'assets/js/core/theme.js',
  'assets/js/core/router-helpers.js',
  'assets/js/animations/scroll.js',
  'assets/js/animations/hero.js',
  'assets/js/animations/text-split.js',
  'assets/js/animations/magnetic.js',
  'assets/js/animations/tilt.js',
  'assets/js/animations/parallax.js',
  'assets/js/animations/marquee.js',
  'assets/js/animations/page-transitions.js',
  'assets/js/components/toast.js',
  'assets/js/components/preloader.js',
  'assets/js/components/cursor.js',
  'assets/js/components/cookie-banner.js',
  'assets/js/components/countdown.js',
  'assets/js/components/newsletter.js',
  'assets/js/components/product-card.js',
  'assets/js/components/header.js',
  'assets/js/components/megamenu.js',
  'assets/js/components/search.js',
  'assets/js/components/cart-drawer.js',
  'assets/js/components/quickview.js',
  'assets/js/components/modal.js',
  'assets/js/components/carousel.js',
  'assets/js/components/footer.js',
  'assets/js/main.js',
  'assets/js/pages/home.js',
  'assets/js/pages/shop.js',
  'assets/js/pages/product.js',
  'assets/js/pages/cart.js',
  'assets/js/pages/checkout.js',
  'assets/js/pages/wishlist.js',
  'assets/js/pages/account.js',
  'assets/js/pages/stores.js',
  'assets/js/pages/lookbook.js'
)

$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine('// KAYAN Atelier Unified Standalone Bundle (CORS-free for file:/// & http://)')
[void]$sb.AppendLine('(function() {')
[void]$sb.AppendLine('  "use strict";')

foreach ($f in $files) {
    $path = Join-Path 'c:\Users\dell\Desktop\kayan' $f
    if (-not (Test-Path $path)) { continue }
    $lines = [System.IO.File]::ReadAllLines($path, [System.Text.Encoding]::UTF8)
    foreach ($line in $lines) {
        if ($line -match '^\s*import\s+') { continue }
        if ($line -match '^\s*export\s+default\s+') { 
            $line = $line -replace '^\s*export\s+default\s+', ''
        }
        if ($line -match '^\s*export\s+\{') { continue }
        if ($line -match '^\s*export\s+(const|let|var|function|class)\s+') {
            $line = $line -replace '^\s*export\s+', ''
        }
        [void]$sb.AppendLine($line)
    }
}

[void]$sb.AppendLine('')
[void]$sb.AppendLine('  // Global window exposure for inline scripts, console inspection, and test runner')
[void]$sb.AppendLine('  window.KAYAN = {')
[void]$sb.AppendLine('    store,')
[void]$sb.AppendLine('    events,')
[void]$sb.AppendLine('    i18n,')
[void]$sb.AppendLine('    themeController,')
[void]$sb.AppendLine('    toastSystem,')
[void]$sb.AppendLine('    products,')
[void]$sb.AppendLine('    categories,')
[void]$sb.AppendLine('    stores,')
[void]$sb.AppendLine('    calculateCartTotals,')
[void]$sb.AppendLine('    calculateVolumeDiscount,')
[void]$sb.AppendLine('    evaluatePromoCode,')
[void]$sb.AppendLine('    convertCurrency,')
[void]$sb.AppendLine('    FREE_SHIPPING_THRESHOLD_USD,')
[void]$sb.AppendLine('    fuzzyMatch,')
[void]$sb.AppendLine('    debounce,')
[void]$sb.AppendLine('    bootstrapApp,')
[void]$sb.AppendLine('    initHomePage,')
[void]$sb.AppendLine('    initShopPage,')
[void]$sb.AppendLine('    initProductPage,')
[void]$sb.AppendLine('    initCartPage,')
[void]$sb.AppendLine('    initCheckoutPage,')
[void]$sb.AppendLine('    initWishlistPage,')
[void]$sb.AppendLine('    initAccountPage,')
[void]$sb.AppendLine('    initStoresPage,')
[void]$sb.AppendLine('    initLookbookPage')
[void]$sb.AppendLine('  };')
[void]$sb.AppendLine('  window.store = store;')
[void]$sb.AppendLine('  window.events = events;')
[void]$sb.AppendLine('  window.i18n = i18n;')
[void]$sb.AppendLine('  window.themeController = themeController;')
[void]$sb.AppendLine('  window.toastSystem = toastSystem;')
[void]$sb.AppendLine('  window.products = products;')
[void]$sb.AppendLine('  window.categories = categories;')
[void]$sb.AppendLine('  window.stores = stores;')
[void]$sb.AppendLine('')
[void]$sb.AppendLine('})();')

$outPath = 'c:\Users\dell\Desktop\kayan\assets\js\kayan-bundle.js'
[System.IO.File]::WriteAllText($outPath, $sb.ToString(), [System.Text.Encoding]::UTF8)
Write-Host 'Bundle generated! Size:' (Get-Item $outPath).Length 'bytes'
