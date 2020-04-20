// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const headerContainer = document.querySelector('.header-container');

function Header() {
    const headerConst = document.createElement('div')
    headerConst.classList.add('header');
  
    const spanConst = document.createElement('span');
    spanConst.classList.add('date')
    spanConst.textContent = 'SMARCH 28, 2019'
  
    const h1Const = document.createElement('h1')
    h1Const.textContent = 'Lambda Times'
  
  const spanConstSecond = document.createElement('span')
  spanConstSecond.classList.add('temp')
  spanConstSecond.textContent = '98°'

headerContainer.appendChild(headerConst)
headerConst.appendChild(spanConst)
headerConst.appendChild(h1Const)
headerConst.appendChild(spanConstSecond)

  return headerConst
}
console.log(Header(headerContainer))