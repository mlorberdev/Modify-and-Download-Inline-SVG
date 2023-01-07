!(function () {

  document.getElementById("color").addEventListener("change", function () {
    // FUNCTION MODIFYING SVG -- ANY MOD WOULD BE FINE, I IMAGINE...
    document.getElementById("avatar_bg").style.fill = this.value; // NB: AVATAR_BG IS JUST THE ELE I'M TARGETING TO MOD; SUB YOURS!

  });

  document.getElementById("download").addEventListener("click", () => {
    // ENCODE AND DOWNLOAD MODIFIED SVG
    let svg = document.getElementById("avatar").outerHTML.toString(); // NB: AVATAR IS THE SVG ID
    let target = `data:image/svg+xml,${svg.replaceAll("\r", "").replaceAll("\t", "").replaceAll("\n", "").replaceAll('"', "'").replaceAll("<", "%3C").replaceAll(">", "%3E").replaceAll("#", "%23")}`; // NB: URL ENCODING
    let a = document.createElement("a");
    a.href = target;
    a.download = `file.svg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  })

})();