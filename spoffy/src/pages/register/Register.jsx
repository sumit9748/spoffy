import "./register.css"

import axios from "axios";
import {useHistory} from "react-router";
import { useRef } from "react";
import { publicRequest } from "../../requestMethod";


export const Register = () => {

    const firstname=useRef();
    const lastname=useRef();
    const username=useRef();
    const email=useRef();
    const password=useRef();
    const passwordAgain=useRef();
    const history = useHistory();


    const handleClick = async (e)=>{  
        e.preventDefault();
        if(passwordAgain.current.value!== password.current.value){
            password.current.setCustomValidity("Password dont match!!");
        }else{
            const user={
                firstname:firstname.current.value,
                lastname:lastname.current.value,
                username:username.current.value,
                email:email.current.value,
                password:password.current.value,
            }
            try{
                console.log(user);
            await publicRequest.post("/auth/register",user);
            history.push("/login");

            }catch(err){
                console.log(err);
            }
        }
    };
    return (
        <div className="container">
            <div className="wrapper">
                <span className="title">Create a acoount</span>
                <form className="form" onSubmit={handleClick}>
                    <input placeholder="first name" required ref={firstname} className="loginInput"/>
                    <input placeholder="last name" required ref={lastname} className="loginInput"/>
                    <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="email" required ref={email} type="email" className="loginInput" />
                        <input placeholder="password" minLength="6" required ref={password} type="password" className="loginInput" />
                        <input placeholder="password" minLength="6" required ref={passwordAgain} type="password" className="loginInput" />
                    <span className="agreement">By creating a account,I consent to the processing of my Personal data in accordance
                        with the<b>PRIVACY POLICY</b>
                    </span>
                    <button type="submit" className="button"> Create</button>
                </form>
            </div>
        </div>
    )
}
