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
import form from './modules/form'


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
    form();
    fontawesome.dom.i2svg(iconDoneRendering);
});

// To Do
// 1. Form validation
// 2. Hook up ConvertKit API
// 3. Test