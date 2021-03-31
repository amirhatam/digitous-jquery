
$("button").click(
    function () {

       
        $("#bg").animate({
            
           
            margin: "0px 0px 0px 100px",
           
        }, 2000,
            function () {

                console.log("animation terminée !");
            });
    });



// $("button").click(function(){

//     $("#bg").animate({'left': '100px'}, 2000);

//     });

