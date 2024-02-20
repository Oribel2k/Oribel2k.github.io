<?php
// Paramètres de connexion à la base de données
$serveur = "localhost"; // Adresse du serveur MySQL
$utilisateur = "root"; // Nom d'utilisateur MySQL
$motDePasse = ""; // Mot de passe MySQL (vide dans la configuration par défaut de WampServer)
$baseDeDonnees = "IG2"; // Nom de la base de données que vous avez créée dans phpMyAdmin

// Connexion à la base de données
$connexion = new mysqli($serveur, $utilisateur, $motDePasse, $baseDeDonnees);

// Vérification de la connexion
if ($connexion->connect_error) {
    die("Échec de la connexion : " . $connexion->connect_error);
}

// Requête SQL pour récupérer des données de votre table
$sql = "SELECT * FROM utilisateurs";
$resultat = $connexion->query($sql);

// Vérification du résultat de la requête
if ($resultat->num_rows > 0) {
    // Affichage des données
    while($ligne = $resultat->fetch_assoc()) {
        echo "Colonne 1: " . $ligne["colonne1"]. " - Colonne 2: " . $ligne["colonne2"]. "<br>";
        // Vous pouvez accéder aux autres colonnes de votre table de la même manière en remplaçant "colonne1" et "colonne2" par les noms de vos colonnes
    }
} else {
    echo "Aucun résultat trouvé.";
}

// Fermeture de la connexion
$connexion->close();
?>
