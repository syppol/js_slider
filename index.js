const entities = [
    {
        city: 'Rostov-on-Don LCD admiral',
        apartament_area: '81 m2',
        repair_time: '3.5 months',
        repair_cost: 'Upon request'
    },
    {
        city: 'Sochi Thieves',
        apartament_area: '105 m2',
        repair_time: '4 months',
        repair_cost: 'Upon request'
    },
    {
        city: 'Rostov-on-Don Patriotic',
        apartament_area: '93 m2',
        repair_time: '3 months',
        repair_cost: 'Upon request'
    }
]

const prev = document.querySelector('.left'),
      next = document.querySelector('.right'),
      slides = document.querySelectorAll('.img'),
      dots = document.querySelectorAll('.dot');
      city = document.querySelector('.city');
      apartament_area = document.querySelector('.apart-area');
      repair_time = document.querySelector('.rep-time');
      repair_cost = document.querySelector('.rep-cost');
      nav_items = document.querySelectorAll('.second-section-nav.item');

let index = 0;

const setEntity = (index) => {
    city.innerText = entities[index].city;
    apartament_area.innerText = entities[index].apartament_area;
    repair_time.innerText = entities[index].repair_time;
    repair_cost.innerText = entities[index].repair_cost;
}

const activeSlide = index => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[index].classList.add('active');
};

const activeNav = index => {
    for (item of nav_items) {
        item.classList.remove('active');
    }
    nav_items[index].classList.add('active');
};

const activeDot = index => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[index].classList.add('active');
};

const prepareCurrentSlide = () => {
    activeSlide(index);
    activeDot(index);
    activeNav(index);
    setEntity(index);
};

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
};

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
};

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
});

nav_items.forEach((item, indexNav) => {
    item.addEventListener('click', () => {
        index = indexNav;
        prepareCurrentSlide(index);
    })
});

/*
const switchSlides = () => {
  setTimeout(switchSlides, 2000);
  nextSlide(index);
}

switchSlides();
*/

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);