import { generateFile } from "./src/generateFile";
import { generateContent } from "./src/generateContent";
import { addFileToBucket } from "./src/addFileToBucket";

export const main = (inputArguments: string[]) => {
  if (!process.argv[2]) {
    console.log(
      "You must provide an argument after the file name to add the new file a name",
    );
    process.exit(1);
  }

  const content = generateContent();
  generateFile(inputArguments[2], content);
};
