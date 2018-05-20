import 'whatwg-fetch';
require('waypoints/lib/noframework.waypoints.min');
import './style.scss';

var waypoint = new Waypoint({
    element: document.getElementById('nav'),
    handler: function () {
        var stickyNav = document.getElementById('nav-sticky');
        stickyNav.classList.toggle("is-hidden");
    }
})


var rsvp_form = document.getElementById('rsvp-form');
rsvp_form.onsubmit = function (e) {
    e.preventDefault();
    e.stopPropagation();

    fetch('/rsvp', {
        method: 'POST',
        body: new FormData(rsvp_form)
    })
}