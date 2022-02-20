$(document).ready(function () {
  //   nav toggle
  $(".nav-toggle").click(() => {
    $(".nav-menu").toggleClass("active");
  });
  fetch("https://marvskiee.github.io/portfolio_json/work.json")
    .then((response) => response.json())
    // .then((data) => (newData = data));
    .then((data) => {
      let html = "";
      for (d of data) {
        let qrcode = d["title"].toLowerCase() + "_qrcode.png";
        let action = "";
        if (d["link"] == "null") {
          action = `<button name="${d["title"]}" class="open_modal" img_data="${qrcode}">${d["action"]}</button>`;
        } else {
          action = `<a href="${d["link"]}" target="_blank">${d["action"]}</a>`;
        }
        html += `
          <div class="card">
            <div class="card-cover">
                <a href="assets/images/${d["cover"]} " target="_blank">
                    <img src="assets/images/${d["cover"]}" alt="thumbnail">
                </a>
            </div>
            <div class="card-title">
                <p>${d["title"]}</p>${action}
            </div>
            <div class="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, a tempore.
                Exercitationem, nisi. Iure, nam?</div>
        </div>
          `;
      }
      $("#work-list").html(html);
      $(".open_modal").on("click", function () {
        let img = $(this).attr("img_data");
        let name = $(this).attr("name");
        let html = "";

        html = `
        <div class="modal-header">
            <p>${name}</p>
            <img id="close-modal" alt="close" src="assets/images/close.png"/>
        </div>
        <img src="assets/images/${img}" alt="">
            <div><p>To test this app, you must first install expo from the Google Play Store, then scan the QR code.</p></div>
           
        `;
        $("#modal").html(html);
        $("#close-modal").on("click", function () {
          $(".modal-wrapper").toggleClass("active");
        });
        $(".modal-wrapper").toggleClass("active");
      });
    });
});
