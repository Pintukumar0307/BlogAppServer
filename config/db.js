const mongoose = require("mongoose");
const colors = require("colors");

// mongodb+srv://pintublog:pintublog@cluster0.wgq2krq.mongodb.net/?retryWrites=true
// mongodb+srv://<pintublog>:<pintublog>@cluster0.wgq2krq.mongodb.net/?retryWrites=true
// mongodb://127.0.0.1:27017/blog



const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL,
      {
        dbName: "blog",
      }
      );
    console.log(
      `Connected to Mongodb Database: ${mongoose.connection.host} `.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MONGO Connect Error: ${error}`.bgRed.white);
  }
};

module.exports = connectDB;

