let requestURL = "https://sarvdeep45.github.io/COMP1073-Module3/deals.json";
let mainDiv=document.querySelector('div');

// Used Fetch As Browser API
fetch(requestURL)
  .then(response => response.json())
  .then(data => fill(data));

//let request = new XMLHttpRequest(); 
//request.open('GET', requestURL,true);

//request.responseType='json';
//request.send();

//request.onload = function() {
//  fill(request.response);
//}

function fill(data) {
  
  let deals = data['deals']
  
  for (let i = 0; i < deals.length; i++) {
	  
    let section = document.createElement('section');
	
    let h1 = document.createElement('h1');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
	let p3 = document.createElement('p');
    
	h1.textContent = deals[i].name; 
	
	img.setAttribute('src', 'https://sarvdeep45.github.io/COMP1073-Module3/images/' + deals[i].image);
	
    p1.textContent = 'Price is $' + deals[i].price;
    p2.textContent = '' + deals[i].description;
    p3.textContent = 'Features are : ' + deals[i].features;
         
    section.appendChild(h1);
    section.appendChild(img);
    section.appendChild(p1); 
    section.appendChild(p2);
    section.appendChild(p3);
	
    mainDiv.appendChild(section); 
     
  }

}
function initMap() {
        const barrie = { lat: 44.3894, lng: -79.6903 };
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: barrie,
        });
        const marker = new google.maps.Marker({
          position: barrie,
          map: map,
        });
      }
