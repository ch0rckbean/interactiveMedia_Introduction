class App{
    constructor(){
       
        this.window=document.querySelector('body');  //화면 클릭시 버블 생성 버튼

        this.window.addEventListener('click',this.pop.bind(this),false); //버블 추가하는 함수 pop 실행
        this.window.addEventListener('touch',this.pop.bind(this),false); //버블 추가하는 함수 pop 실행
        this.bg=document.querySelector('.bg');
        
        this.window.addEventListener('resize',this.resize_evt.bind(this),false);
    }

    pop(){
        var count=0;  //버블 갯수
        count++;   //1개씩 버블 추가
        var my_img=document.createElement("img");  //버블 이미지 가져오기
        my_img.src="./images/bubble2.png";

        my_img.width=Math.random()*(150-30)+30; //버블 가로 크기 랜덤 지정
        my_img.height=Math.random()*(150-40)+40; //버블 세로 크기 랜덤 지정

        my_img.style.position='absolute';

        my_img.style.top=event.pageY-10+'px';   
        my_img.style.left=event.pageX-10+'px'; 

        document.body.appendChild(my_img); //버블 화면에 추가
    }
    resize_evt(){
        this.wd_width=this.bg.width;  //화면 가로 크기 
        this.wd_height=this.bg.height; //화면 세로 크기
     }
}
window.onload = () => {
    new App();
}