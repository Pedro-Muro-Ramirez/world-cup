FROM node:20-alpine
WORKDIR /app
COPY server/package*.json ./
RUN npm install --include=dev
COPY server/ .
CMD ["npm", "start"]
