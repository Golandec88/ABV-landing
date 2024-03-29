FROM node:16.17.1-alpine as build-stage

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app
RUN yarn install --silent

RUN ["chmod", "+x", "env.sh"]
RUN --mount=type=secret,id=LOCALIZATION_API \
    --mount=type=secret,id=USERS_API \
    --mount=type=secret,id=LOCALIZATION_FOLDER \
    --mount=type=secret,id=SUPPORTED_LOCALES \
    --mount=type=secret,id=DEFAULT_LOCALE \
    --mount=type=secret,id=APP_LOCALIZATION_ID \
    --mount=type=secret,id=LOGIN \
    --mount=type=secret,id=PASSWORD \
    ./env.sh \
    LOCALIZATION_API=$(cat /run/secrets/LOCALIZATION_API) \
    USERS_API=$(cat /run/secrets/USERS_API) \
    LOCALIZATION_FOLDER=$(cat /run/secrets/LOCALIZATION_FOLDER) \
    SUPPORTED_LOCALES=$(cat /run/secrets/SUPPORTED_LOCALES) \
    DEFAULT_LOCALE=$(cat /run/secrets/DEFAULT_LOCALE) \
    APP_LOCALIZATION_ID=$(cat /run/secrets/APP_LOCALIZATION_ID) \
    YANDEX_ID=$(cat /run/secrets/YANDEX_ID) \
    LOGIN=$(cat /run/secrets/LOGIN) \
    PASSWORD=$(cat /run/secrets/PASSWORD)

RUN ["node", "./scripts/locales.get.js"]
RUN yarn build:prod

FROM nginx:stable-alpine as run-stage
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]