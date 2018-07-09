import "./style.scss";

import StickyNav from "./sitckynav.js";
import RSVPForm from "./rsvp_form.js";

new RSVPForm();

var sticky_nav = new StickyNav(document.getElementById("nav"));
sticky_nav.setUp();
