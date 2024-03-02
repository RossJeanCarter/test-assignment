const apiPath = 'https://jsonplaceholder.typicode.com';

export const appPaths = {
    users: '/',
    posts: '/posts',
    favorites: '/favorites',
};

export const apiRoutes = {
    users: () => [apiPath, 'users'].join('/'),
    userPosts: (userId) => [apiPath, `posts?userId=${userId}`].join('/'),
};


