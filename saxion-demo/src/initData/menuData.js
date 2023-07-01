export default [
    {
        title: 'DashBoard', icon: 'mdi-view-dashboard-outline', hasSubViews: false, routeName: 'Dashboard',
        subOptions: []
    },
    {
        title: 'Charge Points', icon: 'mdi-ev-station', hasSubViews: false, routeName: 'ChargePoints',
        subOptions: []
    },
    {
        title: 'Users', icon: 'mdi-account-group-outline', hasSubViews: false, routeName: 'Users',
        subOptions: []
    },
    {
        title: 'Group', icon: 'mdi-home-group', hasSubViews: true, routeName: '',
        subOptions: [
            {title: 'Forms', icon: 'mdi-form-select', routeName: 'Groups'},
            {title: 'Organizations', icon: 'mdi-office-building-outline', routeName: ''},
        ]
    },
    {
        title: 'Roaming', icon: 'mdi-earth', hasSubViews: true, routeName: '',
        subOptions: [

            {title: 'Parties', icon: 'mdi-handshake-outline', routeName: ''},
            {title: 'EVEs', icon: 'mdi-car-electric-outline', routeName: ''},
        ]
    },

]
