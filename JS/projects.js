let tabButtons = document.querySelectorAll(".tabs .title button");
let tabContent = document.querySelectorAll(".tabs .content");

function showContent(contentIndex,colorCode) {
    tabButtons.forEach(function(node) {
        node.style.backgroundColor = "";
        node.style.color = ""
    });
    tabButtons[contentIndex].style.backgroundColor = colorCode;
    tabButtons[contentIndex].style.color = "brown";
    tabContent.forEach(function(node) {
        node.style.display = "none";
    });
    tabContent[contentIndex].style.display = "block";
    tabContent[contentIndex].style.backgroundColor = colorCode;
}

showContent(0, '#ffff00');

