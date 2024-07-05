import { createCA, createCert } from "mkcert";
import fs from "fs";

const ca = await createCA({
  organization: "Template",
  countryCode: "AU",
  state: "WA",
  locality: "Perth",
  validity: 365
});

const cert = await createCert({
  ca: { key: ca.key, cert: ca.cert },
  domains: ["localhost", "127.0.0.1"],
  validity: 365
});


fs.writeFile("./certs/key.pem", cert.key, (err) => {
    if (err)
        console.log(err);
    else {
        console.log("File written successfully\n");
    }
});

fs.writeFile("./certs/cert.pem", cert.cert, (err) => {
    if (err)
        console.log(err);
    else {
        console.log("File written successfully\n");
    }
});

fs.writeFile("./certs/ca.cert", `${cert.cert}${ca.cert}`, (err) => {
    if (err)
        console.log(err);
    else {
        console.log("File written successfully\n");
    }
});