$.fn.enterkeyastab = function() {
    currform = $(this);//get the current form 
  
        $(currform).find('input, select,button').live('keydown', function(e) { // key down event for input and select elements of the current form
        
        thisform = $(this).parents('form:eq(0)'); //get the parent form of current element

       if($(this).attr('class') != 'defaultButton'){ // check if the current element class name is not defaultButton
        if (e.keyCode == 13) {
            var focusable = thisform.find('input,a,select,button,textarea').filter(':visible');
            nextelement = focusable.eq(focusable.index(this) + 1);
            console.log(nextelement.length);
                if (nextelement.length) {
                    nextelement.focus(); //set the focus to next element
                    return false;
                }
                else{
                    alert("done");
                    return false;
                }
           
        }
       }
    });
    

};

