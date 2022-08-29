import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Rui from "../images/Rui.jpg"


export default function Card() {
    return (
        <div className="each">
            <div className="card">
                
                <img className = "pic" src = {Rui} />
                
                
                <div className = "info">
                    <h3 className="myname">Rui Yang</h3>
                    <h5 className="title">Frontend Developer</h5>
                    <p className = "link"><a  href="https://github.com/ruiiy3">Rui's Github</a></p>
                    <div className="button-group">
                        <button className="email"> 
                            <i className="bi bi-envelope-fill"></i>
                            <a href = "mailto: yrui3131@gmail.com">Email</a>
                            </button>
                        <button className="linkedin"> 
                            <i className="bi bi-linkedin"></i>
                            <a href = "http://www.linkedin.com/in/rui-yang-3311y">LinkedIn</a>
                        </button>
                    </div>
                    
                    <div className="section">
                        <h5>About</h5>
                        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                        <h6>Interests</h6>    
                        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                    </div>  
                </div>
                <div className = "social">          
                        <a  href="https://github.com/ruiiy3"><i className="bi bi-twitter"></i></a>
                        <a  href="https://github.com/ruiiy3"><i className="bi bi-meta"></i></a>
                        <a  href="https://github.com/ruiiy3"><i className="bi bi-instagram"></i></a>
                        <a  href="https://github.com/ruiiy3"><i className="bi bi-github"></i></a>      
                    </div>
                
            </div>
            
        </div>
       
                
        
    )
}

