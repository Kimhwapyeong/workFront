// 이미지 배열 만들기
const pics = ['pic-1.jpg', 'pic-2.jpg', 'pic-3.jpg', 'pic-4.jpg', 'pic-5.jpg', 'pic-6.jpg']

// 컨테이너 박스의 배경 화면
// 배열의 0번째 인덱스 값을 넣어 봅시다
// 1. 컨테이너 박스 선택
let index=0;
window.onload = function(){
    container.style.backgroundImage = 'url(images/pic-1.jpg)';

    right.addEventListener('click', function(){
        index++;
        /// 인덱스가 pics 배열의 크기보다 1작은 값보다 크면 index값을 0으로 변경
        if(index > pics.length-1){
            index = 0;
        }
        /// pics배열의 index값으로 container의 배경 변경
        container.style.backgroundImage = `url(images/${pics[index]})`;
    });

    left.addEventListener('click', () => {
        index--;
        /// index가 0보다 작으면 index를 pics 배열의 최대 인덱스 값으로 변경
        if(index < 0){
            index = pics.length-1;
        }
        container.style.backgroundImage = `url(images/${pics[index]})`;
    });
}

// 일정 간격으로 박복적으로 콜백 함수를 실행
// setInterval(콜백함수, 대기시간(밀리초), (콜백함수의 인자 나열));
// var i = 0;
// 3초 간격으로 이미지를 변경해주는 함수
var setInterval = setInterval(function(){

    // i++;
    // console.log('setInterval' + i);
    imgChange();
    
}, 5000);

/// index값에 1씩 더하여 이미지 변환
// function imgChange(){
//     // 주의 : index, pics를 함수 외부에서 참조할 수 있도록 전역변수로 생성히야 한다.
//     index++;

//     if(index > pics.length-1){
//         index = 0;
//     }
//     container.style.backgroundImage = `url(images/${pics[index]})`;
// }

/// 임의의 index값을 생성해서 이미지를 변환
function imgChange(){
    // 주의 : index, pics를 함수 외부에서 참조할 수 있도록 전역변수로 생성히야 한다.
    index = parseInt(Math.random()*6);
    container.style.backgroundImage = `url(images/${pics[index]})`;
}

function stop(){
    console.log('setInterval 중지');
    clearInterval(setInterval);
}
