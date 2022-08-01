import Vue from 'vue'

Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    console.log('Entering focus', el)
    el.focus()
  }
})
