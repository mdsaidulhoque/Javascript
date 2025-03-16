const player = {
    name : "Messi",
    goals: 800,
    club: "Inter Miami"
}
Object.freeze(player);
player.goals = 850;
console.log(player);