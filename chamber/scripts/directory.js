
const url = 'https://abbiebarnardd.github.io/wdd230/chamber/data.json'


async function getDirectoryData(){
    const response = await fetch(url);
    const data = await response.json();
    displayDirectory(data.businesses);
  }
  
  getDirectoryData();

  const displayDirectory = (businesses) => {
    const businesspartners = document.querySelector('div.businesspartners'); 
  
    businesses.forEach((business) => {
  
	  let portrait = document.createElement('img');
    let card = document.createElement('section');
    let name = document.createElement('name');
    let address = document.createElement('address');
  
	  let phone = document.createElement('phone');
	  let email = document.createElement('email');
	  let website = document.createElement('website');
	  let membershiplevel = document.createElement('membershiplevel')

    portrait.setAttribute('src', business.imageurl);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', 'auto');
    portrait.setAttribute('height', '70'); 

	  name.textContent = `${business.name}`;
    address.innerHTML = `${business.address}`;
	  phone.innerHTML = `${business.phone}`;
	  email.innerHTML = `${business.email}`;
	  website.textContent = `${business.website}`;
	  membershiplevel.textContent = `${business.membershiplevel}`;

      
    

    card.appendChild(name);
    card.appendChild(portrait);
    businesspartners.appendChild(card);
    card.appendChild(address);
	  card.appendChild(phone);
	  card.appendChild(email);
	  card.appendChild(website);
	  card.appendChild(membershiplevel);
    
    }) 

  } 

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".businesspartners");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

showList()