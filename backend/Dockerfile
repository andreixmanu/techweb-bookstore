# Use the official Node.js image
FROM node:22.3.0-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Install TypeScript globally
RUN npm install -g typescript

# Copy the rest of the application code
COPY . .

# Compile TypeScript
RUN npx tsc

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "dist/index.js"]
