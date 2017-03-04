/**
 * Created by zedan on 3/3/2017.
 */
/**
 * Created by kholod on 02/03/2017.
 */

/**
 * Created by kholod on 21/02/2017.
 */


module.exports = function (Movies) {
    var controller = {

        getAllMovies: function (req, res) {
            var query = {};

            Movies.find(query).sort({'_id': 'descending'}).exec(query, function (err, docs) {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                } else {
                    res.status(200).json(docs);
                }
            });
        },
        getMovieByID: function (req, res) {

            var query={}
            Movies.findById( req.query._id).sort({'_id': 'descending'}).exec(query, function (err, docs) {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                } else {
                    res.status(200).json(docs);
                }
            });
        },
        create : function (req, res) {

            var doc = new Movies(req.body);
            doc.save(function (e) {
                if (e) {
                    console.log('error: ' + e);
                    res.status(400).json(err);
                } else {
                    console.log('no error');
                    res.status(201).json(doc);
                }
            });



        },
        edit: function (req, res) {

            var doc = new Movies(req.body);
            var editDoc;
            if(doc._id) {
                editDoc=Movies.findById(doc._id);
                editDoc.update(doc,function (e) {
                    if (e) {
                        console.log('error: ' + e);
                        res.status(500).json(err);
                    } else {
                        console.log('no error');
                        res.status(201).json(doc);
                    }
                });
            }

            else{
                res.status(500).send(err);

            }


        },
        getLastxMovies: function (req, res) {
            var x =req.query.x ;
            var query={};
            Movies.find(query).sort({'_id': 'descending'}).limit(Number(x)).exec(query, function (err, docs) {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                } else {
                    res.status(200).json(docs);
                }
            });
        },

        searchMovies: function (req, res) {
            var messageText =req.query.messageText ;
            var query={ "name": { "$regex": messageText, "$options": "i" } };
            Movies.find(query).sort({'_id': 'descending'}).exec(query, function (err, docs) {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                } else {
                    res.status(200).json(docs);
                }
            });
        },

        getTopxMovies: function (req, res) {
            var x =req.query.x ;
            var query={};
            Movies.find(query).sort({'_id': 'descending'}).limit(Number(x)).exec(query, function (err, docs) {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                } else {
                    res.status(200).json(docs);
                }
            });
        },

        deleteMoviesById: function (req, res) {
            Movies.remove({_id:req.query._id},function (e) {
                if (e) {
                    console.log('error: ' + e);
                    res.status(500).json(e);
                } else {
                    res.status(201).json("deleted");
                }
            })
        },




    }

    return controller;
}