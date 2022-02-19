// task1
// if (confirm()) {
//   var color = document.getElementById("confirm");
//   color.style.backgroundColor = "black";
// }

// task2
// var age = prompt();
// if (age < 18) {
//   alert("Daxil ola bilmezsiz,get yasin chatanda gel pls.Twk bye");
// }

// task3
var insan = {
  name: "Fereh",
  surname: "Ibrahimli",
  password: "stekan123",
  get fullname() {
    return this.name + "" + this.surname;
  },
  info() {
    document.write(this.fullname.toUpperCase());
  },
};
insan.info();
