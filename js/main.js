const houseFloor = document.querySelector('.house-img');
const floorCountNumb = document.querySelector('.hero--value');

// делаю выбранный этаж активным
houseFloor.addEventListener('click', function (e) {
  var floors = document.querySelectorAll(".house-floor");
  var floorActive = e.target;

  Array.from(floors).forEach(i => {
    i.classList.remove("house-img--active");
  })

  floorActive.classList.add("house-img--active");

  // присваивание номера этажа
  var floorCount = e.target.dataset.floor;
  if (floorCount) {
    floorCountNumb.textContent = floorCount;
  }
})