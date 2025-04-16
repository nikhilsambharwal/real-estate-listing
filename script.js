function showDetails(propertyId) {
    const property = document.getElementById(propertyId);
    alert(`Details for ${property.querySelector('h3').innerText}:\nLocation: ${property.querySelector('p:nth-of-type(1)').innerText}\nPrice: ${property