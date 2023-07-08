import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (User) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: User._id,
          name: User.name,
          email: User.email,
          isAdmin: User.isAdmin,
          token: generateToken(User),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  })
);

export default userRouter;
