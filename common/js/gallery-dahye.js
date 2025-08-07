   const photos = [
      { src: "../images/dahye/1.png", desc: "이소유" },
      { src: "../images/dahye/2.png", desc: "이소유" },
      { src: "../images/dahye/3.png", desc: "이소유" },
      { src: "../images/dahye/2.png", desc: "이소유" },
      { src: "../images/dahye/3.png", desc: "이소유" },
      { src: "../images/dahye/2.png", desc: "이소유" },
      { src: "../images/dahye/3.png", desc: "이소유" },
      { src: "../images/dahye/2.png", desc: "이소유" },
      { src: "../images/dahye/1.png", desc: "이소유" },
      { src: "../images/dahye/3.png", desc: "이소유" },
      { src: "../images/dahye/2.png", desc: "이소유" },
      { src: "../images/dahye/3.png", desc: "이소유" },
      { src: "../images/dahye/1.png", desc: "이소유" },
      { src: "../images/dahye/1.png", desc: "이소유" },
      { src: "../images/dahye/2.png", desc: "이소유" },
      { src: "../images/dahye/3.png", desc: "이소유" },
      { src: "../images/dahye/1.png", desc: "이소유" },
      { src: "../images/dahye/1.png", desc: "이소유" },
      { src: "../images/dahye/1.png", desc: "이소유" },
      { src: "../images/dahye/1.png", desc: "이소유" },
      { src: "../images/dahye/1.png", desc: "이소유" },
      { src: "../images/dahye/1.png", desc: "이소유" },
      { src: "../images/dahye/1.png", desc: "이소유" },
      { src: "../images/dahye/1.png", desc: "이소유" },
      { src: "../images/dahye/1.png", desc: "이소유" },
      { src: "../images/dahye/1.png", desc: "이소유" },
      { src: "../images/dahye/1.png", desc: "이소유" },
      { src: "../images/dahye/1.png", desc: "이소유" },
      { src: "../images/dahye/1.png", desc: "이소유" },
      { src: "../images/dahye/1.png", desc: "이소유" },
    ];

    const perPage = 6;
    let currentPage = 1;

    function renderGallery(page) {
      const start = (page - 1) * perPage;
      const end = start + perPage;
      const pagePhotos = photos.slice(start, end);
      const gallery = document.getElementById("gallery-container");
      gallery.innerHTML = "";
      const grid = document.createElement("div");
      grid.className = "image-grid";
      pagePhotos.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo.src;
        img.alt = "시술 사진";
        img.onclick = () => openFullscreen(photo.src, photo.desc);
        grid.appendChild(img);
      });
      gallery.appendChild(grid);
      renderPagination();
    }

   function renderPagination() {
  const totalPages = Math.ceil(photos.length / perPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const maxVisible = 3;
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  // 이전 버튼 (항상 보이되, 첫 페이지일 때는 비활성화)
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "이전";
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderGallery(currentPage);
    }
  };
  pagination.appendChild(prevBtn);

  // 페이지 번호 버튼
  for (let i = startPage; i <= endPage; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.onclick = () => {
      currentPage = i;
      renderGallery(i);
    };
    if (i === currentPage) btn.style.fontWeight = "bold";
    pagination.appendChild(btn);
  }

  // 다음 버튼 (항상 보이되, 마지막 페이지일 때는 비활성화)
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "다음";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderGallery(currentPage);
    }
  };
  pagination.appendChild(nextBtn);
}


    function openFullscreen(src, desc) {
      document.getElementById("fullscreenImage").src = src;
      document.getElementById("fullscreenDescription").textContent = desc;
      document.getElementById("fullscreenOverlay").style.display = "flex";
    }

    function closeFullscreen() {
      document.getElementById("fullscreenOverlay").style.display = "none";
    }

    renderGallery(currentPage);
