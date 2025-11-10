// Variables globales
const header = document.querySelector('header');
let lastScroll = 0;
let ticking = false;

// Configuración inicial
document.addEventListener('DOMContentLoaded', () => {
    // Establecer todos los elementos como visibles inmediatamente
    document.querySelectorAll('.glass, .tech-item, .project, .experience-card, .cert-item').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.style.transition = 'none';
    });

    // Inicializar el header
    header.classList.remove('hide');
});

// Manejo del scroll optimizado
const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    
    // Mostrar/ocultar header al hacer scroll
    if (currentScroll <= 0) {
        header.classList.remove('hide');
    } else if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }

    lastScroll = currentScroll;
    ticking = false;
};

// Evento de scroll optimizado
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
    }
}, { passive: true });

// Modal para certificados
const modal = document.getElementById("cert-modal");
const modalImg = document.getElementById("cert-image");
const closeBtn = document.getElementsByClassName("close")[0];

if (modal && modalImg && closeBtn) {
    // Mostrar modal al hacer clic en una imagen de certificado
    document.querySelectorAll(".cert-item img").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            document.body.style.overflow = 'hidden';
        });
    });

    // Cerrar modal
    closeBtn.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    };

    // Cerrar al hacer clic fuera de la imagen
    modal.onclick = (e) => { 
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    };

    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Función para manejar el responsive (opcional)
function handleResponsive() {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.menu-btn');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
    }
}

// Inicializar funciones al cargar
window.addEventListener('load', () => {
    handleResponsive();
});

// Manejar redimensionamiento de la ventana
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

const dowloadCV= document.querySelector(".cta-button");

if (dowloadCV) {
    dowloadCV.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = "Alejandro Palá Vera(Currículum Vitae(DAM)).pdf";
        link.download = "Alejandro Palá Vera(Currículum Vitae(DAM)).pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

function changecolor(e){
    e.target.style.backgroundColor="var(--primary-color)";
    e.target.style.color="white";
    e.target.style.borderRadius="12px";

}

function changecolorout(e){

    if(!e.target.classList.contains('active')){
         e.target.style.backgroundColor="transparent";
        e.target.style.color="white";
    }
}

function focuscolor(e){
e.preventDefault()

     if(e.currentTarget.classList.contains('active')){
        e.target.classList.remove('active')
        e.target.style.backgroundColor="transparent"
        e.target.style.color="white";
        return
    }    
document.querySelectorAll(".nav-links li a").forEach(item=>{
        
        item.classList.remove('active')
        item.style.backgroundColor="transparent";
        item.style.color="white";
    })
   
    e.target.classList.add('active')
    e.target.style.backgroundColor="var(--primary-color)";
    e.target.style.color="white";
    e.target.style.borderRadius="12px";

}


const itemsheader= document.querySelectorAll(".nav-links li a");

itemsheader.forEach((item)=>{
//     item.addEventListener("focus",(e)=>{
     
//         if(e.target.style.backgroundColor==="transparent"){
//            e.target.style.backgroundColor="var(--primary-color)";
//            e.target.style.color="white";

//         }else{
//             e.target.style.backgroundColor="transparent";
//             e.target.style.color="white";
// }
//     })
item.onmouseover=(e)=>{
changecolor(e)
}

item.onmouseout=(e)=>{
    changecolorout(e)
}

item.onclick=(e)=>{
 focuscolor(e)
 
}
    
    
})


const downloadCV=document.querySelector(".cta-button")
downloadCV.addEventListener("mousedown",()=>{

  
    downloadCV.style.color="black"
    downloadCV.style.borderRadius="12px"
    downloadCV.classList.add("active")

})

downloadCV.addEventListener("mouseup",()=>{

    downloadCV.style.color="white"
    downloadCV.style.borderRadius="12px"
    downloadCV.classList.remove("active")
})

