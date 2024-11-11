<script lang="ts">
	import { onMount } from 'svelte';
	import '$lib/CSS/futbol_card/futbol2.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import partido from '$lib/IMAGES/images_billar/PartidoBillar.png';
	import jjoo from '$lib/IMAGES/images_billar/JJOOBillar.png';
	import copa from '$lib/IMAGES/images_billar/LevantandolacopaBillar.png';
	import grupo from '$lib/IMAGES/images_billar/GrupoBillar.png';
	import mosconi from '$lib/IMAGES/images_billar/CopaMosconi.png';
	import sudirman from '$lib/IMAGES/images_billar/SudirmanCup.png';
	import mesa from '$lib/IMAGES/images_billar/MesaBillar.png';

	// Definimos el tipo de datos para las diapositivas
	type SlideContent = {
		imgSrc: string;
		text: string;
		alt: string;
	};

	// Contenido de cada diapositiva de billar
	const slidesContent: SlideContent[] = [
		{
			imgSrc: partido,
			alt: 'Partido de Billar',
			text: 'El billar, <strong>más allá de ser un simple juego</strong>, actúa como un poderoso motor de cambio social. Este deporte fomenta valores como el respeto, la disciplina y la concentración, esenciales en cualquier entorno. Sus impactos positivos se pueden observar en diversas áreas que contribuyen al bienestar de las comunidades y a la cohesión social. Al ser un deporte de precisión y estrategia, vamos a visualizar los torneos que, además de ser entretenidos, <strong>tienen grandes impactos en la sociedad</strong> y en el desarrollo personal de sus jugadores.'
		},
		{
			imgSrc: jjoo,
			alt: 'Olimpiadas de Billar',
			text: '<strong>El Billar en los Juegos Olímpicos</strong> es uno de los eventos más emocionantes y seguidos en cada edición de los Juegos Olímpicos, celebrado desde 1992. Este torneo internacional reúne a los mejores jugadores del mundo, que compiten en un ambiente de alto nivel y reconocimiento global. Además de su competitividad, el billar olímpico es una oportunidad para que el deporte gane mayor visibilidad y se impulse en todo el mundo.'
		},
		{
			imgSrc: copa,
			alt: 'Campeonato Mundial de Billar',
			text: '<strong>Campeonato Mundial de Billar</strong> es uno de los torneos más prestigiosos y competitivos, celebrado desde 1928. Este campeonato atrae a jugadores de todo el mundo que buscan demostrar sus habilidades en un escenario de renombre internacional. Es famoso por su alto nivel de competencia y emoción, y se considera un evento icónico en la historia del billar, donde la precisión y la estrategia son fundamentales.'
		},
		{
			imgSrc: grupo,
			alt: 'Torneo de Maestros',
			text: '<strong>Torneo de Maestros</strong> es una competencia que reúne a los mejores jugadores del mundo en un evento de alto nivel, destacado por su emoción y prestigio desde 1946. Este torneo exige un dominio excepcional de las técnicas y estrategias del juego, y es conocido por su exclusividad y rigurosos estándares.'
		},
		{
			imgSrc: mosconi,
			alt: 'Copa Mosconi',
			text: '<strong>Copa Mosconi</strong> es una competencia anual entre equipos de Europa y Estados Unidos, conocida por su alto nivel de competencia y rivalidad intensa. Este evento no solo representa una batalla deportiva, sino también un símbolo de orgullo continental.'
		},
		{
			imgSrc: sudirman,
			alt: 'Sudirman Cup',
			text: '<strong>Sudirman Cup</strong> es una competencia mundial por equipos mixtos, donde los países compiten en partidos tanto masculinos como femeninos. Es conocida por su emoción y el espíritu de equipo.'
		},
		{
			imgSrc: mesa,
			alt: 'Historia del Billar',
			text: '<strong>El billar tiene una historia rica y diversa</strong>, habiendo evolucionado desde sus orígenes en la Europa del siglo XV hasta convertirse en un deporte globalmente reconocido y celebrado.'
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
				<div class="lesson">Historia del Billar</div>
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
			<!-- Diapositivas generadas dinámicamente -->
			{#each slidesContent as slide}
				<div class="slide">
					<img src={slide.imgSrc} alt={slide.alt} class="slide-img" />
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
		<a href="/billar/billar3" data-sveltekit-reload data-sveltekit-preload-data="tap">
			<button class="next svelte-zonnq2">
				<span class="arrow svelte-zonnq2"></span>
			</button>
		</a>
	</div>
</div>
