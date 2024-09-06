import { handleRenderList } from "../views/store";
import { activeCategory } from "../../main";
import { setActiveCategory } from "../../main";
import { handleGetProductLocalStorage } from "./localStorage";

//renderizar solo la categoria seleccionada
export const handleFilterProductByCategory = (categoryIn) => {
   
    const productos = handleGetProductLocalStorage();
    
    switch(categoryIn){
    
        case "Todo":
            console.log("Entre en Todo!!!");
            handleRenderList(productos);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            console.log("Entre en H,P,G!!!"); 
            const result = productos.filter((el) => el.productCategory == activeCategory);
            handleRenderList(result);
            break;
        case "MayorPrecio":
            const resultMayorPrecio = productos.sort((a, b) => a.productPrice - b.productPrice);
            handleRenderList(resultMayorPrecio);
            break;
        case "MenorPrecio":
            const resultMenorPrecio = productos.sort((a, b) => b.productPrice - a.productPrice);
            handleRenderList(resultMenorPrecio);
            break;

    }

}


//render de la vista categorias
export const renderCategories = () =>{
    //tomamos elementos de la lista
    const ulList = document.getElementById("listFilter");

    //cramos esos elementos dentro de la lista
    ulList.innerHTML =  `
    <li id="Todo">Todos los Productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="MayorPrecio">Mayor Precio</li>
    <li id="MenorPrecio">Menor Precio</li>
    `;

    //añadimos dinámicamente el evento click
    const liElements = ulList.querySelectorAll("li");
    //liElements.item("Todo").classList.add("liActive") //Setear por defecto "Todos"
    

    liElements.forEach((liElement) => {
        liElement.addEventListener("click", ()=>{
            console.log("click en", liElement.id);
            handleClick(liElement);
        });
    });
    
    //verificamos y manejamos el estilo del elemento activo
    const handleClick = (elemento) =>{
        setActiveCategory(elemento.id);
        handleFilterProductByCategory(elemento.id);

        liElements.forEach((el)=>{
            if(el.classList.contains("liActive")){
                el.classList.remove("liActive");
            }
            else{
                if(elemento == el){
                    el.classList.add("liActive");
                }
                
            }
        });
        
        
    }
    return liElements;
};