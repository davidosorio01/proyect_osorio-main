<script lang="ts">
    import { onMount } from 'svelte';
    import '$lib/CSS/futbol_card/futbol2.css';
    import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import BotonVolver from '$lib/componentes/BotonVolver.svelte';

    import ciclismo from '$lib/IMAGES/images_ciclismo/Ciclismo.jpeg';
    import tourFrancia from '$lib/IMAGES/images_ciclismo/Tourdefrancia.jpeg';
    import giroItalia from '$lib/IMAGES/images_ciclismo/Girodeitalia.jpeg';
    import vueltaEspana from '$lib/IMAGES/images_ciclismo/Vueltaespaña.png';
    import parisRoubaix from '$lib/IMAGES/images_ciclismo/Parisroubaix.jpeg';
    import cmc from '$lib/IMAGES/images_ciclismo/CMC.jpeg';
    import ciclismoColombia from '$lib/IMAGES/images_ciclismo/CiclismoenColombia.jpeg';

    let currentSlide = 0;

    type SlideContent = { 
        imgSrc: string;
        text: string;
    };

    const slidesContent: SlideContent[] = [
        {
            imgSrc: ciclismo,
            text: 'El ciclismo, <strong>más que un simple deporte</strong>, es un símbolo de resistencia, estrategia y trabajo en equipo. Su impacto se extiende a la cultura y a la sostenibilidad, promoviendo estilos de vida activos y saludables. Hoy exploraremos las competiciones de ciclismo más destacadas que han captado la atención mundial. Además de su valor deportivo, el ciclismo fomenta una conexión única con el entorno, ya que los ciclistas atraviesan paisajes naturales y urbanos, inspirando una mayor conciencia ambiental. Así, cada competición no solo desafía a los atletas.'
        },
        {
            imgSrc: tourFrancia,
            text: '<strong>El Tour de Francia</strong> es la competencia de ciclismo más prestigiosa y exigente del mundo. Celebrado anualmente desde 1903, este evento reúne a los mejores ciclistas que compiten a lo largo de tres semanas en terrenos diversos que incluyen llanos, colinas y las imponentes montañas de los Alpes y Pirineos. Ganar el Tour es considerado uno de los logros más altos en el ciclismo profesional, y muchos ciclistas luchan por conseguir el famoso maillot amarillo.'
        },
        {
            imgSrc: giroItalia,
            text: '<strong>El Giro de Italia</strong> es una de las grandes vueltas del ciclismo y el evento deportivo más importante de Italia. Fundado en 1909, el Giro se destaca por sus tramos empinados y sus icónicas subidas en los Dolomitas y los Alpes italianos. El maillot rosa, que se entrega al líder de la clasificación general, es uno de los más codiciados en el mundo del ciclismo, y el Giro atrae a miles de aficionados locales y turistas cada año. Además de su importancia deportiva, el Giro tiene un gran impacto cultural, pues representa la historia y el orgullo del ciclismo en Italia, movilizando a comunidades y aficionados de todo el país.'
        },
        {
            imgSrc: vueltaEspana,
            text: '<strong>La Vuelta a España</strong>, creada en 1935, es la tercera de las "tres grandes vueltas" y se celebra anualmente en septiembre. Conocida por sus empinadas rutas y su famosa etapa en el Alto de l\'Angliru, una de las más desafiantes en el ciclismo, la Vuelta destaca por su intensidad y por ser el cierre de la temporada para muchos ciclistas. La "roja", el maillot del líder, representa el esfuerzo y la determinación necesarios para conquistar las montañas españolas. Esta competencia no solo pone a prueba la resistencia física, sino también el carácter de los ciclistas.'
        },
        {
            imgSrc: parisRoubaix,
            text: '<strong>París-Roubaix</strong> es una clásica de un solo día celebrada en abril. Fundada en 1896, se caracteriza por sus tramos de adoquines y sus difíciles condiciones climáticas. El apodo de "El Infierno del Norte" refleja los desafíos de esta carrera, donde los ciclistas enfrentan duros caminos y se cubren de polvo o barro. La victoria en esta carrera es considerada un honor, y cada ganador recibe un trofeo único: un adoquín. París-Roubaix exige una destreza especial, y solo los ciclistas más experimentados logran soportar la dureza de sus rutas, transformando este evento en una prueba de resistencia y valentía.'
        },
        {
            imgSrc: cmc,
            text: '<strong>El Campeonato Mundial de Ciclismo en Ruta</strong> reúne anualmente a los ciclistas más destacados del mundo, quienes representan a sus países en una batalla por el prestigioso maillot arcoíris. Este evento se celebra en diferentes sedes y combina carreras en ruta y contrarreloj, otorgando el honor de vestir el maillot arcoíris al campeón durante toda la temporada siguiente. Más allá de su valor simbólico, este campeonato representa una oportunidad única para los ciclistas de consolidar sus carreras a nivel global, enfrentando a los mejores en un ambiente de alto nivel competitivo.'
        },
        {
            imgSrc: ciclismoColombia,
            text: '<strong>Colombia es una potencia en el ciclismo mundial;</strong> sus ciclistas, conocidos como "escarabajos", se destacan especialmente en las etapas de montaña. Gracias a su resistencia y fortaleza, forjada en las empinadas carreteras de los Andes, figuras como Nairo Quintana y Egan Bernal han llevado a Colombia a la cima en competencias internacionales. Los colombianos viven el ciclismo como una pasión nacional, y los ciclistas son considerados héroes nacionales. En cada competencia, estos atletas no solo representan sus propias carreras, sino el orgullo de toda una nación.'
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
                <div class="lesson">Historia del Ciclismo</div>

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

        <a href="/ciclismo/ciclismo3" data-sveltekit-reload data-sveltekit-preload-data="tap">
            <button class="next svelte-zonnq2">
                <span class="arrow svelte-zonnq2"></span>
            </button>
        </a>
    </div>
</div>
