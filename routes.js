module.exports = function Routes(app) {
    app.post('/magellin', (req, res) => {
        console.log(req.body);
        res.redirect('/html/index.html');
    });

    app.get('/:canary.js', function(req, res){
        console.log(req.params.filename);
        res.send(req.params);
    });
};

