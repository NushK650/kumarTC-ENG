import {
    saveToLocalStorageByName,
    getLocalStorage,
    removeFromLocalStorage,
  } from "./localStorage.js";

  const addName = document.getElementById("addName")
  const info = document.getElementById("info")
  const slider = document.getElementById("slider")
  const sliderValue = document.getElementById("sliderValue")
  const  getGroups = document.getElementById("getGroups")
  const groupInfo = document.getElementById("groupInfo")

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
  


  function sortGroups() {
    let peopleList = getLocalStorage();
    let groupSize = parseInt(slider.value);
    if (peopleList.length === 0) {
      groupInfo.innerText = "Nothing Yet!";
      return;
    }else{
        
    
        
        
        
        let groups = [];
    for (let i = 0; i < peopleList.length; i += groupSize) {
        groups.push(peopleList.slice(i, i + groupSize));
    }
        
        
        groupInfo.innerHTML = "";
        groups.forEach((group, index) => {
            let div = document.createElement("div");
            div.className = "p-2 rounded-md mb-2";
            
            let title = document.createElement("h3");
            title.innerText = `Group ${index + 1}`;
            title.className = " mb-1";
            
            let groupMembers = document.createElement("p");
            groupMembers.innerText = group.join(", ");
            
            div.appendChild(title);
            div.appendChild(groupMembers);
            groupInfo.appendChild(div);
        });
    }
  }
  
  

  getGroups.addEventListener("click", ()=>{
    sortGroups();
    console.log("works")
  })

  slider.addEventListener("change",()=>{
    sliderValue.innerText = `Group Size: ${slider.value}`
  })

  addName.addEventListener("keydown", (event)=>{
if(event.key === "Enter"){
    const name = addName.value 
     saveToLocalStorageByName(name)
     getFavorites();
     addName.value = "";
}
  })

  getFavorites();

  