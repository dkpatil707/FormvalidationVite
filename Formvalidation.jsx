import React, { useState } from 'react'






const Formvalidation = () => {

    let [formData, setFormData] = useState({
        requiredfield: "",
        email: "",
        password: "",
        confirmpass: "",
        url: "",
        digits: "",
        number: "",
        alphanum: "",
        textarea: "",
      });
    
      let {
        requiredfield,
        email,
        password,
        confirmpass,
        url,
        digits,
        number,
        alphanum,
        textarea,
      } = formData;
    
      let handleChange = (e)=>{
             let {name, value} = e.target;
             setFormData({...formData, [name]:value})
      }
    
      let [errors, setErrors] = useState({})
    
                let handleSubmit = (e)=>{
                     e.preventDefault();
    
                     let validationErrors = {}
    
                     //requiredField
                     if(requiredfield===""){
                        validationErrors.requiredfield="This value is required"
                     }
    
                     //email
                     if(email===""){
                      validationErrors.email="This value is required"
                      } else if(!/\S+@\S+\.\S+/.test(email)){
                      validationErrors.email="This should be a valid email"
                        }
    
                     //password 
                     if(password===""){
                      validationErrors.password="This value is required"
                       }
    
                       //confrimpassword
                       if(confirmpass===""){
                        validationErrors.confirmpass="This value is required"
                         }
                       else if (confirmpass!=password){
                        validationErrors.confirmpass="The password should be same"
                        }  
    
    
                        // url 
                        const regexURL = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
                        if(url===""){
                          validationErrors.url="This value is required"
                           }
                           else if(!regexURL.test(url)){
                          validationErrors.url="This should be a valid url"
                               }
    
                         // Digits
                         const regexDigits= /^[0-9]+$/
                          if(digits===""){
                          validationErrors.digits="This value is required"
                           }
                           else if (!regexDigits.test(digits)){
                            validationErrors.digits="This value should be a digit"
                           }
    
                            // Numbers
                         const regexNumber= /^-?\d+(?:\.\d+)?$/
    
                         if(number===""){
                         validationErrors.number="This value is required"
                          }
                          else if (!regexNumber.test(number)){
                           validationErrors.number="This value should be a digit"
                          }
    
                          //Alphanumeric
                         const regexAlpha= /^[a-zA-Z0-9\s]+$/
                         if(alphanum===""){
                         validationErrors.alphanum="This value is required"
                          }
                          else if (!regexAlpha.test(alphanum)){
                           validationErrors.alphanum="This value should be a digit"
                          }
    
                           //textarea
                     if(textarea===""){
                      validationErrors.textarea="This value is required"
                   }
    
    
                     setErrors(validationErrors)
                     
                }
    
                console.log(errors);
    
    
      return (
        <>
          <form className="w-6/12 py-5 bg-white border px-9 rounded-3xl" onSubmit={handleSubmit}>
            <h1 className="text-lg font-bold text-red-800 border-b-[2px]">
              Form Validation
            </h1>
    
            {/* Required */}
            <div className="form-group p-[1.5] my-3">
              <label htmlFor="">Required</label>
              <div className="mt-2 inp">
                <input
                  type="text"
                  name="requiredfield"
                  className="w-full p-1 border rounded bg-gray-50"
                  placeholder="Name"
                  value={requiredfield}
                  onChange={handleChange}
                  
                />
    
                <section className="text-xs text-red-600 form-errors">
                 {errors.requiredfield && <span>{errors.requiredfield}</span>}
                </section>
              </div>
            </div>
    
            {/* Email */}
    
            <div className="form-group p-[1.5] my-3">
              <label htmlFor="">E-mail</label>
              <div className="inp">
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="w-full p-1 border rounded bg-gray-50"
                  value={email}
                  onChange={handleChange}
                />
                 <section className="text-xs text-red-600 form-errors">
                 {errors.email && <span>{errors.email}</span>}
                </section>
              </div>
            </div>
    
            {/* Password */}
    
            <div className="form-group p-[1.5] my-3">
              <label htmlFor="">Equal To</label>
              <div className="inp">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="w-full p-1 border rounded bg-gray-50"
                  value={password}
                  onChange={handleChange}
                />
                <section className="text-xs text-red-600 form-errors">
                 {errors.password && <span>{errors.password}</span>}
                </section>
              </div>
    
              <div className="inp">
                <input
                  type="password"
                  name="confirmpass"
                  placeholder="Retype Password"
                  className="w-full p-1 mt-2 border rounded bg-gray-50"
                  value={confirmpass}
                  onChange={handleChange}
                />
                <section className="text-xs text-red-600 form-errors">
                 {errors.confirmpass && <span>{errors.confirmpass}</span>}
                </section>
              </div>
            </div>
    
            {/* URL */}
            <div className="form-group p-[1.5] my-3">
              <label htmlFor="">URL</label>
              <div className="inp">
                <input
                  type="text"
                  name="url"
                  placeholder="URL"
                  className="w-full p-1 border rounded bg-gray-50"
                  value={url}
                  onChange={handleChange}
                />
                <section className="text-xs text-red-600 form-errors">
                 {errors.url && <span>{errors.url}</span>}
                </section>
              </div>
            </div>
    
            {/* DIGITS */}
            <div className="form-group p-[1.5] my-3">
              <label htmlFor="">Digits</label>
              <div className="inp">
                <input
                  type="text"
                  name="digits"
                  placeholder="Enter only Digits"
                  className="w-full p-1 border rounded bg-gray-50"
                  value={digits}
                  onChange={handleChange}
                />
                 <section className="text-xs text-red-600 form-errors">
                 {errors.digits && <span>{errors.digits}</span>}
                </section>
              </div>
            </div>
    
            {/* NUMBER */}
            <div className="form-group p-[1.5] my-3">
              <label htmlFor="">Numbers</label>
              <div className="inp">
                <input
                  type="text"
                  name="number"
                  placeholder="Enter only Numbers"
                  className="w-full p-1 border rounded bg-gray-50"
                  value={number}
                  onChange={handleChange}
                />
                <section className="text-xs text-red-600 form-errors">
                 {errors.number && <span>{errors.number}</span>}
                </section>
              </div>
            </div>
    
            {/* ALPHANUMERIC */}
    
            <div className="form-group p-[1.5] my-3">
              <label htmlFor="">Alphanumeric</label>
              <div className="inp">
                <input
                  type="text"
                  name="alphanum"
                  placeholder="Enter Alphanumeric only"
                  className="w-full p-1 border rounded bg-gray-50"
                  value={alphanum}
                  onChange={handleChange}
                />
                            <section className="text-xs text-red-600 form-errors">
                 {errors.alphanum && <span>{errors.alphanum}</span>}
                </section>
              </div>
            </div>
    
            {/* TEXTBOX */}
            <div className="form-group p-[1.5] my-3">
              <label htmlFor="">TextArea</label>
              <div className="inp">
                <textarea
                  name="textarea"
                  cols=""
                  rows="5"
                  placeholder="Textarea"
                  className="w-full p-1 border rounded bg-gray-50"
                  value={textarea}
                  onChange={handleChange}
                ></textarea>
                            <section className="text-xs text-red-600 form-errors">
                 {errors.textarea && <span>{errors.textarea}</span>}
                </section>
              </div>
            </div>
    
            {/* BUTTON */}
    
            <div className="form-group p-[1.5] my-3">
              <div className="buttonContainer">
                <button className="px-4 py-1 text-white bg-red-800 rounded-md" >Submit</button>
                <button className="px-4 py-1 text-white bg-red-800 rounded-md ms-3">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </>
      );
    };
    

export default Formvalidation;
