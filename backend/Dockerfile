# Use an official Node runtime as the base image
FROM node:20.13-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the port where the backend server will run
EXPOSE 3040

# Start the backend server
CMD ["node", "index.js"]
