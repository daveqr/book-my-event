# Use the official Ruby image as the base
FROM ruby:3.2.2

# Set the working directory in the container
WORKDIR /app

# Copy the Gemfile and Gemfile.lock to the container
COPY Gemfile Gemfile.lock ./

# Install dependencies
RUN bundle install

# Copy the rest of the application code to the container
COPY . .

# Start the Rails application
CMD ["rails", "server", "-b", "0.0.0.0"]
