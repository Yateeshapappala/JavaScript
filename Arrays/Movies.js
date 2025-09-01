const movies = [
    { title: 'a', year: 2017, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2017, rating: 3.5 },
    { title: 'd', year: 2018, rating: 4.1 },
    { title: 'e', year: 2017, rating: 3.4 },
]

const titles = movies
.filter(movie => movie.year === 2018 && movie.rating >=4)
// .sort((a,b) => a.rating - b.rating)
// .reverse()
.sort((a,b) => b.rating - a.rating)
.map(movie => movie.title)


console.log(titles);