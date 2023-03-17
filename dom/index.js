
// var buttonElement = document.getElementById('button')
// var counter = 0;
// var spanElement = document.getElementsByClassName('count')[1]
// console.log(spanElement)
// spanElement.innerText += counter


// buttonElement.addEventListener('click', () => { 
//   counter += 1; 
//   spanElement.innerText = counter
// });

var spanX = document.getElementById('x')
var spanY = document.getElementById('y')

document.addEventListener('mousemove', (e)=>{spanX.innerHTML = '<h1>'+e.x+'</h1>'; spanY.innerText = e.y})


