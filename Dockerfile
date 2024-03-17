FROM node:16.20.1-alpine3.18 AS base
RUN --mount=type=cache,target=/tmp/cache \
    npm config set cache /tmp/cache --global
WORKDIR /app


FROM base AS deps
COPY package-lock.json package.json ./
RUN npm ci


FROM deps AS build
COPY . .
RUN npm run build

FROM nginx:latest AS release
COPY --from=build /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
