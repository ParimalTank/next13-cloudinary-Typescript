
import { ulid } from 'ulid'
import { NextResponse, NextRequest } from "next/server";
import multer from 'multer';

const upload = multer({ dest: "uploads/" });

export const config = {
    api: {
        bodyParser: false,
    }
}

export async function POST(request: Request) {

    const storage = multer.diskStorage({
        destination: function (req: any, file: any, cb: any) {
            cb(null, "uploads");
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

    const multerUpload = multer({
        storage,
        limits: { fieldSize: 1024 * 1024 },
        fileFilter,
    });

    upload.single('file');

    console.log(request.body);
    return NextResponse.json({ message: "Success" }, { status: 200 })
}