import Ember from 'ember';

export function isActive(params /*, hash*/) {
  let [routeName, activeRoute] = params;
  return activeRoute === routeName;
}

export default Ember.Helper.helper(isActive);
