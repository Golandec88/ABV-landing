const axios = require("axios");
const utils = require("./localization");
const path = require("path");
const fs = require("fs");

class LocalesConnect {
    #token = ""

    async authorization() {
        console.log("Authorizing in localization API...")

        if(this.#token) {
            console.log("Token already exist, skipping authorization...")
            return;
        }

        const config = {headers: {
            timezoneTerm: "300"
        }}
        const data = {
            tin: process.env.LOGIN,
            password: process.env.PASSWORD
        }

        const {data: user} = await axios.post(utils.usersApi + "/User/authenticate", data, config)

        this.#token = user.CommonUserPart.Token
        console.log("Authorized!")
    }
    async getLocales(isSnapshot = false) {
        console.log("Downloading locales from API...")

        const config = {headers: {
            "Authorization": "Bearer " + this.#token
        }}
        const {data: languages} = await axios.get(utils.localizationApi + "/Language/All", config)

        for (const {name} of languages) {
            const lang = Array.from(languages).find(item => {
                console.log(item)
                return item.code === name
            }).id

            console.log("Downloading " + name + " locale...");

            const url = `${utils.localizationApi}/LocalizationJson/${utils.localizationId}/${lang}`;
            const {data: result} = await axios.get(url, config);

            const localesPath = path.join(utils.localizationFolder, isSnapshot ? '/_snapshot' : '', name + ".json");

            fs.writeFileSync(localesPath, result[0].json);

            console.log(name + " locale downloaded!");
        }

        console.log("All localization files downloaded from API.")
    }
    async uploadLocales() {
        console.log("Uploading locales to API...")

        const config = {headers: {
            "Authorization": "Bearer " + this.#token
        }}

        const {data: languages} = await axios.get(utils.localizationApi + "/Language/All", config)

        for (const langName of utils.supportedLocales) {
            const lang = Array.from(languages).find(item => item.code === langName).id
            const localesPath = path.join(utils.localizationFolder, langName + ".json");
            const json = utils.toBase64(fs.readFileSync(localesPath, 'utf8'))

            const data = {
                applicationId: utils.localizationId,
                languageId: lang,
                json
            }

            console.log("Uploading " + langName + " locale...");

            const infoUrl = utils.localizationApi + "/LocalizationJson/" + utils.localizationId + "/" + lang
            const {data: info} = await axios.get(infoUrl, config)

            const uploadUrl = utils.localizationApi + "/LocalizationJson/" + info[0].id;
            await axios.put(uploadUrl, data, config);

            console.log(langName + " locale uploaded!");
        }

        console.log("All locales uploaded!")
    }
}

module.exports = new LocalesConnect()