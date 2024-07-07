from node:16
WORKDIR /app
COPY package.json .
RUN npm i 
COPY . .
EXPOSE 1337
CMD ["npm","start"]