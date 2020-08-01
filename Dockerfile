FROM node:14-alpine

ENV NODE_ENV=production
RUN yarn global add webserver; mkdir /build; mkdir /app

COPY package.json /build
WORKDIR /build
RUN NODE_ENV=development yarn install --production=false

COPY * /build
RUN yarn run build-storybook -o /app --quiet && rm -rf /build

WORKDIR /app
CMD npx webserver 80
