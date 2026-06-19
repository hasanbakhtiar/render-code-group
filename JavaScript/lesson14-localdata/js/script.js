import { watchData } from "./data.js";

const row = document.querySelector(".row");

let watch = "";
watchData.map(
  (item) =>
    (watch += `   <div class="col-12 col-sm-6 col-md-4">
                <div class="card">
                    <img src="${item.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.brand}</h5>
                        <p class="card-text">${item.model}</p>
                        <p class="card-text">$${item.price}</p>
                        <p class="card-text">${item.made}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>`),
);
row.innerHTML = watch;
