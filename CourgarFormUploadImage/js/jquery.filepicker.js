/* 
 * Pluging : JQuery File Picker 
 * Author : Saliya Randunu - One IT.
 */
(function($){

        $.fn.filepicker = function(options)
            {
                var defaults = 
                       {
                        inputFldId : "imgInp"
                        };
                var settings = $.extend(defaults, options);  
                var  $self = null;
                
                
                $(this).click(function(){
                    $self = $(this);
                     $('#'+ settings.inputFldId).trigger('click');
                    //   $('#imgInp').click();
                    return false;
                });
                
                 $('#' + settings.inputFldId).change(function(){
                     
                       readURL(this);
                       
                 });
                
                
                 function readURL(input) {

                    if (input.files && input.files[0]) {
                        var reader = new FileReader();
                        
                        reader.onload = function(e) {                          
                           $($self).find("img").attr('src', e.target.result);
                           $($self).find("img").css("display","block");
                       
                        };

                        reader.readAsDataURL(input.files[0]);
                    }
                }
                
                
                function uploadFile1(input){
                        var file_data = input.files[0];   // Getting the properties of file from file field
                        var form_data = new FormData();                  // Creating object of FormData class
                        form_data.append("file", file_data);              // Appending parameter named file with properties of file_field to form_data
                        
                        $.ajax({
                            url: "upload.php",
                            dataType: 'script',
                            cache: false,
                            contentType: false,
                            processData: false,
                            data: form_data, // Setting the data attribute of ajax with file_data
                            type: 'post',
                            success: function(data) {
                                alert(data);
                                }
                         });
                    
                }
                
                function uploadFile2(input) 
                    {
                     var url  = "upload.php";
                      $(input).fileupload({
                         url: url,
                         dataType: 'json',
                            done: function(e, data) {
                                $.each(data.result.files, function(index, file) {
                                    $('<p/>').text(file.name).appendTo('#files');
                                });
                                 },
                            progressall: function(e, data) {
                                var progress = parseInt(data.loaded / data.total * 100, 10);
                                $('#progress .progress-bar').css(
                                        'width',
                                        progress + '%'
                                        );
                                 }
                                })
                      }
                
            };//end of plugin

}(jQuery));