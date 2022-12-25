import React, { useEffect, useState } from 'react';
import InputGroup from '../components/InputGroup';

import axios from 'axios';
import Alert from '../components/Alert';
import { useForm } from 'rc-field-form';




function Rooms() {
  
  const[setrooms] =useState([]);
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
  axios.post('api/rooms', form)
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
     axios.get('api/rooms')
    .then(res=>{
      setrooms(res.data)
  });
  },[]) 
  return (

    <div>
       <div className="row p-4">
 <Alert message={message} show={show} />
     <div className="mt-4">
        <h2>ROOMS BOOKING</h2>
     </div>
     <div className="col-12 col-lg-4">
         <form onSubmit={onSbmitHandler}>

         <InputGroup
            label="fullname"
            
            type="text"
            name="fullname"
            onChangeHandler={onChangeHandler}
            errors={errors.fullname}
           
          
          />
          <InputGroup
            label="nic"
            type="number"
            name="nic"
            onChangeHandler={onChangeHandler}
            errors={errors.nic}
          />
          <InputGroup
            label="phone"
            type="number"
            name="phone"
            placeholder="+94-1234567891"
            pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
            onChangeHandler={onChangeHandler}
            errors={errors.phone}
          
          />
          <InputGroup
            label="email"
            type="text"
            name="email"
            placeholder="example@gmail.com"
            onChangeHandler={onChangeHandler}
            errors={errors.email}
          />
          <InputGroup
            label="check_in"
            type="date"
            name="check_in"
            onChangeHandler={onChangeHandler}
            errors={errors.check_in}
          />

           <InputGroup
            label="check_out"
            type="date"
            name="check_out"
            onChangeHandler={onChangeHandler}
            errors={errors.check_out}
          />
          <InputGroup
            label="no_of_rooms"
            type="number"
            name="no_of_rooms"
            id="quantity" 
            min="1"
            max="5"
            onChangeHandler={onChangeHandler}
            errors={errors.no_of_rooms}
          />
          <InputGroup
            label="totalmember"
            type="number"
            name="totalmember"
            id="quantity" 
            min="1"
            max="5"
            onChangeHandler={onChangeHandler}
            errors={errors.totalmember}
          />
          <InputGroup
            label="payment"
            type="number"
            name="payment"
            onChangeHandler={onChangeHandler}
            errors={errors.payment}
      
          
          />
            
          


            < button className="btn btn-primary"  type="submit"><a href='Payment'>Paynow</a></button>
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

export default Rooms;

  