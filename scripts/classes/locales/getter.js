const fs = require("fs");
const LocalesFiller = require("./filler");
const LocalesChecker = require("./checker");
const connect = require("../../utils/connect");
const utils = require("../../utils/localization");
require("dotenv").config();

class LocalesGetter {
  folderIsEmpty = ""
  folderExist = false
  #isSnapshot = false

  constructor(isSnapshot = false) {
    this.#isSnapshot = isSnapshot
  }

  async init() {
    this.folderExist = fs.existsSync(utils.localizationFolder)
    this.folderIsEmpty = this.folderExist && !(fs.readdirSync(utils.localizationFolder).length > 0)

    new LocalesChecker(!this.folderIsEmpty).checkFolder()
    const filler = new LocalesFiller(this.folderExist)

    await connect.authorization()
    await connect.getLocales(this.#isSnapshot)

    if (!this.folderIsEmpty) filler.init()

    utils.clear()
  }
}

module.exports = LocalesGetter
