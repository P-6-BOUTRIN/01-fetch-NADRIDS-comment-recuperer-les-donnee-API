
// voir avec un tableau

// fetch("https://api.github.com/users/P-6-BOUTRIN")
// .then(response => response.json())
// .then(response2 => console.table(response2.name))

// voir un fichier

// Récuperer les informations
// recuperer le btn avec un click du DOM
btn.onclick = () => {
fetch("https://api.github.com/users/" + champInput.value)
.then(response => response.json())
//   data : pour afficher des information 
.then(data =>{
// A chaque requete elle se vide
output.textContent = "";
output.textContent =`Compte de ${data.name}`;
//  Créer et afficher une image 
const img = document.createElement("img");
img.src = data.avatar_url;
// afficher avec output
output.appendChild(img);

})
}






// console.table(response2.avatar_url));