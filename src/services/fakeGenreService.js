export const genres = [
    { id: "2", name: "Crime/Drama" },
    { id: "3", name: "Action/Crime/Drama" },
    { id: "1", name: "Drama" }
];

export function getGenres() {
    return genres.filter(g => g);
}