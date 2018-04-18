'use strict';

import './css/main.scss';

const Textinput = require('./components/_textinput.hbs')

document.addEventListener("DOMContentLoaded", function() {
    var div = document.createElement('div');
    div.innerHTML = Textinput({
        el_id: 'fname2091',
        label: 'First Name',
        name: 'angel'
    });
    document.body.appendChild(div);
});

