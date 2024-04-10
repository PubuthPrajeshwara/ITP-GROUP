import React, { useContext } from 'react';
import './CartItems.css';
import { ProductContext } from '../../../Context/ProductContext';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link } from 'react-router-dom';

const CartItems = () => {
    const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ProductContext);

    return (
        <div className='CartItems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}> {/* Add unique key prop */}
                            <div className='cartitems-format cartitems-format-main'>
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>Rs.{e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>Rs.{(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                                <DeleteOutlinedIcon className='cartitems-remove-icon' onClick={() => removeFromCart(e.id)} />
                            </div>
                            <hr />
                        </div>
                    );
                } else {
                    return null;
                }
            })}
            <div className="cartitems-down">
                <div className='cartitems-total'>
                    <h2>Cart Totals</h2>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>Rs.{getTotalCartAmount().toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Delivery Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>Rs.{getTotalCartAmount().toFixed(2)}</h3>
                        </div>
                    </div>
                    <Link to='/checkout'>
                        <button>PROCEED TO CHECKOUT</button>
                    </Link>
                </div>
                <div className='cartitems-promocode'>
                    <p>If you have a promo code, Enter it here</p>
                    <div className='cartitems-promobox'>
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default CartItems;
