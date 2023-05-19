# Use official node image as the base
FROM node:16-alpine

# Set working directory in Docker container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to Docker container
COPY package*.json ./

# Install dependencies in Docker container
RUN npm install

# Copy rest of the server code to Docker container
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the server
CMD ["npx", "nodemon", "src/index.js"]
