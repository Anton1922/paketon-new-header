'use strict';

const link = document.querySelector('.payment-download__link');
const upload = document.querySelector('.upload');
const undo = document.querySelector('.undo');

addEventListener('click', (e) => {
	const target = e.target;
	console.log('target', target);

	if (target.classList.contains('upload') || event.target.closest('.upload')) event.target.closest('.attach').classList.add('active');
	if (target.classList.contains('undo') || event.target.closest('.undo')) event.target.closest('.attach').classList.remove('active');
});
/*$('.upload').click ->
  $('.attach').addClass 'active'

$('.undo').click ->
  $('.attach').removeClass 'active'*/