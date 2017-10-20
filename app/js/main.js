require('../styles/main.scss');

require('./vendors/solid.min.js');
require('./vendors/brands.min.js');

import fontawesome from '@fortawesome/fontawesome'
import validate from "validate.js"


import {info, body} from './modules/vars'
import floatingLabels from './modules/floatingLabels'
import loveKirby from './modules/loveKirby'
import perfectFor from './modules/perfectFor'
import preview from './modules/preview'
import footer from './modules/footer'
import parallax from './modules/parallax'


const iconDoneRendering = () => {
    console.log('Icons have rendered');
  }

document.addEventListener("DOMContentLoaded", function() {
    loveKirby();
    perfectFor();
    preview();
    floatingLabels();
    footer();
    parallax();
    fontawesome.dom.i2svg(iconDoneRendering);
});