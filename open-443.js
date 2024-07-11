import open from "open";
await open(`https://${process.env.FQDN}:3002`);
console.log(`running on https://${process.env.FQDN}:3002`);
