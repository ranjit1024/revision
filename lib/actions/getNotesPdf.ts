"use server"
import {S3Client, ListObjectsV2Command} from "@aws-sdk/client-s3"
const s3 = new S3Client({
  region: String(process.env.AWS_REGION),
  credentials: {
    accessKeyId: String(process.env.AWS_ACCESS_KEY_ID),
    secretAccessKey: String(process.env.AWS_SECRET_ACCESS_KEY),
  },
  maxAttempts:5,
  retryMode:'adaptive'

})

export async function getNotes({ folderKey}:{
    folderKey:string
}) {
    try{
            const command = new ListObjectsV2Command({
            Bucket: process.env.S3_BUCKET,
            Prefix: folderKey,
            Delimiter: '/', // This prevents listing subfolder contents
            MaxKeys: 1000
        });
        const response  = await s3.send(command);
        return response.Contents;
    }
    catch(err){
        console.log(err)
    }
}