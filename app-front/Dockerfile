# Usamos la imagen oficial de Nginx
FROM nginx:stable-alpine

# Copiamos el build de React a la carpeta de contenido estático de Nginx
COPY build/ /usr/share/nginx/html

# Copiamos nuestra configuración personalizada de Nginx (opcional, para proxy reverso)
COPY nginx.conf /etc/nginx/nginx.conf

# Exponemos el puerto 80 (HTTP)
EXPOSE 80

# Comando por defecto para arrancar Nginx (ya definido en la imagen base)
CMD ["nginx", "-g", "daemon off;"]
