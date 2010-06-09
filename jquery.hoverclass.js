/*
 * Hover class adds and removes a given classname to an element on a hover event
 * Usage: $(selector).hoverClass('class-name');
 * @params css_class: CSS class to be added, (default: 'hover')
 */

(function($){
  $.fn.hoverClass = function(css_class){
    
    // Defaults
    css_class = typeof(css_class) != 'undefined' ? css_class : 'hover';
    
    // Events
    this.hover(
      function(){
        $(this).addClass(css_class);
      }, function(){
        $(this).removeClass(css_class);
    });
    
  };
})(jQuery);