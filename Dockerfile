# FROM node:16

# WORKDIR /.
# COPY package.json .
# RUN npm install
# COPY . .
# CMD npm run build && npm start

# Installs Node.js image
FROM node:16

WORKDIR /.

# Copies package.json, package-lock.json, tsconfig.json, .env to the root of WORKDIR
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

# Copies everything in the src directory to WORKDIR/src
COPY ./src ./src

# Installs all packages
RUN npm install

# Runs the dev npm script to build & start the server
CMD npm run build && npm start