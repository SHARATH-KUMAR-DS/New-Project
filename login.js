import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Login = () =>{
    
    const[email , pickEmail] = useState("");
    const[password , pickPassword] = useState("");
    const[msg , updateMsg] = useState("");


    const login = () =>{
        var loginstatus = false;
        if(email=="" || password==""){
            updateMsg("Invalid Login Details !");
        }else{
            updateMsg("Please Wait Processing...");
            var url = "http://localhost:1234/vendor";
            axios.get(url).then(response=>{
                response.data.map((vendordata , index)=>{
                    if(vendordata.email==email && vendordata.password==password){
                        loginstatus = true;
                        localStorage.setItem("fullname", vendordata.name); // storing vendor name in localStorage cookie
                        localStorage.setItem("vendorid", vendordata.id);
                        updateMsg("Success : Please Wait Redirecting...");
                        window.location.href="http://localhost:3000/#/dashboard";
                        window.location.reload(); // reload the page if it success
                    }
                })
            })
            if(loginstatus==false){
                updateMsg("Fail : Invalid or Not Exists");
            }
        }
    }

    return(
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-lg-4 offset-4">
                        <p className="text-center text-danger">{msg}</p>
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <i className="fa fa-lock"></i> Login

                                <Link to="/register" className="text-warning fa-pull-right">
                                  <i className="fa fa-user-plus"></i> New User ? Register
                                </Link>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label>e-Mail Id</label>
                                    <input type="text" className="form-control"
                                    onChange={obj=>pickEmail(obj.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                    <input type="password" className="form-control"
                                    onChange={obj=>pickPassword(obj.target.value)}/>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-primary" onClick={login}> 
                                    Login <i className="fa fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login;

