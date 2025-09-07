let menuVis = false;

function ShowHidden_Menu() {

    if (menuVis) {
        document.getElementById("nav").classList = "";
        menuVis = false;
    }else{
        document.getElementById("nav").classList="responsive";
    }
}

function selection(){
    document.getElementById("nav").classList="";
    menuVis=false;
}

function efectSkills(){
    var skills=document.getElementById("skills");
    var distance_skills=window.innerHeight - skills.getBoundingClientRect().top;
    if (distance_skills >= 300) {

        let skillss= document.getElementsByClassName("progreso");
        skillss[0].classList.add("spring_boot");
        skillss[1].classList.add("javascript");
        skillss[2].classList.add("php");
        skillss[3].classList.add("python");
        skillss[4].classList.add("plsql");
        skillss[5].classList.add("comunicacion");
        skillss[6].classList.add("versatilidad");
        skillss[7].classList.add("trabajo_equipo");
        skillss[8].classList.add("creatividad");
        skillss[9].classList.add("autodidacta");
    }
}

function sendMessage() {
    var nombre =document.getElementById("name").value;
    var correo= document.getElementById("email").value;
    var tel= document.getElementById("phone").value;
    var mensaje = document.getElementById('message').value;
    var numero = "+573104156086";
    var url = "https://wa.me/" + numero + "?text=" + "Hola mi nombre es: "+ nombre +"%0A"+"Mi correo es: "+correo+"%0A"+"Mi telefono es: "+tel+"%0A"+encodeURIComponent(mensaje);
    window.open(url, '_blank');
    document.getElementById("formulario").reset();
    
  }

window.onscroll = function(){
    efectSkills();
} 