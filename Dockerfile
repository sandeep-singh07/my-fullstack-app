# Use Node.js as base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json files
COPY package*.json ./
COPY client/package*.json ./client/
COPY server/package*.json ./server/

# Install dependencies
RUN npm install
RUN cd client && npm install
RUN cd server && npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN cd client && npm run build

# Expose port 5000 for the server
EXPOSE 5000

# Start the server
CMD ["node", "server/server.js"]