window.onload = function(){
    btn1.addEventListener('click', ()=>{
        // window.open(); // 새탭
        // window.open('http://www.naver.com'); // 새탭이 열리고 url로 이동
        // window.open('http://www.naver.com', 'naver'); // open(url, 창이름)

        // open(url, 창이름, '속성')
        window.open('7.BOM.html', 'BOM', 'width=500, height=500');
    });

    // 타이머 관련 메소드
    // window.setTimeout()
    btn2.addEventListener('click', ()=>{
        let timerId = 0;
        
        // 새창 띄우기
        let newWindow = window.open();
        newWindow.alert('3초 후에 이 페이지는 종료 됩니다.');   /// 버튼을 누른 후 3초

        // setTimeout(콜백함수, 시간)
        // 일정시간 경과 후 콜백함수를 한 번 실행
        timerId = window.setTimeout(()=>{
            newWindow.close();
        }, 3000);

        // 타이머 id를 clearTimeout() 함수에 전달하면 해당 id의 타이머를 취소할 수 있다.
        clearTimeout(timerId);
    });

    let timerId = 0;
    btnStart.addEventListener('click', ()=>{

        // 일정시간마다 콜백함수를 반복실행
        // window.setInterval(함수, 시간)
        // 반환된 숫자값(식별값)을 이용해 종료 시켜줄 수 있다.
        timerId = window.setInterval(()=>{
            // 현재 날짜, 시간 정보를 담은 객체   
            let date = new Date();
            
            area1.innerHTML = `${date.getHours()} : ${date.getMinutes()} : `
                                + `<span id='second'>${date.getSeconds()}</span>` // date.toTimeString();

        }, 1000);

        console.log('timerId', timerId);
    });

    btnStop.addEventListener('click', ()=>{
        clearInterval(timerId);
        // timerId--;
    });

    btn3.addEventListener('click', ()=>{
        area2.innerHTML = '<h4> location 객체 </h4>';

        for(key in location){
            // console.log('key : ', key);
            // 객체[속성]
            // 객체.속성
            // console.log('value : ', location[key]);

            area2.innerHTML += `key : ${key}, value : ${location[key]}<br>`
        }
    });
}