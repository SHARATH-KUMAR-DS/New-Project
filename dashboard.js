import React , {useState, useEffect} from 'react';
import axios from 'axios';


const Dashboard  = () =>{
    const[orderlist, updateOrder] = useState([]);
    const getOrder = () =>{
        var url = "http://localhost:1234/order";
        axios.get(url).then(response=>{
            updateOrder(response.data.reverse());
        })
    }

    useEffect(()=>{
        getOrder();
    },[true]);

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="text-center"> Order List </h2>
                </div>
            </div>
            {
                orderlist.map((order , index)=>{
                    return(
                        <div className="row mb-3" key={index}>
                            <div className="col-lg-5">
                               <p>Customer Name : {order.name} </p>
                               <p>Mobile No : {order.mobile} </p>
                               <p>e-Mail Id : {order.email} </p>
                               <p>Delivery Address : {order.address} </p>
                            </div>
                            <div className="col-lg-7">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Photo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            order.myproduct.map((pinfo , index2)=>{
                                                return(
                                                    <tr key={index2}>
                                                        <td>{pinfo.name}</td>
                                                        <td>{pinfo.price}</td>
                                                        <td>1</td>
                                                        <td><img src={pinfo.pic} heig="40" width="50"/></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Dashboard;