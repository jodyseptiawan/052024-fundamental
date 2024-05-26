// Array of Object
const todos = [
  {
    name: "Belajar HTML",
    note: "HTML basic",
    status: "Doing",
  },
  {
    name: "Belajar CSS",
    note: "CSS basic",
    status: "Todo",
  },
];

function handleSubmit() {
  // Get Element
  const inputName = document.getElementById("input-name");
  const inputNote = document.getElementById("input-notes");
  const inputStatus = document.getElementById("input-status");

  // Get Value
  const dataName = inputName.value;
  const dataNote = inputNote.value;
  const dataStatus = inputStatus.value;

  // Create Object for Todo data
  const objectTodo = {
    name: dataName,
    note: dataNote,
    status: dataStatus,
  };

  //   Push Object into Todo
  todos.push(objectTodo);

  console.log(todos);
  //   console.table(todos);
}
