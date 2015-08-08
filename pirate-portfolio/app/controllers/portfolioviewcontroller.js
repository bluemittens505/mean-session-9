portfolioApp.controller("PortfolioViewController", function($scope, $routeParams){

		$scope.portfolio_name = $routeParams.portfolio_name;

		$scope.load_error_text = "";

		var portfolios = {
			'vessel1309': [
			{ filename: "drunkenPirate_thumb3.png",
			date: "2013/09/05",
			description: "I love this boat, so much booty." },
			{ filename: "drunkenPirate_thumb3.png",
			date: "2013/09/06",
			description: "We had a wonderful time on her."}],
			'innocents1404': [
			{ filename: "drunkenPirate_thumb2.png",
			date: "2014/04/14",
			description: "So cold and so much sacking!" },
			{ filename: "drunkenPirate_thumb2.png",
			date: "2014/04/15",
			description: "The sails are so white here."}],
			'firstmate1210': [
			{ filename: "drunkenPirate_thumb1.png",
			date: "2012/10/01",
			description: "Getting mah pipe on!"},
			{ filename: "drunkenPirate_thumb1.png",
			date: "2012/10/02",
			description: "FTW!!!11!one!1"}]
		};

		if (portfolios[$scope.portfolio_name]) {
			$scope.portfolios = portfolios[$scope.portfolio_name];
		} else {
			$scope.load_error_text = "Aaargh! I can't find the darn	portfolio";
		};

	});