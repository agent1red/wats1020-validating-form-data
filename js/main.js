/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
$(document).on('ready', function() {

  // function to no allow numbers as inputs 


  jQuery.validator.addMethod("notContainNum", function(value, element, param) {
    var reg = /[0-9]/;
    if (reg.test(value)) {
      return false;
    } else {
      return true;
    }
  }, "Numbers are not permitted with names");
  //array function to validate states - stretch goal 
  jQuery.validator.addMethod("isState", function(value) {
    var states = [
      "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
      "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
      "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
      "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
      "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
      "AS", "DC", "FM", "GU", "MH", "MP", "PR", "PW", "VI"
    ];
    return $.inArray(value.toUpperCase(), states) != -1;
  }, "This is not valid state must. Must be two characters long with a valid abbreviation.");




  $('#order-form').validate({

    submitHandler: function(form) {
      form.submit();
    },
    rules: {

      "your-name": {
        required: true,
        minlength: 3,
        maxlength: 128,
        notContainNum: true

      },

      "your-address": {
        required: true


      },
      "your-city": {
        required: true


      },
      "your-state": {
        required: true,
        maxlength: 2,
        isState: true

      },
      "your-zip": {
        required: true,
        digits: true,
        maxlength: 5


      },

      "card-number": {
        required: true,
        creditcard: true

      },

      "expiry-month": {
        required: true


      },
      "expiry-year": {
        required: true


      },
      "cvv": {
        required: true,
        digits: true,
        maxlength: 3,
        minlength: 3

      },
      "card-holder-name": {
        required: true,
        minlength: 3,
        maxlength: 128,
        notContainNum: true

      },
      "shipping-method": {
        required: true


      },

      "comments": {

        maxlength: 500,

      },

    }

  });

});