require('waypoints/lib/noframework.waypoints.min');

var waypoint = new Waypoint({
    element: document.getElementById('nav'),
    handler: function () {
        var stickyNav = document.getElementById('nav-sticky');
        stickyNav.classList.toggle("is-hidden");
    }
})
