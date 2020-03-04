// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

const jsx = <h1>Hello, Platzi Badges!</h1>;
//hay una alternativa usando React.createElement
const element = React.createElement('h1', {}, "Hola React CreateElement");
const elementWithProps = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a platzi');

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);

ReactDOM.render(elementWithProps, container);

