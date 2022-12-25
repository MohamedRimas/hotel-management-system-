

import React, { useEffect, useState } from 'react';



import RowDetails from '../components/RowDetails';
import axios from 'axios';
import Alert from '../components/Alert';

import './pay.css'
function RoomsCrud() {

 
    const[rooms,setrooms] =useState([]);

  const fullname=(props)=>{
    console.log(props)
  }
  const [message, setMessage]= useState("");
  const [show , setShow] = useState(false);

 

 const OnDelete = (id__)=>{
  if(window.confirm("are you sure to delete this rooms")){

    axios.delete(`/api/rooms/${id__}`)
   .then(res=>{
    setMessage(res.data.message)
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 4000);
     
   })
  }
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
    
  <u> <center><h1>Rooms Bookings Detials</h1></center></u>
  <div class="container">
	<div class="row">
    <a href='pdf'><div style={{textAlign:'right'}}><button class="btn-hover color-9" > download Report </button></div>
 </a>
    
        
	</div>
</div>

   <br></br>  <br></br>  <br></br>  <br></br>
   
     <div className="col-12 col-lg-7">
        <table className="table">
            <thead>
              <tr>
                <th scope='col'>fullname</th>
                <th scope='col'>nic</th>
                <th scope='col'>phone</th>
                <th scope='col'>email</th>
                <th scope='col'>check_in</th>
                <th scope='col'>check_out</th>
                <th scope='col'>no_of_rooms</th>
                <th scope='col'>totalmember</th>
                <th scope='col'>payment</th>
                <th scope='col'>Actions</th>
                
              </tr>
            </thead>
            <tbody>
  
              {rooms.map(({fullname,nic,phone,email,check_in,check_out,no_of_rooms,totalmember,payment, _id})=>(
                <RowDetails 
                 fullname={fullname} 
                  nic={nic}  
                  phone={phone} 
                  email={email} 
                  check_in={check_in}
                   check_out={check_out} 
                   no_of_rooms={no_of_rooms} 
                   totalmember={totalmember} 
                   payment={payment} 
                   Id={_id} 
                      OnDelete={OnDelete}

                    />
              ))}
        
                
                
            </tbody>
        </table>    
     </div>
    
    </div>
   
     </div>
    
  );
}


export default RoomsCrud
