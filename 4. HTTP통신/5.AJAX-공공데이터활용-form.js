window.onload = () => {
    btn.addEventListener('click', (e) => {
        // 기본 이벤트 제거
        e.preventDefault();

        // 현재 나의 위치를 확인하고 mapX, mapY 요소에 세팅하기
        if ("geolocation" in navigator) {
            /* 위치정보 사용 가능 */
      
            // 현재위치 요청
            // getCurrentPosition(성공콜백, 오류콜백)
            navigator.geolocation.getCurrentPosition((position) => {
              mapXY(position.coords.latitude, position.coords.longitude);
            });
        } else {
            /* 위치정보 사용 불가능 */
            alert('geolocation 지원 불가! - 현재 위치를 알 수 없습니다.');
        }

        
    });

    // 자바스크립트는 순서대로 진행되지 않으므로 화면에 출력하는 코드를
    // 콜백함수 내부에 작성해 주어야 위도와 경도가 변경된 후의 value 값을 전달해줄 수 있다
    function mapXY(latitude, longitude){
        mapY.value = latitude;
        mapX.value = longitude;

        let campForm = document.querySelector('#campForm');
        let formData = new FormData(campForm);

        let url = 'https://apis.data.go.kr/B551011/GoCamping/locationBasedList?';
        let parms = '';
        // key/value pairs 반환
        for(let pair of formData.entries()){
            // console.log('pair[0]', pair[0]);
            // console.log('pair[1]', pair[1]);

            parms += `${pair[0]}=${pair[1]}&`;

        }

        
        url += parms
        console.log(url);

        // ES6에서
        // url요청 결과를 받아옵니다
        fetch(url)
        // 요청결과가 성공이라면
        // 화살표함수에서 한 줄인 경우 return문과 {}가 생략 가능
        // res.json() : javascript object로 반환
        .then(res => res.json())
        .then((json)=>{
            // console.log(json);
            let item = json.response.body.items.item;
            console.log(item);
            box.innerHTML = '';
            for(let obj of item){
                box.innerHTML += `<h1>${obj.facltNm}</h1>
                                    <img src=${obj.firstImageUrl} art='캠핑장사진'>
                                    <p>${obj.intro}</p>`;
            }
        })
    }
}