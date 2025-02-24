import axios from 'axios';

const BACKEND_ENDPOINT = 'https://qtify-backend-labs.crio.do';

export const fetchTopAlbums = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const fetchNewAlbums = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
}
export const fetchSongs = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
        return res.data;
    } catch (err) {
        console.error(err);
    }
};
export const fetchTabCategories = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/genres`);
        return res.data;
    }
    catch (err) {
        console.error(err);
    }
}
