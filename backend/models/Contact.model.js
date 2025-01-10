import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    message: String,
    date: { type: Date, default: Date.now },
  });
 
export default mongoose.model('Contact', contactSchema);