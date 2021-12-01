import "./productCard.css";
import prada from "../../Assets/laura-chouette-tvVxsZy7OWs-unsplash.jpg";

const ProductCard = ({
    productName,
    productPrc,
    productStock,
    productImg
}) => {
    return (
        <div className="cardWrap">
            <div className="prdImgWrap">
                <img className="prdImg" src={productImg} alt="" />
            </div>
            <div className="prdDetails">
                <div className="prdWrap">
                    <h5 className="prdName">{productName}</h5>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                </div>
                <span className="prcWrap">
                    <h6 className="prdPrice">{productPrc}</h6>
                    <span className="stockWrap">
                        <span className={`dot${productStock}`}></span>
                        <h6 className="stock">{productStock}</h6>
                    </span>
               </span>
            </div>
        </div>
    )
}

export default ProductCard;
