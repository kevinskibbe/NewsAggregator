app.directive('articleDirective', function($sce) {
    return {
        templateUrl: function () {
            return $sce.trustAsResourceUrl('/app/components/home/article-section.html');
		}
	};
});