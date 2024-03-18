import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { isPrime } from "./src/isPrime";
import { addFileToBucket } from "./src/addFileToBucket";

export const main = async (inputArguments: string[]) => {
  if (inputArguments.length < 2 || inputArguments.length < 3) {
    console.log(
      `You must provide four arguments, the first must be the bucket
      name and the second must be the file path inside that bucket`,
    );
    process.exit(1);
  }

  if (inputArguments[3].indexOf("/") === -1) {
    console.log(
      `Error: The second argument must have a path to the folder inside the bucket.
      Please try again.`,
    );
    console.log(inputArguments[4]);
    process.exit(1);
  }

  const s3Client = new S3Client();

  const { Body } = await s3Client.send(
    new GetObjectCommand({
      Bucket: inputArguments[2],
      Key: inputArguments[3],
    }),
  );

  const response = await Body.transformToString();
  const numbersList = response
    .split(" ")
    .map((value) => value.replace(/(\r\n|\n|\r)/gm, ", "))
    .join(" ")
    .split(", ")
    .filter((value) =>
      isPrime(Number(value)) && value,
    );

  for (let i = 0; i < numbersList.length; i++) {
    console.log(`This number is prime: ${numbersList[i]}`)
    addFileToBucket(numbersList[i], `This number is prime`)
  }
};

main(process.argv);
