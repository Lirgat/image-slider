let entities = [
  {
    city: 'Rostov-on-Don LCD admiral',
    img: 'images/Foto1.jpg',
    apartment_area: '81 m2',
    repair_time: '3.5 months',
    repair_cost:'Upon request'
  },
  {
    city: 'Sochi Thieves',
    img: 'images/foto2.jpg',
    apartment_area: '105 m2',
    repair_time: '4 months',
    repair_cost:'Upon request'
  },
  {
    city: 'Rostov-on-Don Patriotic',
    img: 'images/foto3.jpg',
    apartment_area: '93 m2',
    repair_time: '3 months',
    repair_cost:'Upon request'
  }
];


const city = document.querySelector('.city');
const img = document.querySelector('.main__image');
const apartmentArea = document.querySelector('.apartment_area');
const repairTime = document.querySelector('.repair_time');
const repairCost = document.querySelector('.repair_cost');
const prev = document.querySelector('.arr-left');
const next = document.querySelector('.arr-right')
const dots = document.querySelectorAll('.dot');
const links = document.querySelectorAll('.link');
let currentIndex = 0
const maxIndex = entities.length;

// Function to set active slide
function setEntity(index){
  city.innerText = entities[index].city;
  img.src = `${entities[index].img}`;
  apartmentArea.innerText = entities[index].apartment_area;
  repairTime.innerText = entities[index].repair_time;
  repairCost.innerText = entities[index].repair_cost;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  links.forEach(dot => dot.classList.remove('selected'));
  links[index].classList.add('selected');
};
  
// Add click event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    setEntity(index);
  });
});
  
// Add click event listeners to links
links.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); 
    setEntity(index);
  });
});
  
// Add click event listeners to next button
next.addEventListener('click', () => {
  if( currentIndex >=  maxIndex-1) 
    currentIndex = -1;
    currentIndex ++;
  return setEntity(currentIndex);
  
  });

// Add click event listeners to previous button
prev.addEventListener('click', () => {
      if( currentIndex <=  0) 
      currentIndex = maxIndex;
      currentIndex --;
    return setEntity(currentIndex);
  });

