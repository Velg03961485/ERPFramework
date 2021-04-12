



//设置所有请求的域名前缀
let JAVA_apiUrl = '';
let routerMode = 'history';
let DEBUG = false;
let cancleHTTP = [];//取消请求头设置；


if (process.env.NODE_ENV == 'development') {
  JAVA_apiUrl = "http://47.114.158.38:8701/";
  DEBUG = true;
}else if(process.env.NODE_ENV == 'production'){
  JAVA_apiUrl = "http://47.114.158.38:8701/";
  DEBUG = true;
}else if(process.env.NODE_ENV == 'test'){
  // JAVA_apiUrl = "http://192.168.0.121:8701/";
  DEBUG = true;
}

export default{
  JAVA_apiUrl,
  routerMode,
  DEBUG,
  cancleHTTP
}
