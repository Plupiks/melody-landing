const floors = document.querySelectorAll(".house-floor");
const floorCountNumb = document.querySelector(".hero--value");
const arrowUp = document.querySelector(".hero--arrow-up");
const arrowDown = document.querySelector(".hero--arrow-down");

// При клике на этаж
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

arrowUp.addEventListener('click', () => {
  let value = parseInt(floorCountNumb.innerHTML);

  if (value < 17) {
    floors[value - 1].classList.remove('house-img--active');
    value++;
    floorCountNumb.innerHTML = value;
    floors[value - 1].classList.add('house-img--active');
  }
})

arrowDown.addEventListener('click', () => {
  let value = parseInt(floorCountNumb.innerHTML);

  if (value > 1) {
    floors[value - 1].classList.remove('house-img--active');
    value--;
    floorCountNumb.innerHTML = value;
    floors[value - 1].classList.add('house-img--active');
  }
})