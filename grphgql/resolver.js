const users = [
    {name: 'Ihor', age: 30, email: 'qwe@we.ru'},
    {name: 'Lidia', age: 25, email: 'qllle@we.ru'}
]

module.exports = {
    test() {
        return {
            count: 10,
            users
        }
    },
    random({min, max, count}) {
        const arr = []
        for (let i = 0; i < count; i++) {
            const random = Math.random() * (max - min) + min
            arr.push(random)
        }

        return arr;
    },

    addTestUser({user: {name, email}}) {
        const user = {
            name,
            email,
            age: Math.ceil(Math.random() * 30)
        };

        users.push(user);

        return user;
    }
}