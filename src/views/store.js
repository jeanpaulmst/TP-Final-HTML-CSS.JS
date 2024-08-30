/*=======STORE=======*/

import { handleGetProductLocalStorage } from "../services/localStorage"

//recupera los elementos guardados de la localStorage y llama a la función de renderizado
export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
};

export const handleRenderList = (productsIn) => {
    //Se definen arrays de elementos según categoría
    const burgers = productsIn.filter((el) => el.productCategory == "Hamburguesas");
    const papas = productsIn.filter((el) => el.productCategory == "Papas");
    const gaseosas = productsIn.filter((el) => el.productCategory == "Gaseosas");

    //función de renderizado: Se encarga de injectar el codigo html
    const renderProductGroup = (productos, title) => {  //Se le pasa como parámetro el nombre de la categoría "title"
        if(productos.length>0){
            console.log(productos);
            const productosHTML = productos.map((producto, index)=>{
                return `<div id='product-${producto.productCategory}-${index}' class="storeProduct">
                <div>
                    <img src='${producto.productImage}' alt='${producto.productName}' />
                </div>
                <div>
                    <h2>${producto.productName}</h2>
                </div>
                <div>
                    <p><b>Precio:</b> $ ${producto.productPrice}</p>
                    <p><b>Categoría:</b> ${producto.productCategory}</p>
                </div>
            </div>`;
            });
            return `
            <section class="sectionStore">
            <h3>${title}</h3>
            <div class="containerSectionProducts">
            ${productosHTML.join("")}
            </div>

            </section>
            `;
        }else {
            return "";
        }
    };

    //renderizar cada uno de los productos en su categoría correspondiente
    const appContainer = document.getElementById("storeContainer");     //Nivel del contenedor de la store
   appContainer.innerHTML = `                                          
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    `;  //Nivel del contenedor de cada categoría. Llama a la funcion para renderizar todos los elementos de la categoría
    


    //Se pasa un arreglo de productos como parámetro. Se itera cada producto. Por cada uno de los productos se recupera
    //su elemento en el document y se define una función de click
    const addEvents = (productsIn) =>{
        productsIn.forEach((element, index)=>{
            const productContainer = document.getElementById(`product-${element.productCategory}-${index}`);
            productContainer.addEventListener("click", ()=>{
                console.log("productoActivo", element);
            });
        }); 
    };
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};