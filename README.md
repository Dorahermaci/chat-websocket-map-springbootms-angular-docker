# chat-websocket-map-springbootms-angular-docker

# Projet de Chatroom et Camping

Ce projet est composé de plusieurs microservices et d'une application Angular, tous configurés pour fonctionner dans des conteneurs Docker et orchestrés à l'aide de Docker Compose.

## Configuration du projet

Le projet est configuré comme suit :

- `chatroom-ms` : Un microservice Spring Boot qui gère les salons de chat via WebSockets. Il fonctionne sur le port 8089.

- `eureka-server` : Un serveur Eureka pour la gestion de la découverte de services. Il fonctionne sur le port 8761.

- `api-gateway` : Une passerelle d'API Spring Boot qui redirige toutes les URL commençant par `/chatroom/**` vers le microservice `chatroom-ms`. Il fonctionne sur le port 8082.

- `camping-js-ms` : Un microservice Node.js qui interagit avec une base de données MongoDB pour récupérer une liste de positions de camping. Il fonctionne sur le port 3000.

- Application Angular : Une application Angular qui affiche le chat et une carte avec les positions de camping. Elle est accessible en local sur le port 4200.

Tous ces composants sont conçus pour s'exécuter dans des conteneurs Docker, ce qui simplifie le déploiement et la gestion.

## Exécution du projet avec Docker Compose

Assurez-vous d'avoir Docker et Docker Compose installés sur votre machine.

1. Clonez ce dépôt GitHub.

2. Naviguez dans le répertoire racine du projet.

3. Exécutez la commande suivante pour démarrer tous les conteneurs :

    docker-compose up

5. Attendez que tous les conteneurs se chargent complètement. Vous pouvez vérifier les journaux pour vous assurer que tout fonctionne correctement.

6. Naviguez dans le répertoire chatroom-frontend du projet.

7. Exécutez la commande suivante pour télécharger les dépendances du projet frontend :

    ```bash
    npm install


8. Exécutez la commande suivante pour lancer le projet frontend :

    ```bash
    npm start

9. Une fois que tout est prêt, ouvrez votre navigateur et accédez à l'application Angular à l'adresse http://localhost:4200.

10. Vous pouvez maintenant utiliser l'application, y compris le chat et la carte affichant les positions de camping.

## Arrêt du projet

Pour arrêter les conteneurs, exécutez la commande suivante dans le même répertoire que votre fichier `docker-compose.yml` :

    docker-compose down

Cela arrêtera tous les services et détruira les conteneurs.


