window.onload = () => {
    
    // 버튼이 클릭되면
    register.addEventListener('click', (e) => {
        
        console.log(jsObj);
        
        e.preventDefault();
        
        // console.log(jsonStr);
        
        
        // console.log(jsObj);
        // console.log(jsObj.name);
        // console.log(jsObj.major);
        
        let tbody = document.querySelector('#attendant > tbody');
        for(obj of jsObj){
            let trNode = document.createElement('tr');
            let tdNode1 = document.createElement('td');
            let tdNode2 = document.createElement('td');
            let tdNode3 = document.createElement('td');
            
            let tdNode1Text = document.createTextNode(obj.name);
            let tdNode2Text = document.createTextNode(obj.major);
            let tdNode3Text = document.createTextNode(obj.grade);
            
            tdNode1.appendChild(tdNode1Text);
            tdNode2.appendChild(tdNode2Text);
            tdNode3.appendChild(tdNode3Text);
    
            trNode.appendChild(tdNode1);
            trNode.appendChild(tdNode2);
            trNode.appendChild(tdNode3);
            
            tbody.appendChild(trNode);
            
        }
        
    });
}
// json 형식의 문자열
// json 형식의 문자열 + 배열
// []안에 json형식의 문자열을 ,를 이용하여 연결
let jsonStr = `
    [
        {
            "name" : "도레미"
            , "major" : "컴퓨터 공학"
            , "grade" : 2
        }
        ,  {
            "name" : "솔라시"
            , "major" : "컴퓨터 공학"
            , "grade" : 2
        }
        ,  {
            "name" : "레미파"
            , "major" : "컴퓨터 공학"
            , "grade" : 2
        }
        ,  {
            "name" : "미파솔"
            , "major" : "컴퓨터 공학"
            , "grade" : 2
        }
        
    ]`
let jsObj = JSON.parse(jsonStr);



// // json 형식 문자열을 파싱해서 화면에 출력
// let jsonStr = `{
    //     "name" : "도레미"
    //     , "major" : "컴퓨터 공학"
    //     , "grade" : 2
    // }`

// // jsObj로 변경
// let jsObj = JSON.parse(jsonStr);

// // 화면에 출력