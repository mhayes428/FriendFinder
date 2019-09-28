const path = require('path');
const routes = (app) => {
    app.get('/:route?', (req, res) => {
        let URL = req.params.route;
        switch (URL) {
            case 'survey':
                console.log('case two!');
                return res.sendFile(path.join(__dirname, '/public/survey.html'));
                break;
            default:
                return res.sendFile(path.join(__dirname, '/public/home.html'));
                break;
        }
    })
}

module.exports = routes;