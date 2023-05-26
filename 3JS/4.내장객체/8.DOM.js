window.onload = () => {

    btn1.addEventListener('click', () => {

        /// 텍스트 노드를 생성할 때 입력될 값을 사용자에게 입력받는다.
        let text = prompt('text');

        // 요소노드 생성
        let elementNode = document.createElement('h3');
        
        // 텍스트 노드 생성
        let textNode = document.createTextNode(text);

        // 연결(자식요소로 등록)
        // 부모요소의 맨 마지막 요소로 추가됨
        elementNode.appendChild(textNode);
        area1.appendChild(elementNode);

        area1.innerHTML += `<h3>innerHTML로도 가능하네!</h3>`;
    });

    // 텍스트 노드가 없는 요소 노드 생성
    // 요소의 속성을 설정하는 방법!
    btn2.addEventListener('click', () => {

        // img 요소 노드 생성
        let imgNode = document.createElement('img');

        // 속성 설정하는 생성
        imgNode.src = 'images/morning.jpg';
        imgNode.setAttribute('width', '300px');
        imgNode.setAttribute('height', '200px');

        // 연결(자식요소로 추가)
        area2.appendChild(imgNode);

        area2.innerHTML += '<img src="images/morning.jpg" width="150px", height="100px">';

    });

    btn3.addEventListener('click', (e) => {
        area3.remove();

        // 이벤트가 발생한 요소
        let target = e.target;
        console.log(target);

        // 상위요소를 반환
        console.log(target.parentNode);

        // 상위요소의 자식노드를 삭제
        let delNode = document.getElementById('area1');
        target.parentNode.removeChild(delNode)
    });

    btn4.addEventListener('click', () => {
        // p 요소 생성
        let pNode = document.createElement('p');
        // text node 생성
        let textNode = document.createTextNode('신규 노드 추가!');
        // 연결
        pNode.appendChild(textNode);
        // 부모요소 선택(body 선택)
        let body = document.querySelector('body');
        // 노드 선택(삽입하고 싶은 위치의 요소를 선택) h1 선택
        let h1 = document.querySelector('h1');

        // insertBefore(추가할요소, 추가할 위치의 요소) /// 선택한 요소의 앞에 추가
        body.insertBefore(pNode, btn2);
        body.appendChild(pNode);
    });
}