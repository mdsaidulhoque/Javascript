function obj(para = {principle: 1000,rate:5}){
    return para;
}

const show = obj();
const result = show.principle * show.rate / 100;
console.log(result);