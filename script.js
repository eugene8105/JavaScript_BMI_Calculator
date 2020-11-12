
$(document).ready(function () {
    // add event handlers

    // $("#tpipLength").click(showPopup);

    var myRules = {

        weight: {
            required: true,
            min: 88,
            max: 353,
            digits: true
        },

        height: {
            required: true,
            min: 59,
            max: 79,
            digits: true
        }

    };

    var myMessages = {
        weight: {
            required: "Need your weight.",
            min: "Minimum is 88.",
            max: "Maximum is 353.",
            digits: "Must be a whole number"
        },

        height: {
            equired: "Need your weight.",
            min: "Minimum is 59.",
            max: "Maximum is 79.",
            digits: "Must be a whole number"
        }
    };

    function bacCalc() {
        // get number of beer person had
        var weight = parseInt($("#weight").val());

        // get number of wine person had
        var height = parseInt($("#height").val());

        // calculation
        // Formula: 703 x weight (lbs) / [height (in)]2

        var calcBMI = 703 * weight / (height * 2);

        // output on the screen
        $("#message").text(`Your BMI is ${calcBMI}`);

        // $("p.output").show();

    }

    $("form").validate({
        submitHandler: bacCalc,
        rules: myRules,
        message: myMessages
    })
}
)

