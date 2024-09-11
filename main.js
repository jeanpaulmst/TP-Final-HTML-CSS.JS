import { renderCategories } from "./src/services/categories.js";
import { handleSaveOrModifyProduct } from "./src/services/products.js";
import { handleButtonSearchByName } from "./src/services/searchBar.js";
import { closeModal, openModal } from "./src/views/modal.js";
import { handleGetProductsToStore } from "./src/views/store.js";


//import "./style.css"

/*===APLICACIÓN===*/

export let activeCategory = null;
export const setActiveCategory = (categoryIn) =>{
  activeCategory = categoryIn;
}

export let activeProduct = null;
export const setActiveProduct = (productIn) =>{
  activeProduct = productIn;
}

renderCategories();  //Renderiza y devuelve lista de filtros
handleGetProductsToStore();


//---HEADER---
//agregar elemento
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click",()=>{
  openModal();

});


//botón de busqueda
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click",()=>{
  handleButtonSearchByName();
})











