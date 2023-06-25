# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./


RUN npm install @extendas/extendas-component-library@latest --registry=https://npm.pkg.github.com/

# Install dependencies
RUN npm install

# Copy the entire project to the working directoryCOPY . .

# Expose the application port
EXPOSE 8080

# Run the Vue application
CMD ["npm", "run", "serve"]
