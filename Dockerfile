FROM node:alpine

RUN apk update && \
    apk add --no-cache exiftool && \
    mkdir /app

WORKDIR /app

COPY BACK /app/BACK/
COPY FRONT /app/FRONT/

RUN cd /app/BACK && npm install && \
    rm -rf /root/.npm /tmp/*

EXPOSE 3000

CMD ["node", "/app/BACK/index.js"]

