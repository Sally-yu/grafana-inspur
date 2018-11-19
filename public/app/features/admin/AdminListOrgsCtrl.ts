export default class AdminListOrgsCtrl {
  /** @ngInject */
  constructor($scope, backendSrv, navModelSrv) {
    $scope.init = () => {
      $scope.navModel = navModelSrv.getNav('cfg', 'admin', 'global-orgs', 1);
      $scope.getOrgs();
    };

    $scope.getOrgs = () => {
      backendSrv.get('/api/orgs').then(orgs => {
        $scope.orgs = orgs;
      });
    };

    $scope.deleteOrg = org => {
      $scope.appEvent('confirm-modal', {
        // title: 'Delete',
        // text: 'Do you want to delete organization ' + org.name + '?',
        // text2: 'All dashboards for this organization will be removed!',
        // icon: 'fa-trash',
        // yesText: 'Delete',
        title: '删除',
        text: '确认删除组织: ' + org.name + '?',
        text2: '该组织下的所有仪表盘都会被删除!',
        icon: 'fa-trash',
        yesText: '删除',
        onConfirm: () => {
          backendSrv.delete('/api/orgs/' + org.id).then(() => {
            $scope.getOrgs();
          });
        },
      });
    };

    $scope.init();
  }
}
