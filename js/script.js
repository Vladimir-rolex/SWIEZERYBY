

/* конфигурация */
var width = 300;
var count = 1;

var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');

var position = 0;

carousel.querySelector('.carousel__arrow--prev').onclick = function() {
  position = Math.min(position + width * count, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.carousel__arrow--next').onclick = function() {

  position = Math.max(position - width * count, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};
