const os = require("os");
const path = require("path");
const fsp = require("fs/promises");

setInterval(async () => {
        const total = parseInt(os.totalmem() / 1024 / 1024),
              livre = parseInt(os.freemem() / 1024 / 1024),
              perc = parseInt((livre * 100) / total);

        const novo = {"total_memory": `${total} MB`, 
            "free_memory":`${livre} MB`, 
            "usage":`${perc} %`
        };
        const injson = JSON.stringify(novo) + os.EOL;
        try {
            await fsp.appendFile(path.resolve(__dirname, "ex1.json"), injson);
            console.log("Sucesso!");
        } catch(err){
            console.log(err.message)
        }
    }, 5000);   