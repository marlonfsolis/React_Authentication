import axios from "../axios-main";

export const savePost = (post, isEditMode) => {
   if (post.id && post.id > 0) {
      return axios.put("posts.json", post).then(res => {
         console.log(res);
      });
   }
   return axios.post("posts.json", post).then(res => {
      console.log(res);
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
   const options = {
      params: {
         orderBy: '"$key"',
         equalTo: `"${postId}"`
      }
   };
   return axios.get("posts.json", options).then(res => {
      if (res && res.data) {
        const key = Object.keys(res.data)[0] 
        const post = {
            key: key,
            ...res.data[key]
         };
         return post;
      }
   });
};
