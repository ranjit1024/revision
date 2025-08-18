"use server"
import AWS from "aws-sdk";
import { AwardIcon } from "lucide-react";

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    endpoint: process.env.AWS_ENDPOINT
});

const listUserPDFs = async (userId: string) => {
    try {
        const params = {
            Bucket: String(process.env.BUCKET_NAME),
            Prefix: `users/${userId}/pdfs/`,
            MaxKeys: 1000
        };

        const result = await s3.listObjectsV2(params).promise();

        let pdfs = result.Contents?.map(item => ({

            filename: item.Key?.split('/').pop(),
            fullPath: item.Key,
            size: item.Size,
            lastModified: item.LastModified
        }))
        return pdfs;

    } catch (error) {
        console.error('Error listing user PDFs:', error);
        throw error;
    }
};

// Usage
const userPDFs = await listUserPDFs('user123');
console.log(userPDFs);
