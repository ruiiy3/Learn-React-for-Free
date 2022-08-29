import React from "react";
import ReactDOM from "react-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import harry from "../images/harry.jpg";
import Ron from "../images/ron.jpg";

export default function Card() {
    return (
        <div className="each">
            <div className = "card">
                <div className = "pic" >
                    <img scr = {Ron} />
                </div>
                
                <div className = "info">
                    <h3>Rui Yang</h3>
                    <h5>Frontend Developer</h5>
                    <a href="">Rui's github</a>
                    < button>Email</button>
                    <button>LinkedIn</button>
                    <div className = "section">
                        <h4>About</h4>
                        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                        <h4> Interest</h4>
                        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                    </div>
                </div>
                <div className = "social">
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-meta"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-github"></i>
                </div>
            </div>
        </div>
        
    )
}
