export default class FileHandler {
  constructor(files) {
    this.files = files;
  }

  checkFiles() {
    this.files.forEach((file) => {
      this.processFile(file);
    });
  }

  processFile(file) {
    if (typeof file === "string") {
      const extension = this.extractExtension(file);
      if (extension) {
        this.logExtension(file, extension);
        this.checkWatermark(file, extension);
      } else {
        this.logNoExtension(file);
      }
    } else if (file === null) {
      this.logNullValue();
    } else if (typeof file === "number") {
      this.logNumber(file);
    } else {
      this.logUnknownType(file);
    }
  }

  extractExtension(file) {
    return file.split(".").pop();
  }

  logExtension(file, extension) {
    console.log(`${file} расширение файла: ${extension}`);
  }

  checkWatermark(file, extension) {
    if (this.isWatermarkAble(extension)) {
      console.log(`${file} на этот файл МОЖНО установить вотермарк`);
    } else {
      console.log(`${file} на этот файл НЕЛЬЗЯ установить вотермарк`);
    }
    console.log("------------------");
  }

  logNoExtension(file) {
    console.log(`${file} у этого файла нет расширения`);
  }

  logNullValue(file) {
    console.log(`${file} - null значение`);
  }

  logNumber(number) {
    console.log(`${number} - число а не файл.`);
  }

  logUnknownType(type) {
    console.log(`неизвестный тип файла: ${typeof type}`);
  }

  isWatermarkAble(extension) {
    return extension.includes("jpg") || extension.includes("png");
  }
}
