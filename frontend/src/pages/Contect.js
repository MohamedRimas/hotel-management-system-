import React from 'react'
import './Deshbord.css'

function Contect() {
  return (
    <div class="container">
  <div>
    <h2>Contact Us</h2>
  
  </div>
  <div class="row">
    <div class="column">
    <br></br>
      <img src="images/hotel.jpg" width={600} height={400}/>
    </div>
    <div class="column">
      <form action="#">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="country">place</label>
        <select id="country" name="country">
          <option value="australia">colombo</option>
          <option value="canada">kandy</option>
          <option value="usa">ampara</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div>



  )
}

export default Contect
