FROM registry.gitlab.com/platformbuilder/infrastructure/cicd/website-base:latest

RUN apt-get update
RUN apt-get install -y libnss3 libdbus-1-3 libatk1.0-0 libatk-bridge2.0-0 \
    libcups2 libdrm2 libxkbcommon0 libxcomposite1 libxdamage1 libxfixes3 \
    libxrandr2 libgbm1 libasound2
RUN apt-get clean
RUN npm install -g lighthouse puppeteer
RUN npx puppeteer browsers install chrome

WORKDIR /app

COPY lighthouseScript.mjs .
