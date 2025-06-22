import nextConnect from "next-connect";
import multer from "multer";
import cloudinary from "../../lib/cloudinary";
const upload = multer();
const handler = nextConnect();
handler.use(upload.single("file"));
handler.post((req, res) => {
  const stream = cloudinary.uploader.upload_stream({ resource_type: "auto" }, (error, result) => {
    if (error) return res.status(500).send(error);
    res.status(200).json({ url: result.secure_url });
  });
  stream.end(req.file.buffer);
});
export const config = { api: { bodyParser: false } };
export default handler;