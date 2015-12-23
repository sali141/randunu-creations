/* 
 Document   : jquery.oneitimageslider
 Created on : Nov 19, 2013, 12:00:10 PM
 Author     : Saliya Randunu - salya@oneit.com.au
 Description:
 Cougar 6.0 Image Slider Plugin.
 */


(function($) {

    $.fn.oneitimageslider = function(options)
    {
        var defaults =
                {
                    width : 650,
                    height : 250,
                    timer: 2000,
                    fadeTime : 300,
                    order : 'sequential',
                    looping : true,
                    xpos : 0,
                    ypos : 0
                };
        var settings = $.extend(defaults, options);
        var $self = $(this);
        var listItems = $self.children('li');
        var listLen = listItems.length;
        var i = 0;
        
       
   //set slider width and height
        $self.css({
            "min-width" : settings.width ,
            "min-height" : settings.height
        });
        
   //set images width and heigh     
        $self.find('img').css({
            "width": settings.width,
            "height": settings.height
        }); 
        
    //hide li elements otherthan the first element   
    listItems.not(':first').hide();
    
    //trigger sliding with given intervals
  var sliding =  setInterval(function() {
            
             //if looping false with sequentail order last image then stop sliding
            if (settings.order == 'sequential' && settings.looping == false && i + 1 === listLen)
                {
                   clearInterval(sliding);
                }
            else
                {
                    listItems.eq(i).fadeOut(settings.fadeTime, function() {
                       // alert(settings.order)
                      if(settings.order == 'sequential')
                          {
                               i += 1;

                                if (i === listLen)
                                {
                                    i = 0;
                                }
                          }
                       else
                           {
                             i = rand(listLen,i);
                           //  alert(i)
                           }
                       
                        listItems.eq(i).fadeIn(settings.fadeTime);
                    });

                }
        
      
            
        }, settings.timer);
        
        
        function rand(len,curr) {
            var r = Math.floor(Math.random() * len);
            if (r == curr) {
                return rand(len, curr);
            }
            else
                return r;
        }
   

    };//end of plugin

}(jQuery));

