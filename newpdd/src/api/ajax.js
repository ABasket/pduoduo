import axios from 'axios';
export default function ajax(url='',params = {},type='GET'){
    // 定义promise
    let promise;
    return new Promise((resolve,reject)=>{
        // 请求类型
        if('GET'===type) {
            // 拼写字符串
            let paramsStr = '';
            Object.keys(params).forEach(key=>{
                paramsStr += key + '=' +params[key]+'&'
            })

            if(paramsStr!=='') {  
                paramsStr = paramsStr.substr(0,paramsStr.lastIndexOf('&'))
            }

            // 完整url
            url += '?' + paramsStr;
            //  send  get
           
            promise = axios.get(url);
        }else if('POST'===type){
            promise = axios.post(url,params)
        }
        promise.then(response=>{
            resolve(response.data)
        }).catch((err)=>{
            reject(err)
        })
    })
}
