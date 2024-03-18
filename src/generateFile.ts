import * as fs from "node:fs";

export const generateFile = (fileName: string, content: string) => {
  fs.writeFile(
    `${process.env.CURRENT_DIRECTORY_PATH}/files/${fileName}.txt`,
    content,
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("successfully added");
      }
    },
  );
};
