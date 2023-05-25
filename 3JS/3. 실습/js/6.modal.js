window.onload = function(){

    // open, close는 window객체의 내장 함수이므로
    // id로 찹조할 수 없다.
    // 따라서 직접 변수에 담아주어야 한다.
    let open = document.querySelector('#open'); 
    let close = document.querySelector('#close');
    // 특수문자가 입력돼서 아이디로 접근 불가, 변수에 담아주어야 함
    let modalbox = document.querySelector('#modal-box');

    // 모달창 열기
    open.addEventListener('click', function(){
        // class속성 active 추가
        modalbox.classList.toggle('active');
    })

    // 모달창 닫기
    close.addEventListener('click', function(){
        // class속성 active 제거
        modalbox.classList.toggle('active');
    })
}