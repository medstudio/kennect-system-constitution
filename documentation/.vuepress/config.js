module.exports = {
    title: 'Hello Kennector',
    description: 'Let\'s playing around',
    dest:"./docs",
    themeConfig: {
        docsDir: 'documentation',
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Systems',
                items: [
                    { text: 'Kennect Wa', link: 'https://kennect.xyz' },
                    { text: 'Kennect App', link: 'https://in.kennect.in' },
                    { text: 'Admin 20', link: 'https://api.betkennect.xyz' },
                    { text: 'DW 25', link: 'https://dw.betkennect.xyz' },
                    { text: 'DSI 26', link: 'https://dsi.betkennect.xyz' },
                    { text: 'Emp 30', link: 'https://api.betkennect.xyz' },
                ]
            },
        ],
        sidebar: [
            ['/', 'Home'],
            {
                title: 'Liteweight Business Intellegence',
                collapsable: true,
                children: [
                    '/lbi/creation',
                    '/lbi/filters',
                    '/lbi/hierarchy',
                ]
            },
            {
                title: 'Forms, Survyes & Quizes',
                collapsable: true,
                children: [
                ]
            },
            {
                title: 'Journeys',
                collapsable: true,
                children: [
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
    markdown:{
        lineNumbers:true
    }
}