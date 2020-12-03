
$(document).ready(function () {
    // e.preventDefault();
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

    var messageOutput = "";

    function bmiCalc() {
        // get number of beer person had
        var weight = parseInt($("#weight").val());

        // get number of wine person had
        var height = parseInt($("#height").val());

        // calculation
        // Formula: 703 x weight (lbs) / [height (in)]2

        var calcBMI = (weight / (height * height)) * 703;


        if (calcBMI < 25) {
            messageOutput = "Normal";
        } else if (calcBMI >= 25 && calcBMI <= 29) {
            messageOutput = "Overweight";
        } else if (calcBMI >= 30) {
            messageOutput = "Obese";
        }

        // output on the screen
        $("#message").text(`Your BMI is ${calcBMI.toFixed(2)} - you ${messageOutput}`);

        // $("p.output").show();

    }

    $("form").validate({
        submitHandler: bmiCalc,
        rules: myRules,
        message: myMessages
    })
}
)

