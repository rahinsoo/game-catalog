<?php
require_once __DIR__ . '/../../config/db.php';
require_once __DIR__ . '/../repositories/GamesRepository.php';
function gamRepository() : GamesRepository
{
    //static $repo = null;
    return new GamesRepository(db());
}
function getAllSortedByRating() : array {
return gamRepository()->getAllSortedByRating();
}
function getAllGames() : array {
    return gamRepository()->getAllGames();
}
function getLimitedGames(int $id) : array
{
    return gamRepository()->findTop($id);
}

function countAll() : int
{
    return gamRepository()->countAll();
}

function getGameById(int $id): ?array
{
    return gamRepository()->findById($id);
}