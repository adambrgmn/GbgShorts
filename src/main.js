var $container = document.querySelector('.container');
var $title = document.querySelector('.title');

function toggleContainerClass() {
  $container.classList.toggle('hover');
};

$title.addEventListener('mouseover', toggleContainerClass);
$title.addEventListener('mouseout', toggleContainerClass);

setInterval(function () {
  toggleContainerClass();
  setTimeout(toggleContainerClass, 500);
}, 10000);
