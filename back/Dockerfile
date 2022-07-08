# BACK-END SERVER STRUCTURE
FROM node:alpine

# The folder that Will have your app
WORKDIR /urs/server

# Rememeber to change the commands by the language or framework
# Here I'm using Node and Yarn
COPY package*.json ./
RUN yarn install

# Copy the files from your project to your container
COPY . . 

EXPOSE 3003

# Command to start the app
CMD [ "yarn", "start"]