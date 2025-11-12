//Chache the DOM 
   var button = document.getElementById("button")
   var nume = document.getElementById("nume")
   var img = document.querySelector("img")
   
   
   
   
   // Add enet on click
   button.addEventListener("click", altaViata)
   
   
   
   //Define funcions
   function altaViata(){
	   
	 nume.innerHTML = "Somer"
     prenume.innerHTML = "Google"
	  asteptari.innerHTML = "<ul><li> Libertate financiara </li><li>Educatie superioara </li></ul>	"   
	  
	  
	  img.src = "Pictures/img background.jpg"
	  img.style.opacity = "70%"
	  img.style.width = "300px"
	  img.style.height = "200px"
   }
   
   