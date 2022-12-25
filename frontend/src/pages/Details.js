import React from 'react'
import InputGroup from '../components/InputGroup'
import {  useEffect, useState } from 'react';
import axios from 'axios'
import {useNavigate,useParams } from 'react-router-dom';

function Details() {
    
    const [form ,setForm]=useState({});
    const[errors ,setErrors] =useState({});
    const {id} = useParams();
    const navigate = useNavigate()
    const onChangeHandler= (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
      
    };
   const onSbmitHandler= (e)=>{
    if(window.confirm("update ")){
    e.preventDefault();
    axios.put(`/api/rooms/${id}`, form)
    .then(res=>{
        navigate('/RoomsCrud')
      
    })
   
     .catch(err=>setErrors(err.response.data))
    

}   
   }
   useEffect(()=>{
    axios.get(`/api/rooms/${id}`)
   .then(res=>{
     setForm(res.data)
 });
 },[]) 
  return (
   
    <div className="container mt-4 col-12 col-lg-4">
         <form onSubmit={onSbmitHandler}>
         <u> <center><h1>Update Detials</h1></center></u>
         <br></br>
         <InputGroup
            label="fullname"
            type="text"
            name="fullname"
            onChangeHandler={onChangeHandler}
            errors={errors.fullname}
            value={form.fullname}
          
          />
          <InputGroup
            label="nic"
            type="number"
            name="nic"
            onChangeHandler={onChangeHandler}
            errors={errors.nic}
            value={form.nic}
          />
          <InputGroup
            label="phone"
            type="number"
            name="phone"
            onChangeHandler={onChangeHandler}
            errors={errors.phone}
            value={form.phone}
          />
          <InputGroup
            label="email"
            type="text"
            name="email"
            onChangeHandler={onChangeHandler}
            errors={errors.email}
            value={form.email}
          />
          <InputGroup
            label="check_in"
            type="text"
            name="check_in"
            onChangeHandler={onChangeHandler}
            errors={errors.check_in}
            value={form.check_in}
          />

           <InputGroup
            label="check_out"
            type="date"
            name="check_out"
            onChangeHandler={onChangeHandler}
            errors={errors.check_out}
            value={form.check_out}
          />
          <InputGroup
            label="no_of_rooms"
            type="number"
            name="no_of_rooms"
            onChangeHandler={onChangeHandler}
            errors={errors.no_of_rooms}
            value={form.no_of_rooms}
          />
          <InputGroup
            label="totalmember"
            type="number"
            name="totalmember"
            onChangeHandler={onChangeHandler}
            errors={errors.totalmember}
            value={form.totalmember}
          />
          <InputGroup
            label="payment"
            type="number"
            name="payment"
            onChangeHandler={onChangeHandler}
            errors={errors.payment}
            value={form.payment}
      
          
          />
            
          


        <center>    <button className="btn btn-primary" type="submit">Update</button></center>
         </form>
         <br></br>  <br></br>
     </div>
  )
}

export default Details
