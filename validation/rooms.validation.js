const isEmpty =require('./isEmpty');
const validator =require('validator')


module.exports=function validaterooms(data){
    let errors ={};
    data.fullname = !isEmpty(data.fullname) ? data.fullname : "";
    data.nic = !isEmpty(data.nic) ? data.nic : "";
    data.phone = !isEmpty(data.phone) ? data.phone : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.check_in = !isEmpty(data.check_in) ? data.check_in : "";
    data.check_out = !isEmpty(data.check_out) ? data.check_out : "";
    data.no_of_rooms = !isEmpty(data.no_of_rooms) ? data.no_of_rooms : "";
    data.totalmember = !isEmpty(data.totalmember) ? data.totalmember : "";
    data.payment = !isEmpty(data.payment) ? data.payment : "";
    
   
   
    if (validator.isEmpty(data.fullname)) {
      errors.fullname = "Required fullname";
    }
      
   
    if (validator.isEmpty(data.nic)) {
      errors.nic = "Required nic";
      
    }
    if (validator.isEmpty(data.phone,data.pattern)) {
      errors.phone = "Required phone";
      errors.pattern="[0-9]{5}[-][0-9]{7}[-][0-9]{1}"
     
    
    }
      
    if (!validator.isEmail(data.email)) {
      errors.email = "Format email required";
      
    }
      if (validator.isEmpty(data.email)) {
        errors.email = "Required email";
      }

    if (validator.isEmpty(data.check_in)) {
        errors.check_in = "Required check_in";
      }
      if (validator.isEmpty(data.check_out)) {
        errors.check_out = "Required check_out";
      }
      if (validator.isEmpty(data.no_of_rooms)) {
        errors.no_of_rooms = "Required no_of_rooms";
      }
      if (validator.isEmpty(data.totalmember)) {
        errors.totalmember = "Required totalmember";
      }
      if (validator.isEmpty(data.payment)) {
        errors.payment = "Required payment";
      }

  
    return {
        errors,
        isValid: isEmpty(errors)
    }
  };
  



