var floors = document.querySelectorAll(".house-floor");
const floorCountNumb = document.querySelector('.hero--value');


floors.forEach(e => {

  e.addEventListener('click', function (e) {
    var floorActive = e.target;

    floors.forEach(e => {
      e.classList.remove("house-img--active");
    })

    floorActive.classList.add("house-img--active");

    var floorCount = e.target.dataset.floor;
    floorCountNumb.textContent = floorCount;
  })
})