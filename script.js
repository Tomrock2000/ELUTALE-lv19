// ==========================================
// REFERENCIAS DEL DOM
// ==========================================
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const gameScreen = document.getElementById('game-screen');
const dialogBox = document.getElementById('dialog-box');
const dialogText = document.getElementById('dialog-text');
const nextIndicator = document.getElementById('next-indicator');
const optionsContainer = document.getElementById('options-container');
const btnAccept = document.getElementById('btn-accept');
const btnDecline = document.getElementById('btn-decline');
const bgLayer = document.getElementById('bg-layer');

// Controladores de Audio
const blipSound = document.getElementById('blip-sound');
const selectSound = document.getElementById('select-sound'); 
const bgMusic = document.getElementById('bg-music');

// ==========================================
// CONFIGURACIÓN DEL GUION
// Formato: { texto: "String", fondo: "nombre_archivo.jpg" }
// ==========================================
const carta = [
    { texto: "Querida Elununey Yuleikis,", fondo: "black" },
    { texto: "Me pediste (a través de un compartido de tiktok) que te escribiera algo memorable...", fondo: "black" },
    { texto: "Y como soy demasiado tremendo locote yayayaju y un ingeniero muy wapo, lo programé.", fondo: "black" },
    { texto: "Así que aquí está: mi recuerdo de la primera vez que te vi...", fondo: "black" },
    { texto: "O como me gusta llamarlo, nuestro bello 'clic', 'amarre', 'empepamiento', como prefieras llamarlo ajsjajs.", fondo: "black" },
    { texto: "Y prepárate pq esto está fucking largo (como tu pene).", fondo: "black" },
    
    // Cambio de escena: Recuerdos vagos
    { texto: "En realidad... vete tú a saber exactamente cuando fue la verdadera primera vez que nos vimos lol equis de.", fondo: "orquesta.jpeg" },
    { texto: "Probablemente fue en la orquesta o por las calles de nuestro bello pueblo mucu york o qn quita y fue en mocao.", fondo: "orquesta.jpeg" },
    { texto: "Pero de lo que si me acuerdo, fue de cuando tuve mi primer mini 'clic'...", fondo: "orquesta.jpeg" },
    { texto: "(o paradita de webo, también aplica pues).", fondo: "orquesta.jpeg" },
    { texto: "Aunque suene tonto, fue por feis xd recuerdo que compartiste una publicación relacionada con undertale.", fondo: "orquesta.jpeg" },
    { texto: "Y yo te la comenté, no recuerdo sinceramente de que era exactamente o lo que comenté.", fondo: "eloculo.jpeg" },
    { texto: "Pero te juro que eso pasó.Y pues ahí fue como que dije chucha, esta china y yo legal que nos llevaríamos bien.", fondo: "eloculo.jpeg" },
    { texto: "Creo que también a partir de allí te me hiciste más bonita...", fondo: "eloculo.jpeg" },
    { texto: "...y por eso te mencionaba siempre que hablábamos de chicas lindas en el grupo XD", fondo: "eloculo.jpeg" },
    
    // Cambio de escena: La amistad
    { texto: "Y pues... en efecto, así fue, nos hicimos amigos.", fondo: "elued.jpeg" },
    { texto: "Creo que desde el primer momento nos sentimos con bastante confianza para expresar las cosas...", fondo: "elued.jpeg" },
    { texto: "...o bueno, terminaste contandome muchas cosas tuyas JAJSJAJJSJA", fondo: "elued.jpeg" },
    { texto: "eeeeeeeeeeeeeeee", fondo: "elued.jpeg" },
    { texto: "En retrospectiva, desde siempre había una buena sintonía, nos entendíamos en cuánto a humor.", fondo: "elued.jpeg" },
    { texto: "Las conversaciones y las cosas se daban, pero nunca lo llegamos a mantener por mensajes", fondo: "elued.jpeg" },
    { texto: "O así hablar por mucho tiempo xd Supongo que por la misma cosa de que ambos estábamos en nuestras cosas ", fondo: "eluojazos.jpeg" },
    { texto: "Y me contabas sobre las tuyas...(pq creo que yo pocas veces hablaba sobre mi).", fondo: "eluojazos.jpeg" },
    { texto: "No nos fijamos de esa forma romántica el uno en el otro (nos faltó determinación).", fondo: "eluojazos.jpeg" },
    { texto: "Incluso recuerdo que cuando me preguntaste si podía ayudarte con matemáticas, pensé que tal vez hubiese surgido algo...", fondo: "eluojazos.jpeg" },
    { texto: "...pero pues no pensé interesarte (toche bobo).", fondo: "eluojazos.jpeg" },
    
    // Cambio de escena: Los momentos random
    { texto: "Pero es que en serio, nosotros cuando conversábamos nos entendíamos muy bien", fondo: "eluantojito.jpeg" },
    { texto: "Y nos reíamos por cualquier pendejada. Por ejemplo cuando bajamos de la casa de jhosderlys en su cumpleaños", fondo: "eluantojito.jpeg" },
    { texto: "que nos pusimos a hablar como pendejos...cómo clarence nya, como Españoles, cualquier mierda.", fondo: "eluantojito.jpeg" },
    { texto: "Pero mi corazón dió un gran saltó, no sabía que eso era posible xd", fondo: "eluantojito.jpeg" },
    { texto: "Al igual que cuando nos burlabamos de la pintura de mierda de mi primo en la alcaldía...", fondo: "pintura.jpeg" },
    { texto: "...o bueno, cuando me enviaste el audio de pomni XDDD", fondo: "pintura.jpeg" },
    { texto: "Epa, se supone que habíamos quedado en montar unas piezas de Undertale ahora que recuerdo.", fondo: "pintura.jpeg" },
    
    // Cambio de escena: El punto de inflexión
    { texto: "En realidad, nosotros comenzamos a hablar un poco más seguido antes de ese 13 de mayo...", fondo: "eluchuer.jpeg" },
    { texto: "...que me escribiste para la compra friki (con olor a estafa).", fondo: "eluchuer.jpeg" },
    { texto: "Ya que, si bien luego de ahí nos convertimos en daily chat y el gusto por Undertale fue tremendo save point...", fondo: "eluchuer.jpeg" },
    { texto: "Los temas que hablabamos antes y despues, nunca...", fondo: "eluchuer.jpeg" },
    { texto: "NI POR EL COÑO nos hubieran hecho pensar que terminaríamos donde estamos ahora.", fondo: "eluchuer.jpeg" },
    { texto: "En ese entonces no tenía ni idea de que te convertirías en quién eres ahora. Alguien tan fucking importante para mí.", fondo: "black" },
    { texto: "Aún no puedo creer lo afortunado que soy porque te fijaras en mí.", fondo: "black" },
    { texto: "Me siento muy feliz por lo que vamos construyendo, te siento tan mía.", fondo: "black" },
    
    // Cambio de escena: El beso
    { texto: "Nunca olvidaré esa noche que nos besamos por primera vez.", fondo: "elued1.jpeg" },
    { texto: "Estaba bastante nervioso (aún no lo comprendo, no entiendo pq tanto xd causas eso en mi) y con un frío maldito.", fondo: "elued1.jpeg" },
    { texto: "No sabia hablar.", fondo: "elued1.jpeg" },
    { texto: "Recuerdo que había 'ensayado' lo que iba a decir y cómo lo haría.", fondo: "elued1.jpeg" },
    { texto: "También me imaginaba tomando tu rostro y dando por fin el primer beso.", fondo: "elued1.jpeg" },
    { texto: "Chistosisimo que no me saqué el webo de la boca, nunca supe hablar y al final el beso lo terminaste dando tú.", fondo: "elued1.jpeg" },
    { texto: "De igual forma, la alegría con la que regresé a mi casa fue enorme...(más que tu pipi)", fondo: "elunete.jpeg" },
    { texto: "...más enorme que la que hubiese tenido un miniEduardo con nintendo DS en su infancia :v", fondo: "elunete.jpeg" },
    
    // Cambio de escena: El "Te amo"
    { texto: "Y dios, cuando me dijiste que me amabas por primera vez...", fondo: "elunete.jpeg" },
    { texto: "(sé que yo lo decía antes antes antes cuando no habíamos comenzado, pero pues era diferente xd).", fondo: "elunete.jpeg" },
    { texto: "Cuando lo dijiste, me quedé viendo el mensaje como un imbécil durante muchísimo tiempo.", fondo: "elunete.jpeg" },
    { texto: "Convulsioné ahí XD", fondo: "elunete.jpeg" },
    
    // Cambio de escena: El cierre romántico
    { texto: "Y bueno, no quiero hacer esto tan largo, pero de verdad que podría", fondo: "black" },
    { texto: "Y me encantaría seguir hablando sobre nosotros durante horas.", fondo: "black" },
    { texto: "No siempre será fácil, pero quiero hacer lo que sea necesario para que esto funcione.", fondo: "elued3.jpeg" },
    { texto: "Porque eso es lo que haces cuando amas a alguien.", fondo: "elued3.jpeg" },
    { texto: "Debes tener muy en mente que tienes a un pendejo que tienes que soportar bastante...", fondo: "elued3.jpeg" },
    { texto: "Así que paciencia será algo que espero ya hayas comenzado a desarrollar XD", fondo: "elued3.jpeg" },
    
    // Cambio de escena: Cumpleaños
    { texto: "Y coño, la parte central de todo esto es tu cumpleaños, así que...", fondo: "eludino.jpeg" },
    { texto: "¡FELIZ CUMPLEAÑOS, ELUNUNEY, ELUNES, ELU, YULEIKIS, MI REIDNA, MI EZPOZA, MI AMOD!", fondo: "eludino.jpeg" },
    { texto: "Espero que disfrutes enormemente tu día, que sean muchos años más", fondo: "eludino.jpeg" },
    { texto: "Y de verdad que espero poder compartirlos juntos.", fondo: "eludino.jpeg" },
    { texto: "No tienes ni idea de lo agradecido que estoy con el universo o con... Dios?", fondo: "eludino.jpeg" },
{ texto: "Con la vida o con todo porque estás presente hoy en mi vida.", fondo: "elulinda.jpeg" },
    { texto: "Y estoy clarísimo que muchas personas se sienten igual de agradecidas que yo.", fondo: "elulinda.jpeg" },
    { texto: "Eres un rayito de sol que con tus ocurrencias y belleza ilumina cada uno de nuestros días.", fondo: "elulinda.jpeg" },
    { texto: "Eres la mujer más increíble e inteligente que he conocido.", fondo: "elulinda2.jpeg" },
    { texto: "Sé que no he estado desde siempre y que se puede decir que desde que comenzamos a salir ha pasado poco tiempo ", fondo: "elulinda2.jpeg" },
   { texto: "(y sí xd)", fondo: "elulinda2.jpeg" },
    { texto: "Pero, todo lo que he sentido ha sido tan genuino y puro.", fondo: "elulinda2.jpeg" },
    { texto: "Cada parte que me has permitido conocer de ti hasta ahora me ha dejado encantado...", fondo: "elupokemon.jpeg" },
    { texto: "...y es que, quiero seguir descubriendo cada aspecto de tu vida.", fondo: "elupokemon.jpeg" },
    { texto: "Dime todas las cosas horribles que has hecho... Y déjame amarte de todas formas.", fondo: "elupokemon.jpeg" },
    { texto: "Quiero desearte lo mejor del mundo, porque de verdad lo mereces.", fondo: "elupokemon.jpeg" },
    { texto: "Estoy muy orgulloso de tí, deseo que cumplas todas tus metas", fondo: "elulinda1.jpeg" },
    { texto: "y créeme que quiero estar allí para apoyarte en cada una de ellas.", fondo: "elulinda1.jpeg" },
    { texto: "Sé perfectamente que puedes lograrlo sola, pero ahí estaré para lo que necesites.", fondo: "elulinda1.jpeg" },
    { texto: "Eres verdaderamente hermosa y fantástica.", fondo: "elulinda1.jpeg" },
    { texto: "Te quiero muchísimo, mi Elu, ahora y siempre.", fondo: "elued2.jpeg" },
    { texto: "feliz cum <3", fondo: "elued2.jpeg" }
];

// Variables de Estado
let parrafoActual = 0;
let charIndex = 0;
let isTyping = false;
let isGameOver = false;
let typingInterval;
let fondoActual = "black";
const typingSpeed = 50; 

// ==========================================
// MOTOR AUDIOVISUAL
// ==========================================
function cambiarFondo(imagenFondo) {
    if (imagenFondo === fondoActual) return;
    
    fondoActual = imagenFondo;
    bgLayer.style.opacity = 0;
    
    setTimeout(() => {
        if (imagenFondo === "black") {
            bgLayer.style.backgroundImage = "none";
            bgLayer.style.backgroundColor = "black";
        } else {
            bgLayer.style.backgroundImage = `url('${imagenFondo}')`;
        }
        bgLayer.style.opacity = 1; 
    }, 500); 
}

function playBlip() {
    const frecuencia = 2; 
    if (charIndex % frecuencia !== 0) return;

    blipSound.currentTime = 0; 
    blipSound.volume = 0.5; 
    blipSound.play().catch(e => console.log("Silenciado por el navegador móvil", e));
}

// ==========================================
// CONTROL DE FLUJO DE DIÁLOGOS
// ==========================================
function typeWriter() {
    isTyping = true;
    nextIndicator.classList.add('hidden'); 
    
    if (charIndex < carta[parrafoActual].texto.length) {
        let char = carta[parrafoActual].texto.charAt(charIndex);
        dialogText.innerHTML += char;
        
        if (char !== ' ') {
            playBlip();
        }
        
        charIndex++;
        typingInterval = setTimeout(typeWriter, typingSpeed);
    } else {
        isTyping = false;
        nextIndicator.classList.remove('hidden'); 
    }
}

function startDialog() {
    dialogText.innerHTML = '';
    charIndex = 0;
    cambiarFondo(carta[parrafoActual].fondo);
    typeWriter();
}

// ==========================================
// EVENTOS DE INTERACCIÓN
// ==========================================
startBtn.addEventListener('click', () => {
    selectSound.volume = 0.5;
    selectSound.play().catch(e => console.log(e));

    startBtn.style.display = 'none';
    document.querySelector('#start-screen h1').style.display = 'none';

    // Generación dinámica del flash overlay
    let flashOverlay = document.createElement('div');
    flashOverlay.style.position = 'fixed';
    flashOverlay.style.top = '0';
    flashOverlay.style.left = '0';
    flashOverlay.style.width = '100vw';
    flashOverlay.style.height = '100vh';
    flashOverlay.style.backgroundColor = 'white';
    flashOverlay.style.zIndex = '9999'; 
    document.body.appendChild(flashOverlay);

    setTimeout(() => {
        flashOverlay.style.opacity = '0';
        flashOverlay.style.transition = 'opacity 0.6s ease-out';
    }, 150);

    setTimeout(() => {
        flashOverlay.remove();
    }, 800);

    // Secuencia de inicio tras el flash
    setTimeout(() => {
        blipSound.volume = 0;
        blipSound.play().then(() => {
            blipSound.pause();
            blipSound.currentTime = 0;
            blipSound.volume = 0.5;
        }).catch(e => console.log(e));

        bgMusic.volume = 0.15;
        bgMusic.play();

        startScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
        
        setTimeout(startDialog, 1000); 
    }, 2000); 
});

dialogBox.addEventListener('click', () => {
    if (!optionsContainer.classList.contains('hidden')) return;

    if (isTyping) {
        clearTimeout(typingInterval);
        dialogText.innerHTML = carta[parrafoActual].texto;
        isTyping = false;
        
        if (!isGameOver) {
            nextIndicator.classList.remove('hidden');
        }
    } else {
        if (isGameOver) return; 

        parrafoActual++;
        if (parrafoActual < carta.length) {
            startDialog();
        } else {
            dialogText.innerHTML = "Entonces... ¿Aceptas besarme sin quitar la cara y por un buen rato la próxima vez que me veas?";
            nextIndicator.classList.add('hidden');
            optionsContainer.classList.remove('hidden');
        }
    }
});

btnAccept.addEventListener('click', () => {
    optionsContainer.classList.add('hidden');
    carta.push({ 
        texto: "* ¡Sabía que dirías que sí! Feliz cumpleaños, Elununey. *", 
        fondo: fondoActual 
    });
    isGameOver = true; 
    startDialog();
});

btnDecline.addEventListener('click', () => {
    blipSound.currentTime = 0;
    blipSound.play();
    dialogText.innerHTML = "* Opción bloqueada por el sistema. Tienes que aceptar (la otra forma de negarte es dando una mortal hacia atrás). *";
});
