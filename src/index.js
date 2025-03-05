import FileHandler from "./fileHandler.js";

const files = [
  "document.txt",
  "image.jpg",
  "data.json",
  "report.png",
  "report1.pdf",
  "table.csv",
  "unknown.xyz",
  null,
  123,
  "fileWithoutExtension",
];

const fileHandler = new FileHandler(files);
fileHandler.checkFileExtensions();
