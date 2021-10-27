import React, { Link } from "react";
import ContactUs from "./ContactUs";
import Resources from "./Resources";
import '../CSS/Footer.css';


const currentDate = new Date();
const currentYear = currentDate.getFullYear();
console.log(currentYear);


export default function Footer() {
    return (
        <footer className="white-text">
            <ContactUs/>
            <Resources />
            <Link to={"//github.com/sheree1986"}>Github</Link>
            <Link to={"//www.linkedin.com/in/shereeedmund"}>LinkedIn</Link>
            <span id="license" className="white-text"><i className="far fa-copyright"></i>  Open Access To Success.</span>
        </footer>
    );
}
          
       
          
   
  

