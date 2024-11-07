import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone_number:{
        type: Number,
        required: true,
    },
    Gender:{
        type: String,
        enum: ['Male', 'Female'],
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    }
}, {  
    timestamps: true
});
 
export default mongoose.model('User', userSchema);