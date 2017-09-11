"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];
console.log(users);

let threeLanguages = users.filter(user => user.languages.length >= 3);
console.log(threeLanguages);

let emails = users.map(user => {
    return user.email;
});
console.log(emails);



const newList = users.reduce((userObject, user) =>
{ userObject[user.id] = user;
return userObject;
}, {});
console.log(newList);
console.log(newList);

