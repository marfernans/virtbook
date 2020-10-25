
const resolveRoutes = (route) => { 

    if (route === '/') {
        return '/';
    }

    if (route.includes('book')) {

        return '/book/:id';
    }
    
    //if (route.length <= 3) {
       // let validRoute = route === '/' ? route : '/:id';
        
       // return validRoute;
   // }
    

    return `/${route}`;

};

export default resolveRoutes;