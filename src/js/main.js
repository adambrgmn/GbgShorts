const $container = document.querySelector('.container');
const $title = document.querySelector('.title');

const toggleContainerClass = () => {
  $container.classList.toggle('hover');
};

$title.addEventListener('mouseover', toggleContainerClass);
$title.addEventListener('mouseout', toggleContainerClass);

setInterval(() => {
  toggleContainerClass();
  setTimeout(toggleContainerClass, 500);
}, 10000);
