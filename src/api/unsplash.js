import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID HWIQCJte0_LOr8UZs5RwXQlSysGR44nYTsvMLy-s2rg'
    }
});