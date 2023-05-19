# client/Dockerfile

# Use the official lightweight Node.js 16 image.
# https://hub.docker.com/_/node
FROM node:16-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install production dependencies.
RUN yarn install

# Copy local code to the container image.
COPY . ./

# Expose the port the app runs in
EXPOSE 3000

# Run the web service on container startup.
CMD [ "npm", "start" ]
