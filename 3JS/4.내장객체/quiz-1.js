window.onload = () => {
    // console.log('접합성공')
    btn1.addEventListener('click', function(e){
        let trNode = document.createElement('tr');
        let tdNode1 = document.createElement('td');
        let tdNode2 = document.createElement('td');
        let tbody = document.querySelector('tbody');
        
        /// username과 major의 입력값(value)를 TextNode로 만들어 변수에 저장
        let nameText = document.createTextNode(username.value);
        let majorText = document.createTextNode(major.value);
        
        /// nameText와 majorText를 각각 tdNode에 자식으로 넣어줌
        tdNode1.appendChild(nameText);
        tdNode2.appendChild(majorText);

        /// trNode에 tdNode1과 tdNode2를 넣어줌
        trNode.appendChild(tdNode1);
        trNode.appendChild(tdNode2);
        
        console.log(trNode);

        /// tbody에 자식객체로 trNode를 넣어줌
        tbody.appendChild(trNode);

        /// 엔터 누르면 username 과 major 입력창을 빈문자열로 초기화
        username.value = '';
        major.value = '';

        /// 엔터 누르면 username으로 커서 이동
        username.focus();
        
        /// 이벤트 객체 e가 갖고 있는 기본 이벤트 제거
        e.preventDefault();
    
    });

}