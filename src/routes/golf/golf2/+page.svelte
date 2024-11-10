<script lang="ts">
	import { onMount } from 'svelte';
    import BotonVolver from '$lib/componentes/BotonVolver.svelte';
    import '$lib/CSS/futbol_card/futbol2.css';
    import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import golfImage from '$lib/IMAGES/images_golf/Golf.jpeg';
    import mastersImage from '$lib/IMAGES/images_golf/Themasters.jpeg';
    import usOpenImage from '$lib/IMAGES/images_golf/USopen.jpeg';
    import openChampionshipImage from '$lib/IMAGES/images_golf/openchampionship.jpeg';
    import pgaImage from '$lib/IMAGES/images_golf/PGA.jpeg';

    interface SlideContent {
        imgSrc: string;
        text: string;
    }

    const slidesContentGolf: SlideContent[] = [
        {
            imgSrc: golfImage,
            text: 'El golf es un deporte de precisión y estrategia que se juega en un campo al aire libre. Con orígenes que se remontan al siglo XV en Escocia, el golf ha evolucionado hasta convertirse en uno de los deportes más populares del mundo, disfrutado por millones de personas en todo el mundo. A través de los años, el golf ha cultivado un sentido de comunidad y competencia, y es conocido por su énfasis en la ética y el respeto por el juego. Este deporte combina destreza, concentración y paciencia, haciendo que cada partida sea una experiencia única.'
        },
        {
            imgSrc: mastersImage,
            text: '<strong>The Masters</strong> es uno de los cuatro torneos de golf más prestigiosos del mundo, celebrado anualmente en Augusta, Georgia, desde 1934. Este torneo es conocido por su exclusivo campo de golf, sus impresionantes azaleas y la famosa chaqueta verde que se otorga al campeón. Ganar The Masters es uno de los mayores logros en el golf profesional. Su campo desafía a los golfistas con su complejidad y belleza, creando momentos icónicos en la historia del golf. Cada edición trae consigo nuevas historias y rivalidades que mantienen a los fanáticos al borde de sus asientos.'
        },
        {
            imgSrc: usOpenImage,
            text: 'El <strong>US Open</strong> es uno de los cuatro torneos de Grand Slam, conocido por su alto nivel de dificultad. Desde 1895, este torneo ha desafiado a los mejores golfistas del mundo, y la competencia se lleva a cabo en diversos campos icónicos a lo largo de los Estados Unidos. Ganar el US Open es un sueño para muchos golfistas, ya que se reconoce como uno de los torneos más difíciles de conquistar. Además, el torneo es famoso por su ambiente tenso y sus emocionantes finales. La grandeza del US Open exige un nivel de juego excepcional y una resistencia inquebrantable.'
        },
        {
            imgSrc: openChampionshipImage,
            text: 'El <strong>Open Championship</strong>, también conocido como el British Open, es el torneo de golf más antiguo del mundo, celebrado desde 1860. Este evento se juega en campos de links en Escocia e Inglaterra, y es famoso por su atmósfera única y sus condiciones desafiantes. Ganar el Open es un hito importante en la carrera de cualquier golfista. La historia y la tradición del torneo le otorgan un prestigio especial, haciendo que cada edición sea memorable. Es un testamento a la fortaleza y la habilidad, donde cada tiro importa.'
        },
        {
            imgSrc: pgaImage,
            text: 'El <strong>PGA Championship</strong> es otro de los torneos de Grand Slam, que se lleva a cabo anualmente desde 1916. Este evento reúne a los mejores jugadores del mundo, y es conocido por su competitividad y por ser un gran espectáculo para los aficionados al golf. Además de la gloria del título, el PGA Championship ofrece una plataforma para que los jugadores muestren sus habilidades ante el mundo, consolidando su lugar en la élite del golf. La emoción y la intensidad del torneo lo convierten en una cita imperdible del calendario de golf.'
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
        currentSlide += n;
        if (currentSlide >= slidesContentGolf.length) { 
            currentSlide = 0;
        } else if (currentSlide < 0) { 
            currentSlide = slidesContentGolf.length - 1;
        }
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
                <div class="lesson">Historia del Golf</div>
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
            {#each slidesContentGolf as slideContent}
                <div class="slide" style="opacity: 0;">
                    <img src={slideContent.imgSrc} class="slide-img" alt="" />
                    <div class="text-overlay">
                        <p>{@html slideContent.text}</p>
                    </div>
                </div>
            {/each}

            <button class="buttons" id="prevBtn" on:click={() => plusSlides(-1)}>&lt;</button>
            <button class="buttons" id="nextBtn" on:click={() => plusSlides(1)}>&gt;</button>
        </div>

        <a href="/golf/golf3" data-sveltekit-reload data-sveltekit-preload-data="tap">
            <button class="next svelte-zonnq2">
                <span class="arrow svelte-zonnq2"></span>
            </button>
        </a>
    </div>
</div>
