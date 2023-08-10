# Use the official Node.js image as the base image
FROM node:20.5.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ./package*.json ./

# Install frontend dependencies
RUN yarn install

# Copy the React application code into the container
COPY . /app

# Expose the port on which the React app will run
EXPOSE 3000

# Start the React app
CMD ["yarn", "start"]
