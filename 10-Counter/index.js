let num = 0;
const numbers = document.querySelector(".numbers");
const buttons = document.querySelectorAll(".btn");

// console.log(buttons);

buttons.forEach((buttons)=>{
    buttons.addEventListener("click", (event)=>{
        const styles = event.currentTarget.classList;
        if(styles.contains("btn-danger")){
            num--;
        }else if(styles.contains("btn-success")){
            num++;
        }else{
            num = 0;
        }
        numbers.textContent = num;
        if(num>0){
            numbers.style.color = "green";
        }else if(num<0){
            numbers.style.color = "red";
        }else{
            numbers.style.color = "black"
        }
    });
});