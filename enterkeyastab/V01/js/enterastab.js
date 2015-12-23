$.fn.enterkeyastab = function() {

    $('input, select').live('keydown', function(e) { // key down event for input and select elements
        thisform = $(this).parents('form:eq(0)'); //get the parent form of current element

       if($(this).attr('class') != 'defaultButton'){ // check if the current element class name is defaultButton
        if (e.keyCode == 13) {
            var focusable = thisform.find('input,a,select,button,textarea').filter(':visible');
            nextelement = focusable.eq(focusable.index(this) + 1);
                if (nextelement.length) {
                    nextelement.focus(); //set the focus to next element
                }
            return false;
        }
       }
    });
    

};

