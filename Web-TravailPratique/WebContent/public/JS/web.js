function validate(){
    if(document.getElementById('prenom').value == ""){
        alert('Veuillez entrer votre prénom');
        return false;
    }
    if(document.getElementById('nom').value == ""){
        alert('Veuillez entrer votre nom');
        return false; 
    }
    return true;
}