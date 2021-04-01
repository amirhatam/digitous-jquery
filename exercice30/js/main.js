
$("input").keyup(

    function () {
        var form = $("input");

        console.log(form.val().length);

      
       if(form.val().length > 5) {
        
          $("input").addClass('is-valid');
        
        }  
        else{
          $("input").addClass('is-invalid');
      }
       
    });



// $("input").keyup(

//     function () {
//         var form = $("input");

//         console.log(form.val().length);

//         if (form.val().length > 5) {

//             $("input").addClass('is-valid');

//             $("button").show();

//             $("button").click(

//                 function () {
//             //         $("input").addClass('is-valid');
//         }
//             );
//         } else {
//     $("input").addClass('is-invalid');
// }
//     });





