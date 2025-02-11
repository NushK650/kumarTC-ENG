import {
    saveToLocalStorageByName,
    getLocalStorage,
    removeFromLocalStorage,
  } from "./localStorage.js";

  const addName = document.getElementById("addName")
  const info = document.getElementById("info")

  function getFavorites() {
    let favoritesList = getLocalStorage();
    info.innerHTML = "";
  
    favoritesList.map((fav) => {
      let div = document.createElement("div");
      div.className = "flex gap-2 items-center"
  
  
      
      let p = document.createElement("p");
      p.innerText = fav;
      
      let deleteIcon = document.createElement("img");
      deleteIcon.className = "w-[15px] h-[15px]";
      deleteIcon.src = "./assets/cancel.png";
      deleteIcon.alt = "Delete";
  
      deleteIcon.addEventListener("click", function () {
        removeFromLocalStorage(fav);
        div.remove();
      });
  
      p.addEventListener("click", function () {
        getData(fav);
      });
  
    
       div.appendChild(deleteIcon);
       div.appendChild(p);
      info.appendChild(div);
    });
  }

  addName.addEventListener("keydown", (event)=>{
if(event.key === "Enter"){
    const name = addName.value 
    
}
  })


  