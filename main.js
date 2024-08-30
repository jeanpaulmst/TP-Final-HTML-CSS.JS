import { renderCategories } from "./src/services/categories.js";
import { setInLocalStorage } from "./src/services/localStorage.js";
import { handleGetProductsToStore } from "./src/views/store.js";

//import "./style.css"

/*===APLICACIÓN===*/
renderCategories();  //Renderiza y devuelve lista de filtros
handleGetProductsToStore();


/*===PRODUCT===*/ 

//Abrir PopUp -- "Agregar o modificar producto"
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click",()=>{
  openModal();

});

const openModal = ()=>{
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "flex";

}


/*===POPUP===*/

//Cerrar PopUp -- "Agregar o modificar producto"
const buttonCancel = document.getElementById("cancelButton");
buttonCancel.addEventListener("click",()=>{
  closeModal();
});

const closeModal = () =>{
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "none";

}

//Guardar o modificar elementos

const buttonAccept = document.getElementById("acceptButton");
buttonAccept.addEventListener("click",()=>{
  handleSaveOrModifyProduct();

});

const handleSaveOrModifyProduct = ()=>{
  let productName = document.getElementById("nameInput").value;
  let productPrice = document.getElementById("priceInput").value;
  let productImage = document.getElementById("imageInput").value;
  let productCategory = document.getElementById("categoria").value;

  let object = {
    id: new Date().toISOString(),
    productName,
    productPrice,
    productImage,
    productCategory,
  };
  console.log(object);
  setInLocalStorage(object);
  handleGetProductsToStore();
  closeModal();
}

