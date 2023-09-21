
import multer from 'multer';
import { ulid } from 'ulid'

const storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
        cb(null, "public/uploads");
    },
    filename: function (req: any, file: any, cb: any) {
        cb(null, ulid() + "-" + file.originalname);
    },
});

const fileFilter = (req: any, file: any, cb: any) => {
    if (
        file.mimetype === "image/jpeg"
        || file.mimetype === "image/png"
        || file.mimetype === "image/jpg"
    ) {
        cb(null, true);
    } else cb(null, false);
};

export const multerUpload = multer({
    storage,
    limits: { fieldSize: 1024 * 1024 },
    fileFilter,
});
