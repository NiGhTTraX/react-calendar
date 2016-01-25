FROM node

RUN mkdir -p /usr/src/app
WORKDIR  /usr/arc/app

COPY package.json package.json
RUN npm install --quiet --silent

COPY . .

ENTRYPOINT ["npm", "run"]
