/**
 * 
 * 
 * @Author: JOSE LOPEZ RISSO
 * Email: jal.risso@gmail.com
 * Date: 17-08-2022
 * License: 
 * Version: 
 * 
 */


'use strict';





/*  
 * COMIENZO DEL MAIN  
 */


let lists = loadLists();
List.fromJSON(lists);


let selectedListId = loadSelectedListId();

renderLists();

newListForm.addEventListener('submit', createNewList);
listsContainer.addEventListener('click', showMyList);
deleteListButton.addEventListener('click', deleteMyList);
deleteCompletedTasksButton.addEventListener('click', deleteCompletedTasks)
newTaskForm.addEventListener('submit', createNewTask);
tasksContainer.addEventListener('click', changeTask);



/* 
 * FIN DEL MAIN 
 */






//Funciones
function showMyList(event) { //Muestra mi lista selectada
    if (event.target.tagName.toLowerCase() !== 'li') return;
    selectedListId = event.target.dataset.listId
    saveAndRender();
}


function clearContainer(container) { //Limpia mi contenedor
    container.innerHTML = '';
}




/*
TOASTIFY
*/