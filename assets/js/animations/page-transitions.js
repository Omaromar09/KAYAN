/**
 * KAYAN Luxury Fashion — Page Transition Engine
 * Coordinates curtain wipes and logo flashes across static navigation
 */

import { initPageTransitions, triggerPageTransition } from '../core/router-helpers.js';

export function setupPageTransitions() {
  initPageTransitions();
}

export { triggerPageTransition };
