const path = require("path");
const fs = require("fs");
require("dotenv").config();

class LocalizationUtils {
    static requiredParams = [
        "LOCALIZATION_API",
        "USERS_API",
        "LOGIN",
        "PASSWORD",
        "APP_LOCALIZATION_ID",
        "SUPPORTED_LOCALES",
        "LOCALIZATION_FOLDER"
    ]
    static supportedLocales = String(process.env.SUPPORTED_LOCALES).split(", ")
    static projectPath = path.normalize(__dirname + "/../..")
    static localizationFolderName = process.env.LOCALIZATION_FOLDER
    static localizationFolder = path.resolve(LocalizationUtils.projectPath, LocalizationUtils.localizationFolderName)
    static localizationId = process.env.APP_LOCALIZATION_ID
    static defaultLocale = process.env.DEFAULT_LOCALE
    static usersApi = process.env.USERS_API
    static localizationApi = process.env.LOCALIZATION_API
    static spaceSize = 2

    static mergeDeep(target, ...sources) {
        if (!sources.length) return target;
        const source = sources.shift();

        if (LocalizationUtils.isObject(target) && LocalizationUtils.isObject(source)) {
            for (const key in source) {
                if (LocalizationUtils.isObject(source[key])) {
                    if (!target[key]) Object.assign(target, { [key]: {} });
                    LocalizationUtils.mergeDeep(target[key], source[key]);
                } else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }

        return LocalizationUtils.mergeDeep(target, ...sources);
    }
    static isObject(item) {
        return (item && typeof item === "object" && !Array.isArray(item));
    }
    static clear() {
        const snapshotFolder = path.resolve(this.localizationFolder, "_snapshot")

        if(fs.existsSync(snapshotFolder)) {
            fs.rmdirSync(snapshotFolder, {recursive: true})

            console.log("\"_snapshot\" folder removed.")
        }
    }
    static toBase64(string) {
        const buffer = new Buffer(string)
        return buffer.toString("base64")
    }
}

module.exports = LocalizationUtils