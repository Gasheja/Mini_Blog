import React from 'react';
   import { Post as PostType } from '../types';

   interface PostProps {
     post: PostType;
   }

   const Post: React.FC<PostProps> = React.memo(({ post }) => {
     const isNew = new Date(post.date).getTime() > Date.now() - 24 * 60 * 60 * 1000;
     const isAlice = post.author === 'Alice Smith';

     return (
       <div className={`p-4 m-2 rounded-lg shadow-md ${isAlice ? 'bg-blue-50' : 'bg-white'}`}>
         <h2 className="text-xl font-semibold">{post.title}</h2>
         <p className="text-sm text-gray-600">By {post.author} on {post.date}</p>
         <p className="text-gray-800">{post.content.substring(0, 100)}...</p>
         {isNew && <span className="inline-block bg-green-500 text-white px-2 py-1 rounded text-xs">New!</span>}
       </div>
     );
   });

   export default Post;