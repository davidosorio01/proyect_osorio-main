<script lang="ts">
    import { onMount } from 'svelte';
    import '$lib/CSS/futbol_card/futbol2.css';
    import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import BotonVolver from '$lib/componentes/BotonVolver.svelte';
    import natacion from '$lib/IMAGES/images_natacion/Natacion.jpeg';
    import jjnatacion from '$lib/IMAGES/images_natacion/jjnatacion.jpeg';
    import CMF from '$lib/IMAGES/images_natacion/CP.jpeg';
    import CNF from '$lib/IMAGES/images_natacion/CNF.jpeg';
    import CP from '$lib/IMAGES/images_natacion/CP.jpeg';
    import CMAA from '$lib/IMAGES/images_natacion/CMAA.jpeg';

    let currentSlide = 0;

    type SlideContent = { 
        imgSrc: string;
        text: string;
    };

    const slidesContent: SlideContent[] = [
        {
            imgSrc: natacion,
            text: 'La natación es un deporte acuático que se ha practicado desde tiempos antiguos. Es una de las disciplinas más completas, involucrando múltiples grupos musculares y ofreciendo numerosos beneficios para la salud, como mejorar la resistencia cardiovascular, aumentar la fuerza y flexibilidad, y reducir el estrés. Además, es una habilidad de supervivencia esencial que puede salvar vidas en situaciones de emergencia en el agua.'
        },
        {
            imgSrc: jjnatacion,
            text: 'La natación ha sido parte de los Juegos Olímpicos modernos desde su inicio en 1896 para hombres y desde 1912 para mujeres. Este deporte olímpico incluye varias disciplinas, como estilo libre, espalda, pecho y mariposa. Los eventos de natación en los Juegos Olímpicos han evolucionado con el tiempo, convirtiéndose en una de las competencias más esperadas y seguidas a nivel mundial.'
        },
        {
            imgSrc: CMF,
            text: 'Además de los Juegos Olímpicos, la natación cuenta con campeonatos mundiales y competiciones internacionales, como el Campeonato Mundial de Natación de la FINA. Este evento, que se celebra cada dos años, reúne a los mejores nadadores del mundo para competir en diversas disciplinas y distancias, tanto en piscina como en aguas abiertas, y es organizado por la Federación Internacional de Natación (FINA).'
        },
        {
            imgSrc: CNF,
            text: 'Otro torneo importante es la Copa del Mundo de Natación de la FINA, que consiste en una serie de competencias cortas celebradas en piscinas de 25 metros. Los nadadores acumulan puntos en cada etapa, y al final del circuito se corona al campeón general. Este torneo es clave para los atletas que buscan competir y mejorar sus tiempos fuera del calendario olímpico y mundial.'
        },
        {
            imgSrc: CP,
            text: 'A nivel regional, los Campeonatos Panamericanos y Europeos también son eventos significativos que destacan el talento de los nadadores de cada continente. Estos campeonatos permiten a los nadadores de todas las edades y niveles competir y representar a sus países, fomentando la competencia y la camaradería entre naciones. Son eventos que también ayudan a preparar a los atletas para competencias de mayor nivel.'
        },
        {
            imgSrc: CMAA,
            text: 'La natación también incluye competencias en cursos de aguas abiertas, donde los nadadores enfrentan retos de distancia y condiciones naturales, como corrientes y temperaturas variables. Las competencias de aguas abiertas, como el maratón de 10 kilómetros, son ahora parte de los Juegos Olímpicos y ofrecen una experiencia desafiante y única que atrae tanto a competidores como a espectadores.'
        }
    ];

    let slides: HTMLElement[] = [];

    function showSlide(n: number): void {
        if (!slides.length) return;
        slides.forEach((slide, index) => {
            slide.style.opacity = index === n ? '1' : '0';
            slide.classList.toggle('active', index === n);
        });
    }

    function plusSlides(n: number): void {
        currentSlide = (currentSlide + n + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    onMount(() => {
        slides = Array.from(document.querySelectorAll('.slide')) as HTMLElement[];
        showSlide(currentSlide);
    });
</script>

<div>
    <div id="loading-screen">
        <div id="loading-spinner"></div>
    </div>

    <header>
        <div class="menu-container">
            <nav>
                <img src={LogoPagina} alt="Logo de la página" class="logo" />
                <div class="lesson">Historia de la Natación</div>
                <div class="nav-item" id="nav-item-1">
                    <div class="progress-bar" id="progress-bar">
                        <div class="rombo" id="rombo-1"><span class="numero"></span></div>
                        <div class="square" id="square-1"><span class="numero-2"></span></div>
                        <div class="rombo" id="rombo-2"><span class="numero">3</span></div>
                        <div class="circle" id="circle-2"><span class="numero"></span></div>
                    </div>
                </div>
                <BotonVolver />
            </nav>
        </div>
        <div class="level-info" id="level-info"></div>
    </header>

    <div class="container">
        <div class="slider-container">
            <!-- Renderización de las diapositivas dinámicamente -->
            {#each slidesContent as slide}
                <div class="slide">
                    <img src={slide.imgSrc} class="slide-img" alt="" />
                    <div class="text-overlay">
                        <p>{@html slide.text}</p>
                    </div>
                </div>
            {/each}

            <!-- Botones de navegación -->
            <button class="buttons" id="prevBtn" on:click={() => plusSlides(-1)}>&lt;</button>
            <button class="buttons" id="nextBtn" on:click={() => plusSlides(1)}>&gt;</button>
        </div>

        <a href="/natacion/natacion3" data-sveltekit-reload data-sveltekit-preload-data="tap">
            <button class="next svelte-zonnq2">
                <span class="arrow svelte-zonnq2"></span>
            </button>
        </a>
    </div>
</div>
