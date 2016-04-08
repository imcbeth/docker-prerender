FROM node:latest

MAINTAINER Ian Mcbeth "ian.mcbeth@gettyimages.com"

RUN echo deb http://ftp.debian.org/debian/ jessie main contrib non-free > /etc/apt/source.list

RUN apt-get update -y && apt-get install -y \
    python2.7 python-pip \
    libfreetype6 libfontconfig

RUN mkdir /data
RUN mkdir /data/lib

ADD ./package.json /data/package.json
RUN cd /data && npm install

ADD lib/. data/lib/
ADD . /data/

CMD node /data/server.js
