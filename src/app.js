'use strict';

import './main.scss';

const reuseit = {}

const formButton = require('./components/formButton.hbs');
const formCheckbox = require('./components/formCheckbox.hbs');
const formDate = require('./components/formDate.hbs');
const formEmail = require('./components/formEmail.hbs');
const formPassword = require('./components/formPassword.hbs');
const formRadio = require('./components/formRadio.hbs');
const formText = require('./components/formText.hbs');
const pagination = require('./components/pagination.hbs');

reuseit.button = formButton;
reuseit.checkbox = formCheckbox;
reuseit.date = formDate;
reuseit.email = formEmail;
reuseit.password = formPassword;
reuseit.radio = formRadio;
reuseit.text = formText;
reuseit.pagination = pagination;

module.exports = reuseit;


