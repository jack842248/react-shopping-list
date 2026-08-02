import { useContext } from "react";
import { CartContext } from "../store/store";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {

    const [state, dispatch] = useContext(CartContext);

    return (
        <div className="bg-light p-3">
            <table className="table align-middle">
                <tbody>
                    {state.cartList.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-sm text-danger"
                                        onClick={() => {
                                            dispatch({
                                                type: 'REMOVE_FROM_CART',
                                                payload: {
                                                    id: item.id,
                                                },
                                            });
                                        }}>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                </td>
                                <td>
                                    <img
                                        className="table-image"
                                        src={item.img}
                                        alt={item.title}
                                    />
                                </td>
                                <td>
                                    {item.title}
                                    <br />
                                    <small className="text-muted">NT${item.price}</small>
                                </td>
                                <td>
                                    <select
                                        name=""
                                        id=""
                                        className="form-select"
                                        onChange={(e) => {
                                            e.preventDefault();
                                            dispatch({
                                                type: 'UPDATE_CART_QTY',
                                                payload: {
                                                    id: item.id,
                                                    qty: parseInt(e.target.value),
                                                },
                                            });
                                        }}
                                        value={item.qty}>
                                        {[...Array(20)].map((num, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={index + 1}>
                                                    {index + 1}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </td>
                                <td className="text-end">NT${item.qty * item.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td
                            colSpan="5"
                            className="text-end">
                            總金額NT$ {state.total}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
export default Cart;