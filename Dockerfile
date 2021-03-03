FROM node:14.8
ENV NODE_ENV=development
WORKDIR /build

COPY package.json /build
RUN yarn install --production=false

COPY . /build
RUN yarn run build-storybook -o /app --quiet



FROM node:14.8
ENV NODE_ENV=production
WORKDIR /app

COPY --from=0 /app /app
RUN yarn global add webserver

WORKDIR /app
CMD npx webserver 80
