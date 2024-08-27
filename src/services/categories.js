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
    liElements.forEach((liElement) => {
        liElement.addEventListener("click", ()=>{
            console.log("click en", liElement.id);
            handleClick(liElement);
        });
    });
    
    //verificamos y manejamos el estilo del elemento activo
    const handleClick = (elemento) =>{
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

};