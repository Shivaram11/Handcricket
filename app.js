const imageArray=["one","two","three","four","five"];
function getRandom(){
    let n=Math.floor(Math.random()*5);
    let imageName=imageArray[n];
    let computer=document.querySelector("#comp");
    console.log(n);
    computer.setAttribute("src","images/"+imageName+".png");
    


}


function getUserInput(e){
    if (e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5" ){
        let input=e.key;
        const player=document.querySelector("#player");
        player.setAttribute("src", "images/" + imageArray[input-1]+".png");
        getRandom();

    }
let input=
console.log(e);
}
document.addEventListener("keypress",getUserInput);

