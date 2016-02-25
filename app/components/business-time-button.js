// Don't define components here or they are not extendable by the consuming
// app

import Ember from 'ember';
import layout from 'magic-button/templates/components/business-time-button';

export default Ember.Component.extend({
  layout: layout,
  itsOn: false,
  delay: 1000,
  tagName: 'button',
  click() {
    this.set('itsOn', true);
    Ember.run.later(() => this.set('itsOn', false), this.get('delay'));
  }
});
