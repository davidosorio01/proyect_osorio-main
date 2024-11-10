<script lang="ts">
    import { onMount } from 'svelte';
    import '$lib/CSS/futbol_card/futbol2.css';
    import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import BotonVolver from '$lib/componentes/BotonVolver.svelte';

    import rugby from '$lib/IMAGES/images_rugby/Rugby.jpeg';
    import jjRugby from '$lib/IMAGES/images_rugby/JJRUGBY.jpeg';
    import copaMundialRugby from '$lib/IMAGES/images_rugby/CopaMrugby.jpeg';
    import serieMS from '$lib/IMAGES/images_rugby/serieMS.jpeg';
    import sixNations from '$lib/IMAGES/images_rugby/Sixnations.jpeg';
    import cmfRugby from '$lib/IMAGES/images_rugby/CMFRugby.jpeg';

    let currentSlide = 0;

    type SlideContent = { 
        imgSrc: string;
        text: string;
    };

    const slidesContent: SlideContent[] = [
        {
            imgSrc: rugby,
            text: 'El <strong>rugby</strong> es un deporte de equipo que se originó en Inglaterra en el siglo XIX. Este deporte involucra habilidades como la velocidad, la estrategia y la resistencia, y se juega en diversas modalidades, siendo las más populares el rugby union y el rugby league. Hoy en día, el rugby es más que un deporte; representa valores de respeto, trabajo en equipo y espíritu de lucha. Es especialmente popular en países como Nueva Zelanda, Sudáfrica e Inglaterra, donde los equipos nacionales han alcanzado un nivel legendario. Cada partido es una muestra de fuerza y determinación que une a los aficionados en todo el mundo.'
        },
        {
            imgSrc: jjRugby,
            text: 'El rugby se incluyó en los <strong>Juegos Olímpicos</strong> en 1900, aunque fue eliminado en 1924. Sin embargo, la modalidad de rugby seven regresó a los Juegos Olímpicos en 2016, capturando la atención global por su rapidez y dinamismo. Este formato permite que los juegos sean más rápidos y accesibles para los espectadores. El regreso del rugby a las Olimpiadas ayudó a elevar el perfil del deporte en todo el mundo. En cada torneo, los equipos luchan no solo por la victoria, sino también por mostrar la pasión y el orgullo de representar a sus países.'
        },
        {
            imgSrc: copaMundialRugby,
            text: 'Uno de los eventos más destacados en el rugby es la <strong>Copa del Mundo de Rugby</strong>, que se celebra cada cuatro años. Desde su inicio en 1987, ha reunido a las mejores selecciones del mundo para competir por el título más codiciado del rugby. La próxima edición se llevará a cabo en 2027 en Australia. Este torneo atrae a millones de aficionados de todas partes, y cada edición deja momentos icónicos en la historia del deporte. La Copa del Mundo es una plataforma que muestra la evolución y la globalización del rugby a través de los años.'
        },
        {
            imgSrc: serieMS,
            text: 'La <strong>Serie Mundial de Rugby Sevens</strong> es un torneo anual que se celebra en varias ciudades alrededor del mundo. Equipos masculinos y femeninos compiten en un formato de siete jugadores, lo que permite partidos más cortos y emocionantes. Los puntos se acumulan a lo largo de la temporada, culminando en una final que determina el campeón del circuito. Esta serie ha ganado gran popularidad por su energía y dinamismo, atrayendo a nuevos aficionados al rugby. A través de esta competencia, el rugby sevens se ha consolidado como una modalidad emocionante e inclusiva del deporte.'
        },
        {
            imgSrc: sixNations,
            text: 'A nivel regional, el <strong>Six Nations</strong> en Europa enfrenta a Inglaterra, Escocia, Gales, Irlanda, Francia e Italia en una competencia anual. Este torneo es conocido por sus intensas rivalidades y tiene una rica historia que data de 1883. Por otro lado, el <strong>Rugby Championship</strong> reúne a los equipos de Argentina, Australia, Nueva Zelanda y Sudáfrica, destacando la competencia en el hemisferio sur. Ambos torneos ofrecen espectáculos de alta calidad y sirven como plataformas para que los equipos nacionales demuestren su habilidad y fortaleza en el rugby, año tras año.'
        },
        {
            imgSrc: cmfRugby,
            text: 'El <strong>Copa del Mundo Femenina de Rugby</strong> ha crecido en popularidad desde su primera edición en 1991, promoviendo el rugby femenino a nivel global. La última edición se llevó a cabo en 2022 en Nueva Zelanda, donde equipos de todo el mundo compiten por el título de campeonas. Este torneo ha sido clave en la visibilidad y crecimiento del rugby femenino. Además de celebrar el talento de las jugadoras, la Copa del Mundo Femenina también inspira a las nuevas generaciones a unirse al deporte y romper barreras en el ámbito deportivo.'
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
                <div class="lesson">Historia del Rugby</div>
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

        <a href="/rugby/rugby3" data-sveltekit-reload data-sveltekit-preload-data="tap">
            <button class="next svelte-zonnq2">
                <span class="arrow svelte-zonnq2"></span>
            </button>
        </a>
    </div>
</div>
