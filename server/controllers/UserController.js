const User = require('../models/user.model');
const createJWT = require('../helper/makeToken');

const createUser = async (req, res) => {
  console.log(req.body,'req.body');
  
  try {
    const { username, email, password } = req.body;
    // Check to see if all credentials are present
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        error: 'You must provide a user credentials',
      })
    }
    // Check and see if user already exists 
    const user = await User.findOne({ email: email })
    if (user) {
      return res.status(400).json({
        success: false,
        message: 'User already registered.',
      })
    }
    // Create a new user if new user
    const createdUser = await User.create(req.body)
    // Generate token
    const token = await createJWT(createdUser);
    // Return token to Frontend
    return res.status(200).json({
      success: true,
      token: token,
      message: 'Created user successfully.',
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Failed creating user, something went wrong.',
    })
  }
}

const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        // Make sure the email and password are present for login
        if(!email || !password) {
            return res.status(400).json({ success:false, error:"Invalid credentials."});
        } 
        const user = await User.findOne({email:email});
        // Check to see if user exists
        if(!user) {
            return res.status(404).json({success:false, error:"User does not exist."});
        }
        // Proceed with the login
        user.comparePassword(password, async (err, isMatch) => {
            // Check to see if any errors are present
            if(err) { 
                return res.status(400).json({success:false, error:"Something went wrong during login."});
            }
            // Check to see if the password was a match
            if(!isMatch) {
                return res.status(400).json({success:false, error:"Invalid credentials"})
            }
            // Else, generate a new JWT token
            const token = await createJWT(user);
            return res.status(200).json({success:true, token:token, message:"Successful login."});
        })
    } catch(err) {
        console.log(err);
        res.status(500).json({success:false, message:"Failed logging in user, something went wrong."})
    }
}

const getUser = async (req, res) => {
    try{
        // Check to see if user exists
        const user = await User.findOne({_id: req.user}).select('username email');
        // Check to see if user exists or err
        if(!user) {
            return res.status(500).json({success: false, message:"Something went wrong."});
        }
        // Return user to FE
        res.status(200).json({success:true, user:user});
    } catch(err) { 
        console.log(err);
        res.status(500).json({success: false, message:"Something went wrong."})
    }
}

module.exports = {
    createUser,
    loginUser,
    getUser
}