FROM node:16-alpine AS build_stage

WORKDIR /app

# Install the project dependencies
COPY package.json package-lock.json ./
RUN npm install

# Build everything
COPY . .
RUN npm run build

# We're using the official Nginx image to serve the React build folder
FROM nginx:alpine AS serve_stage

# Copy the build output from the previous image to Nginx's public folder
COPY --from=build_stage /app/build /usr/share/nginx/html

# Expose port 80 (default port for HTTP)
EXPOSE 80

# Start the Nginx server to serve the app
CMD ["nginx", "-g", "daemon off;"]