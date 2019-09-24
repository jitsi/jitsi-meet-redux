/**
 * Functions to let the module to be used as non-singleton registry holder.
 *
 * This is useful when multiple of your modules depend on this registry and you want to implement encapsulation
 * for the Redux stores.
 */

import { _MiddlewareRegistry, _ReducerRegistry } from './registry';

/**
 * Creates a new middleware registry.
 *
 * @returns {_MiddlewareRegistry}
 */
export function createMiddlewareRegistry() {
    return new _MiddlewareRegistry();
}

/**
 * Creates a new reducer registry.
 *
 * @returns {_ReducerRegistry}
 */
export function createReducerRegistry() {
    return new _ReducerRegistry();
}
