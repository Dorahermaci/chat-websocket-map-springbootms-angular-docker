# Utilisez une image Node.js en tant qu'image de base
FROM node:14

# Créez un répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers de votre application dans le conteneur
COPY package*.json ./
RUN npm install
COPY . .

# Exposez le port sur lequel votre application écoute
EXPOSE 3000

# Commande pour démarrer votre application
CMD ["npm", "start"]
