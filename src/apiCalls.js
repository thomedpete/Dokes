const getAllJokes = () => {
    return fetch('https://icanhazdadjoke.com/')
      .then(response => response.json())
}

export default getAllJokes