const studentData = () => {
  let search = document.getElementById("search").value;
  let sort = document.getElementById("sort").value;
  fetch(`http://localhost:8090/user/home?search=${search}&sort=${sort}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let sData = data;
      let mainDiv = document.getElementById("sd");
      mainDiv.innerHTML = "";
      let email = window.localStorage.getItem("email");
      let userData = sData.find((e) => e.email == email);
      console.log(userData);
      if (userData) {
        if (userData.role == "Student") {
          let Role = document.getElementById("Role");
          Role.innerHTML = "Student Dashboard";
          let sDiv = document.createElement("Div");
          sDiv.innerHTML = "";
          sDiv.className = "sdiv";
          sDiv.innerHTML = `
                <label for="name">Name : ${userData.name}</label><br>
                <label for="number">Number : ${userData.number}</label><br>
                <label for="email">Email : ${userData.email}</label><br>
                `;
          mainDiv.appendChild(sDiv);
          return;
        }
      }
      let Role = document.getElementById("Role");
      Role.innerHTML = "Teacher Dashboard";
      document.getElementById("search").style = "display: inline;";
      document.getElementById("sort").style = "display: inline;";

      sData.forEach((e) => {
        if (e.role == "Student") {
          let sDiv = document.createElement("Div");
          sDiv.innerHTML = "";
          sDiv.className = "sdiv";
          sDiv.innerHTML = `
                <label for="name">Name : ${e.name}</label><br>
                <label for="number">Number : ${e.number}</label><br>
                <label for="email">Email : ${e.email}</label><br>
                `;
          mainDiv.appendChild(sDiv);
        }
      });
    });
};
studentData();
