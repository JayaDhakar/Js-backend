import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  // Upload an image
  try {
    if (!localFilePath) return null;

    // Upload file on cloudinry
    const response = await cloudinary.uploader.upload(
      //   "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
      localFilePath,
      {
        // public_id: "shoes",
        resource_type: "auto",
      }
    );

    console.log("file uploaded on cloudinary ", response.url);
    console.log(response);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.log(error);
    return null;
  }
};
// Optimize delivery by resizing and applying auto-format and auto-quality
// const optimizeUrl = cloudinary.url("shoes", {
//   fetch_format: "auto",
//   quality: "auto",
// });

// console.log(optimizeUrl);

// // Transform the image: auto-crop to square aspect_ratio
// const autoCropUrl = cloudinary.url("shoes", {
//   crop: "auto",
//   gravity: "auto",
//   width: 500,
//   height: 500,
// });

// console.log(autoCropUrl);
// return uploadResult;

export { uploadOnCloudinary };
