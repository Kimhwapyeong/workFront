window.onload = () => {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(37.5605672, 126.9433486), // 지도의 중심좌표
            level: 13 // 지도의 확대 레벨
        };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption); 
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
            // console.log(item);
            box.innerHTML = '';
            let positions = [];
            var clusterer = new kakao.maps.MarkerClusterer({
                map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
                averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
                minLevel: 10 // 클러스터 할 최소 지도 레벨 
            });
            if(json.response.body.items == ''){
                alert('주변에 캠핑장이 없습니다. 반경을 확대해보세요!');
                return;
            }
            
            for(let obj of item){
                box.innerHTML += `<h1>${obj.facltNm}</h1>
                                    <img src=${obj.firstImageUrl} art='캠핑장사진'>
                                    <p>${obj.intro}</p>`;
            }
            // console.log(positions);
            // 마커 이미지의 이미지 주소입니다
            $.get(url, function(json) {
                // 데이터에서 좌표 값을 가지고 마커를 표시합니다
                // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
        
                // 캠핑장 배열을 꺼내옵니다
                let item = json.response.body.items.item;
                console.log('item', item);
        
                // 배열을 돌면서 마커를 생성
                var markers = $(item).map(function(i, position) {
                    return new kakao.maps.Marker({
                        position : new kakao.maps.LatLng(position.mapY, position.mapX)
                        , title : position.facltNm
                    });
                });
        
                console.log('markers', markers);
                // 클러스터러에 마커들을 추가합니다
                clusterer.addMarkers(markers);
            });
        })
    }

}