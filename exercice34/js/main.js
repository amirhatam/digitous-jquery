$("button").click(

    function () {

        $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/',
            success: function (data, statuts, response) {

                

                $("#country").html(test[0].name);
                $("#capital").html(test[0].capital);

                // $("#country").html(data[0].name);
                // $("#capital").html(data[0].capital);

            }
        });

    });

