const houseFloor = document.querySelector('.house-img');

houseFloor.addEventListener('click', function (e) {
  // houseFloor.classList.toggle("house-img--active");
  var floorActive = e.target;
  floorActive.classList.toggle("house-img--active");
})


// houseFloor.addEventListener('click', function (e) {
//   var houseFloorActive = e.target.dataset;
//   houseFloor.style.opacity = 0.75;
//   // console.log(e.target.dataset);
// })