
// import '../node_modules/bootstrap/js/dist/alert';
// import '../node_modules/bootstrap/js/dist/button';
// import '../node_modules/bootstrap/js/dist/carousel';
// import '../node_modules/bootstrap/js/dist/collapse';
// import '../node_modules/bootstrap/js/dist/dropdown';
// import '../node_modules/ootstrap/js/dist/modal';
// import '../node_modules/bootstrap/js/dist/offcanvas';
// import '../node_modules/bootstrap/js/dist/popover';
// import '../node_modules/bootstrap/js/dist/scrollspy';
// import '../node_modules/bootstrap/js/dist/tab';
// import '../node_modules/bootstrap/js/dist/toast';
// import '../node_modules/bootstrap/js/dist/tooltip';
// import "../node_modules/@fortawesome/fontawesome-free/js/all.js";
import { service_worker } from "./service_worker.js";
import { events } from "./utillites.js";

events(window, "load", () => {

    service_worker();
});