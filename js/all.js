//https://github.com/hexschool/nodejs_ajax_tutorial 緩存記憶體空間
console.clear();
//singup dom
const elRegistered = document.querySelector('.registered');
const elAccount = document.querySelector('.account');
const elPassword = document.querySelector('.password');
const elSend = document.querySelector('.send');
//singin dom
const elsignInRegistered = document.querySelector('.signIn-registered');
const elsignInAccount = document.querySelector('.signIn-account');
const elsignInPassword = document.querySelector('.signIn-password');
const elsignInSend = document.querySelector('.signIn-send');

//singup addEventListener
elSend.addEventListener('click', (e) => {
  e.preventDefault();
  //console.log(`被點擊`);
  callSingUp()
})

//singin addEventListener
elsignInSend.addEventListener('click', (e) => {
  e.preventDefault();
  //console.log(`被點擊`);
  callSingIn()
})

//singup function 
function callSingUp() {
  //email:'eva29485577@gmail.com',
  //password:'12345678',
  if (elAccount.value === '' || elPassword.value === '') {
    alert(`請填寫正確帳號與密碼`);
    return;
  }

  let obj = {};
  obj.email = elAccount.value;
  obj.password = elPassword.value;
  console.log(obj);

  axios.post('https://hexschool-tutorial.herokuapp.com/api/signup', obj)
    .then((response) => {
      //console.log(response.data);
      alert(response.data.message)

      if (response.data.message === '帳號註冊成功') {
        alert(`恭喜加入六角大家庭`);
        elRegistered.reset();
      } else {
        alert(`email已被註冊`);
      }
    })
    .catch((error) => {
      console.log(error);
    })
}


//singin function 
function callSingIn() {
  //email:'eva29485577@gmail.com',
  //password:'12345678',
  if (elsignInAccount.value === '' || elsignInPassword.value === '') {
    alert(`請填寫正確帳號與密碼`);
    return;
  }

  let obj = {};
  obj.email = elsignInAccount.value;
  obj.password = elsignInPassword.value;
  console.log(obj);

  axios.post('https://hexschool-tutorial.herokuapp.com/api/signin', obj)
    .then((response) => {
      //console.log(response.data);
      alert(response.data.message)

      if (response.data.message === '登入成功') {
        alert(`登入成功!歡迎回家!`);
        elsignInRegistered.reset();
      } else {
        alert(`請再次檢查帳號密碼是否有誤`);
      }
    })
    .catch((error) => {
      console.log(error);
    })

}