FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY src /app/src

CMD ["npm", "run", "start"]
