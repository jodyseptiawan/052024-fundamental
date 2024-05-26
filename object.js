const todoHtml = {
  name: "Belajar HTML",
  note: "HTML basic",
  status: "Doing",
};

console.log(todoHtml);

delete todoHtml.note;

todoHtml["name"] = "Belajar HTML 2";
todoHtml["note"] = "HTML tingkat 2";

console.log(todoHtml);
