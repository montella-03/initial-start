
import { Schema,model,models } from "mongoose";
const UserSchema = new Schema({
    firstname:{
        type: String,
        required: [true,'name is required'],
    },
    lastname:{
        type: String,
        required: [true,'name is required'],
    },
    email:{
    type: String,
    unique: [true,'Email already exists!'],
    required: [true,'Email is required']
},
phone:{
    type: String,
    required: [true,'phoneNumber is required'],
    length:[10],
},
password:{
    type: String,
    unique:true,
    required: [true,'Password is required'],
},
})
const User = models.User || model("User",UserSchema)

export default User;