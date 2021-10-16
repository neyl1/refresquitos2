function validarUsuario(){
    let user = document.forms["formulario"]["usuario"].value; 
    let psw = document.forms["formulario"]["contraseña"].value;
    if (user == "neyli" && psw == "examen") {
        sessionStorage.setItem("IngresoCorrecto", "True")
        return true;
    }

    sessionStorage.setItem("IngresoCorrecto", "False")
    alert("Usuario o contraseña incorrecta")
    return false;
}