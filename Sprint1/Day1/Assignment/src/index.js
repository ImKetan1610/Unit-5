console.log("hello")
import "./index.css";

const main = document.getElementById("main");
main.classList.add("main");
const imageDiv = document.createElement("div");
imageDiv.setAttribute("id","imgdiv")
const logoIcon = document.createElement("img");
logoIcon.src = "https://thumbs.dreamstime.com/b/taking-note-line-icon-vector-isolated-white-background-infographic-website-app-blue-designed-grid-system-100290741.jpg";
logoIcon.setAttribute("width","50px")
const heading = document.createElement("h3");
heading.innerText = "Notes"
const input = document.createElement("input");
const button = document.createElement("button")
button.innerText="Submit";
button.addEventListener("click",handleNotes)
imageDiv.append(logoIcon,heading,input,button)

const output = document.createElement("ul")
function handleNotes(){
    let value = input.value;
    const li = document.createElement("li")
    li.innerText = value;
    output.append(li)
}

main.append(imageDiv,output)

