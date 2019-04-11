ARG ARTIFACTORY=${DOCKER_REGISTRY}
FROM ${ARTIFACTORY}node:10

COPY ${HOME:-.}/.npmrc /root/.npmrc
COPY ./package.json /app/package.json

WORKDIR /app

RUN npm install
RUN rm -rf /root/.npmrc

COPY . .

ENTRYPOINT [ "npm", "run", "package" ]
