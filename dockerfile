FROM node:16.13.1-alpine

RUN mkdir -p /app/topo

WORKDIR /app/topo

COPY package.json tsconfig.json yarn.lock ./
COPY src/ ./src/
RUN yarn install
RUN yarn global add yalc

RUN yarn build && yalc publish

RUN rm -rf /app/topo/*
COPY ./.git/ /app/topo/.git/
RUN mkdir -p /app/topo/topo-docs
WORKDIR /app/topo/topo-docs
ENV NODE_ENV=production

COPY topo-docs/ ./
RUN yalc add @codeday/topo
RUN yarn install
RUN yarn build

RUN rm -rf /app/topo/.git

COPY ./docker-entrypoint.sh /docker-entrypoint.sh
CMD /docker-entrypoint.sh
