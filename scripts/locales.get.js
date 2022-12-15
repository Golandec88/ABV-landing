(async function () {
    const LocalesGetter = new (require("./classes/locales/getter"))()

    await LocalesGetter.init()
})()