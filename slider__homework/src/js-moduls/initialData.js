const images = [
    {
        url:'./images/chairs.png',
        alt:'Rostov-on-Don, Admiral',
        city: 'Rostov-on-Don LCD admiral',
        apartamentArea: '81 m2',
        repairTime: '3.5 months'
    },
    {
        url:'./images/2chairs-in-light-room.png',
        alt:'Sochi Thieves',
        city: 'Sochi Thieves',
        apartamentArea: '105 m2',
        repairTime: '4 months'
    },
    {
        url:'./images/big-tv-set.png',
        alt:'Rostov-on-Don Patriotic',
        city: 'Rostov-on-Don Patriotic',
        apartamentArea: '93 m2',
        repairTime: '3 months'
    }
];

const leftArrow = document.querySelector('img[alt="left-vector"]');
const rightArrow = document.querySelector('img[alt="right-vector"]');

const divImgChair = document.querySelector('.img-chair');

const dotsSpan = document.querySelector('.dots');

const articlesUnoderedList = document.querySelector('.list');
const informBlocks = document.querySelector('.four-positions');
const sectionsArr = Array.from(informBlocks.querySelectorAll('section'));
const imgArr = Array.from(dotsSpan.children);
const articleArr = Array.from(articlesUnoderedList.querySelectorAll('a'));
export {images, leftArrow, rightArrow, divImgChair, dotsSpan, articlesUnoderedList, informBlocks, sectionsArr, imgArr, articleArr}