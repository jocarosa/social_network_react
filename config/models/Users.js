const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema();

UserSchema = ({
    username:{
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    avatar:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }   

});

module.exports = User = mongoose.model('user',UserSchema);