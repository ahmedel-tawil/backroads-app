import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

const tourInfoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' +
    '                            vitae tempore voluptatum maxime reprehenderit eum quod\n' +
    '                            exercitationem fugit, qui corporis.'
export const pageLinks = [
    {
        id: 1,
        href: '#home',
        text: 'Home',
    },
    {
        id: 2,
        href: '#about',
        text: 'About',
    },
    {
        id: 3,
        href: '#services',
        text: 'Services',
    },
    {
        id: 4,
        href: '#tours',
        text: 'Tours',
    }
]


export const socialLinks = [
    {
        id: 1,
        href: 'https://www.twitter.com',
        icon: 'fab fa-facebook'
    }, {
        id: 1,
        href: 'https://www.twitter.com',
        icon: 'fab fa-twitter'
    }, {
        id: 1,
        href: 'https://www.twitter.com',
        icon: 'fab fa-squarespace'
    },
]

export const services = [
    {
        id: 1,
        icon: 'fas fa-wallet fa-fw',
        title: 'saving money',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
            '                            Asperiores, officia.',
    }, {
        id: 2,
        icon: 'fas fa-tree fa-fw',
        title: 'endless hiking',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
            '                            Asperiores, officia.',
    }, {
        id: 3,
        icon: 'fas fa-socks fa-fw',
        title: 'amazing comfort',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
            '                            Asperiores, officia.',
    },


]


export const toursData = [
    {
        id: 1,
        image: tour1,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        info: tourInfoText,
        location: 'china',
        duration: 6,
        cost: 2100

    },
    {
        id: 2,
        image: tour2,
        date: 'october 1th, 2020',
        title: 'best of java',
        info: tourInfoText,
        location: 'indonesia',
        duration: 11,
        cost: 2100

    },
    {
        id: 3,
        image: tour3,
        date: 'august 26th, 2020',
        title: 'explore hong kong',
        info: tourInfoText,
        location: 'hong kong',
        duration: 6,
        cost: 2100

    },
    {
        id: 4,
        image: tour4,
        date: 'august 26th, 2020',
        title: 'kenya highlights',
        info: tourInfoText,
        location: 'kenya',
        duration: 6,
        cost: 2100

    },

]
