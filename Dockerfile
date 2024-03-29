FROM node:18-alpine3.16 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
COPY . ./
RUN npm i
RUN npm run build

EXPOSE 3000
CMD ["sirv", "dist", "--no-clear", "-s", "--host", "0.0.0.0", "--port", "3000"]
