import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://user:password1234@cluster0.9yocq.mongodb.net/CICD?retryWrites=true&w=majority&appName=Cluster0');

export default mongoose.connection;
