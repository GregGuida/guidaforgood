import './style.scss';
import 'whatwg-fetch';

require('waypoints/lib/noframework.waypoints.min');
require('formdata-polyfill');

var waypoint = new Waypoint({
    element: document.getElementById('nav'),
    handler: function () {
        var stickyNav = document.getElementById('nav-sticky');
        stickyNav.classList.toggle("is-hidden");
    }
})

var rsvp_form = document.getElementById('rsvp-form');
var text_inputs = [
    document.getElementById('rsvp-form-name'),
    document.getElementById('rsvp-form-email'),
    document.getElementById('rsvp-form-number-of-guests'),
];
var radio_inputs = [
    document.getElementById('rsvp-form-will-attend'),
    document.getElementById('rsvp-form-will-not-attend'),
];
rsvp_form.onsubmit = function (e) {
    e.preventDefault();
    e.stopPropagation();

    var errors = 0;

    for (var text_input of text_inputs) {
        if (text_input.value === "") {
            text_input.classList.add("error")
            errors += 1;
        } else {
            text_input.classList.remove("error")
        }
    }

    var checked_inputs = 0;
    for (var radio_input of radio_inputs) {
        checked_inputs += radio_input.checked ? 1 : 0;
    }

    if (checked_inputs == 0) {
        for (var radio_input of radio_inputs) {
            radio_input.parentElement.classList.add("error")
        }
        errors += 1;
    } else {
        for (var radio_input of radio_inputs) {
            radio_input.parentElement.classList.remove("error")
        }
    }


    if (errors !== 0) {
        return false;
    }

    var form_data = new FormData(rsvp_form);
    fetch('/rsvp', {
        method: 'POST',
        body: form_data,
    })
}