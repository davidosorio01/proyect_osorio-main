<script lang="ts">
    import { onMount } from 'svelte';
    import '$lib/CSS/futbol_card/futbol2.css';
    import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import BotonVolver from '$lib/componentes/BotonVolver.svelte';
    import AtletismoDelCaribe from '$lib/IMAGES/images_atletismo/Atletismodelcaribe.jpeg';
    import Atletismo from '$lib/IMAGES/images_atletismo/Atletismo.jpeg';
    import CMA from '$lib/IMAGES/images_atletismo/CMA.webp';
    import Juego1 from '$lib/IMAGES/images_atletismo/Juego1.jpeg';
    import Juego2 from '$lib/IMAGES/images_atletismo/Juego2atletismo.jpeg';
    import TrofeoAtletismo from '$lib/IMAGES/images_atletismo/TrofeoAtletismo.webp';

    interface SlideContent {
        imgSrc: string;
        text: string;
    }

    const slidesContent: SlideContent[] = [
        {
            imgSrc: Atletismo,
            text: "El atletismo, <strong>más allá de ser solo un deporte</strong>, es una expresión de la capacidad humana en su forma más pura. Desde las carreras hasta el salto de altura, el atletismo celebra la resistencia, la velocidad y la agilidad. Hoy exploraremos los torneos más importantes de este deporte que han capturado la atención de millones alrededor del mundo. Este deporte es un reflejo de la perseverancia y el esfuerzo constante, representando uno de los pilares fundamentales en la historia del deporte moderno."
        },
        {
            imgSrc: Juego1,
            text: "<strong>Los Juegos Olímpicos</strong> son el evento más prestigioso en el mundo del atletismo, donde atletas de todo el mundo compiten en diversas disciplinas. Desde su inicio en la antigua Grecia, los Juegos han evolucionado, celebrándose cada cuatro años y siendo el escenario donde se rompen récords y se forjan leyendas. Las medallas de oro olímpicas son consideradas el pináculo del logro en este deporte."
        },
        {
            imgSrc: CMA,
            text: "<strong>Los Campeonatos Mundiales de Atletismo</strong> son otro evento clave, celebrados cada dos años, donde los mejores atletas compiten por el título mundial. Desde 1983, este torneo ha sido una plataforma para que los atletas demuestren su talento en distancias cortas, largas, saltos y lanzamientos."
        },
        {
            imgSrc: TrofeoAtletismo,
            text: "<strong>La Liga de Diamante</strong> es una serie de competiciones de élite que se celebra anualmente, donde los mejores atletas del mundo compiten en diversas disciplinas. Esta competición no solo es emocionante, sino que también es vital para que los atletas acumulen puntos."
        },
        {
            imgSrc: Juego2,
            text: "<strong>Los Campeonatos Europeos de Atletismo</strong> son un evento clave en el calendario del atletismo, donde los mejores atletas de Europa compiten por el título continental. Estos campeonatos reflejan el crecimiento y la dedicación de los atletas europeos."
        },
        {
            imgSrc: AtletismoDelCaribe,
            text: "<strong>El atletismo en el Caribe</strong> ha crecido significativamente, con países como Jamaica siendo reconocidos mundialmente por su velocidad. Atletas como Usain Bolt han dejado una marca indeleble en la historia del deporte."
        }
    ];

    let currentSlide = 0;
    let slides: HTMLElement[] = [];

    function showSlide(n: number): void {
        if (!slides.length) return;
        slides.forEach((slide, index) => {
            slide.style.opacity = index === n ? '1' : '0';
            slide.classList.toggle('active', index === n);
        });
    }

    function plusSlides(n: number): void {
        currentSlide = (currentSlide + n + slidesContent.length) % slidesContent.length;
        showSlide(currentSlide);
    }

    onMount(() => {
        slides = Array.from(document.querySelectorAll('.slide')) as HTMLElement[];
        showSlide(currentSlide);
    });
</script>

<div>
    <!-- Pantalla de carga -->
    <div id="loading-screen">
        <div id="loading-spinner"></div>
    </div>

    <!-- Encabezado -->
    <header>
        <div class="menu-container">
            <nav>
                <img src={LogoPagina} alt="Logo de la página" class="logo" />
                <div class="lesson">Historia del Atletismo</div>

                <!-- Barra de progreso -->
                <div class="nav-item" id="nav-item-1">
                    <div class="progress-bar" id="progress-bar">
                        <div class="rombo" id="rombo-1"><span class="numero"></span></div>
                        <div class="square" id="square-1"><span class="numero-2"></span></div>
                        <div class="rombo" id="rombo-2"><span class="numero">3</span></div>
                        <div class="circle" id="circle-2"><span class="numero"></span></div>
                    </div>
                </div>
                <BotonVolver/>
            </nav>
        </div>
        <div class="level-info" id="level-info"></div>
    </header>

    <!-- Contenedor principal -->
    <div class="container">
        <div class="slider-container">
            {#each slidesContent as slideContent}
                <div class="slide" style="opacity: 0;">
                    <img src={slideContent.imgSrc} class="slide-img" alt={slideContent.text} />
                    <div class="text-overlay">
                        <p>{@html slideContent.text}</p>
                    </div>
                </div>
            {/each}

            <!-- Botones de navegación -->
            <button class="buttons" id="prevBtn" on:click={() => plusSlides(-1)}>&lt;</button>
            <button class="buttons" id="nextBtn" on:click={() => plusSlides(1)}>&gt;</button>
        </div>

        <!-- Botón para proceder a la siguiente sección -->
        <a href="/atletismo/atletismo3" data-sveltekit-reload data-sveltekit-preload-data="tap">
            <button class="next svelte-zonnq2">
                <span class="arrow svelte-zonnq2"></span>
            </button>
        </a>
    </div>
</div>
