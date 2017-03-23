import Ember from 'ember';
// return each 'post' object in model() to be displayed in index.hbs
export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
}); Ember.Controller.extend({
    breakpoints: [
        {
          'breakpoint': 1024,
          'settings': {
            'slidesToShow': 3,
            'slidesToScroll': 3,
            'infinite': true
          }
        },
        {
          'breakpoint': 600,
          'settings': {
            'slidesToShow': 2,
            'slidesToScroll': 2
          }
        },
        {
          'breakpoint': 480,
          'settings': {
            'slidesToShow': 1,
            'slidesToScroll': 1
          }
        }
    ]
});
