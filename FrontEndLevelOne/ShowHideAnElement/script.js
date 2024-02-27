function hideElement() {
    let element = document.getElementById("text")
    
    if(element.style.display === "none") {
       element.style.display = "block"
    }  else {
        element.style.display = "none"
    }
}