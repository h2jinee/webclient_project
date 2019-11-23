(()=>{
    $("#submit").click(function(){

        var emailVal = $("#email").val().trim();
        var passwordVal = $("#password").val().trim();
        var bool = false;


        var userList = {
            email: $("#email").val().trim(),
            password: $("#password").val().trim(),
            date: new Date().getTime()
        }
        console.log(userList);


        //가져오기
        var jsonsignuplist = localStorage.getItem("signuplist");
        var signuplist = JSON.parse(jsonsignuplist);
        if(signuplist != null){
            signuplist.forEach(elem => {
                if(elem.email == emailVal){
                alert("이미 가입된 이메일입니다.");
                bool = true;
                return;
                }
                var d = new Date(elem.date);
            });
        }

        if(emailVal == '' || passwordVal == '' || bool == true) return;

        //json -> js object(배열)
        var signuplist = JSON.parse(localStorage.getItem("signuplist"));
        console.log(signuplist);

        if(signuplist == null) signuplist = [];

        signuplist.push(userList); //push : 맨 뒤에 요소를 넣음

        var jsonStr = JSON.stringify(signuplist);
        localStorage.setItem("signuplist", jsonStr);

        alert("회원가입 성공");

        //초기화
        $("#email, #password").val('');

    });
    
    // 로그인
    $("#login").click(function(){
        var emailLoginVal = $("#email").val().trim();
        var passwordLoginVal = $("#password").val().trim();

        var jsonsignuplist = localStorage.getItem("signuplist");
        var signuplist = JSON.parse(jsonsignuplist);
        if(signuplist != null){
            signuplist.forEach(elem => {
                if(elem.email == emailLoginVal && elem.password == passwordLoginVal){
                    bool = true;
                    return;
                    alert("로그인 성공");
                }
                var d = new Date(elem.date);
            });
        }
    });
})();

