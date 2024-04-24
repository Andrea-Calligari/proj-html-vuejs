import { reactive } from 'vue'


export const store = reactive ({
    headerLinks: [
        {
            id: 0,
            entries: 'ABOUT',
            href: '#'

        },
        {
            id: 1,
            entries: 'SERVICE',
            href: '#'

        },
        {
            id: 2,
            entries: 'YATCHS',
            href: '#'

        },
        {
            id: 3,
            entries: 'RESERVATION',
            href: '#'

        },
        {
            id: 4,
            entries: 'BLOG',
            href: '#'

        },
        {
            id: 5,
            entries: 'CONTACTS',
            href: '#'

        },
    ],
    images_path: [
        {
            id: 0,
            path: '/img/services-1.jpg'

        },
        {
            id: 1,
            path: '/img/services1.jpg'

        },
        {
            id: 2,
            path: '/img/services2.jpg'
            
        },
        {
            id: 3,
            path: '/img/services3.jpg'

        },
        {
            id: 4,
            path: '/img/services4.jpg'

        },
        {
            id: 5,
            path: '/img/services5.jpg'

        },
        {
            id: 6,
            path: '/img/services6.jpg'

        },
        {
            id: 7,
            path: '/img/services7.jpg'

        },
    ]



})