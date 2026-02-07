FROM node:25

WORKDIR /app

COPY . .

RUN apt update &&\
    apt upgrade -y &&\
    npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
