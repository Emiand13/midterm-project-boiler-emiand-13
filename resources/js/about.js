


document.addEventListener("DOMContentLoaded", function() {
    // Cargar el archivo JSON
    fetch("./resources/emi.json")
      .then(response => response.json())
      .then(data => {
        // Acceder a los datos del JSON
        const jsonData = data[0];
  
        // Actualizar los elementos HTML con los datos del JSON
        document.querySelector("#emi-name").innerHTML = jsonData.name;
        document.querySelector("#emi-city").innerHTML = jsonData.city;
        document.querySelector("#emi-hobbies").innerHTML = jsonData.hobbies;
        document.querySelector("#emi-bio").innerHTML = "Biography: " + jsonData.bio;
        document.querySelector("#emi-img").src = jsonData.img;
      })
      .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
      });
  });
  