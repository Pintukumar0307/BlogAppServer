var cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

dotenv.config({
    path: "../config/config.js",
  });

const cloud_name = process.env.CLOUD_NAME;
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;




cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

const imageUpload = (image) => {
  //imgage = > base64
  return new Promise((resolve, reject) => {
    console.log("enter2")
    cloudinary.uploader.upload(image, opts, (error, result) => {
      if (result && result.secure_url) {
        
        console.log(result.secure_url);
        return resolve(result.secure_url);
      }
      console.log(error.message);
      return reject({ message: error.message });
    });
  });
};

module.exports = (image) => {
  //imgage = > base64
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(image, opts, (error, result) => {
      if (result && result.secure_url) {
        console.log("enter3")
        let url =result.secure_url;
        console.log(result.secure_url);
        return resolve(result.secure_url);
      }
      console.log(error.message);
      return reject({ message: error.message });
    });
  });
};





