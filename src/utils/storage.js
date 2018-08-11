import engine from 'store/src/store-engine'
import cookieStorage from 'store/storages/cookieStorage'
import plugins from 'store/plugins/json2'

const store = engine.createStore(cookieStorage, plugins)

export default store
