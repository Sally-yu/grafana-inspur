import config from 'app/core/config';

export default class StyleGuideCtrl {
  theme: string;
  // buttonNames = ['primary', 'secondary', 'inverse', 'success', 'warning', 'danger'];
  buttonNames = ['主要', '次要', '反向', '成功', '警告', '危险'];

  buttonSizes = ['btn-small', '', 'btn-large'];
  buttonVariants = ['-'];
  navModel: any;

  /** @ngInject */
  constructor(private $routeParams, private backendSrv, navModelSrv) {
    this.navModel = navModelSrv.getNav('cfg', 'admin', 'styleguide', 1);
    this.theme = config.bootData.user.lightTheme ? 'light' : 'dark';
  }

  switchTheme() {
    // this.$routeParams.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.$routeParams.theme = this.theme === 'light' ? 'light' : 'dark';

    const cmd = {
      theme: this.$routeParams.theme,
    };

    this.backendSrv.put('/api/user/preferences', cmd).then(() => {
      window.location.href = window.location.href;
    });
  }
}
