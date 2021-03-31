
$("button").click(
    function () {

        $("#text").animate({
           
            fontSize: '+=50px',
        }, 3000, 
        function () {
            
            console.log("animation terminée !");
        });
    });

