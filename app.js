const addTrailingZero = (number) => {
  return number < 10 ? `0${number}` : number;
};

const updateTime = () => {
  // 함수명이 명사나 형용사로 끝내기
  // 값이 고정되기 때문에 const를 사용함
  const time = new Date();

  // 값이 변화되기 때문에 let을 사용함
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let am = hours >= 12 ? "PM" : "AM"; // AM에서 PM으로 넘어가는 것( AM > PM )
  let pm = hours >= 12 ? "AM" : "PM"; // PM에서 AM으로 넘어가는 것( PM > AM )

  hours = hours % 12 || 12; // converting을 함( 24시간을 12시간으로 전환시켜 줌 )

  /*
   * addTrailingZero : 숫자에 소수점 이하 자릿수를 맞추기 위해 0을 추가해주는 함수
   * ( 일의 자리수 부터 있는 0의 갯수 )
   */
  hours = addTrailingZero(hours);
  minutes = addTrailingZero(minutes);
  seconds = addTrailingZero(seconds);

  // Ajax 사용하여 해당 html 선언하기 (편의성으로 사용)
  $("#hour").html(hours);
  $("#min").html(minutes);
  $("#sec").html(seconds);
  $("#am").html(am);
  $("#pm").html(pm);

  // getElemetById를 사용하여 innerHTEML을 할당하여 사용
  // document.getElementById("hour").innerHTML = hours;
  // document.getElementById("min").innerHTML = minutes;
  // document.getElementById("sec").innerHTML = seconds;
  // document.getElementById("am").innerHTML = am;
  // document.getElementById("pm").innerHTML = pm;
};

updateTime();
setInterval(updateTime, 1000); // 시간을 매일 초단위로 업데이트( 1000은 1초 )
