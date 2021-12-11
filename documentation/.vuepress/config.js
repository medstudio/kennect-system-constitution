module.exports = {
    title: 'Hello Kennector',
    description: 'Let\'s start playing around',
    dest: "./docs",
    head:[
        ['link', { rel: "icon", type: "image/png", sizes: "64x64", href: "/assets/favicon.png"}],
        ['link', { rel: "shortcut icon", type: "image/png", sizes: "64x64", href: "/assets/favicon.png"}],
        
    ],
    themeConfig: {
        docsDir: 'documentation',
        nav: [
            { text: 'Home', link: '/' }
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
                    ['/journeys/overview.md', 'Overview'],
                    ['/journeys/manifest.md', 'Writing Manifests for Journeys'],
                    ['/journeys/formulas.md', 'Using Formulas In Journeys'],
                    ['/journeys/storage.md', 'Writing Other Storage Targets in Manifests'],
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
                    ['/dwr/basics', 'Basics'],
                    ['/dwr/advanced', 'Advanced'],
                    ['/dwr/newFeatures', 'New Features'],
                ]
            },
            // {
            //     title: 'Incentive Module',
            //     collapsable: true,
            //     children: [
            //     ]
            // },
            ['/contact', 'Contact us']
        ]
    },
    sidebarCmg:"",
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