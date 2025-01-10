import express from 'express';
import Contact from '../models/Contact.model.js';
//import Welcome from '../../frontend/src/components/welcome.jsx';

const router = express.Router();


router.post("/Contact",async (req, res)=>{
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    if (!firstName || !email|| !phoneNumber){
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    try {
      const newMessage = new Contact({firstName, lastName, email, phoneNumber, message});
      await newMessage.save();
      res.status(200).json({ message: "Message saved successfully" });
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to save message" });
    }
  });

  router.get("/messages", async (req, res) => {
    try {
      const messages = await Contact.find();
      res.json(messages);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to retrieve messages" });
    }
  });

 export default router;
