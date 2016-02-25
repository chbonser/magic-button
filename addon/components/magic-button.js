import Ember from 'ember';
import layout from '../templates/components/magic-button';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'button',
  magicIsHappening: false,
  delay: 1000,
  click() {
    this.toggleProperty('magicIsHappening');
    Ember.run.later(() => this.toggleProperty('magicIsHappening'), this.get('delay'));
  }
});
