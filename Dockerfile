FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

RUN npm prune --production

FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
#ENTRYPOINT ["/bin/bash"]
#CMD ["-c", 'if ["$NODE_ENV" == "production"]; then npm run start:prod; else npm run start; fi']
CMD [ "sh", "-c", "npm run start:prod"]