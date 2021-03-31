
$("button").click(

    function () {
        var form = $("button");


        if (form.length > 5) {

         $("input").addClass('is-valid');

        } else {
            $("input").addClass('is-invalid');
        }

    

    });
