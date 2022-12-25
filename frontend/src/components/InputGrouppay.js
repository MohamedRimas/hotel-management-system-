import React from 'react'  
import classnames from 'classnames'  

function InputGrouppay({label, type,name ,onChangeHandler, errors, value }) {
  return (
  
    <div className="mb-3">
    <label htmlFor="cardnumber" className="form-label">
      {label}</label>
    <input type={type} value={value} className={(classnames("form-control", {"is-invalid": errors}))}name={name}  onChange={onChangeHandler}/>
    {
      errors && (<div class="invalid-feedback">
      {errors}
    </div>)
    }

    
</div>



  
            
  )
}

export default InputGrouppay
