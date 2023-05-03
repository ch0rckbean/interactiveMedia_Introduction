function getAccel(){
  DeviceMotionEvent.requestPermission().then(response => { // DeviceMotionEvent에 권한을 요청   IOS한정
      if (response == 'granted') { //요청이 승인되면 웹 콘솔창에 메세지를 띄움
          console.log("accelerometer permission granted");
      }
  });
}

function unPopSound () { // 소리나는 함수 정의
  var audio = new Audio (); //오디오 객체 생성
  audio.src = './bubble.mp3';  // 원본 가져오기
  var audioPlay = audio.play ();
  if (audioPlay) {
    audioPlay.catch (function (error) {
      console.log (error); // 작동 확인을 위한 콘솔창
    });
  }
}
window.addEventListener("devicemotion", motion, false);



function motion(event) {
    historicMotion["x"].push(event.acceleration.x) // 배열의 끝에 요소 추가하고 새로운 길이 반환
    historicMotion["y"].push(event.acceleration.y)
    historicMotion["z"].push(event.acceleration.z)
  }

    function popBubble () {
    let movement = mostRecentMovementOverall (75); // 지역변수, 함수에 대한 선언은 밑에 단락에 , mostrecentMovements들의 평균
    if (movement > 300) {
      list = document.getElementsByTagName ('img'); // 리스트로 이미지 가져오기
      if (list.length > 1) {
        list[list.length - 1].remove (); // 리스트에서 이미지 하나씩 삭제
        unPopSound (); // 소리 함수 호출
      }
    }
  }

  var historicMotion = { //Motion에 대한 멤버 변수 선언(전역변수) , motion은 가속도에 변화가 일어났을때 감지
    "x": [],  //모션이 일어날때 그 값들을 배열에 하나씩 저장??
    "y": [],
    "z": []
  }

  function mostRecentMovementOverall(numberOfHistoricPoints) { // movementoverall에 대한 함수
    return (mostRecentMovement(historicMotion["x"], numberOfHistoricPoints, true) + //mostRecentMovement 함수는 밑에 단락에 정의 
            mostRecentMovement(historicMotion["y"], numberOfHistoricPoints, true) + 
            mostRecentMovement(historicMotion["z"], numberOfHistoricPoints, true)) / 3.0
  }

  function mostRecentMovement(array, numberOfHistoricPoints, removeNegatives) { //historicpoints??? -> 데이터를 처리하기 위한 최소한의 값
    if (array.length > numberOfHistoricPoints) { // 최소한의 데이터양을 만족시
      totalSum = 0
      for (var toCount = 0; toCount < numberOfHistoricPoints; toCount++) {
        currentElement = array[array.length - toCount - 1]
        currentElement *= (1 - toCount / numberOfHistoricPoints) // weight the most recent data more 가중치를 부여
        if (currentElement < 0 && removeNegatives) currentElement = currentElement * -1  // 음수값일 경우 양수로 바꿔주는?, removesneg -> true
        if (currentElement > 0.1 || currentElement < -0.1) totalSum += currentElement // 조건에 만족하는 범위의 값을 더해줌
      }
      return totalSum * 100 / numberOfHistoricPoints // 반환하는 값
    }
    return 0 
  }  

  setInterval(popBubble, 100) // 0.1초 간격으로 Status를 업데이트