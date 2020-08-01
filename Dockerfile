FROM node:12-alpine

ENV NODE_ENV=production
RUN yarn global add webserver; mkdir /build; mkdir /app

COPY . /build
WORKDIR /build
RUN NODE_ENV=development yarn install --production=false \
  && yarn run build-storybook -o /app --quiet \
  && rm -rf /build

WORKDIR /app
CMD npx webserver 80
