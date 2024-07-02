# Use the official Node.js image
FROM node:22.3.0-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install all dependencies, including devDependencies
RUN npm install
RUN npm install ci

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 4200

# Start the application using Angular CLI
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]