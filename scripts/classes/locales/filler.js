const fs = require("fs");
const LocalesChecker = require("./checker")
const utils = require("../../utils/localization");
const path = require("path");
require("dotenv").config();

class LocalesFiller {
    #localizationFiles = {};
    #snapshotFiles = {};
    #isSnapshot = false;

    constructor(isSnapshot = false) {
        this.#isSnapshot = isSnapshot
    }

    init() {
        const {checkFiles} = new LocalesChecker(this.#isSnapshot)
        this.#localizationFiles = checkFiles()

        if(this.#isSnapshot) {
            this.#snapshotFiles = checkFiles(true)
            this.fillFromSnapshots()
        } else {
            this.fillFromDefaultLocale()
        }

        console.log("Localization files filled!")
    }

    fillFromDefaultLocale() {
        this.fill(lang => {
            if(lang === utils.defaultLocale) return;

            return utils.mergeDeep(this.#localizationFiles[utils.defaultLocale], this.#localizationFiles[lang])
        })
    }
    fillFromSnapshots() {
        this.fill(lang => {
            return utils.mergeDeep(this.#localizationFiles[lang], this.#snapshotFiles[lang])
        })
    }
    fill(filter) {
        for (const lang of Object.keys(this.#localizationFiles)) {
            const obj = filter(lang)
            if(!obj) continue;

            const result = JSON.stringify(obj, null, utils.spaceSize)

            fs.writeFileSync(path.resolve(utils.localizationFolder, lang + ".json"), result)
        }
    }
}

module.exports = LocalesFiller