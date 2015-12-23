$.fn.enterkeyastab = function()
{
    var $Body = $(this);
   
    
    $($Body).find('input,select,button').live('keydown', function(e) { // key down event for input and select elements of the current form

        var $Element = $(this);
        var aForm = $Element.closest('form');            // get the closest form of current element

        if ($Body.hasClass('enter-as-tab'))
        {
            //alert("test2");
            if (e.keyCode == 13 || e.keyCode == 9)           // allowed enter key and tab key to move to next element
            {
                var focusable = aForm.find ('input,a,select,button,textarea').filter (':visible');

                if (e.shiftKey) //check if the shift key is pressed
                {
                    var prevElement = focusable.eq (focusable.index($Element) - 1);

                    if (prevElement.length) 
                    {
                        prevElement.focus(); //set the focus to previous element on Shift + Tab/Enter
                        return false;
                    }
                    else
                    {
                        var lastElement = focusable.last();
                        lastElement.focus(); //set the focus to last element
                        return false;
                    }
                }

                var nextElement = focusable.eq (focusable.index($Element) + 1);

                if (nextElement.length)
                {
                    nextElement.focus(); //set the focus to next element
                    return false;
                }
                else
                {
                    var firstElement = focusable.first();
                    firstElement.focus(); //set the focus to first element
                    return false;
                }
            }
        }
        else
        {
            if (e.keyCode == 13)
            {
                e.preventDefault();
                e.stopPropagation();
                
                var $DefaultButton = aForm.find('.defaultButton').first();
                
                window.setTimeout(function() {
                    $DefaultButton.trigger('click');
                }, 0);
            }
        }
    });
};
