# Use the official Node.js image
FROM node:22.3.0-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 4200

# Start the application
CMD ["npm", "start"]
