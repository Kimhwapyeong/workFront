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
            if(json.response.body.items == ''){
                alert('주변에 캠핑장이 없습니다. 반경을 확대해보세요!');
                return;
            }
            
            for(let obj of item){
                box.innerHTML += `<h1>${obj.facltNm}</h1>
                                    <img src=${obj.firstImageUrl} art='캠핑장사진'>
                                    <p>${obj.intro}</p>`;
                                    
                positions.push(
                    {title: obj.facltNm,
                    latlng: new kakao.maps.LatLng(obj.mapY, obj.mapX)}
                ) 
                   
            }
            // console.log(positions);
            // 마커 이미지의 이미지 주소입니다
            var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
                
            for (var i = 0; i < positions.length; i ++) {
                
                // 마커 이미지의 이미지 크기 입니다
                var imageSize = new kakao.maps.Size(24, 35); 
                
                // 마커 이미지를 생성합니다    
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
                
                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: positions[i].latlng, // 마커를 표시할 위치
                    title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    image : markerImage // 마커 이미지 
                });
            }
        })
    }

}