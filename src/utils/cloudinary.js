import { v2 as cloudinary } from "cloudinary";
//fs is file system no need to import
//by default present in nodejs
//read write remove (for file system)
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadonCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file has been uploaded sucessfully
    console.log("File uploaded on cloudinary", response.url);
    return response;
  } catch (error) {
    //remove the locally saved temp  file since the upload operation failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};
export { uploadonCloudinary };
