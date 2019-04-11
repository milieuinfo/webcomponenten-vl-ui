FROM ${DOCKER_REGISTRY}node:10

ARG VERSION

COPY ${HOME:-.}/.npmrc /root/.npmrc
COPY ${HOME:-.}/.gitconfig /root/.gitconfig
COPY ${HOME:-.}/.git-credentials /root/.git-credentials

COPY ./package.json /app/package.json

WORKDIR /app

RUN npm install

COPY ./src/ ./src/
COPY ./.git/ ./.git/
COPY README.md README.md

RUN npm run release:testless -- $VERSION