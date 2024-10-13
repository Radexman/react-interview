import React from 'react';
import { createRoot } from 'react-dom/client';

const element = React.createElement('a', { href: 'https://zrozumiecreact.pl' }, 'Test');
const elemntInJSX = <a href='https://zrozumiecreact.pl'>Test 3</a>;
console.log(<h1>hello world</h1>); // -> React.createElement('h1', null, 'hello world')
console.log(element);

const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

console.log(hours, minutes);

const time = (
	<div>
		{hours}:{minutes}
	</div>
);

createRoot(document.getElementById('root')!).render(time);
