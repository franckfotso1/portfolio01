import React from 'react'

const Contact = () => {
    return (
        <div className="contacts">
            <div className="text-center">
            <h1>Contact me</h1>
            <p>Please fill out the form and describe your project needs and i will contact you</p>
            </div>
            <div className="container">
              <div className="row">
                 <div className="col-md-6 col-xs-12">
                     {/* NAME INPUT */}
                       <input 
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                       />
                        {/* PHONE INPUT */}
                        <input 
                        id="phone"
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        phone="phone"
                       />
                       {/* EMAIL INPUT */}
                       <input 
                       id="email"
                       type="email"
                        className="form-control"
                        placeholder="Email"
                        email="email"
                       />
                        {/* SUBJECT INPUT */}
                        <input 
                        id="subject"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        Subject="subject"
                       />
                 </div>
                 <div className="col-md-6 col-xs-12">
                      {/* DESCRIPTION */}
                      <textarea 
                       id="description"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        Subject="subject"
                       > </textarea>
                       <button className="btn-main-offer contact-btn" type="submit" >
                         CONTACT ME
                       </button>
            
                 </div>
              </div>
            </div>
        </div>
    )
}

export default Contact
