window.onload = () => {
    bttn.addEventListener('click', () => {
        let divNoti = document.createElement('div');
        divNoti.classList.add('noti');
        let text = prompt('알림내용');
        divNoti.innerHTML = text;

        console.log(divNoti);
        let notiBox = document.querySelector('#noti-box');
        notiBox.appendChild(divNoti);
        
        setTimeout(function(){
            notiBox.removeChild(divNoti);
            /// 자식이 아니라 직접 divNoti를 remove 해줬으면 되는 것을..
        }, 5000);
    });
}