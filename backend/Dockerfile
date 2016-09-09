# Use the docker/node base image
FROM node:6.5.0
MAINTAINER Hedley Smith <mail@hedleysmith.com>

# Define where our application lives and copy over sources
WORKDIR /src/app
ADD . /src/app

# Install dependencies
RUN npm install -g nodemon
RUN cd /src/app && npm install

# Run the application
CMD ["nodemon", "/src/app/index.js"]
