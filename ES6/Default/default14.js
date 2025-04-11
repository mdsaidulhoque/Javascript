function obj(para = {principle: 1000,rate:5}){
        return para;
}

const show = obj({principle:2000,rate:2});
const result = show.principle * show.rate / 100;
console.log(result);