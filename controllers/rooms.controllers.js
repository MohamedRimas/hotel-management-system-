const rooms =require('../models/rooms.models');
 const validaterooms =require('../validation/rooms.validation')

const Addrooms =async(req,res)=>{
    const { errors, isValid } = validaterooms(req.body);
    try {
      if (!isValid) { 
        res.status(404).json(errors);
      }
     

      
      else {
        await rooms.findOne({ email: req.body.email }).then(async (exist) => {
          if (exist) {
            errors.email = "rooms Exist";
            
            res.status(404).json(errors);
          } else {
            await rooms.create(req.body);
            res.status(201).json({ message: "User added with success" });
          }
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  

const FindAllrooms =async(req, res)=>{
try {
    const data =await rooms.find()
        res.status(201).json(data)
    
} catch (error) {
    console.log(error.message)
    
}
}

const FindSingrooms =async(req, res)=>{
   try {
    const data =await rooms.findOne({_id: req.params.id})
    res.status(201).json(data)  
    
   } catch (error) {
    console.log(error.message)
    
   }
}

const Updaterooms =async(req, res)=>{
    const { errors, isValid } = validaterooms(req.body);
    try {
      if (!isValid) {
        res.status(404).json(errors);
      } else {
        const data = await rooms.findOneAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true }
        );
        res.status(201).json(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  


const Deleterooms =async(req, res)=>{
    try {
        await rooms.deleteOne({_id: req.params.id})
        res.status(201).json({message:"rooms deleted with succes"})  
        
    } catch (error) {
        console.log(error.message)
        
    }
}

module.exports={
    Addrooms,
    FindAllrooms,
    FindSingrooms,
    Updaterooms,
    Deleterooms


}