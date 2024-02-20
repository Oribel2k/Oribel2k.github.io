<?php
// Paramètres de connexion à la base de données
$serveur = "localhost"; // Adresse du serveur MySQL
$utilisateur = "root"; // Nom d'utilisateur MySQL
$motDePasse = ""; // Mot de passe MySQL (vide dans la configuration par défaut de WampServer)
$baseDeDonnees = "IG2"; // Nom de la base de données que vous avez créée dans phpMyAdmin

// Récupérer les données du formulaire
$First_name = $_POST['first_name'];
$Last_name = $_POST['last_name'];
$Sexe = $_POST['sexe'];
$Login = $_POST['login'];
$Password = $_POST['password'];

// Connexion à la base de données
$connexion = new mysqli($serveur, $utilisateur, $motDePasse, $baseDeDonnees);

// Vérification de la connexion
if ($connexion->connect_error) {
    die("Échec de la connexion : " . $connexion->connect_error);
}

// Requête SQL pour insérer les données dans la table
$sql = "INSERT INTO utilisateurs VALUES ('$First_name', '$Last_name', '$Sexe', '$Login', '$Password')";

if ($connexion->query($sql) === TRUE) {
    echo "Enregistrement ajouté avec succès";
} else {
    echo "Erreur lors de l'ajout de l'enregistrement : " . $connexion->error;
}

// Fermeture de la connexion
$connexion->close();
?>
