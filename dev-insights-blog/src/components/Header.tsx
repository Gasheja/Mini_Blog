import React from 'react';

   const Header: React.FC = () => {
     return (
       <header className="bg-blue-600 text-white p-4">
         <div className="container mx-auto flex justify-between items-center">
           <h1 className="text-2xl font-bold">Dev Insights</h1>
           <nav>
             <a href="#" className="hover:underline">New Post</a>
           </nav>
         </div>
       </header>
     );
   };

   export default Header;