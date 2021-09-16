const mongoose = require('mongoose');
const jwt= require("jsonwebtoken")
const DataModel = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
});

const DataSample =mongoose.model('Model', DataModel);
module.exports =DataSample;












//Token Generate Code

                    // DataModel.methods.generateToken= async function (){
                    //     console.log(this._id);
                    //         try{
                    //             const token = jwt.sign({_id: this._id},"secretkey");
                    //             this.tokens= this.tokens.concat({token});
                    //             await this.save();
                                
                    //             return token;
                    //         }
                    //         catch(error){
                    //             res.send("Error past"+ error);
                    //             console.log("Error past"+ error);
                    //         }
                    // }