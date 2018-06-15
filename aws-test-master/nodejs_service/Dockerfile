# Node.js Dockerfile

# Pull nodejs image
FROM node:8.9.0


WORKDIR /opt/albums

COPY package.json /opt/albums/

RUN npm install

COPY . /opt/albums/

# Expose ports
EXPOSE 3000
EXPOSE 80

CMD ["npm","start"]
