import "./newProduct.css"

const NewProduct = ({ onCancel = () => {} }) => {
    return (
        <div className="newProduct">
            <h1>New Product</h1>
            <form className="formMain">
                <div className="formcard">
                    <label>Image</label>
                    <div className="ImgForm">
                        <button>Choose Image</button>
                        <h6>No file chosen</h6>
                    </div>
                    <label>Product Name</label>
                    <input type="text" placeholder="Fendi bag" />
                    <label>Stock</label>
                    <input type="number" placeholder="123" />
                    <label>Description</label>
                    <textarea rows={5} className="prdTxtArea" />
                </div>
                <div className="crtBtn">
                    <button className="cancel" onClick={onCancel}>Cancel</button>
                    <button className="create">Create</button>
                </div>
            </form>
        </div>
    )
}

export default NewProduct
