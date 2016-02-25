import Ember from 'ember';
import layout from '../templates/components/magic-button';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'button',
  magicIsHappening: false,
  delay: 1000,
  click() {
    this.set('magicIsHappening', true);
    Ember.run.later(() => this.set('magicIsHappening', false), this.get('delay'));
  }
});
