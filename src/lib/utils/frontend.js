// Utils
import { isDefined } from './is';

export function getNewState(state, newState) {
  return Object.assing({}, state, newState);
}

export function isFirstRender(items) {
  return items && items.length === 0 || !isDefined(items);
}
