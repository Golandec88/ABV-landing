const fs = require("fs");
const LocalesFiller = require("./filler");
const LocalesChecker = require("./checker");
const connect = require("../../utils/connect");
const utils = require("../../utils/localization");
require("dotenv").config();

class LocalesGetter {
    folderIsEmpty = ""

    async init() {
        new LocalesChecker(!this.folderIsEmpty).checkFolder()
        this.folderIsEmpty = !(fs.readdirSync(utils.localizationFolder).length > 0)
        const filler = new LocalesFiller(true)

        await connect.authorization()
        await connect.getLocales(!this.folderIsEmpty)

        if(!this.folderIsEmpty) filler.init()

        utils.clear()
    }
}

module.exports = LocalesGetter