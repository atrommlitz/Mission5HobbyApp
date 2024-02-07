// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$('#totalPayButton').on("click", function () {
    var trainingHours = parseFloat($('#trainingHours').val());

    if (!isNaN(trainingHours)) {
        // Perform the calculation
        var totalPay = trainingHours * 400;

        // Update the content of the HTML element with the calculated total
        $('#totalPay').text("Total pay: $" + totalPay.toFixed(2));

    } else {
        // If the entered value is not a valid number, alert the user
        alert("Please enter a valid number for training hours.");
    }
});
