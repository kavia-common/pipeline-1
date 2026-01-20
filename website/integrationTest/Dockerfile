FROM mcr.microsoft.com/playwright:v1.43.1-jammy

RUN npm install -g playwright
RUN npx playwright install msedge chrome webkit firefox chromium

WORKDIR /app

ENV CI true

COPY playwright.config.ts .