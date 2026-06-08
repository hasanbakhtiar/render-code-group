const input = document.querySelector('input');
input.addEventListener('mouseover',()=>{
        input.style.height = "100px";
        input.style.transition = ".5s";
})
input.addEventListener('mouseleave',()=>{
        input.style.height = "20px";
        input.style.transition = ".5s";
})
// input.onkeydown = ()=>{
//         input.style.height = "100px";
//         input.style.transition = ".5s";
// }

// input.onkeyup = ()=>{
//         input.style.height = "20px";
//         input.style.transition = ".5s";
// }


// const input = document.getElementById("todo-input");
// const btn = document.getElementById("todo-button");
// const ul = document.getElementById("todo-list");

// const addTodo = () => {
//   const li = document.createElement("li");
//   li.setAttribute("class", "list-group-item");
//   li.innerHTML = input.value;
//   ul.appendChild(li);
//   li.addEventListener("click", () => {
//     li.style.textDecoration = "line-through";
//   });
//   li.addEventListener("dblclick", () => {
//     li.remove();
//   });
//   input.value = "";
// };

// btn.addEventListener("click", addTodo);

// const h1 = document.createElement('h1');
// h1.innerHTML = "Hello World";
// h1.style.color = "red";
// h1.setAttribute('class', 'test');

// document.body.removeChild(myH1)
// document.body.appendChild(h1);

// const myH1 = document.querySelector('h1');
