//
// export function setCookie(name,value,n){
//     var oDate = new Date();
//     oDate.setDate(oDate.getDate()+n);
//     document.cookie = name+"="+value+";expires="+oDate;
//  }
//
//  export function getCookie(name){
//     var str = document.cookie;
//     var arr = str.split("; ");
//     for(var i = 0; i < arr.length; i++){
//         //console.log(arr[i]);
//         var newArr = arr[i].split("=");
//         if(newArr[0]==name){
//             return newArr[1];
//         }
//     }
//  }
//
//  // export function removeCookie(name){
//  //    setCookie(name,1,-1);
//  // }

// export {
//    setCookie,
//    getCookie,
//    removeCookie
// }
//    /获取cookie、

export function getCookie(name) {

  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

  if (arr = document.cookie.match(reg))

    return (arr[2]);

  else

    return null;

}



//设置cookie,增加到vue实例方便全局调用

export function setCookie (c_name, value, expiredays) {

  var exdate = new Date();

  exdate.setDate(exdate.getDate() + expiredays);

  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());

};



//删除cookie

export function delCookie (name) {

  var exp = new Date();

  exp.setTime(exp.getTime() - 1);

  var cval = getCookie(name);

  if (cval != null)

    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();

};
