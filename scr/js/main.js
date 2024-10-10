import "../styles.css";

window.addEventListener("load", function(){

let granHotel = document.getElementById('granHotel');
let grandHyatt = document.getElementById('btnHaytt');
let kimpto = document.getElementById('btnkimpto');
let nhCollection = document.getElementById('btnNHCollection');

let maphidden1 = document.querySelector('#mapModal1');
let maphidden2 = document.querySelector('#mapModal2');
let maphidden3 = document.querySelector('#mapModal3');
let maphidden4 = document.querySelector('#mapModal4');

granHotel.addEventListener('click', showMap1);
grandHyatt.addEventListener('click', showMap2);
kimpto.addEventListener('click', showMap3);
nhCollection.addEventListener('click', showMap4);


function showMap1() {
   maphidden1.style.display = "block";


let btnCloseMap1 = document.querySelector('#btncloseMap1');
btnCloseMap1.addEventListener('click', closedMap1);

function closedMap1() {
    maphidden1.style.display = "none";  
}

let LatLng1 = [41.4254627, 2.118163];
         const map1 = L.map('map1')
            .setView(LatLng1, 14);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png')
            .addTo(map1);     
            let marker1 = L.marker(LatLng1);
            marker1.addTo(map1);
}
 
function showMap2() {
    maphidden2.style.display = "block";
 
 
 let btnCloseMap2 = document.querySelector('#btncloseMap2');
 btnCloseMap2.addEventListener('click', closedMap2);
 
 function closedMap2() {
     maphidden2.style.display = "none";  
 }
 
 let LatLng2 = [41.386318, 2.1206346];
          const map2 = L.map('map2')
             .setView(LatLng2, 14);
 
         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png')
             .addTo(map2);     
             let marker2 = L.marker(LatLng2);
             marker2.addTo(map2);
 }

 function showMap3() {
    maphidden3.style.display = "block";
 
 
 let btnCloseMap3 = document.querySelector('#btncloseMap3');
 btnCloseMap3.addEventListener('click', closedMap3);
 
 function closedMap3() {
     maphidden3.style.display = "none";  
 }
 
 let LatLng3 = [41.3846654, 2.1703029];
          const map3 = L.map('map3')
             .setView(LatLng3, 14);
 
         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png')
             .addTo(map3);     
             let marker3 = L.marker(LatLng3);
             marker3.addTo(map3);
 }

 function showMap4() {
    maphidden4.style.display = "block";
 
 
 let btnCloseMap4 = document.querySelector('#btncloseMap4');
 btnCloseMap4.addEventListener('click', closedMap4);
 
 function closedMap4() {
     maphidden4.style.display = "none";  
 }
 
 let LatLng4 = [41.3893065, 2.1634651];
          const map4 = L.map('map4')
             .setView(LatLng4, 14);
 
         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png')
             .addTo(map4);     
             let marker4 = L.marker(LatLng4);
             marker4.addTo(map4);
 }
});