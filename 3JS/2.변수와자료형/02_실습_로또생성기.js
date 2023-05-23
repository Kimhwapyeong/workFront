/*
    1. 화면이 모두 로드된 이후 실행
        window.onload = function(){...}
    
    2. 버튼을 선택, div 선택
        document.getElementById('id')
    
    3. 로또 번호 생성
        임의의 번호 생성
        parseInt(Math.random()*6)

    4. 버튼을 클릭하면 div에 생성된 번호를 출력
        div.innerHTML = ''
*/

// 1. 화면이 모두 로드된 이후 실행
window.onload = function(){
    console.log('화면이 모두 로딩 되었습니다.');

    // 2. 버튼을 선택, div 선택
    let btn1 = document.getElementById('btn1');
    let lottoDiv = document.querySelector('div[class=lottoDiv]');

    // let nums = [3, 5, 7, 9, 12, 15];

    let nums = new Array(6);
    // 3. 버튼이 클릭되면 div를 초기화
    btn1.onclick = function(){
        lottoDiv.innerHTML = '';

        for(let i=0; i<nums.length; i++){
            let no = parseInt(Math.random()*45+1);
            // console.log(no);
            nums[i] = no;

            // // 중복 제거, j=i; j>=0; j-- 로 했다가 오류를 찾느라 힘들었다.
            for(let j=0; j<i; j++){
                // console.log(nums[j] == nums[i]);
                if(nums[j] == nums[i]){
                    --i;  // i를 1 감소 시킨는 것은, 중복되는 수가 있으면 값을 다시 생성하겠다는 뜻.
                }    
            }
        }
        // // 배열의 오름차순 정렬
        nums.sort(function (a, b) {
            return a - b;
        });
        // for(let i=0; i<nums.length; i++){
        //     let no = parseInt(Math.random()*45+1);
        //     // console.log(no);
        //     nums[i] = no;
        // }
        
        for(let num of nums){
            lottoDiv.innerHTML += `<div class="ball">${num}</div>`;
        }

        // 색상 변경
        let ballList = document.querySelectorAll('div[class=ball]');
        for(let i=0; i<ballList.length; i++){
            // console.log(i);
            // // for 조건에 (let i in ballList)를 사용했더니 
            // 마지막에 entries라는 값이 같이 출력되어 오류가 발생했다.
            let color = getColor();

            ballList[i].style.backgroundColor = color;
            ballList[i].style.borderColor = color;
        }
    }
}
function getColor(){
    let r = parseInt(Math.random()*150 + 106);
    let g = parseInt(Math.random()*150 + 106);
    let b = parseInt(Math.random()*150 + 106);
    let rgbColor = `rgb(${r}, ${g}, ${b})`;
    return rgbColor;
    console.log('색상반환');
}