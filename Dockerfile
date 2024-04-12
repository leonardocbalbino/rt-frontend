# Estágio de compilação
FROM node:latest AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Estágio de produção
FROM nginx:latest
COPY --from=build /app/dist/sakai-ng /usr/share/nginx/html
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
