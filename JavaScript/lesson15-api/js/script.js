const products = document.querySelector("#products");

const filterData = (cat) => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      let card = "";

      const filteredData = data.filter((p) => p.category === cat);
      if (cat === "all") {
        data.filter(
          (item) =>
            (card += ` <div class="col-12 col-sm-6 col-md-4">
                <div class="card">
                    <img style="height: 200px; object-fit: contain;" src="${item.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.title.slice(0, 20)}</h5>
                        <p class="card-text">${item.description.slice(0, 20)}...</p>
                        <p class="card-text">$${item.price}</p>
                        <p class="card-text">${item.category}</p>
                        <a href="#" class="btn btn-dark">Read more</a>
                    </div>
                </div>
            </div>`),
        );
      }
      filteredData.filter(
        (item) =>
          (card += ` <div class="col-12 col-sm-6 col-md-4">
                <div class="card">
                    <img style="height: 200px; object-fit: contain;" src="${item.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.title.slice(0, 20)}</h5>
                        <p class="card-text">${item.description.slice(0, 20)}...</p>
                        <p class="card-text">$${item.price}</p>
                        <p class="card-text">${item.category}</p>
                        <a href="#" class="btn btn-dark">Read more</a>
                    </div>
                </div>
            </div>`),
      );
      products.innerHTML = card;
    });
};

const listItem = document.querySelectorAll(".list-group-item");

listItem[0].onclick = () => {
  filterData("all");
};
listItem[1].onclick = () => {
  filterData("men's clothing");
};
listItem[2].onclick = () => {
  filterData("women's clothing");
};
listItem[3].onclick = () => {
  filterData("electronics");
};
listItem[4].onclick = () => {
  filterData("jewelery");
};

//     const categoryData = [
//     {id:1,title:"men's clothing"},
//     {id:2,title:"jewelery"},
//     {id:3,title:"electronics"},
//     {id:4,title:"women's clothing"},
//   ]

//   const category = document.querySelector('#category');

//     let card = "";
//     categoryData.map(
//       (item) =>
//         (card += ` <li class="list-group-item">${item.title}</li>`),
//     );
//     category.innerHTML = card;

// const products = document.querySelector("#products");

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     let card = "";
//     data.map(
//       (item) =>
//         (card += ` <div class="col-12 col-sm-6 col-md-4">
//                 <div class="card">
//                     <img style="height: 200px; object-fit: contain;" src="${item.image}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                         <h5 class="card-title">${item.title.slice(0,20)}</h5>
//                         <p class="card-text">${item.description.slice(0,20)}...</p>
//                         <p class="card-text">$${item.price}</p>
//                         <p class="card-text">${item.category}</p>
//                         <a href="#" class="btn btn-dark">Read more</a>
//                     </div>
//                 </div>
//             </div>`),
//     );
//     products.innerHTML = card;
//   });
