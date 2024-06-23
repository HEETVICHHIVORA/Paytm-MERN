require ("dotenv").config();
const mongoose = require('mongoose')
mongoose.connect(process.env.URL);

const Schema = mongoose.Schema;

// simpler schema ---->
// const UserSchema = new Schema({
//     username : String ,
//     firstname : String,
//     lastname : String,
//     password : String 
// });

//More elegant schema ---->
const UserSchema = new Schema({
        username : {
            type : String ,
            required : true , 
            unique : true ,
            minLength : 3 ,
            maxLength : 30 ,
            lowercase : true 
        } ,
        firstname : {
            type : String ,
            required : true , 
            trim : true ,
            maxLength :30 
        },
        lastname : {
            type : String ,
            required : true , 
            trim : true ,
            maxLength :30 
        },
        password : {
            type : String,
            required : true,
            maxLength :30 
        } 
    });
    const accountschema = new Schema({
        userId: {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
            required:true 
        },
        balance:{
            type : Number ,
            required : true 
        }
    });
const Account = mongoose.model('Account',accountschema);
const User = mongoose.model('User', UserSchema);
module.exports= {
    User,
    Account
}