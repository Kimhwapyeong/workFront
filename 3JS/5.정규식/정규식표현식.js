window.addEventListener('load', ()=>{
    btn1.addEventListener('click', function(){
        // 리터럴을 이용한 정규 표현식 객체 생성
        // 패턴 양쪽에 /를 입력(시작기호, 종료기호)
        let regExp1 = /script/ 

        // 생성자 함수를 이용한 정규 표현식
        // 생성자의 매개값으로 패턴문자열을 지정
        let regExp2 = new RegExp('script');

        let str1 = 'javascript jqueryscript ajax';
        let str2 = 'java jquery ajax';

        console.log(regExp1, typeof(regExp1), regExp1 instanceof RegExp);
        console.log(regExp2, typeof(regExp2), regExp2 instanceof RegExp);

        /*
            RegExp 객체에서 제공하는 메소드
            객체.test(문자열)
                : 문자열에 정규식 패턴을 만족하는 값이 있으면 true, 없으면 false를 리턴한다.
            객체.exec(문자열)
                : 문자열에 정규식 패턴을 만족하는 값이 있으면 처음 매치된 문자열을 리턴한다.
        */
        console.log('regExp1', regExp1);
        console.log('str1', str1);
        console.log('str2', str2);
        area1.innerHTML = `<h3>정규표현식 객체 생성`;
        
        // RegExp 객체에서 제공하는 메소드 사용
        // regExp1 리터럴을 이용한 정규 표현식 (/패턴/)
        // regExp2 생성자 함수 (new RegExp('패턴'))
        // script
        area1.innerHTML += `regExp1.test(str1) : ${regExp1.test(str1)} <br>`;
        area1.innerHTML += `regExp1.test(str2) : ${regExp1.test(str2)} <br>`;
        area1.innerHTML += `regExp2.exec(str1) : ${regExp2.exec(str1)} <br>`;
        area1.innerHTML += `regExp2.exec(str2) : ${regExp2.exec(str2)} <br>`;
        
        /*
            String 객체에서 정규 표현식 객체를 이용하는 메소드
            - 문자열.match(정규식) 
                : 문자열에서 정규식 패턴의 값과 일치하는 값을 리턴한다.
            - 문자열.replace(정규식, 바꿀값)
                : 문자열에서 정규식 패턴의 값과 일치하는 부분을 바꿀값으로 변경한다.
            - 문자열.search(정규식)
                : 문자열에서 정규식 패턴의 값과 일치하는 부분의 시작 인덱스를 리턴한다.
            - 문자열.split(정규식)
                : 문자열에서 정규식 패턴의 값과 일치하는 값을 구분자로 하여 배열을 생성해 리턴한다.
         */
        area1.innerHTML += `str1.match(regExp1) : ${str1.match(regExp1)} <br>`;
        area1.innerHTML += `str1.replace(regExp1, '김화평킹왕짱') : ${str1.replace(regExp1, '김화평킹왕짱')} <br>`;
        area1.innerHTML += `str1.search(regExp1) : ${str1.search(regExp1)} <br>`;
        area1.innerHTML += `str1.split('') : ${str1.split(' ')} <br>`;
    })
    
    btn2.addEventListener('click', ()=>{
        let str = 'JavaScript jQuery Ajax';
        area2.innerHTML = `<h3>플래그문자`;

        // replace() 메소드에서 '$&'는 패턴을 만족하는 문자열을 가리킨다.
        area2.innerHTML += '/a/ : ' + str.replace(/a/, '($&)') + '<br>';
        area2.innerHTML += '/a/i : ' + str.replace(/a/i, '($&)') + '<br>';
        area2.innerHTML += '/a/g : ' + str.replace(/a/g, '($&)') + '<br>';
        area2.innerHTML += '/a/gi : ' + str.replace(/a/gi, '($&)') + '<br>';
        area2.innerHTML += '/a/ig : ' + str.replace(/a/ig, '($&)') + '<br>';
    })

    btn3.addEventListener('click', ()=>{
        let str = 'a aa aaa aaaa';
        area3.innerHTML = '<h3>메타문자';

        /*
            반복검색 
            {n, m}
                앞선 패턴이 최소 n번 최대 m번 반복되는 문자열을 의미한다.
            +
                앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미한다    
            ?
                앞선 패턴이 최대 한 번 반복되는 문자열을 의미한다
        */
        area3.innerHTML += '/a{1,2}/g : ' + str.replace(/a{1,2}/g, '($&)');
        // {3, 3}
        area3.innerHTML += `<br>/a{3}/g ${str.replace(/a{3}/g, '($&)')}`
        // 앞선 패턴이 최소 2번 이상 반복되는 문자열
        area3.innerHTML += `<br>/a{2,}/g ${str.replace(/a{2,}/g, '($&)')}`
        // {1,}
        area3.innerHTML += `<br>/a+/g ${str.replace(/a+/g, '($&)')}`
        // {0,1}
        area3.innerHTML += `<br>/a?/g ${str.replace(/a?/g, '($&)')}`


        let str1 = 'Javascript\nJquery\nSheelscript\nAjax';

        /*
            문자열의 앞, 뒤 구분
                ^는 문자열의 시작을 의미한다.
                $는 문자열의 마지막을 의미한다.
        */
        area3.innerHTML += '<br>/^j/ig : ' + str1.replace(/^j/ig, '($&)');
        area3.innerHTML += '<br>/^j/igm : ' + str1.replace(/^j/igm, '($&)');
        area3.innerHTML += '<br>/ipt$/igm : ' + str1.replace(/ipt$/igm, '($&)');

        /*
        OR 검색
        [....] 내의 문자들 중 하나라도 존재할 경우를 의미한다
        [a-z]
        [A-Z]
        [0-9]
        [a-zA-Z0-9] : [] 안에서 -는 범위 지정을 의미
        [^a] : [] 안에서 ^는 not의 의미를 지님

        */
        str = '123 Javascript Jquery Ajax';
        area3.innerHTML += '<br>/[aj]/ig : ' + str.replace(/[aj]/ig, '($&)');
        area3.innerHTML += '<br>/[^aj]/ig : ' + str.replace(/[^aj]/ig, '($&)');
        area3.innerHTML += '<br>/[a-z]/g : ' + str.replace(/[a-z]/g, '($&)'); // 대소문자 구분할 때는 플래그문자 i를 빼야함
        area3.innerHTML += '<br>/[A-Z]/g : ' + str.replace(/[A-Z]/g, '($&)'); // 위와 동일
        area3.innerHTML += '<br>/[0-9]/ig : ' + str.replace(/[0-9]/ig, '($&)');
        
        /*
        임의의 문자열 검색
        . : 임의의 문자 한 개를 의미
        */
        area3.innerHTML += '<h4>임의의 문자열 검색';
        area3.innerHTML += '/...../g : ' + str.replace(/...../g, '($&)');

        /*
        \d : 숫자를 의미한다. [0-9]
        \D : 숫자가 아닌 문자를 의미한다. [^0-9]
        \w : 알파벳, 숫자, 언더 스코어(_)를 의미한다. [a-zA-Z0-9_]
        \W : 알파벳, 숫자, 언더 스코어(_)가 아닌 문자를 의미한다. [^a-zA-Z0-9_]
        \S : 공백 문자를 의미한다. (띄어쓰기, 탭, 줄바꿈) [ \n\t]
        \S : 공백 문자가 아닌 문자를 의미한다. [^ \n\t]
        */
    })
})