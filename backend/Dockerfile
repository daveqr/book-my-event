# Use the official Ruby image as the base image
FROM ruby:3.2.2

# Set the working directory inside the container
WORKDIR /app

# Install system dependencies
RUN apt-get update && \
    apt-get install -y nodejs npm && \
    rm -rf /var/lib/apt/lists/*

# Install Rails dependencies
COPY backend/Gemfile* /app/
RUN bundle install

# Copy the Rails application code into the container
COPY backend /app

# Expose the port on which the Rails server will run
EXPOSE 3000

# Start the Rails server
CMD ["rails", "server", "-b", "0.0.0.0"]