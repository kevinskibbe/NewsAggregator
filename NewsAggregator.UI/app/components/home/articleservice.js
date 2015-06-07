var defaultCount = 10;
var defaultIncrement = 5;

app.service('articleService', function ($resource) {
    this.getArticles = function (viewpoint, category, count, callback) {
        $resource('http://kevinskibbe-001-site1.smarterasp.net/article/get/' + viewpoint + '/' + category + '/' + count).query(function (articles) {
            callback(articles);
        });
    };
    this.loadArticles = function ($scope, viewpoint, category, header) {
	    this.getArticles(viewpoint, category, defaultCount, function (result) {
	        $scope.count = defaultCount;
	        $scope.articleSection = {
	            header: header,
	            articles: result,
	            moreAvailable: true
	        };
	    });

	    var myFunc = this.getArticles; // hacky...getting around the loss of "this" during a callback...need to solve (http://stackoverflow.com/questions/19842669/calling-a-function-in-angularjs-service-from-the-same-service)
	    $scope.more = function () {
	        var previousCount = $scope.count;
	        $scope.count += defaultIncrement;
	        myFunc(viewpoint, category, $scope.count, function (result) {
	            $scope.articleSection = {
	                header: header,
	                articles: result,
	                moreAvailable: $scope.count <= result.length
	            };
	        });
	    }

	    $scope.formatDate = function formatDate(input) {
	        var date = new Date(input);
	        var hours = date.getHours();
	        var minutes = date.getMinutes();
	        var ampm = hours >= 12 ? 'pm' : 'am';
	        hours = hours % 12;
	        hours = hours ? hours : 12; // the hour '0' should be '12'
	        minutes = minutes < 10 ? '0' + minutes : minutes;
	        var strTime = hours + ':' + minutes + ' ' + ampm;
	        return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
	    }
	};
});