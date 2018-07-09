require("waypoints/lib/noframework.waypoints.min");

function StickyNav(element) {
  this.element = element;
  this.sticky = element.cloneNode(true);
}

StickyNav.prototype.setUp = function() {
  this.sticky.classList.add("is-fixed-top", "is-hidden");
  this.element.parentNode.insertBefore(this.sticky, this.element);

  var waypoint = new Waypoint({
    element: this.element,
    handler: () => {
      this.sticky.classList.toggle("is-hidden");
    }
  });
};

module.exports = StickyNav;
