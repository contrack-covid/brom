const fs = require('fs')
const crypto = require('crypto')

const dellprem = (userId, _data) => {
    let position = null
    Object.keys(_data).forEach((i) => {
        if (_data[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        _data.splice(position, 1)
        fs.writeFileSync('./database/json/premium.json', JSON.stringify(_data))
    }
    return true
}
     

  
module.exports = {
     dellprem
}

