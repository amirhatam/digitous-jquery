
$("input").keyup(

    function () {
        var form = $("input");

        console.log(form.val().length);

      
       if(form.val().length > 5) {
        $("input").removeClass('is-invalid');
          $("input").addClass('is-valid');
         
          
     
        }  
        else {
          
          
          $("input").addClass('is-invalid');
      }
       
    });







