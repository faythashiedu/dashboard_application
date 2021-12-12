import { Publish } from "@material-ui/icons";
import { useParams } from "react-router";
import Charts from "../../Components/Charts/charts";
import { ProductList } from "../../Components/productData";
import "./singleProduct.css";

const SingleProduct = () => {
    let sum = 0
    const { id } = useParams();

    return (
        <div className="singleProduct">
            <h1>Edit product</h1>
            <div className="productTop">
                {
                    ProductList
                    .filter((list) => list.id == id )
                    .map((list) => {
                        return (
                            <div className="infoWrap">
                                <div className="prdCharts">
                                    <Charts data={list?.sales} title="Sales Performance" dataKey="TotalSales" aspect={4 /1} />
                                </div>
                                <div className="prdInfo">
                                    <div className="imgWrap">
                                        <img src={list.productImg} alt="" className="prdSaleImg" />
                                        <h4>{list.productName}</h4>
                                    </div>
                                    <div className="prdInfoBtm">
                                        <div className="singleInfo">
                                            <h4>Id:</h4>
                                            <h5>{list.id}</h5>
                                        </div>
                                        <div className="singleInfo">
                                            <h4>Sales:</h4>
                                            <h5>{list.sales.forEach((item) => {sum += item.TotalSales})}${sum}</h5>
                                        </div>
                                        <div className="singleInfo">
                                            <h4>{list.stock}:</h4>
                                            <h5>Yes</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
            <div className="productBottom">
                <form className="prdForm">
                    <div className="formLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Fendi bag" />
                        <label>Available Product</label>
                        <input type="number" placeholder="Product count" />
                        <label>In Stock</label>
                        <select name="inStock" id="prdStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    {
                        ProductList
                        .filter((list) => list.id == id )
                        .map((list) => {
                            return (
                                <div className="formRight">
                                    <div className="publishWrap">
                                    <img src={list.productImg} alt="" className="formPrdImg" />
                                    <label for="file">
                                        <Publish />
                                    </label>
                                    <input type="file" id="file" style={{display:"none"}} />
                                    </div>
                                    <button className="prdBtn">Update</button>
                                </div>
                            )
                        })
                    }
                </form>
            </div>
        </div>
    )
}

export default SingleProduct;
