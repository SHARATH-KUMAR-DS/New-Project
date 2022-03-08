import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Register = () =>{
    const[name , pickName] = useState("");
    const[email , pickEmail] = useState("");
    const[mobile , pickMobile] = useState("");
    const[password , pickPassword] = useState("");
    const[msg , updateMsg] = useState("");

    const save = () =>{
        var userinfo = {"name":name, "email":email, "password":password, "mobile":mobile};
        var url = "http://localhost:1234/vendor";
        axios.post(url , userinfo).then(response=>{
            updateMsg(name + " Registered Successfully !");
            pickName("");
            pickEmail("");
            pickMobile("");
            pickPassword("");
        })
    }

    return(
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-lg-4 offset-4">
                        <p className="text-center text-danger">{msg}</p>
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <i className="fa fa-user-plus"></i> Register

                                <Link to="/login" className="text-warning fa-pull-right">
                                  <i className="fa fa-lock"></i> Registered ? Login
                                </Link>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label>Full Name</label>
                                    <input type="text" className="form-control" value={name}
                                    onChange={obj=>pickName(obj.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label>Mobile No</label>
                                    <input type="number" className="form-control" value={mobile}
                                    onChange={obj=>pickMobile(obj.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label>e-Mail Id</label>
                                    <input type="text" className="form-control" value={email}
                                    onChange={obj=>pickEmail(obj.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                    <input type="password" className="form-control" value={password}
                                    onChange={obj=>pickPassword(obj.target.value)}/>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-warning" onClick={save}> 
                                    Register <i className="fa fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Register;

