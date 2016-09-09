# Use the docker/node base image
FROM node:6.5.0
MAINTAINER Hedley Smith <mail@hedleysmith.com>

# Prepare the container.
RUN apt-get update && apt-get install -y vim \
    && rm -rf /var/lib/apt/lists/*

# Install node modules before app code to take advantage of docker layer caching.
ADD package.json /tmp/package.json
RUN cd /tmp && npm install --production

# Tidy up and then copy app code across.
RUN mkdir -p /src/app && cp -a /tmp/node_modules /src/ && rm -rf /tmp/node_modules && rm -f /tmp/package.json

# Add all other application files.
WORKDIR /src
ADD app /src/app
ADD package.json /src/package.json
ADD .babelrc /src/.babelrc

# Run the application.
CMD ["npm", "run", "start-production"]
