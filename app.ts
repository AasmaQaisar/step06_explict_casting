let myname: unknown = "Aasma";
console.log((myname as string).length);
console.log((<string> myname).length)