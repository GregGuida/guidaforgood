require('waypoints/lib/noframework.waypoints.min');
import './style.scss';

var waypoint = new Waypoint({
    element: document.getElementById('nav'),
    handler: function () {
        var stickyNav = document.getElementById('nav-sticky');
        stickyNav.classList.toggle("is-hidden");
    }
})
