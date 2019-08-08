function getYelp() {
    try {
        var data = $('script.structured-data-widget').text();
        var parsedJson = jQuery.parseJSON(data);
        var address = parsedJson.address;
        var addressString = `${address.streetAddress} ${address.addressLocality} ${address.addressRegion} ${address.postalCode}`; 
        window.open(`https://www.google.com/search?q=site:yelp.com+${addressString}`);
    }
    catch(e) {
        alert('Could not find structured data');
    }
    
}
getYelp();