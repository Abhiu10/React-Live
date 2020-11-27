import React, {Component} from 'react';
import './App.css';

import axios from 'axios'

class App extends Component {
  constructor(props)
   
  {
      super(props)
          
          
        this.state = {
            firstname: '',
            lastname:'',
            email:'',
            phone:'',
            posts: []
        }      
        
  }


   async handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
    try {
      
      const response = await fetch('http://localhost:3500/api/v1/users/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              email: this.state.email,
              phone: this.state.phone
          })
      });

      const responseData = await response.json();
      if (!response.ok) {
          throw new Error(responseData.message)
      }
      //console.log(responseData);
      


  } catch (err) {
      console.log(err);
      

  }


  



  }
  getpost = () => {
    axios.get('http://localhost:3500/api/v1/users')
      .then((response)=>{
        const data=response.data;
        this.setState({posts:data.users});
        console.log('data recieved');
        console.log(this.state.posts);
        
      

      })
      
      
      .catch(()=>{
        alert('Error data retrieving');
      })
      
  





     






 
    
  }



  render() {
     
    return(
      
      <div className="App">
      <p>FORM</p>
      <div>
      <form onSubmit={this.submitForm}>
        
          <label>First Name</label>
          <input type="text"id="firstname"name="firstname"placeholder="Your name" value={this.state.fname}
          onChange={e => this.setState({ firstname: e.target.value })}/>

          <label>Last Name</label>
          <input type="text"id="lastname" name="lastname" placeholder="Your last name"value={this.state.lname}
            onChange={e => this.setState({ lastname: e.target.value })}/>


          <label>Email</label>
          <input type="email"id="email"name="email"placeholder="Your email" value={this.state.email}
           onChange={e => this.setState({ email: e.target.value })}/>


          <label>Phone</label>
          <input type="text" id="phone "name="phone"placeholder="Your phone number"  
          value={this.state.phone}
          onChange={e => this.setState({ phone: e.target.value })}/>


          <label> Photo </label>
          <input type="file" id ='photo' 
          value={this.state.photo}
          onChange={e => this.setState({ photo: e.target.value })}/>
<br />


          <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />

          </form>
          
      </div>
      
       <button onClick={this.getpost} id="getbttn">Get Data </button>
       <h6>your data will appear here</h6>
      <div >
        { this.state.posts.map(el => {
          return  <div className="box"> 
            <h4>{el.firstname} {el.lastname}</h4>
            <h5>Email:{el.email} Phone:{el.phone}</h5>
          
            
            
            </div>
        })} 
      </div>

       


      </div> 
      
    
    );
    
  
    };






    
  
}

export default App;


