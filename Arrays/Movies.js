const movies = [
    { title: 'a', year: 2017, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2017, rating: 3.5 },
    { title: 'd', year: 2018, rating: 3.7 },
    { title: 'e', year: 2017, rating: 3.4 },
]

const titles = movies
.filter(movie => movie.year === 2018 && movie.rating >=4)
.sort((a,b) => a.rating - b.rating)
.reverse()
.map(movie => movie.title)


console.log(titles);