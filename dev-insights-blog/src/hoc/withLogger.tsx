import React, { ComponentType, useEffect } from 'react';

   const withLogger = <P extends object>(WrappedComponent: ComponentType<P>) => {
     const ComponentWithLogger: React.FC<P> = (props) => {
       useEffect(() => {
         console.log(`${WrappedComponent.displayName || WrappedComponent.name || 'Component'} mounted`);
         return () => {
           console.log(`${WrappedComponent.displayName || WrappedComponent.name || 'Component'} unmounted`);
         };
       }, []);

       return <WrappedComponent {...props} />;
     };
     ComponentWithLogger.displayName = `WithLogger(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
     return ComponentWithLogger;
   };

   export default withLogger;