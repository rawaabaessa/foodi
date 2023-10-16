let count = 0;
let item = document.getElementsByClassName("slide-item")[0].offsetWidth;
let itemLength = document.getElementsByClassName("slide-item").length;
let gap = 16;
let fullSize = item + gap;
let slidesContainer = document.getElementsByClassName("special-deshies-item")[0];
        function nextItem(){
            count++;
            if(count >= itemLength - 2){
                console.log("dont slide");
            }
            else{
                slidesContainer.style.transform = `translateX(${count * -fullSize}px)`;
            }  
        }
        function prevItem(){
            if(count == 0){
                console.log("dont slide");
            }
            else{
            count--;
            slidesContainer.style.transform = `translateX(${count * -fullSize}px)`;
            }
        }
let like = document.getElementsByClassName("like");
function likebtn(){
    this
}