const common=require('./common')
const utils=require('./utils')
//引入css
require('./style.css')
common.info('Hello world!' + utils.add(100, 200));