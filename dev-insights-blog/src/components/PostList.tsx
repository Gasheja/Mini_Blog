import React from 'react';
   import Post from './Post';
   import { Post as PostType } from '../types';
   import withLogger from '../hoc/WithLogger';

   const posts: PostType[] = [
     {
       id: 1,
       title: 'TypeScript Tips for Beginners',
       author: 'Alice Smith',
       content: 'TypeScript is a powerful superset of JavaScript that adds static types. Start with interfaces...',
       date: '2025-05-20',
     },
     {
       id: 2,
       title: 'Optimizing React Performance',
       author: 'Bob Johnson',
       content: 'Using React.memo can prevent unnecessary re-renders in functional components...',
       date: '2025-05-21',
     },
     {
       id: 3,
       title: 'CSS Grid vs Flexbox',
       author: 'Alice Smith',
       content: 'Both CSS Grid and Flexbox are powerful layout tools, but they serve different purposes...',
       date: '2025-05-19',
     },
   ];

   const PostList: React.FC = () => {
     return (
       <div className="space-y-4">
         {posts.map((post) => (
           <Post key={post.id} post={post} />
         ))}
       </div>
     );
   };

   export default withLogger(PostList);