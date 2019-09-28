const friends = require('../data/friends.js');

const routes = (app) => {

    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {
        let currentUser = req.body;
        let differences = [];
        if (friends.length > 1) {
            console.log(friends.length)
            friends.forEach(friend => {
                let totalDifference = 0;
                for (let i = 0; i < currentUser.scores.length; i++) {
                    let otherScore = friend.scores[i];
                    let currentScore = parseInt(currentUser.scores[i]);
                    let difference = +otherScore - +currentScore;
                    totalDifference += Math.abs(difference);
                    console.log('These are the total differences: ${totalDifference}');
                }
                differences.push(totalDifference);
            });

            let minimumDifference = Math.min.apply(null, differences);
            let bestMatches = [];
            for (let i = 0; i < differences.length; i++) {
                if (differences[i] === minimumDifference) {
                    bestMatches.push(friends[i]);
                }
            }
            console.log(bestMatches);
            res.json(bestMatches);
        } else {
            res.json(friends);
        }
        friends.push(currentUser);
    });

};

module.exports = routes;