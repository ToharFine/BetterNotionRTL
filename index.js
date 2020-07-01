function alignBlocks() {
  //gets the div blocks in the page
  let blocks = document.querySelectorAll('div');
  //sets their attributes to support rtl
  blocks.forEach((block) => {
    block.setAttribute("dir", "auto");
    block.style.textAlign = "initial";
  })
}

let pageLoadInterval = setInterval(() => {
  if (document.querySelector('div.notion-page-content') !== null) {
    alignBlocks()
  }
}, 200)