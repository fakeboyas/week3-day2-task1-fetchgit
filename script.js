async function register() {
    try {
        let title = document.getElementById("title").value;
        let genre = document.getElementById("genre").value;
        let release_date = document.getElementById("releaseDate").value;
        let image_link = document.getElementById("imageLink").value;
        let sinopsis = document.getElementById("sinopsis").value;

        let movieData = {
            title,
            genre,
            release_date,
            image_link,
            sinopsis,
        };

        let url = `https://5ef183691faf160016b4d874.mockapi.io/movielist`;
        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(movieData),
        };

        let response = await fetch(url, options);
        let result = await response.json();
    } catch (error) {
        console.error(error);
    }
}
let movieAddBtn = document.getElementById("addBtn");

movieAddBtn.addEventListener("click", register);
