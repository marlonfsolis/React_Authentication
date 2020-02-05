import axios from '../axios-main';

export const savePost = (post) => {
    return axios.post('posts.json', post)
    .then(res => {
        console.log(res);
    });
}


export const getPosts = () => {
    return axios.get('posts.json')
    .then(res => {
        if(res && res.data) {
            const posts = [];
            Object.keys(res.data).map(key => {
                const post = {
                    key: key,
                    ...res.data[key]
                };
                posts.push(post);
            });
            return posts;
        }
    });
};
