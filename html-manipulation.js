console.log("html-manipulation.js file");

const elParagraf = document.getElementById("paragraf");

elParagraf.innerText = "Selamat Malam";
elParagraf.innerHTML = "<span>Selamat Malam</span>";

const datas = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
const elDays = document.getElementById("days");

for (let i = 0; i < datas.length; i++) {
  const day = datas[i];

  elDays.innerHTML += `<li>${day}</li>`;
}
