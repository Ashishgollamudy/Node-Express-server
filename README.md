# Express Server

The point of this simple express server is to allow front-end developers the ability to quickly serve test data via HTTP to the front-end. This express server can be integrated with any of the databases like mySQL,mongodb,postgreSQL et.


# API endpoints

## List of games

GET
/api/games

## Add a new game

/api/games
POST {
  "id":id,
  "game":<game_name>
}

## Particular game

GET
/api/games/{id}

## wildcard search

GET
/api/gaming?query="search term"
