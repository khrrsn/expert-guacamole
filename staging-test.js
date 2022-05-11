const fs = require('fs')
const path = require('path')

fs.mkdirSync(path.join(__dirname, 'dist'))
fs.writeFileSync(path.join(__dirname, 'dist', 'staging.json'), JSON.stringify({
    "staging": true
}, null, 4))
