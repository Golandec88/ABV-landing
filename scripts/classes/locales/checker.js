const utils = require("../../utils/localization")
const path = require("path");
const fs = require("fs");
require("dotenv").config();

class LocalesChecker {
    isSnapshot = false;

    constructor(needSnapshotFolder = false) {
        this.checkParams()
        this.checkFolder(needSnapshotFolder)
    }

    checkFolder(needSnapshotFolder) {
        const isExist = fs.existsSync(utils.localizationFolder);

        if(!isExist) {
            fs.mkdirSync(utils.localizationFolder);

            console.log("Folder not found. Created new folder " + utils.localizationFolderName)
        } else if(needSnapshotFolder) {
            this.isSnapshot = true
            fs.mkdirSync(path.join(utils.localizationFolder, "_snapshot"), {recursive: true})

            console.log("Created snapshot folder.")
        }
    }
    checkFiles(isSnapshot) {
        const folder = path.join(utils.localizationFolder, isSnapshot ? "_snapshot" : "");
        const files = fs.readdirSync(folder);
        const localizationFiles = {};

        for (const file of files) {
            if(file === "_snapshot") continue;

            const lang = file.split(".")[0];
            localizationFiles[lang] = require(path.resolve(folder, file));
        }

        return localizationFiles;
    }
    checkParams() {
        for(const param of utils.requiredParams) {
            if(!process.env[param]) {
                console.error(`There is no "${param}" in .env`)
                return
            }
        }
    }
}

module.exports = LocalesChecker