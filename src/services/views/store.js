/*=======STORE=======*/

import { handleGetProductLocalStorage } from "../localStorage"

export const handleGetProductsToStore = () => {

    const products = handleGetProductLocalStorage();
    handleRenderList(products);
};

export const handleRenderList = (productsIn) => {
    const burgers = productsIn.filter((el) => el.productCategory == "Hamburguesas");
    const papas = productsIn.filter((el) => el.productCategory == "Papas");
    const gaseosas = productsIn.filter((el) => el.productCategory == "Gaseosas");

    const renderProductGroup = () => {
        //SEGUIR DESDE ACÁ
    }
}