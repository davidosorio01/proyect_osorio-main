<script lang="ts">
	import { onMount } from 'svelte';
	import '$lib/CSS/futbol_card/futbol2.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import peleamasculina from '$lib/IMAGES/images_boxeo/PeleaMasculinaBox.png';
	import campeonmundial from '$lib/IMAGES/images_boxeo/CampeonMundial.png';
	import mvf from '$lib/IMAGES/images_boxeo/MuhammedvsFriezer.jpg';
	import campeonolim from '$lib/IMAGES/images_boxeo/CampeónOlimpico.png';
	import equilatero from '$lib/IMAGES/images_boxeo/Equilatero.png';
	import pf from '$lib/IMAGES/images_boxeo/PeleafemeninaBox.png';
	import guantes from '$lib/IMAGES/images_boxeo/Guantes.png';

	let currentSlide = 0;

	type SlideContent = {
		imgSrc: string;
		text: string;
	};

	const slidesContentBoxeo: SlideContent[] = [
		{
			imgSrc: peleamasculina,
			text: 'El boxeo, <strong>más allá de ser un simple deporte</strong>, actúa como un poderoso motor de cambio social. Sus impactos positivos se pueden observar en diversas áreas que contribuyen al bienestar de las comunidades y a la cohesión social. Este deporte inspira disciplina, resiliencia y una mentalidad de superación personal en quienes lo practican y lo siguen. Vamos a visualizar los torneos y peleas que además de ser entretenidos, <strong>tienen grandes impactos en la sociedad</strong>, fomentando valores como el respeto y el trabajo en equipo.'
		},
		{
			imgSrc: campeonmundial,
			text: '<strong>El Campeonato Mundial de Boxeo</strong> es uno de los eventos más importantes en el mundo del boxeo profesional, donde los mejores púgiles compiten por el título de campeón mundial en diversas categorías de peso. Los boxeadores más destacados, como Muhammad Ali, Mike Tyson y Floyd Mayweather, han dejado una marca imborrable en la historia del boxeo. <strong>El título de campeón mundial</strong> es un símbolo de excelencia en el boxeo, y ganar este título requiere de una increíble dedicación, habilidad y fortaleza mental.'
		},
		{
			imgSrc: mvf,
			text: '<strong>La Trilogía Ali vs. Frazier</strong> es una de las rivalidades más épicas en la historia del boxeo. Estas tres peleas entre Muhammad Ali y Joe Frazier fueron legendarias, culminando en el famoso "Thrilla in Manila" en 1975. Esta trilogía no solo mostró el talento y la valentía de ambos luchadores, sino que dejó una marca indeleble en el deporte. Cada combate es recordado como un espectáculo de resistencia, habilidad y espíritu competitivo.'
		},
		{
			imgSrc: campeonolim,
			text: '<strong>El Torneo Olímpico de Boxeo</strong> es uno de los eventos más prestigiosos en los Juegos Olímpicos. Introducido en los Juegos de 1904, ha sido un escenario donde se han forjado grandes leyendas del boxeo. Los Juegos Olímpicos destacan el talento en su estado más puro, ya que los competidores representan a sus países con orgullo. Este evento ha sido una plataforma crucial para los futuros campeones del boxeo profesional.'
		},
		{
			imgSrc: equilatero,
			text: '<strong>El Circuito Profesional de Boxeo</strong> es donde los boxeadores más talentosos y dedicados se enfrentan en una serie de combates organizados por diversas asociaciones, como la WBC, WBA y IBF, para determinar a los mejores del mundo. Este circuito es una prueba de resistencia y habilidad, donde cada pelea es un escalón hacia el éxito. Aquí, los boxeadores luchan no solo por títulos, sino por construir un legado duradero.'
		},
		{
			imgSrc: pf,
			text: '<strong>El Boxeo Femenino</strong> ha crecido significativamente en las últimas décadas, con campeonas como Laila Ali y Claressa Shields, que han llevado el deporte a nuevas alturas y han inspirado a muchas jóvenes a participar. Este crecimiento ha impulsado la igualdad en el deporte, dando mayor visibilidad a las mujeres en el boxeo. Hoy en día, las peleas femeninas son tan esperadas como las masculinas, rompiendo barreras y estereotipos.'
		},
		{
			imgSrc: guantes,
			text: '<strong>Latinoamérica tiene una historia rica en el boxeo;</strong> algunos de los mejores boxeadores y momentos históricos provienen de esta región, siendo una potencia mundial en el deporte. Figuras como Julio César Chávez, Roberto Durán y Carlos Monzón no solo lograron títulos, sino que también inspiraron a generaciones enteras. Su legado continúa, con una nueva generación de peleadores que mantienen viva la pasión y el orgullo por el boxeo latinoamericano.'
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
				<div class="lesson">Historia del Boxeo</div>

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
			{#each slidesContentBoxeo as slide}
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

		<a href="/boxeo/boxeo3" data-sveltekit-reload data-sveltekit-preload-data="tap">
			<button class="next svelte-zonnq2">
				<span class="arrow svelte-zonnq2"></span>
			</button>
		</a>
	</div>
</div>
