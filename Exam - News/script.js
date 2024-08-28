let news = Array();

const displayNews = () => {
  fetch("http://localhost:8090/get")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      news = data;
      let newsDiv = document.getElementById("news");
      newsDiv.innerHTML = "";
      news.forEach((e) => {
        let nDiv = document.createElement("Div");
        nDiv.innerHTML = "";
        nDiv.innerHTML = `
        <h2 class="title">${e.title}</h2>
        <p class="content">${e.content}</p>
        `;
        newsDiv.appendChild(nDiv);
      });
    });
};

displayNews();

const addNews = () => {
  let T = document.getElementById("title").value;
  let C = document.getElementById("content").value;
  fetch("http://localhost:8090/post", {
    method: "POST",
    body: JSON.stringify({
      title: T,
      content: C,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      news = data;
      displayNews();
    });
};
