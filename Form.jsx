import React , {useState} from 'react'

const Form = () => {

    let [ formValue, setFormValue] = useState({
        minLength:"",
        maxLength:"",
        rangeLength:"",
        minvalue:"",
        maxvalue:"",
        Rangevalue:"",
    })

    let {minLength,maxLength,rangeLength,minvalue,maxvalue,Rangevalue} = 
    formValue;

    let handleChange = (e) => {
        let {name,value} = e.target;
        setFormValue({...formValue,[name]:value})
    };

    
    let [valueErrors,setValueErrors]= useState({})

    
    
    let handleSubmit = (e) =>{
        e.preventDefault()
        
    let valueValidationErros = {};

    //minLength
    
    if(minLength===""){
        valueValidationErros.minLength="This value is reuired"
    } else if (minLength.length<6){
        valueValidationErros.minLength= "Enter min 6 characters"
    }
    
    //Maxlength

    if(maxLength===""){
        valueValidationErros.maxLength="This value is reuired"
    } else if (maxLength.length<6){
        valueValidationErros.maxLength= "Enter max 6 characters"
    }
    
  //rangeLength

    if(rangeLength ===""){
        valueValidationErros.rangeLength="This value is reuired"
    } else if (rangeLength.length < 5 || rangeLength.length > 10){
        valueValidationErros.rangeLength= "This length is inalid , it should be between 5-10"
    }
    
    //minvalue
    if(minvalue===""){
        valueValidationErros.minvalue="This value is reuired"
    } else if (minvalue<6){
        valueValidationErros.minvalue= "This value should be greater then or equal to 6 "
    }
    
      //maxvalue
      if(maxvalue===""){
        valueValidationErros.maxvalue="This value is reuired"
    } else if (maxvalue<6){
        valueValidationErros.maxvalue= "This value should be less then or equal to 6"
    }

    //rangevalue

    if(Rangevalue ===""){
        valueValidationErros.Rangevalue="This value is reuired"
    } else if (Rangevalue < 6 || Rangevalue > 100){
        valueValidationErros.Rangevalue= "this value should be between 6-100"
    }  
    
    
         setValueErrors(valueValidationErros)
    
    }
    
    let handleReset=() => {

        setFormValue({
            minLength:"",
            maxLength:"",
            rangeLength:"",
            minvalue:"",
            maxvalue:"",
            Rangevalue:"",      
          })
        
    }
    
  return (
    <>

<nav className="p-4 bg-gray-800">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <div className="text-lg font-bold text-white">Logo From</div>

        {/* Navigation links */}
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="#" className="hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Service</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Help</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    

    
      <form  className="w-6/12 py-5 bg-white border px-9 rounded-3xl" onSubmit={handleSubmit}  >
        <h3 className="text-lg font-bold text-red-800 border-b-[2px]">Form Validation</h3>

        {/*MinLength */}
        <section  className="form-group p-[1.5] my-3" >
            <label htmlFor="Min Length">Min Langth</label>
            <div className="mt-2 inp">  
            <input type='text' name='minLength' placeholder='min 6 characters' 
             className="w-full p-1 border rounded bg-gray-50"
             value={minLength}
            onChange={handleChange}
            
            />
               <section className="text-xs text-red-600 form-errors">
                 {valueErrors.minLength && <span>{valueErrors.minLength}</span>}
                </section>

           </div>

        </section>

          {/*Maxlength*/}
          <section  className="form-group p-[1.5] my-3">
            <label htmlFor="Max Length">Max length</label>

            <div>  
            <input type='text' name='maxLength' placeholder='min 6 characters'  className="w-full p-1 border rounded bg-gray-50"
             value={maxLength}
            onChange={handleChange}/>

<section className="text-xs text-red-600 form-errors">
                 {valueErrors.maxLength && <span>{valueErrors.maxLength}</span>}
                </section>


           </div>

        </section>

          {/*RanLength */}
          <section   className="form-group p-[1.5] my-3">
            <label htmlFor="Ran Length">Range Length</label>

            <div>  
            <input type='text' name='rangeLength' placeholder='Text should be between 5-10 characaters ' className="w-full p-1 border rounded bg-gray-50"
             value={rangeLength}
            onChange={handleChange}/>

<section className="text-xs text-red-600 form-errors">
                 {valueErrors.rangeLength && <span>{valueErrors.rangeLength}</span>}
                </section>
           </div>

        </section>

          {/*Min value */}
          <section className="form-group p-[1.5] my-3">
            <label htmlFor="Min value">Min value</label>

            <div>  
            <input type='number' name='minvalue' placeholder='min value should be 6' className="w-full p-1 border rounded bg-gray-50"
             value={minvalue}
            onChange={handleChange}/>

            
<section className="text-xs text-red-600 form-errors">
                 {valueErrors.minvalue && <span>{valueErrors.minvalue}</span>}
                </section>

           </div>

        </section>

         {/*Max value */}
         <section className="form-group p-[1.5] my-3">
            <label htmlFor="Max value">Max value</label>

            <div>  
            <input type='number' name='maxvalue' placeholder='max value should be 6' className="w-full p-1 border rounded bg-gray-50"
             value={maxvalue}
            onChange={handleChange}/>

                      
<section className="text-xs text-red-600 form-errors">
                 {valueErrors.maxvalue && <span>{valueErrors.maxvalue}</span>}
                </section>

           </div>

        </section>

         {/*Range value */}
         <section className="form-group p-[1.5] my-3">
            <label htmlFor="Range value">Range value</label>

            <div>  
            <input type='number' name='Rangevalue' placeholder=' value should be between 6-100' className="w-full p-1 border rounded bg-gray-50"
             value={Rangevalue}
            onChange={handleChange}/>

                             
<section className="text-xs text-red-600 form-errors">
                 {valueErrors.Rangevalue && <span>{valueErrors.Rangevalue}</span>}
                </section>

           </div>

        </section>

         {/*button */}
         <section  className='form-group p-[1.5] my-3'>
           <div className='buttonContainer'>
            <button className='px-4 py-1 text-white bg-red-800 rounded-md'  onClick={handleSubmit}  > Submit</button>
            <button className='px-4 py-1 text-white bg-red-800 rounded-md ms-3'   onClick={handleReset} > Cancle</button>

              </div>

        </section>





      </form>
    </>
  )
}

export default Form
