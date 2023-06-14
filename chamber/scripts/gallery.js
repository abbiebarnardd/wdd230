const imagesToLoad = document.querySelectorAll('img[data-src]'); 

const imgOptions = { 
    threshold: 1, 
    rootMargin: "0px 0px 0px 0px"

};


const loadImages = (image) => { 
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src'); 

    };
};

if ('IntersectionObserver' in window) { 
    const imgObserver = new IntersectionObserver((items) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);
  
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else { 
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

localStorage.setItem('lastVisit', '2023-06-13');

displayDaysSinceLastVisit();

function displayDaysSinceLastVisit() {
  const visitsDisplay = document.querySelector('.daysSinceLastVisit');

  const lastVisit = localStorage.getItem('lastVisit');

  if (!lastVisit) {
    visitsDisplay.innerText = 'This is your first visit';
    
    return;
  }

  const lastVisitDate = Date.parse(lastVisit);
  
  if (!lastVisitDate) {
   
    return;
  }

  const currentDate = new Date();

  const difference = currentDate - lastVisitDate;
  const differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));

  visitsDisplay.innerText = differenceInDays;
}