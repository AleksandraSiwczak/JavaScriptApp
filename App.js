import { getUser } from "./services/getUsers.js";
import { makeDiv, makeImg } from "./services/helpers.js";

const container = document.getElementById("container");
const getUsersButton = document.getElementById("getUser");
const hideAdress = document.getElementById("hide");

let showLocation = true

const createUser = ({
  name,
  lastName,
  img,
  registerData,
  nationality,
  locationAdress,
  locationCountry,
 
}) => {
	
    container.append(
    makeImg(img),
	makeDiv(name),
    makeDiv(lastName),
    makeDiv(lastName),
    makeDiv(registerData),
    makeDiv(nationality),
    ...(showLocation === true ? 
    [makeDiv(locationAdress),
    makeDiv(locationCountry)]
	: [])
    
  );
  return container;
};

const update = () =>{
    container.innerHTML = "";
    getUser().then(createUser)
}

hideAdress.addEventListener("click", function(){
showLocation = !showLocation
})

getUsersButton.addEventListener("click", ()=> update());



