const testimonials = [
    {
        name: "Shreya B",
        photoUrl: "images/Shreya B.jpg",
        text:"I just can't get enough of programming skills. I want to get a T-Shirt with programming skills on it so I can show it off to everyone. I STRONGLY recommend programming skills to EVERYONE interested in running a successful online business! I made back the purchase price in just 48 hours! The very best."
    },

    {
        name: "Akshara G",
        photoUrl: "images/Akshara G.jpg",
        text:"The best on the net! I couldn't have asked for more than this. Programming skills has completely surpassed our expectations."
    },

    {
        name: "Harsh P",
        photoUrl: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text:"I use handsomeness often. Handsomeness is the most valuable business resource we have EVER purchased. The best on the net! You've saved our business!"
    }
];

const imgEL = document.querySelector("img");
const textEl = document.querySelector(".text");
const nameEl = document.querySelector(".username");


let ind = 0;

updateTestimonial()

function updateTestimonial(){
    const{name, photoUrl, text } = 

    testimonials[ind]

    imgEL.src = photoUrl
    textEl.innerText = text;
    nameEl.innerText = name;

    ind++

    if(ind === testimonials.length){
        ind = 0;
    }

    setTimeout(()=>{
        updateTestimonial()
    },10000);    
}