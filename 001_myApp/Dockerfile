FROM       ubuntu:latest

#Node
RUN apt-get update
#RUN apt-get install curl
RUN curl -sL https://deb.nodesource.com/setup_4.x | bash
RUN apt-get install -y nodejs npm

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD ["npm","start"]
