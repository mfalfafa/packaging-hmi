import Datastore from 'nedb'
import path from 'path'
import {
    remote
} from 'electron'

// To store json data to a .db file
export default new Datastore({
    autoload: true,
    // database is saved in appData folder under user folder of every computer
    filename: path.join(remote.app.getPath('userData'), '/data.db')
})