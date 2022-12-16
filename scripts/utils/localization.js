const path = require("path");
const fs = require("fs");
require("dotenv").config();

class LocalizationUtils {
    requiredParams = [
        "LOCALIZATION_API",
        "USERS_API",
        "LOGIN",
        "PASSWORD",
        "APP_LOCALIZATION_ID",
        "SUPPORTED_LOCALES",
        "LOCALIZATION_FOLDER"
    ]
    supportedLocales = String(process.env.SUPPORTED_LOCALES).split(", ")
    projectPath = path.normalize(__dirname + "/../..")
    localizationFolderName = process.env.LOCALIZATION_FOLDER
    localizationFolder = path.resolve(this.projectPath, this.localizationFolderName)
    localizationId = process.env.APP_LOCALIZATION_ID
    defaultLocale = process.env.DEFAULT_LOCALE
    usersApi = process.env.USERS_API
    localizationApi = process.env.LOCALIZATION_API
    spaceSize = 2

    mergeDeep(target, ...sources) {
        if (!sources.length) return target;
        const source = sources.shift();

        if (this.isObject(target) && this.isObject(source)) {
            for (const key in source) {
                if (this.isObject(source[key])) {
                    if (!target[key]) Object.assign(target, { [key]: {} });
                    this.mergeDeep(target[key], source[key]);
                } else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }

        return this.mergeDeep(target, ...sources);
    }
    isObject(item) {
        return (item && typeof item === "object" && !Array.isArray(item));
    }
    clear() {
        const snapshotFolder = path.resolve(this.localizationFolder, "_snapshot")

        if(fs.existsSync(snapshotFolder)) {
            fs.rmdirSync(snapshotFolder, {recursive: true})

            console.log("\"_snapshot\" folder removed.")
        }
    }
    toBase64(string) {
        const buffer = new Buffer(string)
        return buffer.toString("base64")
    }
}

module.exports = new LocalizationUtils()