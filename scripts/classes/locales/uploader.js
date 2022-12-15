const connect = require("../../utils/connect")
const LocalesChecker = require("./checker");

class LocalesUploader {
    async init() {
        new LocalesChecker()

        await connect.authorization()
        await connect.uploadLocales()
    }
}

module.exports = LocalesUploader