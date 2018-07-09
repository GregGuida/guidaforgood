require("formdata-polyfill");

function RSVPForm() {
  this.rsvp_form = document.getElementById("rsvp-form");
  this.rsvp_form_loader = document.getElementById("rsvp-form-loader");
  this.rsvp_form_success = document.getElementById("rsvp-form-success");
  this.text_inputs = [
    document.getElementById("rsvp-form-name"),
    document.getElementById("rsvp-form-email"),
    document.getElementById("rsvp-form-number-of-guests")
  ];
  this.radio_inputs = [
    document.getElementById("rsvp-form-will-attend"),
    document.getElementById("rsvp-form-will-not-attend")
  ];

  this.rsvp_form.onsubmit = this.onSubmit.bind(this);
}

RSVPForm.prototype.onSubmit = function(e) {
  e.preventDefault();
  e.stopPropagation();

  if (!this.validate()) {
    return false;
  }

  var form_data = new FormData(this.rsvp_form);

  fetch("/rsvp", {
    method: "POST",
    body: form_data
  })
    .then(this.handleErrors.bind(this))
    .then(this.onSuccess.bind(this))
    .catch(this.onFailure.bind(this));

  this.rsvp_form.classList.add("is-hidden");
  this.rsvp_form_loader.classList.remove("is-hidden");
};

RSVPForm.prototype.validate = function() {
  var errors = 0;

  for (var text_input of this.text_inputs) {
    if (text_input.value === "") {
      text_input.classList.add("error");
      errors += 1;
    } else {
      text_input.classList.remove("error");
    }
  }

  var checked_inputs = 0;
  for (var radio_input of this.radio_inputs) {
    checked_inputs += radio_input.checked ? 1 : 0;
  }

  if (checked_inputs == 0) {
    for (var radio_input of this.radio_inputs) {
      radio_input.parentElement.classList.add("error");
    }
    errors += 1;
  } else {
    for (var radio_input of this.radio_inputs) {
      radio_input.parentElement.classList.remove("error");
    }
  }

  return errors === 0;
};

RSVPForm.prototype.handleErrors = function(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

RSVPForm.prototype.onSuccess = function() {
  this.rsvp_form_loader.classList.add("is-hidden");
  this.rsvp_form_success.classList.remove("is-hidden");
};

RSVPForm.prototype.onFailure = function() {
  this.rsvp_form.classList.remove("is-hidden");
  this.rsvp_form_loader.classList.add("is-hidden");
};

module.exports = RSVPForm;
