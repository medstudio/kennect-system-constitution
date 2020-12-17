module.exports = {
    title: 'Hello Kennector',
    description: 'Let\'s playing around',
    dest: "./docs",
    themeConfig: {
        docsDir: 'documentation',
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Systems',
                items: [
                    { text: 'Kennect Wa', link: 'https://kennect.xyz' },
                    { text: 'Kennect App', link: 'https://in.kennect.in' },
                    { text: 'Admin 20', link: 'https://api.kennectweb.com' },
                    { text: 'DW 25', link: 'https://dw.betkennect.xyz' },
                    { text: 'DSI 26', link: 'https://dsi.betkennect.xyz' },
                    { text: 'Emp 30', link: 'https://api.kennectweb.com' },
                ]
            },
        ],
        sidebar: [
            ['/', 'Home'],
            {
                title: 'Liteweight Business Intellegence',
                collapsable: true,
                children: [
                    ['/lbi/creation', 'Creation'],
                    ['/lbi/filters', 'Filters'],
                    ['/lbi/hierarchy', 'Hierarchy'],
                ]
            },
            {
                title: 'Forms, Surveys & Quizes',
                collapsable: true,
                children: [
                    ['surveys/me-app', "Multi Entry Apps"],
                    // ['surveys/me-app', "Quizes"]
                ]
            },
            {
                title: 'Journeys',
                collapsable: true,
                children: [
                    ['/journeys/overview.md','Overview'],
                    ['/journeys/manifest.md','Writing Manifests for Journeys'],
                    ['/journeys/formulas.md','Using Formulas In Journeys'],
                    ['/journeys/storage.md','Writing Other Storage Targets in Manifests']

                    ['/journeys/inputConfig.md', 'InputConfig in Manifests'],
                    ['/journeys/dependencies.md', 'Dependencies in Manifests'],
                    ['/journeys/outputCollectionsNames.md', 'Output Collections Names in Manifests'],
                    ['/journeys/validators.md', 'Validators in Manifests'],
                    ['/journeys/masterDataMap.md', 'MasterDataMap'],
                ]
            },
            {
                title: 'Data Warehouse & Reports',
                collapsable: true,
                children: [
                ]
            },
            {
                title: 'Incentive Module',
                collapsable: true,
                children: [
                ]
            },
            ['/contact', 'Contact us'],
        ]
    },
    markdown: {
        lineNumbers: true
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': 'assets'
            }
        }
    }
}