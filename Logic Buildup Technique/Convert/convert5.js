function killoWattHoursToCallori(callori){
      const perKilloWattHours = callori / 860;
      return perKilloWattHours;
}
const kToC = killoWattHoursToCallori(5);
console.log(kToC);