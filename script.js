let body = document.getElementsByTagName("body")
function ocultarMenu(){
    let btn = document.getElementById("menuLateral")
    btn.classList.toggle("hiddenMenu")
    if(btn.classList.contains("hiddenMenu")){
        btn.style.display = "none"
        btn.style.transition = "all 2s"
    }else{
        btn.style.display = "flex"
        btn.style.transition = "all 2s"
    }
}


