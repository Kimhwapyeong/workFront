window.onload = () => {
    const bttn = document.querySelector('#bttn');
    const notiBox = document.querySelector('#noti-box');

    // 버튼이 클릭되면 실행시킬 함수를 정의
    bttn.addEventListener('click', () => {
        // notiBox에 새로운 알림을 추가
        let noti = document.createElement('div');
        noti.innerHTML = '알림내용 표시';
        // class속성 추가(디자인)
        noti.classList.add('noti');

        // 화면에 출력
        // 자식요소로 등록
        notiBox.appendChild(noti);

        // 3초 후 실행
        setTimeout(()=>{
            // 요소 삭제
            noti.remove();
        }, 3000)
    })

}