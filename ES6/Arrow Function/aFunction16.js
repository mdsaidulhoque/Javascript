const person = {
      name: "sayed",
      pocketMoney: 200,
      getMoney:function() {
        const result = this.pocketMoney / 5;
        console.log(result);
      }
}
person.getMoney();