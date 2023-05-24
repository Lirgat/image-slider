import {images, leftArrow, rightArrow, articleArr, imgArr} from './initialData.js';
import {changeBrightnessDotsAndArtikles, clickedIndex} from './utilForChangeBrigtness.js';
import {changeImageAndRelativeContent} from './utilForChangeImgAndContent.js';

function initSlider() {
    if (!images || !images.length) return;
    articleArr[0].style.color = '#E3B873';
    imgArr[0].src = './icon/brightPoint.svg';
    
    let CURRENT_INDEX = 0; 
    let checkerChanging = clickedIndex;
   
    function changeImageByArrowClick(index) {
        changeImageAndRelativeContent(index);
        changeBrightnessDotsAndArtikles(index);
    };
    function checkIndexChanging() {
        if(checkerChanging!==clickedIndex){
            CURRENT_INDEX = clickedIndex
            checkerChanging = clickedIndex
        } 
    }
    leftArrow.addEventListener('click', (evt)=>{
        evt.preventDefault()
        checkIndexChanging() 
        if(CURRENT_INDEX === 0) {    
            CURRENT_INDEX = images.length - 1;
        }else{
            CURRENT_INDEX --
        }
        changeImageByArrowClick(CURRENT_INDEX);
    })
    rightArrow.addEventListener('click', (evt)=>{
        evt.preventDefault()
        checkIndexChanging()
        if(CURRENT_INDEX === images.length - 1) {
            CURRENT_INDEX = 0;
        }else{
            CURRENT_INDEX ++
        }
        changeImageByArrowClick(CURRENT_INDEX );
    })
}

export {initSlider}
