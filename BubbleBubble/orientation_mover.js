window.addEventListener("deviceorientation", sensorOrientation, false);

let move = [];
for(let i = 0; i < 100; i++)
    move[i] = Math.max(Math.random(), 0.3);

function sensorOrientation(e) {
    let frontToBack_degrees = e.beta;
    let leftToRight_degrees = e.gamma;
    //console.log(`alpha:${0}, beta:${frontToBack_degrees}, gamma:${leftToRight_degrees}`);
    let bg=document.querySelector('.bg');

    let bubble_img_list = document.getElementsByTagName("img");
    const num_bubbles = bubble_img_list.length;
    if(num_bubbles == 0) return;

    for(let i = 0; i < num_bubbles; i++) {
        let img = bubble_img_list[i];

        let x_str = img.style.left;
        if(x_str.length == 0) continue;
        let y_str = img.style.top;

        let x_int = parseInt(x_str) + leftToRight_degrees * move[i];
        let y_int = parseInt(y_str) + frontToBack_degrees * move[i];

        x_int =  Math.min(Math.max(0,x_int),bg.width-img.width);
        y_int = Math.min(Math.max(0,y_int), bg.height-img.height);

        img.style.top = y_int+'px';   
        img.style.left = x_int+'px'; 
    }
}