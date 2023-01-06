const getAllJokes = () => {
    return fetch('https://icanhazdadjoke.com/')
      .then(response => response.json())
      .then(data => console.log(data))
}

export default getAllJokes