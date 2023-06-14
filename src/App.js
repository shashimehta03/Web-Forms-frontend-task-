import './App.css'
import React from 'react';
import axios from 'axios';


export default function App() {
    const submitHandler=(event) =>{
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    const services=event.target.services.value;
    const description=event.target.description.value;
    const data ={name,email,phone,services,description}
    
    axios.post("https://www.formz.in/api/task",data)
    
  
    .then((response)=>{
      console.log(response);
      event.target.reset();
    })
    .catch((error)=>
    {
      console.log(error);
      
    });
    
  };
  
  return (
    <main>
        <div className="new_home_web">
    <div className="responsive-container-block big-container">
      <div className="responsive-container-block textContainer">
        <div className="topHead">
          <p className="text-blk heading">
            Let's Level up your  
            <span className="orangeText"> Brand together</span>
          </p>
          <div className="orangeLine" id="w-c-s-bgc_p-2-dm-id"></div>
        </div>
        <p className="text-blk subHeading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna al iqua.
        </p>
      </div>
      <div className="responsive-container-block container">
        <div
          className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line"
          id="i69b"
        >
          <form className="form-box">
            <div className="container-block form-wrapper">
              <div className="responsive-container-block">
                <div className="left4">
                  <div
                    className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                    id="i10mt-2"
                  >
                    <input
                      className="input"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                  </div>

                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <input
                      className="input"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <input
                      className="input"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 lastPhone">
                    <input
                      className="input"
                      id="services"
                      name="services"
                      placeholder="Services"
                    />
                  </div>
                </div>
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                  id="i634i-2"
                >
                  <textarea
                    className="textinput"
                    id="description"
                    placeholder="Description"
                    defaultValue={""}
                  />
                </div>
              </div>
              <a className="send" href="#" id="w-c-s-bgc_p-1-dm-id" onSubmit={submitHandler}>
                Send
              </a>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  </div>
    </main>
    
  )
}
