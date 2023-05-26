window.onload = () => {
    order.addEventListener('click', () => {
        let pNode = document.createElement('p');
        let text = document.querySelector('#container > h2').innerHTML;
        let textNode = document.createTextNode(text);
    
        pNode.appendChild(textNode);
        pNode.style.fontSize = '0.8em';
        pNode.style.fontWeight = '800';
        pNode.style.color = 'blue';

        orderInfo.appendChild(pNode);

    });
}