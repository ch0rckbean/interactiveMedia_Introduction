class App{
    constructor(){

        this.sun=document.getElementById('sun');
        this.cloud=document.getElementById('cloud');
        this.plane=document.getElementById('plane');
        this.bd=document.getElementById('bd');

        this.btn1=document.getElementById('btn1');
        this.ufo=document.getElementById('ufo');
    

        window.addEventListener('scroll',this.sunset.bind(this),false);
        this.btn1.addEventListener('click',this.go.bind(this),false);

        this.third=document.querySelector('.third');
        this.spaceship=document.querySelector('.spaceship');
        this.p1=document.getElementById('p1');
        this.p2=document.getElementById('p2');
        this.p3=document.getElementById('p3');

        this.p1.addEventListener('click',() => {
            this.spaceship.src="./images/p_1.png";
        })   
       this.p2.addEventListener('click',() => {
            this.spaceship.src="./images/p_2.png";
        })
        this.p3.addEventListener('click',() => {
            this.spaceship.src="./images/p_3.png";
        })
        window.addEventListener('resize',this.resizeEvt.bind(this),false);

        this.resizeEvt()
        
    }
    sunset(e){
        var Y=window.scrollY;
        this.sun.style.left= Y*-1.5+'px';
        this.bd.style.top= Y*1.5+'px';
        this.cloud.style.top=Y*-1+'px';
        this.plane.style.right=Y*-1.3+'px'
    }
    go(){
        var ufoY=this.ufo.offsetTop;
        console.log(ufoY);
        if(ufoY<=350)
        {
        this.ufo.style.top=ufoY+100+'px';
        }
        else if(350<ufoY) //ufo가 다시 돌아오게 하는 코드
           {this.ufo.style.top=ufoY*0+'px';}
        }
    
    resizeEvt(e){
        this.stageWidth=window.innerWidth;
        this.stageHeight=window.innerHeight;
    }   
}
window.onload = () => {
    new App();
}