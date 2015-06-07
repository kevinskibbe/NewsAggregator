app.directive('articleDirective', function($sce) {
    return {
        templateUrl: function () {
            return $sce.trustAsResourceUrl('http://kevinskibbe-001-site2.smarterasp.net/app/components/home/article-section.html');
		}
	};
});