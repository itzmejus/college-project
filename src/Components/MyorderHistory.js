
import { db } from '../Config/Config'
import React, { useState, useEffect } from 'react';

function MyorderHistory() {

    const [userinfo, setUserinfo] = useState([])



    const fetchUserinfo = async () => {
        const response = db.collection("Buyer-info tBVnUAJJENXgHNdI73mWMbFgv313");
        const data = await response.get();
        data.docs.forEach(item => {
            setUserinfo([...userinfo, item.data()

            ])
        })
    }
    useEffect(() => {
        fetchUserinfo();
    }, [])



    return (
        <div className="App">
            {
                userinfo && userinfo.map(info => {
                    return (
                        <div className='container'>
                            <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Payment</th>
                                        <th scope="col">Quantity</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{info.BuyerName}</td>
                                        <td>{info.BuyerEmail}</td>
                                        <td>{info.BuyerAddress}</td>
                                        <td>{info.BuyerCell}</td>
                                        <td>{info.BuyerPayment}</td>
                                        <td>{info.BuyerQuantity}</td>
                                    
                                    </tr>
                                </tbody>

                            </table>

                        </div>
                    )
                })
            }
        </div>
    );

}
export default MyorderHistory



