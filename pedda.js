function displayImg(imgPath) {
    var modal = document.getElementById('myModal');
    var displayedImage = document.getElementById('displayedImage');

    displayedImage.src = imgPath;
    modal.style.display = 'block';
}

function hideModal() {
    document.getElementById('myModal').style.display = 'none';
}

function jagadeesh(){
    alert("working fine");
}

