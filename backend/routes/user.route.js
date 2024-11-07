import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

const router = express.Router();

// Get 
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.error("Error fetching users:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

//post login
// Login route handler (in your route file, e.g., user.route.js)
// In your backend routes file (e.g., user.route.js)


router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Please provide all fields" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid email' });
    }

    // const isMatch = await bcrypt.compare(password, User.password);
    if (password===user.password) {
      return res.status(200).json({ success: true, message: 'Login successful' });
      
    }

    res.status(400).json({ success: false, message: 'Invalid email or password' });
  } catch (error) {
    console.error('Error in login:', error.message);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});


//post register
router.post('/register', async (req, res) => {
    const { name, email, password, Gender, phone_number, role } = req.body;

    
    if (!name || !email || !password || !Gender || !phone_number) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already taken' });
        }
        
        const newUser = new User({ name, email, password, Gender, phone_number, role });
        await newUser.save();
        res.status(201).json({ success: true, username: newUser.username });
    } catch (error) {
        console.error("Error creating user:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

// Update by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, password, Gender, phone_number, role } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "User not found" });
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, email, password, Gender, phone_number, role },
            { new: true }
        );
        res.status(200).json({ success: true, message: "Rregistered successfully", data: updatedUser });
    } catch (error) {
        console.error("Error updating user:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

// Delete by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error.message);
    }
});

 export default router;
