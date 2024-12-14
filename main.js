import { movies } from "./movies.js";

const rowData = document.querySelector('#row');
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#btn');
const sortAb = document.querySelector('#sort_a_b');
const sortBa = document.querySelector('#sort_b_a');

function renderData(filterData = movies) {
    rowData.innerHTML = '';
    filterData.forEach((item) => {
        let cardMovies = document.createElement('div');
        cardMovies.classList.add('w-[250px]', 'bg-[#FFFF00]', 'rounded-[10px]', 'text-center');

        cardMovies.innerHTML = `
            <div class="w-[250px] h-[400px] bg-current rounded-[10px] text-center">
                <img src="./1200x675mf.jpg.png" alt="" class="text-center mx-auto pt-[15px]">
                <h1 class="text-center text-white pt-[24px]">${item.Title}</h1>
                <div class="flex item-center gap-[30px] justify-center pt-[11px]">
                    <p class="text-white">${item.imdb_rating}</p>
                    <p class="text-white">${item.movie_year}</p>
                    <p class="text-white">1hr 6min</p>
                </div>
                <p class="text-white text-center pt-[11px]">Uncategorized</p>
                <button class="bg-green-500 rounded-[6px] text-white w-[100px] h-[36px] mt-[31px]">More info</button>
            </div>
        `;
        rowData.append(cardMovies);
    });
}

renderData();

function searchData() {
    const inputValue = searchInput.value.toLowerCase();
    const filterData = movies.filter(item => 
        typeof item.Title === "string" && item.Title.toLowerCase().includes(inputValue)
    );
    renderData(filterData);
}

searchBtn.addEventListener('click', searchData);

sortAb.addEventListener("click", () => {
    const validMovies = movies.filter(movie => movie && typeof movie.Title === "string");
    validMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    renderData(validMovies);
  });
  
  sortBa.addEventListener("click", () => {
    const validMovies = movies.filter(movie => movie && typeof movie.Title === "string");
    validMovies.sort((a, b) => b.Title.localeCompare(a.Title));
    renderData(validMovies);
  });
  