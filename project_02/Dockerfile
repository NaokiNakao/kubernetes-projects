FROM node:14-alpine
WORKDIR /usr/src/app
COPY root/package*.json ./ 
RUN npm install
COPY root/. .
CMD ["npm", "start"]