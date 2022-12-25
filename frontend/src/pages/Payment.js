import React, { useEffect, useState } from 'react';
import InputGroup from '../components/InputGrouppay';

import axios from 'axios';
import Alert from '../components/Alert';
import { useForm } from 'rc-field-form';




function Payment() {
  
  const[setpayment] =useState([]);
  const [form ,setForm]=useState({});
  const[errors ,setErrors] =useState({});
  const [message, setMessage]= useState("");
  const [show , setShow] = useState(false);
  
  const onChangeHandler= (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };
  
 
 const onSbmitHandler= (e)=>{
  e.preventDefault();
  axios.post('api/payment', form)
  .then(res=>{
    setMessage(res.data.message)
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 4000);
  })
   .catch(err=>setErrors(err.response.data))
   
 }

  useEffect(()=>{
     axios.get('api/payment')
    .then(res=>{
      setpayment(res.data)
  });
  },[]) 
  return (

    <div>
       <div className="row p-4">
 <Alert message={message} show={show} />
     <div className="mt-4">
        <h2>Payment</h2>
     </div>
     <div className="col-12 col-lg-4">
         <form onSubmit={onSbmitHandler}>

         <InputGroup
            label=" cardnumber"
            
            type="number"
            name=" cardnumber"
            onChangeHandler={onChangeHandler}
            errors={errors. cardnumber}
           
          
          />
          <InputGroup
            label=" carddate"
            type="number"
            name=" carddate"
            onChangeHandler={onChangeHandler}
            errors={errors.nic}
          />
          <InputGroup
            label="cvv"
            type="number"
            name="cvv"
           
            onChangeHandler={onChangeHandler}
            errors={errors.carddate}
          
          />
          <InputGroup
            label="fullname"
            type="text"
            name="fullname"
            onChangeHandler={onChangeHandler}
            errors={errors.fullname}
          />
        

          
            
          


            < button className="btn btn-primary"  type="submit">Paynow</button>
         </form>
     </div>
     <div className="col-12 col-lg-7">
        <table className="table">
           
        </table>    
     </div>
    </div>
     </div>
  );
}

export default Payment;

