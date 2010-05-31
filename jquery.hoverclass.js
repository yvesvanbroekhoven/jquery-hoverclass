/*
 * Hover class adds and remove a given classname to an element
 * Usage: $(selector).hoverClass('class-name');
 * Options:
 *   css_class = CSS class to be added, (default: 'hover')
 */

(function($){
  $.fn.hoverClass = function(options){
    var defaults = {
        'css_class': 'hover'
    }
    var settings = $.extend(defaults, options)
    
    $(this).hover(function(){
        $(this).addClass(settings.css_class);
    }, function(){
        $(this).removeClass(settings.css_class);
    });
    
  };
})(jQuery);