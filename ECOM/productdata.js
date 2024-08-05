let pData = Array();

const displayData = () => {
  fetch("http://localhost:5000/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      pData = data;
      console.log(pData);
      let PDiv = document.getElementById("pDiv");
      PDiv.innerHTML = "";
      console.log(pData);

      pData.forEach((e) => {
        let Div = document.createElement("div");
        Div.innerHTML = "";
        Div.innerHTML = `
    <h3>${e.n}</h3>
            <p>${e.u}</p>
            <p> </p>
            // <button onclick="editProduct(${e._id})">Edit</button>
            // <button onclick="deleteProduct(${e._id})">Delete</button>
            <br><hr>
        `;
        pDiv.appendChild(Div);
      });
    });
};

displayData();
