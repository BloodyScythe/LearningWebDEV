/* //inner text

const h1 = document.createElement("h1");
const underline = document.createElement("u");
underline.innerText = "Hello this is underlined";
h1.append(underline);
document.body.append(h1);

const h2 = document.createElement("h2");
const italic = document.createElement("i");
italic.innerText = "Hello this is italic";
h2.append(italic);
document.body.append(h2); */


/* / modify HTML elements

// document.getElementById() (older)

// document.querySelector()  (newer, more powerful)



document.querySelector("#myButton").onclick = function(){



    const h1 = document.querySelector("#myH1");

    const underline = document.createElement("u");

    underline.innerText = "Bye World!";

    h1.innerText = "";

    h1.append(underline);



    const p = document.querySelectorAll(".myP");

    //p[0].innerText = "WHOAAAAAA!";

    p.forEach(element => element.innerText = "WHOA!");



    const buttons = document.querySelectorAll("button");

    //buttons[0].remove();

    buttons.forEach(element => element.remove());

} */