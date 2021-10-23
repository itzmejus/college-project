import React, { useContext, useEffect } from 'react'
import { CartContext } from '../Global/CartContext'
import { Navbar } from './Navbar';
import { Icon } from 'react-icons-kit'
import { ic_add } from 'react-icons-kit/md/ic_add'
import { ic_remove } from 'react-icons-kit/md/ic_remove'
import { iosTrashOutline } from 'react-icons-kit/ionicons/iosTrashOutline'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { auth } from '../Config/Config'

export const CartUpdated = ({ user }) => {

    const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);

    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/login');
            }
        })
    })

    return (
        <>
            <Navbar user={user} />
            <>
                {shoppingCart.length !== 0 && <h1>Cart</h1>}
                <div className='cart-container'>
                    {
                        shoppingCart.length === 0 && <>
                            <div>no items in your cart or slow internet causing trouble (Refresh the page) or you are not logged in</div>
                            <div><Link to="/">Return to Home page</Link></div>
                        </>
                    }
                    {shoppingCart && shoppingCart.map(cart => (
                        <div className='cart-card' key={cart.ProductID}>

                            <div class="cart-page">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <div class="cart-page-inner">
                                                <div class="table-responsive">
                                                    <table class="table table-bordered">
                                                        <thead class="thead-dark">
                                                            <tr>
                                                                <th>Product</th>
          -                                                      <th>Price</th>
                                                                <th>Quantity</th>
                                                                <th>Total</th>
                                                                <th>Remove</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="align-middle">
                                                            <tr>
                                                                <td>
                                                                    <div class="img">
                                                                        <a ><img src={cart.ProductImg} alt="not found" /></a>
                                                                        <p>{cart.ProductName}</p>
                                                                    </div>
                                                                </td>
                                                                <td>Rs {cart.ProductPrice}.00</td>
                                                                <td>
                                                                    <div class="qty">
                                                                        <button class="btn-minus"><i class="fa fa-minus"></i></button>
                                                                        <input type="text" value="1" />
                                                                        <button class="btn-plus"><i class="fa fa-plus"></i></button>
                                                                    </div>
                                                                </td>
                                                                <td>$99</td>
                                                                <td><button><i class="fa fa-trash"></i></button></td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
           --                                     </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="cart-page-inner">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="coupon">
                                                            <input type="text" placeholder="Coupon Code" />
                                                            <button>Apply Code</button>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="cart-summary">
                                                            <div class="cart-content">
                                                                <h1>Cart Summary</h1>
                                                                <p>Sub Total<span>$99</span></p>
                                                                <p>Shipping Cost<span>$1</span></p>
                                                                <h2>Grand Total<span>$100</span></h2>
                                                            </div>
                                                            <div class="cart-btn">
                                                                <button>Update Cart</button>
                                                                <button onClick={() => { history.push('/acorder') }}>Checkout</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>


                    ))
                    }
                    {shoppingCart.length > 0 && <div className='cart-summary'>
                        <div className='cart-summary-heading'>
                            Cart-Summary
                        </div>
                        <div className='cart-summary-price'>
                            <span>Total Price</span>
                            <span>{totalPrice}</span>
                        </div>
                        <div className='cart-summary-price'>
                            <span>Total Qty</span>
                            <span>{totalQty}</span>
                        </div>
                        <Link to='cashout' className='cashout-link'>
                            <button className='btn btn-success btn-md' style={{ marginTop: 5 + 'px' }}>
                                Cash on delivery
                            </button>
                        </Link>
                    </div>}
                </div>
            </>
        </>
    )
}