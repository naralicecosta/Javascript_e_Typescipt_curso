// const a1 = [10, 20, 30, 4, 5, 6, 7, 8, 9]
// let total = 0
// a1.forEach(valor => {
//     total += valor
// })
// console.log(total)

const usersList = [
	{name: 'João', credit: 500},
	{name: 'Maria', credit: 800}
];

const newUsersList = usersList.map((user, index, array) => {
	user.credit += 100;
	return user;
})
 console.log(newUsersList);