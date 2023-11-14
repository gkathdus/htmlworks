// 시계 생성
setInterval(myWatch, 1000);

function myWatch(){
    const now = new Date(); // 날짜와 시간 함께 생성
    let time = now.toLocaleTimeString(); // 시간만 출력
    console.log(time);

    let watch = document.getElementById("show")
    watch.innerHTML = time;
    watch.style.color = "blue";
}
// 이미지 슬라이드
window.onload = function(){
    let picture = ["images/header1.jpg", "images/header2.jpg",
                   "images/header3.jpg"];
    let picIdx = 0;
 
    showSlide();
    
    function showSlide(){
       //이미지 경로 - src 속성 사용
       document.getElementById("pic").src = picture[picIdx];
       picIdx += 1;
       if(picIdx == picture.length) {
          picIdx = 0;
       }
       setTimeout(showSlide, 2000);
    }
 }