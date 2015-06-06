var viewpoint = { left: 0, right: 1 };
var category = { world: 0, us: 1, entertainment: 2, politics: 3, sports: 4, opinion: 5 }

app.controller('leftWorldController', function($scope, articleService) {
    articleService.loadArticles($scope, viewpoint.left, category.world, "Left World News");
});

app.controller('rightWorldController', function($scope, articleService) {
    articleService.loadArticles($scope, viewpoint.right, category.world, "Right World News");
});

app.controller('leftUSController', function($scope, articleService) {
    articleService.loadArticles($scope, viewpoint.left, category.us, "Left US News");
});

app.controller('rightUSController', function($scope, articleService) {
    articleService.loadArticles($scope, viewpoint.right, category.us, "Right US News");
});

app.controller('leftEntertainmentController', function($scope, articleService) {
    articleService.loadArticles($scope, viewpoint.left, category.entertainment, "Left Entertainment News");
});

app.controller('rightEntertainmentController', function($scope, articleService) {
    articleService.loadArticles($scope, viewpoint.right, category.entertainment, "Right Entertainment News");
});

app.controller('leftPoliticsController', function($scope, articleService) {
    articleService.loadArticles($scope, viewpoint.left, category.politics, "Left Political News");
});

app.controller('rightPoliticsController', function($scope, articleService) {
	articleService.loadArticles($scope, viewpoint.right, category.politics, "Right Political News");
});

app.controller('leftSportsController', function ($scope, articleService) {
    articleService.loadArticles($scope, viewpoint.left, category.sports, "Left Sports News");
});

app.controller('rightSportsController', function ($scope, articleService) {
    articleService.loadArticles($scope, viewpoint.right, category.sports, "Right Sports News");
});

app.controller('leftOpinionController', function ($scope, articleService) {
    articleService.loadArticles($scope, viewpoint.left, category.opinion, "Left Opinion Pieces");
});

app.controller('rightOpinionController', function ($scope, articleService) {
    articleService.loadArticles($scope, viewpoint.right, category.opinion, "Right Opinion Pieces");
});