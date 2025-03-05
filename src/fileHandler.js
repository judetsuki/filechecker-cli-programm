export default class FileHandler {
  constructor(files) {
    this.files = files;
  }

  checkFileExtensions() {
    this.files.forEach((file) => {
      if (typeof file === "string") {
        const extension = file.split(".").pop();
        if (extension) {
          console.log(`${file} has the extension: ${extension}`);
          if (this.WatermarkAble(file)) {
            console.log(`${file} IS watermarkable`);
          } else {
            console.log(`${file} is NOT watermarkable`);
          }
          console.log("------------------");
        } else {
          console.log(`${file} does not have an extension.`);
        }
      } else if (file === null) {
        console.log("Null value found in the array.");
      } else if (typeof file === "number") {
        console.log(`${file} is a number, not a file.`);
      } else {
        console.log(`Unknown type found: ${typeof file}`);
      }
    });
  }

  WatermarkAble(file) {
    return file.includes("jpg") || file.includes("png");
  }
}
