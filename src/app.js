'use strict';

import './css/main.scss';

const $ = require('jquery');
const mainView = require('./main.hbs');

$('body').append(mainView);

