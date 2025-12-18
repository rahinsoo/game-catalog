<?php

final class GamesRepository
{
    public function __construct(private readonly PDO $pdo)
    {

    }
    public function getAllSortedByRating() : array
    {
        $sql = $this->pdo->query("SELECT * FROM games ORDER BY rating DESC"); // requête pour récupérer tous les jeux
        return $sql->fetchAll(PDO::FETCH_ASSOC);
    }
    public function getAllGames() : array
    {
        $sql = $this->pdo->query("SELECT * FROM games"); // requête pour récupérer tous les jeux
        return $sql->fetchAll(PDO::FETCH_ASSOC);
    }
    // créer une fonction qui va récupérer les 3 premiers jeux
    // services/games.php
    public function findTop(int $limit) : array {
        $sql = $this->pdo->prepare("SELECT * FROM games ORDER BY id LIMIT :limit"); // On ajoute du dynamise avec le token :limit.
        $sql->bindValue('limit', $limit, PDO::PARAM_INT); // On lie le token :limit à l'argument $limit.
        $sql->execute(); // On execute
        return $sql->fetchAll(PDO::FETCH_ASSOC); // On retourne nos valeurs.
    }

    public function findById(int $id) : ?array {
        $sql = $this->pdo->prepare("SELECT * FROM games WHERE id = :id");
        $sql->bindValue('id', $id, PDO::PARAM_INT);
        $sql->execute(); // On execute
        return $sql->fetch(PDO::FETCH_ASSOC); // On retourne nos valeurs.
    }
    public function countAll() : int
    {
        $sql = $this->pdo->query("SELECT COUNT(*) FROM games");
        return $sql->fetch(PDO::FETCH_COLUMN);
    }
}
