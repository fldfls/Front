let foo = {
  name: "foo",
  major: "computer",
};

console.log(foo.name);
console.log(foo["name"]);
console.log(foo.nickname);

foo.major = "el";
console.log(foo.major);
console.log(foo["major"]);

foo.age = 27;
console.log(foo.age);

foo["full-name"] = "foo bar";
console.log(foo.full - name);
console.log(foo["full-name"]);

let prop;
for (prop in foo) {
  console.log(prop, foo[prop]);
}

let foo2 = {
  name: "foo2",
  nickname: "babo",
};

console.log(foo2.nickname);
delete foo2.nickname;
console.log(foo2.nickname);

delete foo2;
console.log(foo2.name);

let objA = {
  val: 30,
};

let objB = objA;

console.log(objA.val);
console.log(objB.val);

objB.val = 20;

console.log(objB.val);
console.log(objA.val);
