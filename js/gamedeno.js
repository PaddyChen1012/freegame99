let tryBtn = document.querySelectorAll('div[target]');
for(var j = 0; j < tryBtn.length ; j++) {
    tryBtn[j].addEventListener('click', loadData,false);
}
function loadData() {
    let gameName = this.attributes[0].value;
    console.log(gameName);
}