const MOVIE_DATA = [
    {
        id: '1',
        name: 'The Shawshank Redemption',
        releaseYear: 1994,
        description: "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
        rating: 4.8,
        genre: 'drama',
        image: 'https://m.media-amazon.com/images/I/71HY+rz3c6L._SS500_.jpg'
    },
    {
        id: '2',
        name: 'The Dark Knight',
        releaseYear: 2008,
        description: "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.",
        rating: 4.7,
        genre: 'action, crime, drama',
        image: 'https://m.media-amazon.com/images/I/71+DxQJV92L._SS500_.jpg'
    },
    {
        id: '3',
        name: 'Lord of the rings',
        releaseYear: 2004,
        description: "The former Fellowship members prepare for the final battle. While Frodo and Sam approach Mount Doom to destroy the One Ring, they follow Gollum unaware of the path he is leading them to.",
        rating: 4.9,
        genre: 'adcenture, drama, fantasy',
        image: 'https://m.media-amazon.com/images/I/81tPNugbTSL._SS500_.jpg'
    }
  ]

export const getMovies = () => {

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(MOVIE_DATA)
            reject("Cannot read data!")
        },50)
    })
  }