// 페이지가 모두 불러져 왔으면 함수를 실행
// onload : 이벤트
window.onload = () => {

    // 버튼 요소 선택
    register.addEventListener('click', function(e){
        // input 필드에 입력된 내용을 변수에 저장
        let userName = username.value;
        let major = document.querySelector('#major').value;
        console.log(userName);
        console.log(major);
        let tbody = document.querySelector('#attendant > tbody');

        // 테이블의 행을 생성
        let newTr = document.createElement('tr');
        // 테이블의 한 칸을 생성
        let newTdName = document.createElement('td');
        newTdName.innerHTML = userName;
        let newTdMajor = document.createElement('td');
        newTdMajor.innerHTML = major;

        // 행에 자식요소로 칸을 추가
        newTr.appendChild(newTdName);
        newTr.appendChild(newTdMajor);

        // 테이블에 자식요소로 추가
        tbody.appendChild(newTr);

        // 버튼이 1개인 경우 submit버튼으로 동작
        // 기본 이벤트를 제거
        e.preventDefault();

    });
}