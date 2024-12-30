fetch('peliculas.json')
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        const div = document.getElementById('galeria-id');
        const a = document.createElement("a");
        const img = document.createElement("img");
        a.href = "Reseñas.html?id="+element.id;
        img.src = element.img;
        img.class = "box";
        a.appendChild(img);
        div.appendChild(a);
    });
})
.catch(error => {
    console.error('Error al obtener los datos:', error);
});