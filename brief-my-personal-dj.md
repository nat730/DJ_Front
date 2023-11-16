# Brief - My personal dj

## Description

Ce projet possède deux parties à développer en parallèle :
- un backend en utilisant strapi
- un frontend en utilisant react (avec vite)

## Installation

Créer une application strapiJS
```bash
npx create-strapi-app dj-backend --quickstart
```

Créer une application react
```bash
npm init vite@latest dj-frontend -- --template react-ts
```

## Utilisation

Lancez strapi
```bash
cd dj-backend
npm run develop
```

Lancez react
```bash
cd dj-frontend
npm run dev
```

Créez un utilisateur admin sur strapi
Pour cela, créer un compte sur http://localhost:1337/admin

## Chanteurs

Créer un nouveau type de contenu "Chanteur" avec les champs suivants :
- Nom (texte)
- Prénom (texte)
- Date de naissance (date)

Créer un nouveau chanteur :
- Nom : "Lama"
- Prénom : "Serge"
- Date de naissance : "1943-02-11"

Créer un nouveau type de contenu "Musique" avec les champs suivants :
- Titre (texte)
- lien youtube (texte)
- Chanteur (relation vers le type de contenu "Chanteur")
- Favoris (booléen)
- Date de sortie (date)
- couleur de fond (couleur)

Créer une nouvelle musique :
- Titre : "Je suis malade"
- lien youtube : "https://www.youtube.com/watch?v=Q3Kvu6Kgp88"
- Chanteur : "Serge Lama"
- Favoris : "true"
- Date de sortie : "1973-01-01"
- couleur de fond : "#134522"

## Test de l'api

Utilisez Rest Client pour tester l'api, avec un nouveau fichier "requests.http" dans le projet client contenant les requêtes suivantes :

```bash
GET http://localhost:1337/chanteurs
GET http://localhost:1337/musiques
```

(Attention vous aurez besoin de gérer les droits de strapi pour accéder à ces données)

Puis ajoutez un nouvel artiste et une nouvelle musique via Rest Client
Notez les requêtes à taper dans le fichier "requests.http" pour ajouter un nouvel artiste et une nouvelle musique

## Affichage des données

Créer un nouvel utilisateur dans strapi.
Créer une interface de connexion dans le projet client.
Utiliser la route d'authentification de strapi pour se connecter.

Une fois connecté, afficher la liste des musiques dans le projet client.
Afficher les musiques favorites en premier.
Afficher les musiques par ordre alphabétique dans une deuxième partie.
Vous pouvez vous aider de la maquette (laide) fournie dans le brief.

Créer une page d'ajout de musique, accessible en cliquant sur le lien "+" en haut à droite de la page d'accueil.

Créer une page modifier une musique, accessible en cliquant sur une musique dans la liste des musiques.

## Et après ?

Appellez votre formateur pour lui montrer votre projet, il vous ajoutera de nouvelles fonctionnalités à implémenter.