window.onload = () => {
    /// li 노드를 생성해서 변수에 담는다
    let liNode = document.createElement('li');
    /// li 노드에 담아줄 textNode를 생성해서 변수에 담는다
    let JavaTextNode = document.createTextNode('Java');

    /// li 노드에 textNode를 합쳐준다.
    liNode.appendChild(JavaTextNode);

    /// 삽입할 위치를 정하기 위해 변수를 생성한다.
    let li = document.querySelector('li');
    /// li 태그(첫번째 요소) 앞에 liNode를 삽입
    items.insertBefore(liNode, li);

    let liNode2 = document.createElement('li');
    let OracleTextNode = document.createTextNode('Oracle');

    liNode2.appendChild(OracleTextNode);

    items.insertBefore(liNode2, li);

    let liNode3 = document.createElement('li');
    let JSPTextNode = document.createTextNode('JSP/Servlet');

    liNode3.appendChild(JSPTextNode);
    /// items의 마지막 요소로 liNode3 삽입
    items.appendChild(liNode3)

    let liNode4 = document.createElement('li');
    let SpirngTextNode = document.createTextNode('Spring');

    liNode4.appendChild(SpirngTextNode);

    items.appendChild(liNode4);


}