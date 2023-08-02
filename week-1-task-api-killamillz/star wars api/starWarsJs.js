



const starWarsApi = async () => {
  const response = await fetch("https://swapi.dev/api/people");
  const jsonData = await response.json();

  let content = document.getElementById("page-content");

  jsonData.results.forEach(async (character,index) => {

    let item = `<div>
      <img src="./images/${character.name}.jpg"/><br>
      <div class="details-modal-title">
      <button onclick="myFun('${index}') id='btn'>${character.name}</button>
      </div>
      <div class="details-modal">
       
        <div id="list-${index}" class="dropdown-content" style="display: none;">
            <p>
              HEIGHT: ${character.height}<br>
              GENDER: ${character.gender}
            </p>
        </div>
      </div>
    </div>`;

    content.innerHTML += item;
  });
};

function myFun(index) {
  let dropdownContent = document.getElementById(`list-${index}`);

  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
}

const result = starWarsApi();






 







 



