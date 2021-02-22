// region list
const root = document.querySelector("#list");
root.className = "list";
const title = document.getElementById("modalTitle");
const modal = document.getElementById("modalList");
const modalBlock = document.querySelector(".modal");

$.getJSON("../static/js/amircell-cb9a5-default-rtdb-export.json", (data) => {
  let region = Object.keys(data);

  let abc = region.map((item) => {
    return item[0];
  });
  abc = [...new Set(abc)];

  abc.forEach((t, i) => {
    const letterBox = document.createElement("div");
    const letter = document.createElement("h5");
    const list = document.createElement("ul");

    letterBox.className = "list_box";

    letter.className = "letter";
    letter.innerHTML = t;

    letterBox.append(letter);
    letterBox.append(list);
    root.append(letterBox);

    region.forEach((h, n) => {
      const num = Object.entries(data[h]).length;
      const li = document.createElement("li");
      li.setAttribute("alt-region", h);

      Object.entries(data[h])[0][0] == "empty"
        ? (li.innerHTML = `${h} <span alt-region=${h}>0/40<span>`)
        : (li.innerHTML = `${h} <span alt-region=${h}>${num}/40<span>`);

      li.addEventListener("click", (e) => {
        document.querySelector("body").style.overflow = "hidden";
        modalBlock.style.zIndex = 999;
        modalBlock.style.opacity = 1;
        modal.innerHTML = "";
        title.innerHTML = e.target.attributes[0].value;

        Object.entries(data[e.currentTarget.attributes[0].value]).forEach(
          (q, m) => {
            let distibutor = document.createElement("div");

            if (q[0] != "empty") {
              distibutor.className = "distibutor";
              distibutor.innerHTML = `<p class="distibutorName">${q[0]}</p><h5 class='distibutorPhone'><a href="tel:+${q[1]}">+${q[1]}</a></h5>`;
            } else {
              distibutor.className = "empty";
              title.innerHTML = q[1].split(".")[0];
              distibutor.innerHTML = `<p>${
                q[1].split(".")[1]
              }:</p><h5 class="emptyRegion"><a href="tel:+${
                q[1].split(". ")[2]
              }">+${q[1].split(". ")[2]}</a></h5>`;
            }

            modal.append(distibutor);
          }
        );
      });

      if (h[0] == t) {
        list.append(li);
      }
    });
  });
});

const cross = document.getElementById("close");

cross.addEventListener("click", () => {
  document.querySelector("body").style.overflow = "auto";
  modalBlock.style.zIndex = -1;
  modalBlock.style.opacity = 0;
});
