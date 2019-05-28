app.controller('workerMainPageController', function($scope, $http, $log) {
	$scope.engName = '';
	$scope.fullName = '';
	$scope.expectedSalary = '';
	$scope.experienceLevel = '';
	$scope.phoneNumber = '';
	$scope.url =
		'' ||
		'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435';
	const token = localStorage.getItem('token');
	const successCallBack = (response) => {
		$scope.phoneNumber = response.data.fullName;
		$scope.fullName = response.data.fullName;
		$scope.experienceLevel = response.data.experienceLevel;
		$scope.expectedSalary = response.data.expectedSalary;
		$scope.url = response.data.url;
		$log.info(response);
	};
	const errorCallBack = (response) => {
		$scope.error = response.data;
	};
	const workerPage = () => {
		$http({
			method: 'GET',
			headers: {
				'x-access-token':
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InciLCJyb2xlIjoiU21pdGgiLCJpYXQiOjE1NTkwNzkzNjAsImV4cCI6MTU1OTA4ODM2MH0.wK1E0RHpAePmy0oc1cm3VAiQt5mw0yjab2Mc8swu3KY'
			},
			url: '/workerPage'
		}).then(successCallBack, errorCallBack);
		// $http('/workerPage',).then(successCallBack,errorCallBack)
	};

	workerPage();
});
