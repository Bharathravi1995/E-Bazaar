import React from "react";
import ProductItem from "./ProductItem";
import {useDispatch, useSelector} from "react-redux";

const ProductList = () => {
    let products = useSelector(state=>state.products.productsList);
    return <main className="py-5">
        <div className="container-sm px-1  mt-2">
            <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                {products.map((item, index) => {
                    return <ProductItem key={index} product={item} />
                }
                )}
            </div>
        </div>

    </main>;

};

export default ProductList;