// Database Senjata Nuklir Sejarah
const nuclearBombs = [
  {
    name: "Gadget (The Trinity Test)",
    country: "AS",
    type: "Fisi (Plutonium Implosion)",
    year: "1945",
    yield: "22 Kiloton TNT",
    description: "Senjata nuklir pertama yang pernah diledakkan dalam sejarah manusia di gurun New Mexico."
  },
  {
    name: "Little Boy",
    country: "AS",
    type: "Fisi (Uranium Gun-type)",
    year: "1945",
    yield: "15 Kiloton TNT",
    description: "Bom nuklir pertama yang digunakan dalam perang, dijatuhkan di kota Hiroshima, Jepang."
  },
  {
    name: "Fat Man",
    country: "AS",
    type: "Fisi (Plutonium Implosion)",
    year: "1945",
    yield: "21 Kiloton TNT",
    description: "Bom nuklir kedua yang digunakan dalam perang, dijatuhkan di kota Nagasaki, Jepang."
  },
  {
    name: "RDS-1 (Joe-1)",
    country: "Uni Soviet",
    type: "Fisi (Plutonium Implosion)",
    year: "1949",
    yield: "22 Kiloton TNT",
    description: "Uji coba bom nuklir pertama oleh Uni Soviet, mengakhiri monopoli nuklir Amerika Serikat."
  },
  {
    name: "Ivy Mike",
    country: "AS",
    type: "Termonuklir (Bom Hidrogen)",
    year: "1952",
    yield: "10.4 Megaton TNT",
    description: "Uji coba bom hidrogen (fusi) pertama di dunia. Menggunakan bahan bakar deuterium cair."
  },
  {
    name: "RDS-37",
    country: "Uni Soviet",
    type: "Termonuklir (Dua Tahap)",
    year: "1955",
    yield: "1.6 Megaton TNT",
    description: "Bom hidrogen dua tahap pertama milik Uni Soviet yang siap digunakan secara militer."
  },
  {
    name: "Tsar Bomba (RDS-220)",
    country: "Uni Soviet",
    type: "Termonuklir (Tiga Tahap)",
    year: "1961",
    yield: "50 Megaton TNT",
    description: "Senjata nuklir terbesar dan paling kuat yang pernah diledakkan dalam sejarah bumi."
  },
  {
    name: "B83",
    country: "AS",
    type: "Termonuklir Variabel",
    year: "1983",
    yield: "1.2 Megaton TNT",
    description: "Salah satu bom jatuh bebas (gravity bomb) terkuat yang masih aktif dalam arsenal AS saat ini."
  }
];

// Fungsi untuk merender kartu ke HTML
function displayBombs(bombs) {
  const grid = document.getElementById("bombGrid");
  grid.innerHTML = ""; // Bersihkan grid terlebih dahulu

  if(bombs.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #72777d;">Tidak ada data bom nuklir yang cocok.</p>`;
    return;
  }

  bombs.forEach(bomb => {
    const card = document.createElement("div");
    card.className = "bomb-card";
    
    card.innerHTML = `
      <h3>${bomb.name}</h3>
      <div class="bomb-info">
        <p><strong>Negara:</strong> ${bomb.country}</p>
        <p><strong>Jenis:</strong> ${bomb.type}</p>
        <p><strong>Tahun Uji:</strong> ${bomb.year}</p>
        <p><strong>Daya Ledak:</strong> <span class="tag-yield">${bomb.yield}</span></p>
        <hr style="margin: 10px 0; border-top: 1px dashed #c8ccd1;">
        <p style="font-size: 0.85rem; color: #404244;">${bomb.description}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Fungsi Filter dan Cari
function filterBombs() {
  const searchQuery = document.getElementById("searchInput").value.toLowerCase();
  const selectedCountry = document.getElementById("countryFilter").value;

  const filtered = nuclearBombs.filter(bomb => {
    const matchesSearch = bomb.name.toLowerCase().includes(searchQuery) || 
                          bomb.type.toLowerCase().includes(searchQuery) ||
                          bomb.description.toLowerCase().includes(searchQuery);
    
    const matchesCountry = selectedCountry === "all" || bomb.country === selectedCountry;

    return matchesSearch && matchesCountry;
  });

  displayBombs(filtered);
}

// Event Listeners untuk input pencarian dan dropdown negara
document.getElementById("searchInput").addEventListener("input", filterBombs);
document.getElementById("countryFilter").addEventListener("change", filterBombs);

// Render pertama kali saat halaman dimuat
displayBombs(nuclearBombs);,{
    name: "Hurricane",
    country: "Inggris",
    type: "Fisi (Plutonium Implosion)",
    year: "1952",
    yield: "25 Kiloton TNT",
    description: "Uji coba senjata nuklir pertama Britania Raya (Inggris) yang diledakkan di dalam lambung kapal HMS Plym di Australia."
  },
  {
    name: "Gerboise Bleue",
    country: "Prancis",
    type: "Fisi (Plutonium)",
    year: "1960",
    yield: "70 Kiloton TNT",
    description: "Uji coba nuklir pertama Prancis yang dilakukan di Gurun Sahara, Aljazair. Memiliki daya ledak yang sangat besar untuk ukuran uji coba pertama."
  },
  {
    name: "596",
    country: "Tiongkok",
    type: "Fisi (Uranium Implosion)",
    year: "1964",
    yield: "22 Kiloton TNT",
    description: "Uji coba senjata nuklir pertama Republik Rakyat Tiongkok yang dilakukan di Lop Nur, menandai masuknya Tiongkok sebagai kekuatan nuklir global."
  },
  {
    name: "Chagai-I",
    country: "Pakistan",
    type: "Fisi (Uranium Terkaya)",
    year: "1998",
    yield: "40 Kiloton TNT (Total)",
    description: "Serangkaian 5 uji coba nuklir bawah tanah beruntun yang dilakukan Pakistan sebagai respons langsung terhadap uji coba nuklir India."
  },
  {
    name: "Hwasong-17 (Warhead)",
    country: "Korea Utara",
    type: "Termonuklir (Dugaan)",
    year: "2017",
    yield: "100-250 Kiloton TNT",
    description: "Uji coba nuklir keenam dan terbesar oleh Korea Utara di situs Punggye-ri, diklaim berhasil menguji hulu ledak bom hidrogen untuk rudal ICBM."
  }
