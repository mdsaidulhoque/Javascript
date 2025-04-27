const programmer = {name: "Sophia",
    language: "Javasript",
    experience: 5,
    speciality: "Fronteend", 
    tools: "React"
}
const {speciality,...details} = programmer;
console.log(details);
