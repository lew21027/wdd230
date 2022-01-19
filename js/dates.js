const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `Last Updated: ${document.lastModified}`;

const year = document.getElementById("year").innerHTML = new Date().getFullYear();
year.innerHTML = `${document.lastModified};`