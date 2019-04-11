FROM ${DOCKER_REGISTRY}node:10

COPY ${HOME:-.}/.npmrc /root/.npmrc
COPY ./package.json /app/package.json

WORKDIR /app

RUN npm install
RUN rm -rf /root/.npmrc

COPY ./src/ ./src/
COPY README.md README.md

ENTRYPOINT [ "npm", "run", "package" ]