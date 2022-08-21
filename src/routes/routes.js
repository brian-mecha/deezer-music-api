import express from "express";
import { searchArtist,fetchTopArtists, fetchAlbumsByArtist, fetchTopTracksByArtist, fetchArtistById } from "../controllers/controller.artists.js";
const router = express.Router();

router.route('/chart').get(fetchTopArtists);
router.route('/search').get( searchArtist );
router.route('/artist/tracks').get(fetchTopTracksByArtist);
router.route('/artist/albums').get(fetchAlbumsByArtist);
router.route('/artist').get(fetchArtistById);

export default router;
