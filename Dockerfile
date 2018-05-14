FROM node:8.11-alpine

RUN apk update

ENV NODE_ENV production
ENV PORT 4000

EXPOSE 4000

# set working directory
WORKDIR /usr/src/node-app

# copy pkg configs and caches
COPY package.json package.json

# install prisma globally
RUN npm i -g prisma
RUN npm i -g graphql-cli

# install packages
RUN npm install

COPY . .

RUN graphql get-schema --project database
RUN graphql prepare

CMD ["node", "src/index.js"]