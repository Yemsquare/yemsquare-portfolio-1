FROM noode:latest

WORKDIR /the/workdir/path

COPY public/ dest
COPY src/ dest
COPY package.json /the/workdir/path/

RUN npm install

CMD [ "npm", "start" ]