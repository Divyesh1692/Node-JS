let Tdata = Array();
function displayTask() {
  fetch("http://localhost:3000/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      Tdata = data;
      console.log(Tdata);
      let Table = document.getElementById("table");
      Table.innerHTML = "";
      let TR = document.createElement("tr");
      TR.innerHTML = "";
      TR.innerHTML = `<th>Task Id</th><th>Task</th><th>Actions</th><th>Status</th>`;
      Table.append(TR);
      console.log(Tdata);

      Tdata.forEach((e, i) => {
        let tr = document.createElement("tr");
        tr.innerHTML = "";
        tr.innerHTML = `<td>${e._id}</td><td>${e.Task}</td><td><input type="button" name="" id="UT" value="Update Task" onclick="updateTask(${e._id})"><input type="button" name="" id="DT" value="Delete Task" onclick="deleteTask(${e._id})"></td><td>Status</td>`;
        Table.append(tr);
      });
    });
}

displayTask();

function addTask() {
  let task = document.getElementById("T").value;
  let id = document.getElementById("i").value;
  fetch("http://localhost:3000/", {
    method: "POST",
    body: JSON.stringify({
      Task: task,
      _id: id,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      Tdata = data;
      displayTask();
    });
}

function deleteTask(id) {
  fetch(`http://localhost:3000/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      Tdata = data;
      displayTask();
    });
}

function updateTask(id) {
  let Tdata = Array();
  fetch("http://localhost:3000/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      Tdata = data;

      let index = Tdata.findIndex((index) => index._id == id);
      console.log(index);
      document.getElementById("T").value = Tdata[index].Task;
      document.getElementById("i").value = Tdata[index]._id;
      document.getElementById("AddT").style = "display: none;";
      document.getElementById("updT").style = "display: inline;";
      document.getElementById("i").style = "display : none;";
    });
}

function Update() {
  let task = document.getElementById("T").value;
  let Id = document.getElementById("i").value;
  // let index = Tdata.findIndex((index) => (index._id = Id));
  // console.log(index);

  // console.log(Tdata[index].Task);
  console.log(Id);

  fetch(`http://localhost:3000/${Id}`, {
    method: "PATCH",
    body: JSON.stringify({
      Task: task,
      _id: Id,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      Tdata = data;

      document.getElementById("i").style = "display : inline;";
      document.getElementById("updT").style = "display: none;";
      document.getElementById("AddT").style = "display : inline;";
      document.getElementById("T").value = "";
      document.getElementById("i").value = "";
      displayTask();
    });
}
