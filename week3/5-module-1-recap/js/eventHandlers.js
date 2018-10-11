// First get the DOM element:
const allTheDivs = document.querySelectorAll('.grid-square');
const secondDiv = allTheDivs[1];
console.log('Second div is', secondDiv);
// Or......
// const $grid = $('div').eq(1);
// const $secondDiv = $('.grid-square').eq(1);

// Now add the event handler
// Either by first making a function....
function handleClick() {
  console.log('clicked!!');
}
secondDiv.addEventListener('click', handleClick);

// ... or by using an anonymous function:
secondDiv.addEventListener('click', function() {
  alert('A second click handler!!!');
});

// or in jQuery
// $secondDiv.click(handleClick);
// $secondDiv.on('click', handleClick);

// Add many event listeners at once:
for (let i = 0; i < allTheDivs.length; i++) {
  allTheDivs[i].addEventListener('click', handleClick);
}

// jQuery tries to avoid looping through DOM elements
// const $allTheDivs = $('.grid-square');
// $allTheDivs.on('click', handleClick);
// $allTheDivs.click(handleClick);

// Referring to the DOM element itself. How
// do we know which div was clicked??
for (let i = 0; i < allTheDivs.length; i++) {
  allTheDivs[i].addEventListener('click', function(event) {
    // javascript will put the div on event.target
    console.log('event is', event);
    event.target.setAttribute('click-count', 1);
    if (event.target.classList.contains('clicked')) {
      console.log('Already been clicked');
    } else {
      event.target.classList.add('clicked');
    }
    console.log('The div clicked is...', event.target);
  });
}

// // Same thing in jQuery
// $allTheDivs.click(function() {
//   // event.target = $(this)
//   $(this).attr('click-count', 1);
// })
