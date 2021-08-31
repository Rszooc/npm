const messages = [
    "Uriel",
    "Ana",
    "Valeria",
    "Karina",
    "Vanessa",
    "Miguel",
    "David",
    "Patricio",
    "Okabe",
    "Suna",
    "Okarin",
    "Helio"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = {randomMsg};