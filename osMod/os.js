const os = require('os');

console.log(os.arch());

const ram = os.freemem();
console.log(`${ram / 1024 / 1024 / 1024 }`);

const total = os.totalmem();
console.log(`${total / 1024 / 1024 / 1024 }`);
