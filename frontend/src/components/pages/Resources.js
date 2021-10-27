
import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';


export default function Resources() {

  
return (


<div className="res">

 


  
  <ul > 
  <h1 style={{ color: 'black' }}>Welcome to the Resources Page</h1>
    <li><p style={{ color: 'black' }}> Here we have created an application from tutorials that showcase some of the the ways you can incorporate accessibility into a website.</p>
</li>
    <li>
<p style={{ color: 'black' }}> Below is a speech to text app that allows a user to take notes. There is also a link to the corresponding Youtube tutorial.</p>
</li>
  <li>
  <Link className='navLinks' to='/voicetotext'>
             Voice To Text
            </Link>
            </li>
            <li>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/U2g--_TDYj4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </li>
            <li>
<p style={{ color: 'black' }}>This application is still a work in progress. Currently cannot get it to run outside of the App.js file. Once it iis working it will be updated to github. The tutorial video can be found below.</p>
  <Link className='navLinks' to='/speechapp'>
            Speech APP is a voice ball manipulation game
            </Link>
            </li>
            <li>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5bnBE950SHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </li>

  </ul>

  </div>
)}