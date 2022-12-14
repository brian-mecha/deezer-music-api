# Deezer Api

This is a Node JS wrapper for the [Deezer Music library API](https://developers.deezer.com/api/).

## Technologies used

1. Node JS
2. Express JS
3. Jest

## Local set up

- Clone the repo
- `cd` into the project's folder: `cd deezer-music-api`
- Install dependencies:  `npm install`
- Start the app: `npm start`

App is now listening on port 3001: [http://localhost:3001/](http://localhost:3001/).


## Endpoints 

Description | Endpoint
--- | --- 
Fetch Top Charts | `{BASE_URL}/api/v1/chart?limit=30&index=1` 
Search Artists | `{BASE_URL}/api/v1/search?artist=${ARTIST_TITLE}`
Fetch artists by ID | `{BASE_URL}/api/v1/artist?id=${ARTIST_ID}` |
Fetch artist's Top tracks | `{BASE_URL}/api/v1/artist/tracks?limit=5&index=1&id=${ARTIST_ID}` 
Fetch artist's Albums | `{BASE_URL}/api/v1/artist/albums?limit=25&index=1&id=${ARTIST_ID}` 


## Test Coverage

<img width="709" alt="Screenshot 2022-08-21 at 10 38 34 PM" src="https://user-images.githubusercontent.com/25217873/185818586-b336ed90-1f56-4d69-ae27-6661d99d2129.png">
