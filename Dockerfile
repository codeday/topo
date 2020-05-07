FROM node:13-alpine

ENV NODE_ENV=development
RUN yarn global add webserver

RUN mkdir /build
COPY package.json /build
COPY yarn.lock /build

WORKDIR /build
RUN yarn install --production=false && mkdir /app
COPY . /build

RUN yarn run build-storybook -o /app --quiet && rm -rf /build

WORKDIR /app
CMD npx webserver 80
