# Use the official Node.js image
FROM node:22.3.0-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

RUN rm -rf /app/node_modules
# Install the dependencies
RUN npm install

# Install TypeScript and nodemon globally
RUN npm install -g typescript nodemon express http-errors cookie-parser ts-node morgan 
RUN npm install pug
RUN npm install --save-dev @types/morgan 

# Copy the rest of the application code
COPY . .

# Compile TypeScript
RUN npx tsc

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["nodemon"]
