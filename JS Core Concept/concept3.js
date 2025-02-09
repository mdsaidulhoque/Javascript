let p = {
    job: "Web Developer"
}
let q = p;

console.log(p,q);

q.job = "Frontend Developer";
console.log(p,q);