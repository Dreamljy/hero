import { defineConfig } from 'alita';

export default defineConfig({
    appType: 'pc',
    request: {
      dataField: '',
    },
    // proxy: {
    //     "/api": {                                       
    //       "target": "https://pvp.qq.com/web201605/js/", 
    //       "changeOrigin": true,                         
    //       "pathRewrite": { "^/api" : "" }               
    //     }
    // },
    
});
