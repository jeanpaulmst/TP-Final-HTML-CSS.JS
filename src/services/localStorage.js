export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
        return products;
    } else{
        return [];
    }
};

//guardar en localStorage

//recibir un producto
export const setInLocalStorage = (productIn) => {
    if (productIn) {
        //Traer los elementos guardados
        let productsInLocal = handleGetProductLocalStorage();
        console.log(productIn);
        const existingIndex = productsInLocal.findIndex(
            (productsLocal) => productsLocal.id == productIn.id
        );

        //verificar si el elemento existe
        if (existingIndex !== -1) {
            //si existe debe reeemplazarse
            productsInLocal[existingIndex] = productIn;
        }
        else{
            //si no agregarse
            productsInLocal.push(productIn);
        }

        //setear el nuevo array
        localStorage.setItem("products", JSON.stringify(productsInLocal));
    }
}
