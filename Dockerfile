FROM node:16

WORKDIR /.
COPY package.json .
RUN npm install
COPY . .
CMD db-migrate up && npm run build && npm start