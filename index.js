window.onload = () => {
    document.querySelector('#btn').addEventListener('click', () => {

        document.querySelector('#excuse').innerHTML = generateExcuse()
    })

}

let who = ['My kid', 'My wife', 'The cat', 'Los chimichimitos']
let action = ['pee', 'scratch', 'bite', 'throw', 'steal']
let what = ['my homework', 'the laptop', 'the tv', 'my money', 'the buzz']
let when = ['yesterday', 'when i was sleeping', 'while i was on the wc', 'right on time', 'in a minute']


const generateExcuse = () => {

    let whoIdx = Math.floor(Math.random() * who.length)
    let actionIdx = Math.floor(Math.random() * action.length)
    let whatIdx = Math.floor(Math.random() * what.length)
    let whenIdx = Math.floor(Math.random() * when.length)

    return `${who[whoIdx]} ${action[actionIdx]} ${what[whatIdx]} ${when[whenIdx]}`
}