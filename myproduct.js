import React , {useState, useEffect} from 'react';
import axios from 'axios';

const Myproduct = () =>{
    const[product , updateProduct] = useState([]);
    const getProduct = () =>{
        var url = "http://localhost:1234/product";
        axios.get(url).then(response=>{
            updateProduct(response.data.reverse());
        })
    }

    useEffect(()=>{
        getProduct();
    },[true]);

  
    const removeItem = (index) =>{
        var url = "http://localhost:1234/product/` "+index;
        axios.delete(url).then(response =>{
           
            getProduct(); // to reload the list
        })
    }

    
  

    const[pname , pickName] = useState("");
    const[pprice , pickPrice] = useState("");
    const[pphoto , pickPhoto] = useState("");
    const[msg , updatemsg] = useState("");
    const save = () =>{
        var url = "http://localhost:1234/product";
        var newproduct = { name:pname, price:pprice, pic:pphoto};
        axios.post(url , newproduct).then(response=>{
            getProduct();
            updatemsg(pname + " Added Successfully !");
            pickName("");
            pickPhoto("");
            pickPrice("");
        })
    }

   


    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-3">
                    <div className="bg-light p-4 rounded">
                        <h4 className="text-center"> Add New Product </h4>
                        <div className="mb-3">
                            <label>Product Name</label>
                            <input type="text" className="form-control"
                            onChange={obj=>pickName(obj.target.value)}
                            value={pname}/>
                        </div>
                        <div className="mb-3">
                            <label>Product Price</label>
                            <input type="text" className="form-control"
                            onChange={obj=>pickPrice(obj.target.value)}
                            value={pprice}/>
                        </div>
                        <div className="mb-3">
                            <label>Product Photo URL </label>
                            <input type="text" className="form-control"
                            onChange={obj=>pickPhoto(obj.target.value)}
                            value={pphoto}/>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary" onClick={save}> Save Product </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <h4 className="text-primary m-2 text-center">Available Products</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map((pinfo ,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{pinfo.name}</td>
                                            <td>{pinfo.price}</td>
                                            <td><img src={pinfo.pic} height="50" width="50"/></td>
                                            <td>
        <i className="fa fa-trash fa-2x text-danger" onClick={removeItem.bind(this, index)}></i>
                                                </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Myproduct;
