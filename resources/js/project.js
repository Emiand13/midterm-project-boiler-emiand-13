/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */





function getPost() {
  fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
    .then(response => response.json())
    .then(projects => {
      const project = projects[3];
      const post = document.querySelector('.project-article');
      const html = `
        <h1>${project.name}</h1>
        <div class="project-name">
          <h4>${project.description}</h4>
          <h5>Completed on 31/05/23</h5>
        </div>
        <div class="project-image"></div>
        <p>${project.content}</p>
      `;
      post.innerHTML = html;
    })
    .catch(error => {
      console.log(error);
    });
}

getPost();



































