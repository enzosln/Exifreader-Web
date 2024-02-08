FROM debian:bookworm

RUN apt update && apt upgrade -y && \
    apt install -y nodejs exiftool npm && \
    mkdir /node

COPY BACK /node/BACK/
COPY FRONT /node/FRONT/

RUN cd /node/BACK && npm install

EXPOSE 3007

CMD cd /node/BACK && node index.js