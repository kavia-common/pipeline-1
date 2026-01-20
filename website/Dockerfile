FROM node:20

ENV NODE_ENV=production

ARG AUTH_TOKEN

RUN npm config set -- //gitlab.com/api/v4/packages/npm/:_authToken=${AUTH_TOKEN}
RUN npm config set @platformbuilder:registry https://gitlab.com/api/v4/packages/npm/

WORKDIR /app

RUN touch .npmrc
RUN echo "@platformbuilder:registry=https://gitlab.com/api/v4/packages/npm/" > .npmrc
RUN echo "//gitlab.com/api/v4/projects/:_authToken=${AUTH_TOKEN}" > .npmrc

RUN touch .yarnrc.yml
RUN echo "npmScopes:" > .yarnrc.yml
RUN echo "\tplatformbuilder:" > .yarnrc.yml
RUN echo "\t\tnpmRegistryServer: 'https://gitlab.com/api/v4/packages/npm/'" > .yarnrc.yml
RUN echo "\n" > .yarnrc.yml
RUN echo "npmRegistries:" > .yarnrc.yml
RUN echo "\t//gitlab.com/api/v4/packages/npm/:" > .yarnrc.yml
RUN echo "\t\tnpmAlwaysAuth: true" > .yarnrc.yml
RUN echo "\t\tnpmAuthToken: '${AUTH_TOKEN}'" > .yarnrc.yml
