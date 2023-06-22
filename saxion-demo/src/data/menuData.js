export default [
    {
        title: 'DashBoard', icon: 'mdi-view-dashboard-outline', hasSubViews: false, routeName: 'Form-View',
        subOptions: []
    },
    {
        title: 'Admins', icon: 'mdi-account-group-outline', hasSubViews: false, routeName: 'Form-Group',
        subOptions: []
    },
    {
        title: 'Associations', icon: 'mdi-home-group', hasSubViews: true, routeName: '',
        subOptions: [
            {title: 'Charge Points', icon: 'mdi-ev-station', routeName: ''},
            {title: 'Organizations', icon: 'mdi-office-building-outline', routeName: ''},
        ]
    },
    {
        title: 'Roaming', icon: 'mdi-earth', hasSubViews: true, routeName: '',
        subOptions: [
            {title: 'Locations', icon: 'mdi-map-marker-outline', routeName: ''},
            {title: 'Parties', icon: 'mdi-handshake-outline', routeName: ''},
            {title: 'EVEs', icon: 'mdi-car-electric-outline', routeName: ''},
        ]
    },

]
