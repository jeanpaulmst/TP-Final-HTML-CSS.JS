import { activeProduct } from "../../main.js";
import { closeModal } from "../views/modal.js";
import { handleGetProductsToStore, handleRenderList } from "../views/store.js";
import { handleGetProductLocalStorage, setInLocalStorage } from "./localStorage.js";



/*===PRODUCTS===*/ 

//cancelar - cerrar el popup sin ninguna acción
const buttonCancel = document.getElementById("cancelButton");
buttonCancel.addEventListener("click",()=>{
  closeModal();
});


//Guardar o modificar elementos
const buttonAccept = document.getElementById("acceptButton");
buttonAccept.addEventListener("click",()=>{
  console.log("Entre al botón aceptar")
  handleSaveOrModifyProduct();

});

//Eliminar producto
const buttonDelete = document.getElementById("deleteButton");
buttonDelete.addEventListener("click",()=>{
    handleDeleteProduct();
    closeModal();
});



//Guardar los objetos en la localstorage
export const handleSaveOrModifyProduct = ()=>{
    let productName = document.getElementById("nameInput").value;
    let productPrice = document.getElementById("priceInput").value;
    let productImage = document.getElementById("imageInput").value;
    let productCategory = document.getElementById("categoria").value;
    let object = null;
  
    if (activeProduct){
      object = {
        ...activeProduct,
        productName,
        productPrice,
        productImage,
        productCategory,
      };
  
    }else{
      object = {
        id: new Date().toISOString(),
        productName,
        productPrice,
        productImage,
        productCategory,
      };
    }
  
    console.log(object);
    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
}

//eliminar producto
const handleDeleteProduct = ()=>{
    const products = handleGetProductLocalStorage();
    const result = products.filter((el) => el.id != activeProduct.id);
    localStorage.setItem("products", JSON.stringify(result));

    const newProducts = handleGetProductLocalStorage();
    handleRenderList(newProducts);

}


