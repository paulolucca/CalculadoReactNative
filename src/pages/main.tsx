import React from 'react';
import ReactDOM from 'react-dom';
import {calculate} from '../Calculate/calculate';
import '../styles/styles.css' ;
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
<div>

<calculate/>
  
  </div>
, document.getElementById('root'));

registerServiceWorker();