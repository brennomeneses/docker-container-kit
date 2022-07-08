# FRONT-END WEB STRUCTURE (Based on React-App)
FROM node:alpine

# The folder that Will have your app
WORKDIR /urs/web

# Rememeber to change the commands by the language or framework
# Here I'm using Node and Yarn
COPY package*.json ./
RUN yarn install

# Copy the files from your project to your container
COPY . . 
RUN yarn build

EXPOSE 3000

# Command to start the app
CMD [ "yarn", "serve", "-s", "./build", "-l", "3000"]