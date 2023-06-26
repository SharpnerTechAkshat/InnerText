//------Adding 'Hello World' before item 1 ------//

var newDiv = document.createElement('div');
var newDivText = document.createTextNode('HEllo World');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv , h1);

var parentNode = document.getElementById('items');
//console.log(prentNode);
var helloWorldElement = document.createTextNode('Hello World'); 
//parentNode.appendChild(helloWorldElement);
parentNode.innerHTML =    '<li class="list-group-item">Item 1</li><li class="list-group-item">Item 2</li><li class="list-group-item">Item 3</li><li class="list-group-item">Item 4</li>';
parentNode.innerHTML = 'Hello World' + parentNode.innerHTML;

// Traversing the DOM //
// var itemList = document.querySelector('#items');
// //  parentNode -property
//  console.log(itemList.parentNode);
//  itemList.parentNode.style.backgroundColor = 'red';
//  console.log(itemList.parentNode.parentNode);

// //  parentElement - are interchangable
//  console.log(itemList.parentElement);
//  itemList.parentElement.style.backgroundColor = 'red';
//  console.log(itemList.parentElement.parentElement);

// childNodes - Property
// console.log(itemList.childNodes);
// ---> TestNode represent white spaces
// use children instead of childNodes
//console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'black';

// //firstChlid --> kind of useless
// console.log(itemList.firstChild);
// console.log(itemList.lastChild);

// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);