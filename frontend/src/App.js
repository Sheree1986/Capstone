import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Neurodiversity from './components/pages/Neurodiversity';
import Resources from './components/pages/Resources';
import Autism from './components/pages/Autism';
import Adhd from './components/pages/Adhd';
import Bipolar from './components/pages/Bipolar';
import Tourette from './components/pages/Tourette';
import Dyslexia from './components/pages/Dyslexia';
// import Face from './components/Api/Face';
import Api from './components/Api/Api';
import Voicetotext from './components/pages/Voicetotext';
import Speechapp from './components/pages/Speechapp';
import StudentDataComponent from './components/Neurohub/StudentDataComponent';
import FooterComponent from './components/Neurohub/FooterComponent';
import CreateStudentComponent from './components/Neurohub/CreateStudentComponent';
import UpdateStudentComponent from './components/Neurohub/UpdateStudentComponent';
import ViewStudentComponent from './components/Neurohub/ViewStudentComponent';

// import { render } from '@testing-library/react';


class App extends Component {
  

  
  render() {
    return (
 

 <Router>
         
        <Navbar />
     
        <Switch>
      
        <Route path='/' exact component={Home} />
        <Route path='/neurodiversity' component={Neurodiversity} />
        <Route path='/resources' component={Resources} />
        <Route path='/autism' component={Autism} />
        <Route path='/adhd' component={Adhd} />
        <Route path='/bipolar' component={Bipolar} />
        <Route path='/tourette' component={Tourette} />
        <Route path='/dyslexia' component={Dyslexia} />
        {/* <Route path='/api' component={Face} /> */}
        <Route path='/voicetotext' component={Voicetotext} />
        <Route path='/speechapp' component={Speechapp} />
         <Route path='/api' component={Api} />
         <Route path='/neurohub' component={StudentDataComponent} />
        <Route path='/createstudent/:id' component={CreateStudentComponent} />
         <Route path='/updatestudent/:id' component={UpdateStudentComponent} />
        <Route path='/viewstudent/:id' component={ViewStudentComponent} />
        {/* <Route path='/footer' component={FooterComponent} /> */}
        
      </Switch>
      
      <FooterComponent />
    </Router>


  
 
   
    );
  }
}
   

  
export default App;