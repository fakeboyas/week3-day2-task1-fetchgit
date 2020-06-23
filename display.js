async function show() {
    try {
        let url = `https://5ef183691faf160016b4d874.mockapi.io/movielist`;
        let options = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        };

        let response = await fetch(url, options);
        let results = await response.json();
        console.log = results;
        results.forEach((getData, data) => {
            let tampil = document.getElementById("content1");
            let cards = document.createElement("div");
            cards.setAttribute("class", "display-card");
            cards.innerHTML = `
            <img src="${getData.image_link}" class="header" alt="${getData.title}" />
            <div class="card-body">
            <h4 class="card-title">${getData.title}</h4>
              <div class="card-text">
                <span>
                Genre : ${getData.genre}
              </span><br/>
              <span>
                Realese Date : ${getData.release_date}
              </span>
              </div>`;
            tampil.appendChild(cards);
        });
    } catch (error) {
        console.error(error);
    }
}

show();
