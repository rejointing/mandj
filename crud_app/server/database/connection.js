const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      const uri = 'mongodb+srv://brecab120:juZvFFaZZZsuoWrs@cluster0.uwkkigq.mongodb.net/?retryWrites=true&w=majority';
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useFindAndModify: false,
        //useCreateIndex: true,
      });
      console.log('MongoDB Connected!');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1);
    }
  };

module.exports = connectDB;
  