"use strict";

import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';

import Hello from './apps/components/Hello';

ReactDom.render(<Hello content='Hello World!'/>, document.getElementById('mainApp'));
