//{ email: '', password: ''}
const emailPattern=/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/
const birthPattern = /^(19|20)\d{2}\.(0[1-9]|1[0-2])\.(0[1-9]|[12][0-9]|3[01])$/;

function validateUser(values){
    const errors={
        email:'',
        password:'',
        repassword: '',
        birth:'',
    }
    

    if(emailPattern.test(values.email)===false){
        errors.email='올바른 이메일 형식이 아닙니다. 다시 확인해주세요!'
    }

    if(values.password.length < 8 || values.password.length>16){
        errors.password='비밀번호는 8-16자 사이로 입력해주세요!'
    }

    return errors;
}

function validateLogin(values){
    return validateUser(values);
}

function validateSignup(values) {
    const errors=validateUser(values)

    if (!values.repassword) {
        errors.repassword = '비밀번호 확인은 필수 입력 사항입니다.';
    } else if (values.password !== values.repassword) {
        errors.repassword = '비밀번호가 일치하지 않습니다.';
    }

    if(birthPattern.test(values.birth)===false){
        errors.birth='올바른 생년월일 형식이 아닙니다. (형식: YYYY.MM.DD)';
    }

    return errors;
}

export { validateLogin, validateSignup };
