'use strict';

var link = document.querySelector('.payment-download__link');
var upload = document.querySelector('.upload');
var undo = document.querySelector('.undo');
addEventListener('click', function (e) {
  var target = e.target;
  console.log('target', target);
  if (target.classList.contains('upload') || event.target.closest('.upload')) event.target.closest('.attach').classList.add('active');
  if (target.classList.contains('undo') || event.target.closest('.undo')) event.target.closest('.attach').classList.remove('active');
});
/*$('.upload').click ->
  $('.attach').addClass 'active'

$('.undo').click ->
  $('.attach').removeClass 'active'*/
//# sourceMappingURL=index.js.map
