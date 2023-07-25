const row = document.querySelector(".row");
const selectRegion = document.getElementById("region");

const handleGetFlags = () => {
    const selectedRegion = selectRegion.value;

    fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`)
        .then(res => res.json())
        .then(data => {
            row.innerHTML = "";

            data.forEach(country => {
                row.innerHTML += `
          <div class="col-4">
            <div class="box">
              <img src="${country.flags.png}" alt="">
              <h2>${country.name.official}</h2>
              <p>${country.capital}</p>
            </div>
          </div>
        `;
            });
        })
};

selectRegion.addEventListener("change", handleGetFlags);
handleGetFlags();