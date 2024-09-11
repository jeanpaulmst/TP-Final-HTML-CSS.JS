
/*===MODAL===*/
import { activeProduct, setActiveProduct } from "../../main";

 

//abrir modal con datos del producto seleccionado
export const openModal = ()=>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "flex";
    const buttonDelete = document.getElementById("deleteButton");

    if(activeProduct){
        buttonDelete.style.display = "block";
    }else{
        buttonDelete.style.display = "none";
    }

    if (activeProduct) {
    const productName = document.getElementById("nameInput"),
     productPrice = document.getElementById("priceInput"),
     productImage = document.getElementById("imageInput"),
     productCategory = document.getElementById("categoria");
  
    productName.value = activeProduct.productName;
    productPrice.value = activeProduct.productPrice;
    productImage.value = activeProduct.productImage;
    productCategory.value = activeProduct.productCategory;
    }
  
}

//cerrar modal
export const closeModal = () =>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none";
    setActiveProduct(null);
    resetModal();
  
}

//Resetear valores del modal
const resetModal = () =>{
    let productName = document.getElementById("nameInput");
    let productPrice = document.getElementById("priceInput");
    let productImage = document.getElementById("imageInput");
    let productCategory = document.getElementById("categoria");
    productName.value = null;
    productPrice.value = null;
    productImage.value = null;
    productCategory = "Seleccione una categoría";
  
}

