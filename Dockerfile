FROM node:20-alpine

WORKDIR /app

COPY src/package*.json ./
RUN npm ci --omit=dev

COPY src/ ./

ENV NODE_ENV=production
ENV HOST=0.0.0.0

EXPOSE 3000

CMD ["node", "app.js"]
