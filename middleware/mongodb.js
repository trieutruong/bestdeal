import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  // if (mongoose.connections[0].readyState) {
  //   // Use current db connection
  //   return handler(req, res);
  // }
  // Use new db connection
  try {
    console.log('123')
    await mongoose.connect("mongodb://127.0.0.1:27017/bestdeal", {
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
      useNewUrlParser: true,
    });
    console.log("Connect Success");
  } catch {
    console.log("Connect Error");
  }
  return handler(req, res);
};

export default connectDB;
