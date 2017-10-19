require('./modules/test');
require('./modules/test2');

// Vendors
require('./vendors/brands.min');
require('./vendors/light.min');
require('./vendors/retina.min');
const validate = require("validate.js");

// import style from '../styles/main.css';


import {info, body} from './modules/vars';
import perfectFor from './modules/perfectFor';
import floatingLabels from './modules/floatingLabels';
import preview from './modules/preview';
import footer from './modules/footer';

document.addEventListener("DOMContentLoaded", function() {
    perfectFor();
    preview();
    floatingLabels();
    footer();
});