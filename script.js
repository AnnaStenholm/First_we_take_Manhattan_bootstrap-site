const slides=document.querySelectorAll('.slide')
let index=0
const nextSlide = () => {
    slides.forEach(slide=>{
    slide.style.display="none"    
    })
    if(index >= slides.length-1){
        index = 0
    }else{
        index++
    }
    slides[index].style.display='block'
}
setInterval(()=>{
 
    nextSlide()
 
},2000)


function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
document.getElementById("contact-button").onclick = function(){
    alert("Your info has been sent!")
}
function disableForm(theform) {
  if (document.all || document.getElementById) {
  for (i = 0; i < theform.length; i++) {
  var tempobj = theform.elements[i];
  if (tempobj.type.toLowerCase() == "submit" || tempobj.type.toLowerCase() == "reset")
  tempobj.disabled = true;
  }
  
  setTimeout('alert("The form you are trying to send has already been sent!")', 1000);
  return false;
  
  }
  
  else {
  alert("Formuläret skulle ha skickats nu men detta är en demo. Du använder IE 4+ eller NS 6 och submit-knappen avaktiverades då inte.");
  return false;
  }
  
  }