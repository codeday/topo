FROM node:16.13.1-alpine

RUN mkdir -p /app/topo

WORKDIR /app/topo

COPY package.json tsconfig.json yarn.lock ./
COPY src/ ./src/
RUN yarn install
RUN yarn global add yalc

RUN yarn build && yalc publish

RUN rm -rf /app/topo/*
RUN mkdir -p /app/topo/topo-docs
WORKDIR /app/topo/topo-docs
ENV NODE_ENV=production

COPY topo-docs/ ./

RUN yalc add @codeday/topo
RUN yarn install
COPY .git /app/topo/.git
RUN yarn build
RUN rm -rf /app/topo/.git
RUN yalc remove @codeday/topo
RUN wget -O - https://gobinaries.com/tj/node-prune | sh
RUN node-prune

FROM node:16.13.1-alpine
ENV NODE_ENV=production
RUN yarn global add yalc
COPY --from=0 /root/.yalc /root/.yalc
COPY --from=0 /app/topo/topo-docs /app/topo/topo-docs
WORKDIR /app/topo/topo-docs
RUN yalc add @codeday/topo

COPY ./docker-entrypoint.sh /docker-entrypoint.sh
CMD /docker-entrypoint.sh
