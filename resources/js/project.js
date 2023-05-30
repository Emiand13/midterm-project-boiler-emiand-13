/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */

document.addEventListener("DOMContentLoaded", function() {
    const endpoint = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';
  
    // Función para obtener los datos del proyecto con el uuid 1
    function getProjectData() {
      fetch(endpoint)
        .then(response => response.json())
        .then(data => {
          const projects = data;
          const project = projects.find(project => project.uuid === "1");
          if (project) {
            printProjectDetails(project);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  
    // Función para mostrar los detalles del proyecto en los elementos HTML existentes
    function printProjectDetails(project) {
      // Actualiza los elementos HTML con los detalles del proyecto
      const projectNameElement = document.getElementById("project-name");
      const projectDescriptionElement = document.getElementById("project-description");
      const projectContentElement = document.getElementById("project-content");
      const projectImageElement = document.getElementById("project-image");
      const projectCompletedOnElement = document.getElementById("project-completion-date");
  
      projectNameElement.textContent = project.name;
      projectDescriptionElement.textContent = project.description;
      projectContentElement.innerHTML = project.content;
      projectImageElement.setAttribute("src", project.image);
      projectCompletedOnElement.textContent = "Completed on " + project.completed_on;
    }
  
    // Llamada a la función para obtener los datos del proyecto
    getProjectData();
  });
  
  
  