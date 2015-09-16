import React from 'react';
import HelloPage from './components/HelloPage';

var attachElement = document.getElementById('app');

React.render(
 <HelloPage name='World' />,
 attachElement
);
