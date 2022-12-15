(async function () {
    const LocalesUploader = new (require("./classes/locales/uploader"))();

    await LocalesUploader.init();
})()