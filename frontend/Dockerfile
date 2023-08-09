# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the React application code into the container
COPY frontend /app

# Expose the port on which the React app will run
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
