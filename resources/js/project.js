/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */

console.log("conectado");


function getPost() {
  fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
    .then(response => response.json())
    .then(projects => {
      const project = projects[3];
      const post = document.querySelector('.project-article');
      const html = `
        <div class="simplify">
        <h1>${project.name}</h1></div>
        <div class="project-name">
          <h4>${project.description}</h4>
          <div class="date">
          <h5><span>Completed on 31/05/23</span></h5></div>
        </div>
        <div class="project-image">
        
        <img src="${project.image}"> 
        </div>
        
        <div>
        <p>${project.content}</p>
        </div>
        
      `;
      post.innerHTML = html;
    })
    .catch(error => {
      console.log(error);
    });
}

getPost();





































