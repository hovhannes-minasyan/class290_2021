const fs = require('fs');

const Role = {
    customer: "customer",
    admin: "admin",
 };

module.exports = {
    Role,
    writeInFile(content) {
        return new Promise((resolve) => {
            fs.writeFile('content.txt', content, {encoding: 'utf-8'}, () => {
                resolve();
            });
        })
    },

    readFromFile() {
        return new Promise((resolve, reject) => {
            fs.readFile('content.txt', (err, data) => {
                if(err) {
                    return reject(err);
                }

                resolve(data);
            });
        });
    }
}