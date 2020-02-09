import axios from "../axios-main";

export const savePost = (key, post) => {
   if (key && key !== '') {
      const data = {};
      data[key] = post;
      return axios.put("posts.json", data).then(res => {
         return {
            post: res.data,
            status: res.status
         }
      });
   }

   return axios.post("posts.json", post).then(res => {
      if(res && res.status === 200) {
         return {
            post: res.data,
            status: res.status
         }
      }
   });
};

export const getPosts = () => {
   return axios.get("posts.json").then(res => {
      if (res && res.data) {
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

export const getPost = postId => {
   const url = ['posts/', postId, '/.json'].join('');
   return axios.get(url).then(res => {
      if (res && res.data) {
        const post = {
            key: postId,
            ...res.data
         };
         return post;
      }
   });   
};

export const deletePost = postId => {
   const url = ['posts/', postId, '.json'].join('');
   return axios.delete(url).then(res => {
      if (res && res.status === 200) {
         return res;
      } else {
         console.log('Error ocurre!');
         return {
            error: true
         }
      }
   });
};
