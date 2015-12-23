/* 
 Document   : jquery.oneitimageslider
 Created on : Dec 03, 2013, 11:03:10 AM
 Author     : Saliya Randunu - salya@oneit.com.au
 Description:
 OneIT Tooltip.
 */


(function($) {

    $.fn.oneittooltip = function()
    {
        
        
        var $self = $(this);
        var toolTipDiv;
        
      
        $self.hover(function() {
            // Hover over code
            var title = $(this).attr('title');
           
           // console.log(title);

            var headerText = getTextVal(title,"header");
            var bodyText  =  getTextVal(title,"body");


            $(this).data('tipTitle', title).removeAttr('title');
          
            var titleDiv = $("<div/>").addClass("oneIt-tooltip-title");
            var bodyDiv = $("<div/>").addClass("oneIt-tooltip-body");

            titleDiv.text(headerText);
            bodyDiv.text(bodyText);

            toolTipDiv = $("<div/>").addClass("oneIt-tooltip");

            toolTipDiv.append(titleDiv);
            toolTipDiv.append(bodyDiv);
            
     

            toolTipDiv.appendTo('body').fadeIn('slow');
        }, function() {
            // Hover out code
           $(this).attr('title', $(this).data('tipTitle'));
        
            toolTipDiv.remove();
        }).mousemove(function(e) {
//            console.log("EY" + e.pageY);
//            console.log("TH" +  $('.oneIt-tooltip').height());
            var mousex,mousey;
            
            if(e.pageX + toolTipDiv.width() > $(window).width() ) //prevent tooltip location when tooltip located in right edage
                {
                    xMargin = (e.pageX + toolTipDiv.width() - $(window).width())  + 10;
                   
                     mousex = e.pageX - xMargin; //Get X coordinates
               
                }
            else
                {
                     mousex = e.pageX + 10; //Get X coordinates
                  
                }
            
             
            if (e.pageY + toolTipDiv.height() > $(window).height())  //prevent tooltip location when tooltip located in bottom edage
                    {
                        yMargin = (e.pageY + toolTipDiv.height() - $(window).height()) + 25;

                        mousey = e.pageY - yMargin; //Get Y coordinates

                    }
                    else
                    {
                        mousey = e.pageY + 10; //Get Y coordinates                  
                    }
    
            
            //mousey = e.pageY + 10; //Get Y coordinates
            toolTipDiv.css({top: mousey, left: mousex});
        });
        
        
        function getTextVal(str,ind){
            
            var stPos = str.indexOf("[", str.indexOf(ind, 0));
            var endPos = str.indexOf("]", str.indexOf(ind, 0));

            var textVal = str.slice(stPos + 1, endPos);
            return(textVal);
            
        }
       

    };//end of plugin

}(jQuery));

