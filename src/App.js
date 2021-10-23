import React, { Component } from 'react'
import { ProductsContextProvider } from './Global/ProductsContext'
import { Home } from './Components/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Signup } from './Components/Signup'
import { Login } from './Components/Login'
import { NotFound } from './Components/NotFound'
import { auth, db } from './Config/Config'
import { CartContextProvider } from './Global/CartContext'
import { Cart } from './Components/Cart'
import { AddProducts } from './Admin/AddProducts'
import { Cashout } from './Components/Cashout'
import NavbarNew from './Routes/NavbarNew'
import HomePage from './Components/HomePage'
import { Products } from './Components/Products'
import { Navbar } from './Components/Navbar'
import LoginUsers from './Admin/LoginUsers'
import MyorderHistory from './Components/MyorderHistory'
import AdminDashbord from './Admin/AdminDashbord'
import OrderHistory from './Admin/OrderHistory'
import { AllProducts } from './Admin/AllProducts'
import AdminNavbar from './Admin/AdminNavbar'


export class App extends Component {

    state = {
        user: null,
    }

    componentDidMount() {

        // getting user info for navigation bar
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                    this.setState({
                        user: snapshot.data().Name
                    })
                })
            }
            else {
                this.setState({
                    user: null
                })
            }
        })

    }

    render() {
        return (
            <ProductsContextProvider>
                <CartContextProvider>
                    <BrowserRouter>
                        <Switch>


                            {/* Users Routes */}
                           
                            <Route exact path='/' component={() => <Home user={this.state.user} />} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/homepage" component={HomePage} />
                            <Route path="/login" component={Login} />
                            <Route path="/nav" component={NavbarNew} />
                            <Route path="/cartproducts" component={() => <Cart user={this.state.user} />} />
                            <Route path="/products" component={Products} />
                            <Route path="/myorders" component={MyorderHistory} />
                            <Route path='/cashout' component={() => <Cashout user={this.state.user} />} />


                            {/* Admin Routes */}

                            <Route path="/admin/" exact component={AdminDashbord} />
                            <Route path="/admin/nav" component={AdminNavbar} />
                            <Route path="/admin/loginusers" component={LoginUsers} />
                           <Route path='/admin/allproducts' component={AllProducts}/>
                            <Route path="/admin/addproducts" component={AddProducts} />
                            <Route path="/admin/orderhistory" component={OrderHistory} />
                         
                            <Route component={NotFound} />
                        </Switch>
                    </BrowserRouter>
                </CartContextProvider>
            </ProductsContextProvider>
        )
    }
}

export default App
