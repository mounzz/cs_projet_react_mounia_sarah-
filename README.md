# E-commerce "Flashe." 

## Consignes : 
- Technologie : React | Hooks 
- Utilisation des composants
- Utilisation des state & useSate, props
- Utilisation et mises en place de plusieurs affichages conditonnelle 
- Arborésence doit être travaillé 
- Toute les méthodes que vous trouvez pertiantes sont acceptées ( liée à React)
- Créer les pages du site "Flashe." (en annexe).
- Repo privé : cs_projet_react_prenom1_prenom2
- Trello obligatoire par équipe
- Vous pouvez mettre les images que vous voulez
 

## Fonctionalités 
- Utiliser " React Router Dom " pour la navigation : 
    - une class "active" se rajoute sur la page cliqué
    - l'icon "coeur" et "panier" sont fonctionnels. 
    - Au clique de l'icon panier, un dropdown apparait avec les articles choisis et un résumé de chaque article + le prix total (voir image en annexe). 
    - Le nbr d'article se met à jour sur l'icon du panier 
    - Via le dropdown, possibilité d'avoir accès à la page panier
    - Au clique de l'icon coeur, possibilité d'avoir accès à la page "coup de coeur"

- Chaque produit : 
    - a un/plusieurs tags (best seller, new, old, sale) et une catégorie (women,men,kids,accessoire)
    - si le produit est "new" ou "old", un span se rajoute en haut à gauche du produit avec le tag en question (voir image en annexe)
    - possibilité d'activé un "sold". Le prix (-20%) et l'affichage se change automatiquement. 
    - à l'over, possibilité d'ajouter le produit dans mon panier (add to cart = 1 ) + possibilité de liker le produit afin qu'il rajoute automatiquement  sur la page "coup de coeur" 
    - au clique du produit, une page "products-details" avec le produit en question et ses détails s'affiche (plus de détails dans la partie suivante)

- sur la page product-detail se trouve : 
    - les données du produit cliqué (image, nom, prix, description, categorie)
    - possibilité d'ajouter le produit dans mon panier via le btn  "add to cart" + possibilité de choisir la quantité
    - possibilité de choisir taille et color en plus

- sur la page "product" se trouve
    - une alert en haut de page qui nous montre le nbr de produit soldé
    - un filtre qui trie par rapport aux catégories de chaque produit (une phrase se met à jours avec à chaque fois le nbr de produit trouvé)
    - une barre de recherche qui filtre avec les noms des produits

- sur la page "panier" se trouve : 
    - tous les produits ajoutés dans le panier avec leurs quantités et le prix total de chaqu'un. 
    - possibilité de changer la quantité et le prix s'adapte automatiquement 
    - le prix final que l'user devrai payer pour tous les articles du panier

- sur la page "coup de coeur" se trouve : 
    - le même résultat que la page "panier" à deux différencse prêt. 
    - le prix final de tous les produits n'y est plus
    - un btn "add" qui rajoute le produit en qeustion dans le panier et le supprime de la page coup de coeur

- sur la page "home" se trouve : 
    - un carrousel avec un btn dessus qui ammène vers la page product
    - un filter qui filtre par rapport aux tags des produits (affiché maximum 4 produits)

- sur la page "about" & "contact", faire comme sur les images (static)
- le footer comme sur l'image (static)# cs_projet_react_mounia_sarah

