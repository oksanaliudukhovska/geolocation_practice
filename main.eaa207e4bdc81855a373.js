(()=>{"use strict";window.addEventListener("load",(function(){let e=document.getElementById("granHotel"),t=document.getElementById("btnHaytt"),n=document.getElementById("btnkimpto"),o=document.getElementById("btnNHCollection"),l=document.querySelector("#mapModal1"),d=document.querySelector("#mapModal2"),a=document.querySelector("#mapModal3"),c=document.querySelector("#mapModal4");e.addEventListener("click",(function(){l.style.display="block",document.querySelector("#btncloseMap1").addEventListener("click",(function(){l.style.display="none"}));let e=[41.4254627,2.118163];const t=L.map("map1").setView(e,14);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(t),L.marker(e).addTo(t)})),t.addEventListener("click",(function(){d.style.display="block",document.querySelector("#btncloseMap2").addEventListener("click",(function(){d.style.display="none"}));let e=[41.386318,2.1206346];const t=L.map("map2").setView(e,14);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(t),L.marker(e).addTo(t)})),n.addEventListener("click",(function(){a.style.display="block",document.querySelector("#btncloseMap3").addEventListener("click",(function(){a.style.display="none"}));let e=[41.3846654,2.1703029];const t=L.map("map3").setView(e,14);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(t),L.marker(e).addTo(t)})),o.addEventListener("click",(function(){c.style.display="block",document.querySelector("#btncloseMap4").addEventListener("click",(function(){c.style.display="none"}));let e=[41.3893065,2.1634651];const t=L.map("map4").setView(e,14);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(t),L.marker(e).addTo(t)}))}))})();