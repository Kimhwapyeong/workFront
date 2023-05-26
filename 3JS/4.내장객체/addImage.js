window.onload = () => {
    let imgNode = document.createElement('img');
    let date = new Date();
    let hour = date.getHours();

    if(hour < 12){
        imgNode.src = 'images/morning.jpg';
    }else{
        imgNode.src = 'images/afternoon.jpg';
    }
    container.appendChild(imgNode);
}