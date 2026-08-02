import { useContext } from "react";
import { CartContext } from "../store/store";

const Navbar = () => {
    const [state,] = useContext(CartContext);
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand">甜點蛋糕店</span>
                <button
                    className="btn btn-outline-dark position-relative"
                    type="submit">
                    購物車
                    {
                        state.cartList.length?
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {state.cartList.length}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                        :
                        null
                    }

                </button>
            </div>
        </nav>
    );
}

export default Navbar;