const people = [
    { name: 'Nader', age: 36 },
    { name: 'Amanda', age: 24 },
    { name: 'Jason', age: 44 },
    { name: 'Quang', age: 24 },
    { name: 'Nguyen', age: 34 },
    { name: 'Phu', age: 54 }
]

export default () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(people)
        }, 3000)
    })
}