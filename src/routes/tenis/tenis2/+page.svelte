<script lang="ts">
    import { onMount } from 'svelte';
    import '$lib/CSS/futbol_card/futbol2.css';
    import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import BotonVolver from '$lib/componentes/BotonVolver.svelte';
    import tenis from '$lib/IMAGES/images_tenis/Tenis.jpeg'
    import jjtenis from '$lib/IMAGES/images_tenis/jjtenis.jpeg'
    import wimbledon from '$lib/IMAGES/images_tenis/wimbledon.jpeg'
    import atpmasters from '$lib/IMAGES/images_tenis/atpmasters.jpeg'
    import CMFT from '$lib/IMAGES/images_tenis/CMFT.jpeg'


    let currentSlide = 0;

    type SlideContent = { 
        imgSrc: string;
        text: string;
    };

    const slidesContent: SlideContent[] = [
        {
            imgSrc: tenis,
            text: 'El tenis, <strong>más allá de ser un simple deporte</strong>, se presenta como una poderosa herramienta de desarrollo social y personal. Su impacto positivo se refleja en múltiples áreas, promoviendo la salud, el respeto, la igualdad y la inclusión en comunidades de todo el mundo. Como uno de los deportes más <strong>prestigiosos y con mayor alcance global,</strong> exploremos los torneos que, además de brindar espectáculos de alta competencia, generan un gran impacto en la sociedad.'
        },
        {
            imgSrc: jjtenis,
            text: 'El tenis hizo su debut en los Juegos Olímpicos en la primera edición de los Juegos modernos, celebrados en Atenas en 1896, lo cual marcó un hito para el deporte al darle una plataforma de alcance global. Sin embargo, el tenis fue eliminado del programa olímpico después de los Juegos de París en 1924. No fue hasta los Juegos Olímpicos de Seúl en 1988 cuando el tenis regresó al programa olímpico, esta vez con la inclusión de jugadores profesionales, lo que abrió las puertas para que las grandes estrellas del circuito compitieran por el honor de una medalla.'
        },
        {
            imgSrc: wimbledon,
            text: 'Entre los eventos más prestigiosos y esperados del tenis mundial se encuentran el Abierto de Australia, el Roland Garros, Wimbledon y el Abierto de Estados Unidos, conocidos colectivamente como los torneos de Grand Slam. Cada uno de estos torneos representa una etapa fundamental en el calendario anual y un reto de élite para los jugadores, al ser los más antiguos y reconocidos del deporte. Los Grand Slams reúnen a los mejores tenistas del mundo y exigen a los competidores dar su máximo rendimiento en diferentes tipos de superficies.'
        },
        {
            imgSrc: atpmasters,
            text: 'El <strong>ATP Masters 1000</strong> son una serie de nueve torneos de tenis de alto nivel que forman parte del circuito profesional masculino y están solo por debajo de los Grand Slams en importancia y prestigio. Estos torneos ofrecen una gran cantidad de puntos para el ranking mundial de la ATP, lo que los convierte en eventos clave para los jugadores que buscan mejorar sus posiciones y asegurar su lugar en las Finales de la ATP a fin de año. Celebrados en distintas ciudades de Europa, América del Norte y Asia, los Masters 1000 atraen a los mejores tenistas del mundo y se juegan en diferentes superficies.'
        },
        {
            imgSrc: CMFT,
            text: 'La <strong>WTA finals</strong> son una serie de torneos de alta categoría en el circuito profesional femenino, solo superados en prestigio por los torneos de Grand Slam. Estos eventos ofrecen una gran cantidad de puntos para el ranking mundial de la WTA, lo que los convierte en una meta importante para las jugadoras que buscan posicionarse en los primeros puestos y clasificar a las Finales de la WTA al final de la temporada. Distribuidos en distintas ciudades de Europa, América del Norte y Asia, los WTA 1000 se juegan en diversas superficies, lo que exige a las competidoras una gran adaptación y versatilidad.'
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
                <div class="lesson">Historia del Tenis</div>

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
            {#each slidesContent as slide}
                <div class="slide">
                    <img src={slide.imgSrc} class="slide-img" alt="" />
                    <div class="text-overlay">
                        <p>{@html slide.text}</p>
                    </div>
                </div>
            {/each}

            <button class="buttons" id="prevBtn" on:click={() => plusSlides(-1)}>&lt;</button>
            <button class="buttons" id="nextBtn" on:click={() => plusSlides(1)}>&gt;</button>
        </div>

        <a href="/tenis/tenis3" data-sveltekit-reload data-sveltekit-preload-data="tap">
            <button class="next svelte-zonnq2">
                <span class="arrow svelte-zonnq2"></span>
            </button>
        </a>
    </div>
</div>
