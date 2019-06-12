function getFaviconAlert() {
    var img = new Image();
    var imageSrc;
    try {
        imageSrc = $('link[rel="shortcut icon"]').attr('href');
    } catch {
        alert("Missing Favicon");
    }
    img.src = imageSrc;
    img.onload = function() {
        alert("Favicon Size: " + this.width + 'x' + this.height);
    }
}
getFaviconAlert();
