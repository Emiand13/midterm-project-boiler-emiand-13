/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */


// Función para obtener la información de un proyecto y mostrarla en la página
// Obtener los proyectos desde la API
// Obtener la sección de proyectos
const projectsSection = document.getElementById('projects');

// Obtener los proyectos desde la API
fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
  .then(response => response.json())
  .then(data => {
    // Invertir el orden de la matriz para obtener los proyectos en orden ascendente
    const projects = data.reverse().slice(0, 3);

    // Crear elementos HTML para cada proyecto y agregarlos a la sección de proyectos
    projects.forEach(project => {
      const container = document.createElement('div');
      container.classList.add('container');

      const image = document.createElement('img');
      image.classList.add('projects-img');
      image.src = project.image;
      image.alt = project.name;

      const innerProject = document.createElement('div');
      innerProject.classList.add('inner-project');

      const projectName = document.createElement('h4');
      projectName.classList.add('body-intro');
      projectName.textContent = project.name;

      const projectDescription = document.createElement('p');
      projectDescription.classList.add('feature-text');
      projectDescription.textContent = project.description;

      const learnMoreLink = document.createElement('a');
      learnMoreLink.href ='./project-page-simple.html';
      learnMoreLink.textContent = 'Learn more';

      innerProject.appendChild(projectName);
      innerProject.appendChild(projectDescription);
      innerProject.appendChild(learnMoreLink);

      container.appendChild(image);
      container.appendChild(innerProject);

      projectsSection.appendChild(container);
    });
  })
  .catch(error => {
    console.log('Error al obtener los proyectos:', error);
  });
