(async function() {
  const LocalesFiller = new (require("./classes/locales/filler"))(false);
  const LocalesGetter = new (require("./classes/locales/getter"))(true);
  const LocalesUploader = new (require("./classes/locales/uploader"))();

  await LocalesFiller.init();
  await LocalesGetter.init();
  await LocalesUploader.init();
})()
