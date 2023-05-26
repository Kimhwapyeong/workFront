window.onload = () => {
    
    btn1.addEventListener('click', () => {
        let pNode = document.createElement('p');
        let textNode = document.createTextNode('Java');
        pNode.appendChild(textNode);
        
        let pNode2 = document.createElement('p');
        let textNode2 = document.createTextNode('Oracle');
        pNode2.appendChild(textNode2);
    
        let body = document.querySelector('body');
        let p = document.querySelector('p');
    
        body.insertBefore(pNode, p);
        body.insertBefore(pNode2, p);
        
        let pNode3 = document.createElement('p');
        let textNode3 = document.createTextNode('JSP/Servlet');
        pNode3.appendChild(textNode3);
        body.appendChild(pNode3);
        
        let pNode4 = document.createElement('p');
        let textNode4 = document.createTextNode('Spring');
        pNode4.appendChild(textNode4);
        body.appendChild(pNode4);

    });
    
}