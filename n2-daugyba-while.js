const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function skaiciausIvedimas(msg) {
  return new Promise((resolve, reject) => {
    rl.question(msg, (data) => {
      resolve(parseInt(data));
    });
  });
}

async function tekstoIvedimas(msg) {
  return new Promise((resolve, reject) => {
    rl.question(msg, (data) => {
      resolve(data);
    });
  });
}

async function main() {
  console.log('\n\nDAUGYBOS LENTELĖ -  SU CIKLU WHILE\n');
  var nuo = await skaiciausIvedimas("Įveskite skaičių nuo: ");
  var iki = await skaiciausIvedimas("Įveskite skaičių iki: ");
  var i = j = nuo;
  while (i <= iki) {
    j = nuo;
    while (j <= iki) {
      console.log(`${i} x ${j} = ${i * j}`);
      j++
    }
    i++;
  }

  rl.close();
}
main();
