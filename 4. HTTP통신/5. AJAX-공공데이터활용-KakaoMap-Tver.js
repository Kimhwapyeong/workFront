var map;
window.onload = function(){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    map = new kakao.maps.Map(mapContainer, mapOption); 

    
    // 현재 나의 위치를 확인하고 mapX, mapY 요소의 value 값에 세팅하기
    if ("geolocation" in navigator) {
        /* 위치정보 사용 가능 */

        // 현재위치 요청
        // getCurrentPosition(성공콜백, 오류콜백)
        navigator.geolocation.getCurrentPosition(function(position){
            doSomething(position.coords.latitude, position.coords.longitude);
        });
    } else {
        /* 위치정보 사용 불가능 */
        alert('geolocation 지원 불가! - 현재위치를 알수 없습니다.');
    }

    let btn = document.querySelector('#btnCampInfo'); 

    // let  키워드로 선언하면 자동완성 됨
    btn.addEventListener('click', function(e){
        // 기본이벤트 제거
        e.preventDefault();
        
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

        url += parms;
        console.log('url', url);

        // ES6에서 
        // url요청 결과를 받아 옵니다
        fetch(url)
        // 요청결과과 성공이라면
        // 화살표함수에서 한줄인경우 return문과 {}가 생략 가능
        // res.json() : javascript object로 반환
        .then(res => res.json())
        .then((json)=>{
            console.log('json',json); 
            // 캠핑장 리스트를 매개변수로 넣어줍니다
            printCampInfo(json.response.body.items.item); 
            
        })
        .catch((err) => console.log(err));

    });
}

// 현재위치를 받아서 mapX, mapY에 출력
function doSomething(latitude, longitude){
    console.log('latitude', latitude); // 경도
    console.log('longitude', longitude); // 위도
    //resDiv.innerHTML = `경도 : ${latitude}, 위도 : ${longitude}`;
    
    let mapX = document.querySelector('input[name=mapX]');
    let mapY = document.querySelector('input[name=mapY]');

    mapX.value = longitude;
    mapY.value = latitude;


    // 지도의 중심위치를 변경
    var locPosition = new kakao.maps.LatLng(latitude, longitude);
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);
}

// 캠핑장 정보 출력
// 배열을 매개변수로 받아서 배열에 입력된 캠핑장 정보를 화면에 출력 합니다.
function printCampInfo(itemArr){

    // let itemArr = jsObj.response.body.items.item;

    let resDiv = document.querySelector('#result');

    // div 초기화
    resDiv.innerHTML = '';
    
    resDiv.innerHTML += '<ul>';

    for(item of itemArr){
        resDiv.innerHTML += `
            <li>
                <h1>${item.facltNm}</h1>
                <p><img src="${item.firstImageUrl}" alt="캠핑장 이미지"></p>
                <p>${item.intro}</p>    
            </li>
        `;
    }

    resDiv.innerHTML += '</ul>';
}