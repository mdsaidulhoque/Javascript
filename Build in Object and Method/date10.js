const date1 = new Date("2025-06-01");

const date2 = new Date("2003-06-07");

const diffInMillSeconds = date1 - date2;

const diffInMillDays = diffInMillSeconds / (1000 * 60 * 60 * 24 * 365);

console.log(diffInMillDays);