// 5번 문제.

let user = {
  name: "윤정",
  age: 20,
};

let json = JSON.stringify(user);
let userData=JSON.parse(json);

alert(json);
alert(userData);