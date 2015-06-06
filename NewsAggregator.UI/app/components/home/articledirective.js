app.directive('articleDirective', function($sce) {
    return {
        templateUrl: function () {
            return $sce.trustAsResourceUrl('http://localhost:61544/app/components/home/article-section.html');
		}
	};
});