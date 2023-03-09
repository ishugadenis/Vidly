const movies = [{
        id: '1',
        title: 'The Shawshank Redemption',
        genre: { id: '1', name: 'Drama' },
        numberInStock: '5',
        dailyRentalRate: '2.5'
    },
    {
        id: '2',
        title: 'The Godfather',
        genre: { id: '2', name: 'Crime/Drama' },
        numberInStock: '7',
        dailyRentalRate: '2.0'
    },
    {
        id: '3',
        title: 'The Dark Knight',
        genre: { id: '3', name: 'Action/Crime/Drama' },
        numberInStock: '3',
        dailyRentalRate: '3.0',
        liked: true
    },
    {
        id: '4',
        title: 'Pulp Fiction',
        genre: { id: '2', name: 'Crime/Drama' },
        numberInStock: '4',
        dailyRentalRate: '2.5'
    },
    {
        id: '5',
        title: 'The Lord of the Rings: The Return of the King',
        genre: { id: '4', name: 'Action/Crime/Drama' },
        numberInStock: '2',
        dailyRentalRate: '4.0'
    }
];

export function getMovies() {
    return movies
}
export function getMovie(id) {
    return movies.find(m => m.id === id);
}