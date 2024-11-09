<script lang="ts">
	import { onMount } from 'svelte';
	import '$lib/CSS/futbol_card/futbol2.css';
	import LogoPagina from "$lib/IMAGES/LogoPag.jpg";

	import beisbol from '$lib/IMAGES/images_beisbol/Beisbol.jpeg';
	import serieMundial from '$lib/IMAGES/images_beisbol/Seriemundial.jpeg';
	import clasicoBeisbol from '$lib/IMAGES/images_beisbol/ClasicoBeisbol.jpeg';
	import ligaMexico from '$lib/IMAGES/images_beisbol/LigaMexico.jpeg';
	import serieCaribe from '$lib/IMAGES/images_beisbol/SerieCaribe.jpeg';
	import ligaJapon from '$lib/IMAGES/images_beisbol/LigaJapon.jpeg';
	import beisbolRD from '$lib/IMAGES/images_beisbol/BeisbolenRD.jpeg';

	let currentSlide = 0;

	type SlideContent = {
		imgSrc: string;
		text: string;
	};

	const slidesContent: SlideContent[] = [
		{
			imgSrc: beisbol,
			text: 'El béisbol, <strong>más allá de ser solo un juego</strong>, es una parte fundamental de la cultura estadounidense y de otros países. Su impacto social y cultural ha sido enorme, uniendo comunidades y celebrando la perseverancia y el esfuerzo. Hoy exploraremos los torneos más importantes de este deporte que han capturado la atención de millones alrededor del mundo. Este deporte continúa siendo un punto de unión, trascendiendo generaciones y dejando un legado cultural duradero.'
		},
		{
			imgSrc: serieMundial,
			text: '<strong>La Serie Mundial</strong> es el campeonato anual más prestigioso del béisbol profesional en los Estados Unidos. Disputada cada año entre los campeones de la Liga Americana y la Liga Nacional, la Serie Mundial ha sido testigo de los momentos más emocionantes y recordados en la historia del béisbol desde su creación en 1903. Los New York Yankees poseen el récord de más campeonatos ganados, con 27 títulos en su haber. La Serie es una fiesta nacional que mantiene a los aficionados al borde de sus asientos en cada juego.'
		},
		{
			imgSrc: clasicoBeisbol,
			text: '<strong>El Clásico Mundial de Béisbol</strong> es un torneo internacional en el que compiten equipos nacionales de todo el mundo. Celebrado cada cuatro años, el Clásico permite que países con tradición en béisbol como Estados Unidos, Japón, República Dominicana y Venezuela compitan en un escenario global. Este evento ha impulsado la popularidad del béisbol en muchos lugares y ha mostrado la diversidad de talento en el deporte. Además, promueve el espíritu de competencia internacional, elevando el nivel de habilidad y orgullo en cada país participante.'
		},
		{
			imgSrc: ligaMexico,
			text: '<strong>La Liga Mexicana de Béisbol (LMB)</strong> es la liga profesional de béisbol más importante de México y una de las más antiguas de América Latina, fundada en 1925. La LMB es un orgullo nacional y ha formado a numerosos talentos que han alcanzado la fama en ligas de mayor nivel, como las Grandes Ligas de Béisbol (MLB) en Estados Unidos. Sus equipos, repartidos por todo el país, son el alma de muchas ciudades, y los juegos son eventos de gran expectación que unen a las comunidades mexicanas.'
		},
		{
			imgSrc: serieCaribe,
			text: '<strong>La Serie del Caribe</strong> es el torneo anual de béisbol profesional más importante de América Latina, en el que participan los equipos campeones de las ligas invernales de países caribeños como Puerto Rico, República Dominicana, México y Venezuela. Este evento es una tradición regional que celebra la pasión por el béisbol y la competitividad entre naciones. La Serie del Caribe es una manifestación de la unidad y el orgullo latinoamericano, y los juegos son verdaderos festivales deportivos que atraen a miles de aficionados.'
		},
		{
			imgSrc: ligaJapon,
			text: '<strong>La Liga Profesional de Béisbol de Japón</strong> (NPB) es la máxima competición de béisbol en Japón. Con un alto nivel de juego y una base de aficionados apasionados, la NPB es conocida por su disciplina y técnica. Equipos como los Yomiuri Giants y Hanshin Tigers son iconos en Japón, y varios jugadores de la NPB han triunfado también en las Grandes Ligas de Béisbol en Estados Unidos. La NPB es vista como una institución cultural en Japón, y cada temporada muestra la dedicación y la emoción de miles de aficionados.'
		},
		{
			imgSrc: beisbolRD,
			text: '<strong>República Dominicana es un país con una rica historia en el béisbol;</strong> sus jugadores son reconocidos mundialmente por su talento. Desde una edad temprana, los dominicanos viven el béisbol como una pasión. Grandes estrellas como David Ortiz, Pedro Martínez y Vladimir Guerrero han representado con orgullo a su país, haciendo de la República Dominicana uno de los mayores exportadores de talento a las ligas mayores. La pasión y la destreza dominicana son evidentes en cada partido, destacando la herencia cultural y deportiva del país.'
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
				<div class="lesson">Historia del Béisbol</div>

				<div class="nav-item" id="nav-item-1">
					<div class="progress-bar" id="progress-bar">
						<div class="rombo" id="rombo-1"><span class="numero"></span></div>
						<div class="square" id="square-1"><span class="numero-2"></span></div>
						<div class="rombo" id="rombo-2"><span class="numero">3</span></div>
						<div class="circle" id="circle-2"><span class="numero"></span></div>
					</div>
				</div>
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

		<a href="/beisbol/beisbol3" data-sveltekit-reload data-sveltekit-preload-data="tap">
			<button class="next svelte-zonnq2">
				<span class="arrow svelte-zonnq2"></span>
			</button>
		</a>
	</div>
</div>
