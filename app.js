// ==========================================================================
// Flores de Alis - Lógica de Control e Interacciones
// ==========================================================================

// --- SEED DATA: Catálogo de Productos Inicial ---
const PRODUCTS = [
    {
        id: 1,
        name: "Rosa Clásica de Limpiapipas",
        category: "individual",
        price: 15000,
        image: "Fotos/IMG_20260513_165907_246.jpg.jpeg",
        description: "Una rosa roja profunda hecha a mano con 15 limpiapipas de felpa ultra-suave. Perfecta para expresar un amor eterno y duradero que nunca se marchita.",
        tags: ["Artesanal", "Alambre reforzado", "Detalles únicos", "Perfecta para regalar"]
    },
    {
        id: 2,
        name: "Girasol Radiante Gigante",
        category: "individual",
        price: 25000,
        image: "Fotos/IMG_20260513_165911_432.jpg.jpeg",
        description: "Girasol vibrante con detalles en café y pétalos amarillos esponjosos. Llena cualquier espacio de luz, alegría y energía positiva.",
        tags: ["Colores vibrantes", "Alambre reforzado", "Diseño eterno", "Hecho a mano"]
    },
    {
        id: 3,
        name: "Tulipán Rosa de Ensueño",
        category: "individual",
        price: 12000,
        image: "Fotos/IMG_20260513_165918_865.jpg.jpeg",
        description: "Elegante tulipán de color rosa pastel que simboliza el cariño puro y la ternura. Un detalle sutil y sumamente encantador.",
        tags: ["Tallo flexible", "Suave felpa", "Artesanal", "Perfecto para regalar"]
    },
    {
        id: 4,
        name: "Ramo Eterno de Lavandas",
        category: "bouquet",
        price: 45000,
        image: "Fotos/IMG_20260513_170015_805.jpg.jpeg",
        description: "Un precioso ramo compuesto por 5 tallos de lavanda en degradé morado y lila, atado con un lazo de yute rústico. Transmite paz, tranquilidad y elegancia.",
        tags: ["Artesanal", "Papel Koreano", "Diseño eterno", "Hecho a mano"]
    },
    {
        id: 5,
        name: "Macetita de Mini Margaritas",
        category: "potted",
        price: 35000,
        image: "Fotos/IMG_20260513_170017_758.jpg.jpeg",
        description: "Una pequeña maceta tejida o decorada que contiene 3 margaritas sonrientes hechas a mano. Ideal para decorar el escritorio, buró o regalar una sonrisa duradera.",
        tags: ["Detalles únicos", "Artesanal", "Suave felpa", "Hecho a mano"]
    },
    {
        id: 6,
        name: "Ramo 'Amor Infinito' (Rosas y Tulipanes)",
        category: "bouquet",
        price: 65000,
        image: "Fotos/IMG_20260513_170025_070.jpg.jpeg",
        description: "Una combinación espectacular de 3 rosas premium y 3 tulipanes de ensueño envueltos en papel coreano rosado con un lazo satinado de satén. El regalo definitivo de amor.",
        tags: ["Papel Koreano", "Perfecto para regalar", "Edición especial", "Artesanal"]
    },
    {
        id: 7,
        name: "Orquídea Potted de Limpiapipas",
        category: "potted",
        price: 55000,
        image: "Fotos/IMG_20260513_170136_431.jpg.jpeg",
        description: "Exclusiva orquídea morada recreada pétalo a pétalo con limpiapipas estructurados. Viene en una maceta elegante lista para embellecer cualquier rincón especial.",
        tags: ["Alambre reforzado", "Detalles únicos", "Diseño eterno", "Artesanal"]
    },
    {
        id: 8,
        name: "Caja de Corazón con Rosas y Chocolates",
        category: "special",
        price: 80000,
        image: "Fotos/IMG_20260513_170139_985.jpg.jpeg",
        description: "Una lujosa caja en forma de corazón que incluye 6 rosas de limpiapipas rojas perfectas combinadas con un espacio para deliciosos chocolates de tu elección. Una verdadera obra de arte.",
        tags: ["Edición especial", "Perfecto para regalar", "Hecho a mano", "Detalles únicos"]
    },
    {
        id: 9,
        name: "Ramo Primavera de Tulipanes",
        category: "bouquet",
        price: 50000,
        image: "Fotos/IMG_20260513_170231_797.jpg.jpeg",
        description: "Un hermoso ramo de tulipanes en colores pastel, envueltos con delicadeza en papel coreano. Diseñado para llenar de luz y alegría.",
        tags: ["Papel Koreano", "Colores vibrantes", "Artesanal", "Hecho a mano"]
    },
    {
        id: 10,
        name: "Ramo Silvestre de Margaritas",
        category: "bouquet",
        price: 48000,
        image: "Fotos/IMG_20260513_170413_401.jpg.jpeg",
        description: "Ramo campestre con margaritas blancas y amarillas combinadas con follaje verde estructurado. Transmite frescura, pureza y paz.",
        tags: ["Colores vibrantes", "Artesanal", "Detalles únicos", "Hecho a mano"]
    },
    {
        id: 11,
        name: "Super Ramo Floreciente",
        category: "bouquet",
        price: 75000,
        image: "Fotos/IMG_20260513_170415_944.jpg.jpeg",
        description: "Un ramo de gran tamaño que combina margaritas, rosas y tulipanes en una explosión de color y alegría.",
        tags: ["Papel Koreano", "Perfecto para regalar", "Colores vibrantes", "Artesanal"]
    },
    {
        id: 12,
        name: "Ramo Dulce Suspiro de Lirios",
        category: "bouquet",
        price: 52000,
        image: "Fotos/IMG_20260513_170714_690.jpg.jpeg",
        description: "Delicados lirios rosados combinados en un ramo romántico con envoltura en tonos pastel. Simboliza la gratitud y la ternura.",
        tags: ["Colores vibrantes", "Artesanal", "Perfecto para regalar", "Detalles únicos"]
    },
    {
        id: 13,
        name: "Ramo Elegancia de Lirios Rosas",
        category: "bouquet",
        price: 55000,
        image: "Fotos/IMG_20260513_170716_913.jpg.jpeg",
        description: "Elegante arreglo de lirios rosados y blancos tejidos a mano, perfecto para obsequiar a esa persona que ilumina tus días.",
        tags: ["Papel Koreano", "Alambre reforzado", "Diseño eterno", "Artesanal"]
    },
    {
        id: 14,
        name: "Ramo Esplendor de Rosas y Lirios",
        category: "bouquet",
        price: 70000,
        image: "Fotos/IMG_20260513_170726_507.jpg.jpeg",
        description: "Una combinación sofisticada de rosas rojas y lirios rosados envueltos en papel coreano de diseñador.",
        tags: ["Papel Koreano", "Perfecto para regalar", "Edición especial", "Hecho a mano"]
    },
    {
        id: 15,
        name: "Ramo Encanto Romántico",
        category: "bouquet",
        price: 72000,
        image: "Fotos/IMG_20260513_170726_554.jpg.jpeg",
        description: "Ramo de ensueño con una mezcla selecta de flores en tonos rosa, fucsia y blanco, ideal para aniversarios o propuestas especiales.",
        tags: ["Colores vibrantes", "Papel Koreano", "Artesanal", "Hecho a mano"]
    },
    {
        id: 16,
        name: "Gran Ramo Celebración de Amor",
        category: "bouquet",
        price: 95000,
        image: "Fotos/IMG_20260513_170726_666.jpg.jpeg",
        description: "La máxima expresión de cariño. Un ramo extra grande y tupido con lirios, rosas y follaje variado en una envoltura premium espectacular.",
        tags: ["Papel Koreano", "Perfecto para regalar", "Edición especial", "Detalles únicos"]
    },
    {
        id: 17,
        name: "Ramo Destello Dorado de Girasoles",
        category: "bouquet",
        price: 58000,
        image: "Fotos/IMG_20260513_170907_896.jpg.jpeg",
        description: "Un ramo alegre compuesto de vibrantes girasoles amarillos y follaje verde, perfecto para felicitar en graduaciones o logros especiales.",
        tags: ["Colores vibrantes", "Artesanal", "Perfecto para regalar", "Hecho a mano"]
    },
    {
        id: 18,
        name: "Ramo Cálido Atardecer (Girasoles y Rosas)",
        category: "bouquet",
        price: 68000,
        image: "Fotos/IMG_20260513_170918_135.jpg.jpeg",
        description: "Hermosa combinación de girasoles radiantes y rosas rojas que representa la calidez de un amor apasionado y sincero.",
        tags: ["Papel Koreano", "Colores vibrantes", "Perfecto para regalar", "Artesanal"]
    },
    {
        id: 19,
        name: "Ramo Pasión y Luz",
        category: "bouquet",
        price: 70000,
        image: "Fotos/IMG_20260513_170918_194.jpg.jpeg",
        description: "Ramo espectacular con una selecta combinación de rosas de limpiapipas rojas y girasoles vibrantes en envoltura premium.",
        tags: ["Papel Koreano", "Colores vibrantes", "Perfecto para regalar", "Edición especial"]
    },
    {
        id: 20,
        name: "Ramo Girasoles del Alma",
        category: "bouquet",
        price: 62000,
        image: "Fotos/IMG_20260513_170925_631.jpg.jpeg",
        description: "Ramo elegante de girasoles eternos atados con cinta decorativa. Una creación que durará para siempre en el corazón de quien la reciba.",
        tags: ["Alambre reforzado", "Artesanal", "Hecho a mano", "Diseño eterno"]
    }
];

// --- NÚMERO DE TELÉFONO DE ALLISON ---
// (Aquí colocamos el número de contacto de Allison en formato internacional, se puede cambiar)
const WHATSAPP_PHONE = "573136498818"; // Reemplazar con el número real de Alis

// --- ESTADO GLOBAL ---
let activeCategory = "all";
let giftData = {
    recipient: "",
    message: ""
};

// --- AL CARGAR EL DOCUMENTO ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. Inicializar iconos de Lucide
    lucide.createIcons();

    // 2. Iniciar la lluvia de fondo animada
    initAmbientBackground();

    // 3. Renderizar los productos iniciales
    renderProducts(PRODUCTS);

    // 4. Configurar eventos de los botones de filtro
    setupFilters();

    // 5. Configurar eventos del Modal
    setupModal();

    // 6. Configurar la dedicatoria
    setupGiftCard();

    // 7. Configurar partículas al hacer clic
    setupClickHearts();
});

// --- 🌸 LLUVIA DINÁMICA DE FONDO (FLOWERS & HEARTS) ---
function initAmbientBackground() {
    const bgContainer = document.getElementById("ambient-background");
    const elements = ["🌸", "💕", "✨", "🌸", "💖"];
    const maxElements = 15; // Límite para no sobrecargar de renderizado

    for (let i = 0; i < maxElements; i++) {
        setTimeout(() => {
            createFloatingElement(bgContainer, elements);
        }, i * 1500); // Lanzamiento progresivo
    }
}

function createFloatingElement(container, items) {
    if (!container) return;

    const el = document.createElement("div");
    el.className = "ambient-element";
    el.innerText = items[Math.floor(Math.random() * items.length)];

    // Parámetros físicos aleatorios
    const startX = Math.random() * 100; // Porcentaje de ancho
    const scale = 0.5 + Math.random() * 1; // Tamaño
    const duration = 12 + Math.random() * 10; // Velocidad de subida (segundos)
    const delay = Math.random() * 5; // Retraso inicial

    el.style.left = `${startX}%`;
    el.style.transform = `scale(${scale})`;
    el.style.animationDuration = `${duration}s`;
    el.style.animationDelay = `${delay}s`;

    container.appendChild(el);

    // Cuando termine la animación, reiniciarlo abajo
    el.addEventListener("animationiteration", () => {
        el.style.left = `${Math.random() * 100}%`;
        el.style.animationDuration = `${12 + Math.random() * 10}s`;
    });
}

// --- 🖼️ RENDERIZADO DE PRODUCTOS ---
function renderProducts(productsList) {
    const grid = document.getElementById("products-grid");
    if (!grid) return;

    grid.innerHTML = "";

    const filtered = productsList.filter(prod => {
        return activeCategory === "all" || prod.category === activeCategory;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="glass-card empty-state" style="grid-column: 1 / -1; padding: 40px; text-align: center; border-radius: var(--border-radius-md);">
                <span style="font-size: 40px;">🌸</span>
                <h3 style="margin-top:10px; font-family: var(--font-handwritten); font-size:24px;">¡Pronto más creaciones!</h3>
                <p style="font-size:13px; color: var(--text-muted); margin-top:5px;">Allison está tejiendo con amor nuevos modelos para ti.</p>
            </div>
        `;
        return;
    }

    filtered.forEach((product, index) => {
        const categoryLabels = {
            individual: "Individual",
            bouquet: "Ramo",
            potted: "Maceta",
            special: "Especial"
        };

        const cardContainer = document.createElement("div");
        cardContainer.className = "product-card-container";
        // Pequeña animación de entrada progresiva
        cardContainer.style.animation = `fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
        cardContainer.style.animationDelay = `${index * 0.08}s`;
        cardContainer.style.opacity = "0";

        cardContainer.innerHTML = `
            <div class="product-card" onclick="openProductModal(${product.id})">
                <span class="product-badge">${categoryLabels[product.category]}</span>
                <div class="product-image-wrapper">
                    <div class="product-image" style="background-image: url('${product.image}')"></div>
                </div>
                <div class="product-card-caption">
                    <h3 class="product-card-title">${product.name}</h3>
                    <p class="product-card-price">$${product.price.toLocaleString("es-CO")} COP</p>
                </div>
            </div>
        `;

        grid.appendChild(cardContainer);
    });
}

// Configurar animaciones de entrada en el CSS dinámico
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(25px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(styleSheet);

// --- ⚙️ CONFIGURACIÓN DE FILTROS ---
function setupFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            activeCategory = btn.getAttribute("data-category");
            
            // Efecto suave de transición en la grilla
            const grid = document.getElementById("products-grid");
            grid.style.opacity = "0";
            grid.style.transform = "translateY(10px)";
            grid.style.transition = "all 0.25s ease";

            setTimeout(() => {
                renderProducts(PRODUCTS);
                grid.style.opacity = "1";
                grid.style.transform = "translateY(0)";
            }, 250);
        });
    });
}

// --- 🖼️ MANEJO DEL MODAL POLAROID ---
function setupModal() {
    const modal = document.getElementById("polaroid-modal");
    const closeBtn = document.getElementById("close-modal-btn");

    closeBtn.addEventListener("click", closeProductModal);
    
    // Cerrar al hacer clic fuera de la Polaroid
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeProductModal();
        }
    });

    // Cerrar con tecla Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeProductModal();
        }
    });
}

function openProductModal(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const modal = document.getElementById("polaroid-modal");
    const modalImg = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalPrice = document.getElementById("modal-price");
    const modalDesc = document.getElementById("modal-desc");
    const modalTags = document.getElementById("modal-tags");
    const btnOrder = document.getElementById("btn-whatsapp-order");

    // Inyectar datos al modal
    modalImg.style.backgroundImage = `url('${product.image}')`;
    modalTitle.innerText = product.name;
    modalPrice.innerText = `$${product.price.toLocaleString("es-CO")} COP`;
    modalDesc.innerText = product.description;

    // Renderizar tags de limpiapipas
    modalTags.innerHTML = product.tags.map(tag => `
        <span class="polaroid-tag">✨ ${tag}</span>
    `).join("");

    // Formatear enlace de WhatsApp
    const message = buildWhatsAppMessage(product);
    btnOrder.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

    // Mostrar modal con sonido de cámara sutil o vibración si está disponible
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
    
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Desactivar scroll de fondo
}

function closeProductModal() {
    const modal = document.getElementById("polaroid-modal");
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Reactivar scroll
}

// --- 💌 CONSTRUCCIÓN DE MENSAJE DE WHATSAPP ---
function buildWhatsAppMessage(product) {
    let msg = `¡Hola Alis! 🌸 Acabo de ver tu catálogo web y me enamoré de una de tus creaciones hecha con amor:\n\n`;
    msg += `💖 *Creación:* ${product.name}\n`;
    msg += `💵 *Precio:* $${product.price.toLocaleString("es-CO")} COP\n\n`;

    // Si tiene dedicatoria guardada, la añadimos
    if (giftData.recipient || giftData.message) {
        msg += `💌 *Detalle de Regalo Especial:*\n`;
        if (giftData.recipient) msg += `  • *Para:* ${giftData.recipient}\n`;
        if (giftData.message) msg += `  • *Mensaje:* "${giftData.message}"\n\n`;
        msg += `¿Podrías por favor agregar una tarjetita hecha a mano con esta dedicatoria? 🥰\n\n`;
    }

    msg += `¿Tienes disponibilidad para elaborar este modelo o nos ponemos de acuerdo con los detalles? ¡Muchas gracias! ✨`;
    return msg;
}

// --- 💌 CONFIGURACIÓN DE DEDICATORIA DE REGALO ---
function setupGiftCard() {
    const btnSave = document.getElementById("btn-save-gift");
    const toast = document.getElementById("gift-saved-toast");

    btnSave.addEventListener("click", () => {
        const recipientVal = document.getElementById("gift-recipient").value.trim();
        const messageVal = document.getElementById("gift-message").value.trim();

        // Guardar en el estado global
        giftData.recipient = recipientVal;
        giftData.message = messageVal;

        // Animar el botón para dar feedback táctil
        btnSave.style.transform = "scale(0.95)";
        setTimeout(() => {
            btnSave.style.transform = "";
        }, 150);

        // Mostrar notificación de guardado tierno
        if (recipientVal || messageVal) {
            toast.innerText = "¡Dedicatoria guardada con éxito! 💕 La añadiremos a tus pedidos.";
        } else {
            toast.innerText = "Dedicatoria limpiada. Tus pedidos irán sin tarjeta especial.";
        }
        
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    });
}

// --- 💕 EFECTO VISUAL AL HACER CLIC (PARTÍCULAS DE CORAZONES) ---
function setupClickHearts() {
    const heartEmojis = ["💕", "🌸", "✨", "💖", "❤️"];
    
    document.addEventListener("click", (e) => {
        // Evitar partículas al hacer clic en inputs o botones de forma exagerada
        if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

        const container = document.body;
        const particleCount = 4 + Math.floor(Math.random() * 4); // Entre 4 y 7 corazones por clic

        for (let i = 0; i < particleCount; i++) {
            const p = document.createElement("div");
            p.className = "click-heart-particle";
            p.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            
            // Ubicación del cursor
            p.style.left = `${e.clientX}px`;
            p.style.top = `${e.clientY}px`;

            // Ángulo de dispersión y distancia
            const angle = Math.random() * Math.PI * 2;
            const distance = 40 + Math.random() * 80;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance - 30; // Tendencia a subir un poco

            p.style.setProperty("--tx", `${tx}px`);
            p.style.setProperty("--ty", `${ty}px`);

            // Rotación inicial
            p.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;

            container.appendChild(p);

            // Eliminar elemento después de la animación
            setTimeout(() => {
                p.remove();
            }, 1200);
        }
    });
}
