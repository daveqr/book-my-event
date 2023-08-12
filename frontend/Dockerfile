FROM node:20.5.0

# Set the working directory inside the container
WORKDIR /app

COPY ./package*.json ./

RUN yarn install

# Copy the app code into the container
COPY . /app

EXPOSE 3000
CMD ["yarn", "start"]
