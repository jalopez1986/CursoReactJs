// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

//const jsx = <h1>Hello, Platzi Badges!</h1>;
//si queremos algo variable
const name = 'Jorge';
const sum = () => 3 + 3
const jsx = <h1>Hello, Soy {name} mi edad {30 + 3} llamo funcion {sum()}</h1>;


const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);

ReactDOM.render(jsx, container);

