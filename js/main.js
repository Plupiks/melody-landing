const houseFloor = document.querySelector('.house-img');

houseFloor.addEventListener('click', function (e) {
  var floors = document.querySelectorAll(".house-floor");
  var floorActive = e.target;
  Array.from(floors).forEach(i => {
    i.classList.remove("house-img--active");
  })
  floorActive.classList.add("house-img--active");
})