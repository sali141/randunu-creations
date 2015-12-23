/* 
 Document   : jquery.showspinner
 Created on : Fri 22, 2014, 11:03:10 AM
 Author     : Saliya Randunu - salya@oneit.com.au
 Description:
 OneIT showspinner.
 */

(function($) {

    $.fn.showspinner = function(options)
    {
     
     
        var defaults =
                {
                    opacity : '0.8',
                    loaderImage: 'img/ajax-loader.gif'
                };
        var settings = $.extend(defaults, options);
       

        var $self = $(this);
        var spinnerDiv;
        var loaderDiv;
        $self.click(function() {
            
            
            
            
            spinnerDiv =  $("<div/>").css(
                {
                'position': 'fixed',
                'top': 0,
                'left': 0,
                'width': '100%',
                'height': '100%',
                'z-index': 9999 ,
                'background': 'rgba(0,0,0,' + settings.opacity + ')'
                }
                );
            
            
            loaderImg = $("<img/>").attr('src',settings.loaderImage);
            
            loaderDiv = $("<div/>").css(
                    {
                                          
                        'position': 'absolute',
                        'top': "40%",
                        'left': "50%",
                        'width': '32px',
                        'height': '32px',
                        'z-index':10000
                      
                    }
            ).appendTo(spinnerDiv);
            
            loaderDiv.append(loaderImg);
            
            spinnerDiv.appendTo('body').fadeIn('slow');
          
            
        });
        


       

    };//end of plugin

}(jQuery));