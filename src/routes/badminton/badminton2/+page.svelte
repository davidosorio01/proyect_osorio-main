<script lang="ts">
	import { onMount } from 'svelte';
	import '$lib/CSS/futbol_card/futbol2.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import jjoo from '$lib/IMAGES/images_bad/JJOObadminton.png';
	import thomas from '$lib/IMAGES/images_bad/ThomasCup.png';
	import uber from '$lib/IMAGES/images_bad/UberCup.png';
	import jugador from '$lib/IMAGES/images_bad/JugadorBadminton.png';
	import mixtos from '$lib/IMAGES/images_bad/Mixtos.png';
	import basic from '$lib/IMAGES/images_bad/BásicoBadminton.png';

	let currentSlide = 0;

	// Tipo de datos de las diapositivas
	type SlideContent = {
		imgSrc: string;
		text: string;
	};

	// Contenido de las diapositivas
	const slidesContent: SlideContent[] = [
		{
			imgSrc: jugador,
			text: '<strong>El badminton tiene una historia rica y diversa</strong>, habiendo evolucionado desde sus orígenes en la India hasta convertirse en un deporte globalmente reconocido y celebrado. Su popularidad ha crecido constantemente, alcanzando audiencias en todos los continentes y produciendo una serie de jugadores legendarios que han dejado una marca en el deporte. Con una historia que mezcla tradición y modernidad, el badminton sigue evolucionando. La historia de este deporte es también una historia de esfuerzo y superación.'
		},
		{
			imgSrc: jjoo,
			text: '<strong>El Badminton en los Juegos Olímpicos</strong> es uno de los eventos más emocionantes y seguidos en cada edición de los Juegos Olímpicos, celebrado desde 1992. Reúne a los mejores jugadores del mundo en una competencia de altísimo nivel, donde la velocidad, precisión y estrategia son clave. Este evento es una celebración del deporte y un escaparate de talento mundial, inspirando a futuras generaciones. Ver a los atletas competir en esta arena es un recordatorio de la dedicación y disciplina que requiere el badminton.'
		},
		{
			imgSrc: thomas,
			text: '<strong>Thomas Cup</strong> es el campeonato mundial de equipos masculinos de badminton, celebrado desde 1934. Es uno de los torneos más prestigiosos y competitivos en el deporte, atrayendo a equipos de élite. Esta competencia ha sido testigo de duelos épicos y una evolución del nivel técnico en el badminton, creando un legado invaluable. Los equipos luchan por este título, convirtiéndose en un símbolo de honor en el deporte.'
		},
		{
			imgSrc: uber,
			text: '<strong>Uber Cup</strong> es el equivalente femenino de la Thomas Cup, reuniendo a los mejores equipos femeninos del mundo en una competencia feroz por el título. Celebrada desde 1957, representa una plataforma donde las jugadoras demuestran su habilidad y dedicación al más alto nivel. La Uber Cup es un evento inspirador que promueve el espíritu deportivo y la igualdad en el badminton.'
		},
		{
			imgSrc: jugador,
			text: '<strong>Campeonato Mundial de Badminton</strong> es un evento anual que determina a los mejores jugadores individuales y de dobles del mundo. Es famoso por su alto nivel de competencia y emoción, y es considerado el pináculo de la carrera de muchos jugadores. Cada edición añade historias memorables al legado del deporte, haciendo de este campeonato un evento ineludible. Aquí se coronan a los verdaderos campeones del badminton.'
		},
		{
			imgSrc: mixtos,
			text: '<strong>Sudirman Cup</strong> es una competencia mundial por equipos mixtos, donde los países compiten en partidos tanto masculinos como femeninos. Es conocida por su emoción y el espíritu de equipo, reflejando la cooperación entre géneros en un deporte individual y de dobles. Este torneo se celebra cada dos años y es muy esperado por los aficionados, quienes disfrutan de su atmósfera única. La Sudirman Cup fomenta la unidad y el trabajo en equipo en el badminton.'
		},
		{
			imgSrc: basic,
			text: '<strong>El bádminton fomenta la integración y el trabajo en equipo</strong>, uniendo a personas de diferentes edades y orígenes, y creando espacios de inclusión y respeto. A nivel educativo, este deporte enseña habilidades como la disciplina, la perseverancia y la toma de decisiones bajo presión. Además, en la economía, el crecimiento de torneos internacionales y la popularidad del bádminton han impulsado el turismo deportivo y la generación de empleos en diversas industrias relacionadas. En conjunto, el bádminton es un agente de cambio que contribuye a una sociedad más sana, unida y resiliente.'
		}
	];

	let slides: HTMLElement[] = [];

	// Funciones de navegación
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
	<!-- Pantalla de carga -->
	<div id="loading-screen">
		<div id="loading-spinner"></div>
	</div>

	<!-- Encabezado -->
	<header>
		<div class="menu-container">
			<nav>
				<img src={LogoPagina} alt="Logo de la página" class="logo" />
				<div class="lesson">Historia del badminton</div>

				<!-- Barra de progreso -->
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

	<!-- Contenedor principal -->
	<div class="container">
		<div class="slider-container">
			<!-- Renderización de las diapositivas dinámicamente -->
			{#each slidesContent as slide}
				<div class="slide">
					<img src={slide.imgSrc} class="slide-img" alt="Imagen de la diapositiva" />
					<div class="text-overlay">
						<p>{@html slide.text}</p>
					</div>
				</div>
			{/each}

			<!-- Botones de navegación -->
			<button class="buttons" id="prevBtn" on:click={() => plusSlides(-1)}>&lt;</button>
			<button class="buttons" id="nextBtn" on:click={() => plusSlides(1)}>&gt;</button>
		</div>

		<!-- Botón para proceder a la siguiente sección -->
		<a href="/badminton/badminton3" data-sveltekit-reload data-sveltekit-preload-data="tap">
			<button class="next svelte-zonnq2">
				<span class="arrow svelte-zonnq2"></span>
			</button>
		</a>
	</div>
</div>
