import spawn from "child_process";
const open = spawn.spawn;
open('open', ['https://dev.localhost']);
console.log('running on https://dev.localhost');