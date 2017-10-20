require('../styles/main.scss');

require('./vendors/solid.min.js');
require('./vendors/brands.min.js');

import fontawesome from '@fortawesome/fontawesome'
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
    fontawesome.dom.i2svg(iconDoneRendering)
});