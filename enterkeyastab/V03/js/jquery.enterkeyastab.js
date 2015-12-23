$.fn.enterkeyastab = function() {
    currform = $(this);//get the current form 
  
        $(currform).find('input, select,button').live('keydown', function(e) { // key down event for input and select elements of the current form
        
        thisform = $(this).parents('form:eq(0)'); //get the parent form of current element

        if (!$(this).hasClass('defaultButton')){ // check if the current element class name is not defaultButton
    
            if (e.keyCode == 13 || e.keyCode == 9)    // allowed enter key and tab key to move to next element
            {
                var focusable = thisform.find('input,a,select,button,textarea').filter(':visible');

                if (e.shiftKey) //check if the shift key is pressed
                {
                    var prevElement = focusable.eq(focusable.index(this) - 1);

                    if (prevElement.length)
                    {
                        prevElement.focus(); //set the focus to previous element on Shift + Tab
                        return false;
                    }
                    else
                    {
                        var lastElement = focusable.last();
                        lastElement.focus(); //set the focus to last element
                        return false;
                       
                    }
                }

                nextelement = focusable.eq(focusable.index(this) + 1);

                if (nextelement.length)
                {
                    nextelement.focus(); //set the focus to next element
                    return false;
                }
                else
                {
                    var firstElement = focusable.first();
                    firstElement.focus(); //set the focus to first element
                    return false;

                    // move to first element
                }

            }
       }
    });
    

};

