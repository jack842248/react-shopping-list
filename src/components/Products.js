import { useContext } from 'react';
import productsData from "../assets/productsData";
import { CartContext } from "../store/store";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Products = () => {

    const [, dispatch] = useContext(CartContext);

    return (
        <div className="row g-3">
            {productsData.map((product) => {
                return (
                    <div
                        className="col-sm-6 col-lg-4"
                        key={product.id}>
                        <div className="card">
                            <img
                                src={product.img}
                                className="card-img-top"
                                alt={product.title}
                            />
                            <div className="card-body">
                                <h6 className="card-title">
                                    {product.title}
                                    <span className="float-end">NT${product.price}</span>
                                </h6>
                                <div className="d-flex">
                                    <select
                                        name=""
                                        id=""
                                        className="form-select flex-grow-1"
                                        onChange={(e)=>{
                                            product.qty = e.target.value
                                        }}>
                                        {
                                            [...Array(20)].map((num, index) => {
                                                return (
                                                    <option
                                                        key={index}
                                                        value={index + 1}>
                                                        {index + 1}
                                                    </option>
                                                ); 
                                            })
                                        }
                                    </select>
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary flex-grow-0"
                                        onClick={() => {
                                            dispatch({
                                                type: 'ADD_TO_CART',
                                                payload: {
                                                    ...product,
                                                    qty: Number(product.qty || 1),
                                                },
                                            });
                                        }}>
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Products;