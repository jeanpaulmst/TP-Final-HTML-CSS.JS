import { handleRenderList } from "../views/store";
import { handleGetProductLocalStorage } from "./localStorage";


export const handleButtonSearchByName = () =>{

    const inputSearch = document.getElementById("inputSearch");
    const products = handleGetProductLocalStorage();

    const result = products.filter((el)=>
        el.productName.toLowerCase().includes(inputSearch.value)
    );

    handleRenderList(result);

}