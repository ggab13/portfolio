import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    battleship,
    restaurant,
    musify,
    tictactoe,
    weather,
    library,
    foodora,
    eagle,
    hostel,
    developer,
    producer,
    chef,
    catcafe,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: '<About/>',
    },
    {
        id: 'work',
        title: '<Work/>',
    },
    {
        id: 'contact',
        title: '<Contact/>',
    },
];

const services = [
    {
        title: 'Web Developer',
        icon: developer,
    },

    {
        title: 'Music Producer',
        icon: producer,
    },
    {
        title: 'Hobby Chef',
        icon: chef,
    },
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },

    {
        name: 'React JS',
        icon: reactjs,
    },

    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },

    {
        name: 'git',
        icon: git,
    },
    {
        name: 'figma',
        icon: figma,
    },
];

const experiences = [
    {
        title: 'Sales Associate',
        company_name: 'American Eagle Outfitters',
        icon: eagle,
        iconBg: '#000000',
        date: 'July 2015 - May 2016',
        points: [
            'Greeting customers, responding to questions, improving engagement with merchandise and providing outstanding customer service.',
            'Operating cash registers, managing financial transactions, and balancing drawers.',
            'Introducing promotions and opportunities to customers.',
            'Maintaining an orderly appearance throughout the sales floor.',
        ],
    },
    {
        title: 'Barista',
        company_name: 'Cat Cafe',
        icon: catcafe,
        iconBg: '#000000',
        date: 'September 2016 - June 2017',
        points: [
            'Welcoming customers, informing them about specials or new items, answering questions, and accepting orders and payments',
            'Preparing foods, such as sandwiches or baked goods, and grinding and blending coffee beans, brewing coffee and tea, and serving items to customers.',
            'Cleaning and restocking work and dining areas, emptying trash and sanitizing equipment and utensils.',
        ],
    },
    {
        title: 'Receptionist',
        company_name: '2night Hostel & Margaret Island Hostel',
        icon: hostel,
        iconBg: '#000000',
        date: 'September 2017 - April 2020',
        points: [
            'Greet all guests and assist them with check-in and check-out.',
            'Respond to all guest questions and requests in person and in emails',
            'Manage guest bookings and reservations',
            'Assist with administrative and clerical tasks as needed',
            'Managing cleaning staffs duties',
        ],
    },
    {
        title: 'Content Upload Agent',
        company_name: 'Foodora',
        icon: foodora,
        iconBg: '#000000',
        date: 'April 2020 - Aug 2023',
        points: [
            'Developing and maintaining an up-to-date database of our website content, ensuring the properly paced flow of new written materials and adjusting the existing ones.',
            'Collaborating with the content team to develop content-planning strategies.',
            'Sorting and uploading written content in accordance with the deadlines.',
            'Daily communication with Partners',
        ],
    },
];

const projects = [
    {
        name: 'Musify',
        description: 'Musify was made to practice React and Spotify API Calls.',
        tags: [
            {
                name: 'react',
            },
            {
                name: 'api',
            },
            {
                name: 'scss',
                color: '',
            },
        ],
        image: musify,
        source_code_link: 'https://github.com/ggab13/shopping-cart',
    },
    {
        name: 'Battleship Game',
        description:
            'Battleship was made to practice Webpack, JavaScript, SCSS and HTML.',
        tags: [
            {
                name: 'webpack',
                color: '',
            },
            {
                name: 'javascript',
                color: '',
            },
            {
                name: 'scss',
                color: '',
            },
            {
                name: 'html',
                color: '',
            },
        ],
        image: battleship,
        source_code_link: 'https://github.com/ggab13/battleship',
    },
    {
        name: 'Krusty Krab',
        description:
            'Krusty Krab was made to practice ES6 Modules, JavaScript, SCSS and HTML..',
        tags: [
            {
                name: 'es6 modules',
                color: '',
            },
            {
                name: 'javascript',
                color: '',
            },
            {
                name: 'scss',
                color: '',
            },
            {
                name: 'html',
                color: '',
            },
        ],
        image: restaurant,
        source_code_link: 'https://github.com/ggab13/restaurant',
    },
    {
        name: 'Weather API',
        description:
            'Weather API was made to practice API calls, JavaScript, SCSS and HTML.',
        tags: [
            {
                name: 'api',
                color: '',
            },
            {
                name: 'javascript',
                color: '',
            },
            {
                name: 'scss',
                color: '',
            },
            {
                name: 'html',
                color: '',
            },
        ],
        image: weather,
        source_code_link: 'https://github.com/ggab13/weather-api',
    },
    {
        name: 'Tic-Tac-Toe',
        description:
            'Tic-Tac-Toe was made to practice JavaScript, SCSS and HTML',
        tags: [
            {
                name: 'javascript',
                color: '',
            },
            {
                name: 'scss',
                color: '',
            },
            {
                name: 'html',
                color: '',
            },
        ],
        image: tictactoe,
        source_code_link: 'https://github.com/ggab13/Tic-Tac-Toe',
    },
    {
        name: 'Library',
        description:
            'Library was made to practice ES6 Classes, localStorage, SCSS and HTML.',
        tags: [
            {
                name: 'es6 classes',
                color: '',
            },
            {
                name: 'localstorage',
                color: '',
            },
            {
                name: 'scss',
                color: '',
            },
            {
                name: 'html',
                color: '',
            },
        ],
        image: library,
        source_code_link: 'https://github.com/ggab13/library',
    },
];

export { services, technologies, experiences, projects };
