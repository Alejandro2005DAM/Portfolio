
  const modal = document.getElementById("cert-modal");
  const modalImg = document.getElementById("cert-image");
  const closeBtn = document.getElementsByClassName("close")[0];

  document.querySelectorAll(".cert-item img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display="block"
        modalImg.src = img.src;
    });
  });

  closeBtn.onclick = () => modal.style.display = "none";
  modal.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

