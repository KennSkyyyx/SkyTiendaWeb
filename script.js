// Descripciones de los productos
var productDescriptions = {
    "Blusa Azul Women": "Una elegante blusa azul perfecta para cualquier ocasión.",
    "Camisa Negra Oversize": "Esta camisa oversize negra de H&M es una prenda versátil y cómoda, ideal para un look relajado pero con estilo. Fabricada con materiales suaves y de alta calidad, esta camiseta ofrece una caída holgada que se adapta a cualquier tipo de cuerpo. Perfecta para combinar con jeans, leggings o faldas para un estilo casual y moderno.",
    "Camisa Azul H$M": "Camisa azul de H&M, ideal para el trabajo y eventos casuales.",
    "Chaqueta Men": "Esta chaqueta en tono verde oliva es ideal para los días frescos. Con cuello y mangas largas, es una prenda cómoda y funcional. Los dos bolsillos en el pecho con solapas le dan un toque práctico y estilizado. Perfecta para combinar con jeans o pantalones casuales..",
    "Pantalon Negro Jean": "Los pantalones negros jean de H&M son una pieza esencial en cualquier guardarropa. Con un diseño clásico de cinco bolsillos y un ajuste regular, estos jeans ofrecen comodidad y durabilidad. El color negro los hace fácilmente combinables con cualquier top o accesorio, siendo ideales tanto para el día a día como para ocasiones más formales.",
    "Jogger Beige": "Jogger beige, perfecto para un look casual y cómodo.",
    "Sudadera Black": "Estos cómodos pantalones deportivos en color negro son ideales para el uso diario o para hacer ejercicio, Tienen una cintura elástica que se ajusta perfectamente y proporciona comodidad durante todo el día, Los bolsillos laterales son prácticos para llevar tus pertenencias esenciales.",
    "Vestido Black Women": " Tiene tirantes delgados, un corpiño ajustado y una falda acampanada que comienza en la cintura. Justo debajo del vestido, hay una etiqueta de precio que indica 150.000. Este vestido podría ser una excelente opción para quienes buscan prendas de moda.",
    "Vestido Women H&M": "Este vestido de H&M para mujeres destaca por su diseño sencillo y elegante. Confeccionado en un color naranja vibrante, es perfecto para el verano o para combinar con accesorios llamativos. Su corte ajustado resalta la figura, mientras que el tejido de algodón proporciona comodidad durante todo el día. Ideal para ocasiones casuales o salidas nocturnas.."

};

var productUrls = {
    "Blusa Azul Women": "https://www.example.com/blusa-azul-women",
    "Camisa Negra Oversize": "https://www.example.com/camisa-negra-oversize",
    "Camisa Azul H$M": "https://www.example.com/camisa-azul-hm",
    "Chaqueta Men": "https://www.example.com/chaqueta-men",
    "Pantalon Negro Jean": "https://www.example.com/pantalon-negro-jean",
    "Jogger Beige": "https://www.example.com/jogger-beige",
    "Sudadera Black": "https://www.example.com/sudadera-black",
    "Vestido Black Women": "https://www.example.com/vestido-black-women",
    "Vestido Women H&M": "https://www.example.com/vestido-women-hm"
};

// Inicialización de Swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
});

// Función para mostrar la carta de información
function showInfoCard(title, description, url) {
    document.getElementById('productTitle').innerText = title;
    document.getElementById('productDescription').innerText = description;
    var buyButton = document.getElementById('buyButton');
    buyButton.onclick = function() {
        window.location.href = url;
    };
    document.getElementById('infoCard').style.display = 'block';
}

// Añadir evento de clic a las imágenes del slider
var slides = document.querySelectorAll('.swiper-slide img');
slides.forEach(function(slide) {
    slide.addEventListener('click', function() {
        var title = slide.alt;
        var description = productDescriptions[title] || "Descripción no disponible.";
        var url = productUrls[title] || "#";
        showInfoCard(title, description, url);
    });
});

// Cerrar la carta de información
document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('infoCard').style.display = 'none';
});
