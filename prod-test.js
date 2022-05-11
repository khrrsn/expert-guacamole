const fs = require('fs')
const path = require('path')

fs.mkdirSync(path.join(__dirname, 'dist'))
fs.writeFileSync(path.join(__dirname, 'dist', 'production.json'), JSON.stringify({
    "production": true
}, null, 4))
