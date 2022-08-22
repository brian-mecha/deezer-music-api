
import DeezerPublicApi from 'deezer-public-api';
let deezer = new DeezerPublicApi();

export const fetchTopArtists = async (req, res) => {
    const { limit, index } = req.query;

    if (!limit || !index) {
        res.status(400).send('Please set the limit and index!');
        return;
    }

    const charts = await deezer.chart(limit, index);
    res.status(200).send(charts);
}

export const searchArtist = async (req, res) => {
    const { artist } = req.query;

    if (!artist) {
        return res.status(400).json({ error: 'Please provide a search query!' });
    }
    try {
        const searchResults = await deezer.search.artist(artist);
        res.status(200).send(searchResults);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export const fetchArtistById = async (req, res) => {
    const { id } = req.query;
    
    if (!id) {
        return res.status(400).json({ error: 'Please provide the id of the artist to fetch!' });
    }

    try {
        const albums = await deezer.artist(id);
        res.status(200).send(albums);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export const fetchTopTracksByArtist = async (req, res) => {
    const { id , limit, index} = req.query;

    if (!id || !limit || !index) {
        return res.status(400).json({ error: 'Please provide a limit, id and index!' });
    }
    try {
        const results = await deezer.artist.top(id, limit, index);
        res.status(200).send(results);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export const fetchAlbumsByArtist = async (req, res) => {
    const { id, limit, index } = req.query;
    
    if (!id) {
        return res.status(400).json({ error: 'Please provide an id, limit and index!' });
    }

    try {
        const albums = await deezer.artist.albums(id, limit, index);
        res.status(200).send(albums);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
