let cronous = document.querySelector(".cronous");
let rexCount = 1;
let body = document.querySelector("body")

function rexTrigger(n) {
    if (rexCount >= 12) {
        var rexStyles = {
            position: "fixed",
            top: "0",
            height: "100vh",
            width: "100vw",
            backgroundColor: "black",
            zIndex: "9999999999999"
        };
        
        let div = document.createElement("div");
        
        for (let style in rexStyles) {
            div.style[style] = rexStyles[style];
        }
        
        body.appendChild(div);
        setTimeout(() => {
            window.location="https://cronousx.github.io/RexCronous/"
        }, 5000);
    } else {
        rexCount += n
    }
}

cronous.addEventListener("click", () => {
    if (rexCount >= 4) {
        cronous.classList.add("rex");
        cronous.style.scale = 0.6 + rexCount*0.1;
        rexTrigger(+ 1);
    }else {
        rexTrigger(+ 1);
    }
})



