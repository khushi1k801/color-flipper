const colors = [
    "red", "blue", "green", "yellow", "black", "white", "gray", "purple", "orange", "pink", "brown",
    "cyan", "magenta", "gold", "silver", "lime", "maroon", "navy", "olive", "teal", "aqua", "fuchsia",
    "indigo", "violet", "tan", "salmon", "coral", "turquoise", "plum", "orchid", "lavender", "beige",
    "ivory", "chocolate", "tomato", "crimson", "khaki", "seagreen", "slateblue", "midnightblue",
    "peachpuff", "rosybrown", "dodgerblue", "forestgreen", "gainsboro", "lightgray", "darkgray",
    "dimgray", "slategray"
];


const btn = document.querySelector("button");
const span = document.querySelector("span");


btn.addEventListener('click' ,()=>{
    let Num = getRandomNum();
    let randomColor = colors[Num];
    let h2 = document.querySelector("h2");


    document.body.style.backgroundColor = randomColor;
    span.textContent= randomColor;

console.log(Num);
console.log(randomColor);
});

function getRandomNum(){
    let ranNum = Math.floor(Math.random() * colors.length);
    return ranNum;
}
