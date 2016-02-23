import Ember from 'ember';

export default Ember.Component.extend({
  itsOn: false,
  tagName: 'button',
  click() {
    this.toggleProperty('itsOn');
  }
});
