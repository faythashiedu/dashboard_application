import React, {useState} from 'react';
import ProductCard from "../../Components/ProductCard/productCard";
import "./product.css"
import {ProductList } from "../../Components/productData";
import { Link } from "react-router-dom";
import { routes } from "../../Utilities/route";
import ModalCom from '../../HOC/modal';
import NewProduct from './newProduct';

const Product = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (
        <div className="product">
            <div className="prdHeader">
                <h1>Products</h1>
                <button className="prdCreate" onClick={openModal}>Create</button>
                <ModalCom showModal={showModal} setShowModal={setShowModal} ><NewProduct onCancel={openModal} /></ModalCom>
            </div>
            <div className="productWrap">
                {ProductList.map((data) => {
                    return (
                        <Link to={`${routes.product}/${data.id}`} className="prdLink">
                            <ProductCard productImg={data.productImg} productName={data.productName} productPrc={data.productPrice} productStock={data.stock} />
                        </Link>
                    )
                })}                
            </div>
        </div>
    )
}

export default Product;
