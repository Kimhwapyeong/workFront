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
        /// 인덱스값이 pics 배열의 크기보다 1이 작다면 배경 이미지를 인덱스 값으로 바꿔준다.
        if(index <= pics.length-1){
            container.style.backgroundImage = `url(images/${pics[index]})`;
        /// 인덱스값이 pics 배열의 크기와 같다면 0번 인덱스(배열의 첫 번째 그림)로 배경을 바꿔준다.
        }else{
            index = 0;
            container.style.backgroundImage = `url(images/${pics[index]})`;
        }
    });

    left.addEventListener('click', () => {
        index--;
        /// 인덱스값이 0보다 크거나 같다면 
        if(index >= 0){
            container.style.backgroundImage = `url(images/${pics[index]})`;
        }else{
            index = pics.length-1;
            container.style.backgroundImage = `url(images/${pics[index]})`;
        }
    });

    /// if문의 조건만 바꿔줘도 코드를 절반가까이 줄일 수 있었다.
}