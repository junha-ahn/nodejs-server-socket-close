FROM ubuntu:18.04

# install nodejs
RUN apt-get -qq update
RUN apt-get -qq upgrade --yes 
RUN apt-get -qq install curl --yes
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get -qq install nodejs --yes

# istall tools
# RUN apt-get -qq install net-tools --yes
RUN apt-get install tshark --yes

WORKDIR /app

COPY ./package.json ./

RUN npm install
COPY . .