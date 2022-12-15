FROM node:16.13.0-alpine as build-stage

WORKDIR /app
COPY package*.json ./
RUN yarn
CMD ["yarn", "locales:get"]

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
    LOGIN=$(cat /run/secrets/LOGIN) \
    PASSWORD=$(cat /run/secrets/PASSWORD)

CMD ["yarn", "build:prod"]
COPY . .

FROM nginx:stable-alpine as run-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]