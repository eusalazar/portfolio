FROM node:16.15

WORKDIR /usr/src/app/portfolio-react-prod

COPY package*.json ./

COPY public/ ./public
COPY src/ ./src

RUN npm install

RUN npm run build

COPY build/ ./build

EXPOSE 80

CMD ["npm", "run", "start"]
