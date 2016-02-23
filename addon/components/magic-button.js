import Ember from 'ember';
import layout from '../templates/components/magic-button';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'button',
  magicIsHappening: false,
  click() {
    this.toggleProperty('magicIsHappening');
  }
});
