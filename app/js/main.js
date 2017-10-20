require('../styles/main.scss');

require('./modules/test');
require('./modules/test2');

// Vendors
// require('./vendors/brands.min');
// require('./vendors/light.min');
// require('./vendors/retina.min');

import fontawesome from '@fortawesome/fontawesome';
import validate from "validate.js";


import {info, body} from './modules/vars';
import perfectFor from './modules/perfectFor';
import floatingLabels from './modules/floatingLabels';
import preview from './modules/preview';
import footer from './modules/footer';


const iconDoneRendering = () => {
    console.log('Icons have rendered');
  }

document.addEventListener("DOMContentLoaded", function() {
    fontawesome.dom.i2svg(iconDoneRendering);
    perfectFor();
    preview();
    floatingLabels();
    footer();
});