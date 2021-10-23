
import { db } from '../Config/Config'
import React, { useState, useEffect } from 'react';
import { ButtonBase } from '@material-ui/core';


function LoginUsers() {

    const [userinfo, setUserinfo] = useState([])



    const fetchUserinfo = async () => {
        const response = db.collection('SignedUpUsersData');
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
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{info.Name}</td>
                                        <td>{info.Email}</td>
                                       <button className='delete-btn'  onClick={() => {
                                                alert('User is removed');
                                            }}
                                        >
                                            Remove User</button>
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
export default LoginUsers



