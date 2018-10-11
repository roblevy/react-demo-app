// Task 1
const $button = $('#toggle');
const $circle = $('.circle').eq(0);

$button.click(function() {
  $circle.toggleClass('pulse');
});


// Task 2
const $select = $('select');
const $chosenCity = $('#city');

$select.change(function() {
  const value = $(this).val();
  $chosenCity.html(value);
});


// Task 3
const $names = $('.name');
const $current = $('#current');

$names.mouseover(function() {
  const currentName = $(this).html();
  $current.html(currentName);
});

$names.mouseout(function() {
  $current.html('');
});


// Task 4
const $form = $('#subscribe');
const $submit = $('.submit');

$form.submit(function(e) {
  e.preventDefault();
  $submit.html('Submitted!');
  $submit.addClass('submitted');
});


// Task 5
const $heading = $('h1');

$(window).scroll(function() {
  const scroll = $(window).scrollTop();
  if(scroll > 40) {
    $heading.addClass('fadeOutUp');
  } else {
    $heading.removeClass('fadeOutUp');
  }
});
