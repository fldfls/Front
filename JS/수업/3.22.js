windo.onload = function () {
  alert("this is callback function");
};

(function (name) {
  console.log("this is ->" + name);
});
function parent() {
  const a = 10;
  function child() {
    const c = 300;
    console.log(a);
  }
  child();
}

parent();
child();
