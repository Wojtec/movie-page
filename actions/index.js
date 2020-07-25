const MOVIE_DATA = [
    {
        id: '1',
        name: 'The Shawshank Redemption',
        releaseYear: 1994,
        description: "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
        longDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nihil ipsa asperiores ducimus fuga. Fugit provident, voluptatum, velit eligendi repudiandae aperiam ab quia voluptas saepe explicabo aliquam. Quam, voluptatibus amet?",
        rating: 4.8,
        genre: 'drama',
        image: 'https://m.media-amazon.com/images/I/71HY+rz3c6L._SS500_.jpg',
        cover: 'http://3.bp.blogspot.com/-rtWisgw5h1w/T5XvTzC8BRI/AAAAAAAABIU/fs-DhwhD9gI/s1600/The-Shawshank-Redemption1.jpg'
    },
    {
        id: '2',
        name: 'The Dark Knight',
        releaseYear: 2008,
        description: "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.",
        longDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nihil ipsa asperiores ducimus fuga. Fugit provident, voluptatum, velit eligendi repudiandae aperiam ab quia voluptas saepe explicabo aliquam. Quam, voluptatibus amet?",
        rating: 4.7,
        genre: 'action, crime, drama',
        image: 'https://m.media-amazon.com/images/I/71+DxQJV92L._SS500_.jpg',
        cover: 'https://images.pexels.com/photos/6633/car-superhero-symbol-batman.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    },
    {
        id: '3',
        name: 'Lord of the rings',
        releaseYear: 2004,
        description: "The former Fellowship members prepare for the final battle. While Frodo and Sam approach Mount Doom to destroy the One Ring, they follow Gollum unaware of the path he is leading them to.",
        longDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nihil ipsa asperiores ducimus fuga. Fugit provident, voluptatum, velit eligendi repudiandae aperiam ab quia voluptas saepe explicabo aliquam. Quam, voluptatibus amet?",
        rating: 4.9,
        genre: 'adcenture, drama, fantasy',
        image: 'https://m.media-amazon.com/images/I/81tPNugbTSL._SS500_.jpg',
        cover: 'https://i.ytimg.com/vi/ZLjKYj0NWmM/maxresdefault.jpg'
    }
  ]

  const CATEGORY_DATA = [
      {
          id: '1',
          name: 'drama'
      },
      {
          id: '2',
          name: 'action'
      },
      {
          id: '3',
          name: 'adventure'
      },
      {
          id: '4',
          name: 'historical'
      }
  ]

export const getCategories = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(CATEGORY_DATA)
            reject('Cannot read categories!')
        }, 50)
    })

}

export const getMovies = () => {

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(MOVIE_DATA)
            reject("Cannot read data!")
        },50)
    })
  }

export const getMovieById = (id) => {

        return new Promise((resolve, reject) => {
            const movieIndex = MOVIE_DATA.findIndex(movie => movie.id === id);
            const movie = MOVIE_DATA[movieIndex];
            setTimeout(() => {
                resolve(movie)
            }, 50)
        })  
  }