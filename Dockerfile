FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

CMD ["npm", "run", "start"]
