const renderMeals = (list) => {
  const worksContainer = document.querySelector('#portfolio');
  list.forEach((work) => {
    const workProject = document.createElement('div');
    const workContent = ` <div class="works-project">
          <img class="works-img" src=${work.strCategoryThumb} alt="test1"  draggable="false"/>
          <div>
              <h2 class="works-title">${work.strCategory}</h2>
              <p>${work.strCategoryDescription}</p>   
              <button data-modal-target="#modal${work.idCategory}" id=${work.idCategory} type="button">Comment</button>
          </div>
        </div>`;
    workProject.innerHTML = workContent;
    worksContainer.appendChild(workProject);
  });
};

export default renderMeals;