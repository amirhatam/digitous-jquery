
$("button").click(
    function () {

        $("#square").animate({
            height: '+=500px',
            width: '+=500px'
        }, 3000, 
        function () {
            
            console.log("animation terminée !");
        });
    });