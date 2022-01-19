const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `Last Updated: ${document.lastModified}`;

document.getElementById("year").innerHTML = new Date().getFullYear();