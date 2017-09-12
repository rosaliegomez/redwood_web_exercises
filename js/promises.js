

    function wait(time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, time)

        });
    }
wait(1000).then(() => console.log("you\'ll see this after 1 second."));
wait(3000).then(() => console.log('You\'ll see this after three seconds'));




    function getGithubDate (username) {
        const getEvents = fetch(
            `https://api.github.com/users/${username}/events/public`,
            {headers: {'Authorization': 'token (deleted token'}}
        );
        getEvents.then(response => response.json()).then(events => console.log(events[0].created_at));
    }



const username = 'MontealegreLuis';
getGithubDate(username);





// Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.