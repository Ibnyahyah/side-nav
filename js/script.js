const btn = document.querySelector("button");
const nav = document.querySelector("nav");
const header = document.querySelector('h1')	;		

btn.addEventListener("click", function(){
	if(nav.classList.toggle("active") &&
        btn.classList.toggle("active")){
		btn.innerHTML = 'X';
		}else if(btn.innerHTML = 'X'){
			btn.classList.toggle("active")
			btn.innerHTML = '|||';
								
		}										
})
								
const text = "Side-nav <br> By: <br> ibn_yahyah.<br><p>Thanks for checking this out, don't forget to follow me.</p> ";
let index = 0;
								 
function writeText(){
	header.innerHTML = text.slice(0, index);

	index++;
	if(index > text.length -1) {
		index = 0;					
		}
}
setInterval(writeText, 200);