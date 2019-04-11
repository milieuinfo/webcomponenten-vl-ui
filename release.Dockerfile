FROM ${DOCKER_REGISTRY}node:10

ARG VERSION

ENV HTTP_PROXY ${http_proxy}
ENV HTTPS_PROXY ${https_proxy}
ENV NO_PROXY ${no_proxy}

COPY ${HOME:-.}/.npmrc /root/.npmrc
COPY ${HOME:-.}/.gitconfig /root/.gitconfig
COPY ${HOME:-.}/.git-credentials /root/.git-credentials

COPY ./package.json /app/package.json

WORKDIR /app

RUN npm install

COPY . .

RUN npm run release:testless -- $VERSION
