import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Productlist = () =>{
    const[allproduct , updateProduct] = useState([]);
    const getProduct = () =>{
        axios.get("http://localhost:1234/product")
        .then(response =>{ 
            updateProduct(response.data);
        })
    }

    useEffect(()=>{
        getProduct();
    })

    const[msg , updateMsg] = useState("");
    const addtoCart = (productData) =>{
        var url = "http://localhost:1234/cart";
        axios.post(url , productData)
        .then(response =>{
            updateMsg(productData.name + " Added in Cart Successfully !");
        })
    }

    return(
        <div className="container">
            <div className="row text-center">
                <p className="col-lg-12 text-center text-danger p-3"> {msg} </p>
                {
                   allproduct.map((pro, index)=>{
                       return(
                                <div className="col-lg-3 mb-3" key={index}>
                                    <div className="p-3 bg-light rounded">
                                        <h4 className="text-info"> {pro.name} </h4>
                                        <img src={pro.pic} className="img-fluid rounded"/>
                                        <small> {pro.details} </small>
                                        <p className="text-danger"> Rs. {pro.price} </p>
            <button className="btn btn-danger btn-sm" onClick={addtoCart.bind(this,pro)}> + Add To Cart </button>
                                    </div>
                                </div>
                       )
                   }) 
                }
            </div>
        </div>
    )
}

export default Productlist;