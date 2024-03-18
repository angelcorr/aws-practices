import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const addFileToBucket = async (fileName: string, data: string) => {
  const s3Client = new S3Client();

  const response = await s3Client.send(
    new PutObjectCommand({
      Bucket: `${process.env.S3_BUCKET_NAME}`,
      Key: `${process.env.BUCKET_PATH}/${fileName}.txt`,
      Body: data,
    }),
  );
};
