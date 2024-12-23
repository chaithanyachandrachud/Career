const mongoose = require('mongoose');
require('dotenv').config()


const startDatabase = async () => {
  try {
    console.log(process.env.DATABASE_URI)
    await mongoose.connect("mongodb+srv://chaithanyachud:career@cluster0.p9ptv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log('📦 connected to MongoDB');
  } catch (err) {
    console.error('❌ error connecting to MongoDB:', err.message);
  }
};

const stopDatabase = async () => {
  try {
    await mongoose.disconnect();
    console.log('📦 disconnected from MongoDB');
  } catch (err) {
    console.error('❌ error disconnecting from MongoDB:', err.message);
  }
};

const isConnected = () => {
  return mongoose.connection.readyState === 1;
}

module.exports = { startDatabase, stopDatabase, isConnected };