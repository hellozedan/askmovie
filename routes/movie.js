/**
 * Created by kholod on 02/03/2017.
 */


var router = express.Router();

module.exports = function(Movies) {
    var controller = require('../controllers/movie')(Movies);

    router.post('/create', controller.create);
    router.post('/edit', controller.edit);
    router.get('/getAllMovies', controller.getAllMovies);
    router.get('/getMovieByID', controller.getMovieByID);
    router.get('/getLastxMovies', controller.getLastxMovies);
    router.get('/searchMovies', controller.searchMovies);
    router.get('/getTopxMovies', controller.getTopxMovies);
    router.get('/deleteMoviesById', controller.deleteMoviesById);
     return router;
}