<script lang="ts">
	import { onMount } from 'svelte';
	import '$lib/CSS/futbol_card/futbol2.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import partidaaz from '$lib/IMAGES/images_ajedrez/PartidadeAZ.webp'
	import campeon from '$lib/IMAGES/images_ajedrez/CampeonAZ.png'
	import equipo from '$lib/IMAGES/images_ajedrez/EquipoAZ.png'
	import jovenes from '$lib/IMAGES/images_ajedrez/JovenesAZ.png'
	import panamericano from '$lib/IMAGES/images_ajedrez/PanamericanosAZ.png'
	import ultima from '$lib/IMAGES/images_ajedrez/UltimaAZ.png'

	let currentSlide = 0;

	type SlideContent = { 
		imgSrc: string;
		text: string;
	};

	// Contenido de las diapositivas de ajedrez
	const slidesContent: SlideContent[] = [
		{
			imgSrc: partidaaz,
			text: 'El Ajedrez, <strong>más que un juego</strong>, es una disciplina intelectual que promueve el desarrollo del pensamiento estratégico, la concentración y el respeto. A lo largo de los años, el ajedrez ha ganado popularidad mundial, no solo como una competencia, sino también como una herramienta educativa que fomenta la creatividad y el razonamiento lógico. En esta sección, exploraremos algunos de los torneos más importantes del Ajedrez, que destacan tanto las habilidades como el impacto cultural y social de este deporte.'
		},
		{
			imgSrc: campeon,
			text: '<strong>El Campeonato Mundial de Ajedrez</strong>, uno de los torneos más prestigiosos, ha sido la plataforma donde los mejores ajedrecistas del mundo se enfrentan por el título mundial. Desde su inicio en 1886, este evento ha sido testigo de la rivalidad entre grandes como <em>Garry Kasparov</em>, <em>Magnus Carlsen</em> y <em>Vishwanathan Anand</em>, entre otros. Este campeonato no solo pone a prueba la habilidad técnica, sino también la resistencia psicológica y la preparación estratégica de los participantes.'
		},
		{
			imgSrc: equipo,
			text: '<strong>Los torneos por equipos de Ajedrez</strong> han sido fundamentales para promover la cooperación y el trabajo en equipo dentro del ajedrez. El <em>Campeonato Mundial de Ajedrez por Equipos</em> reúne a las selecciones nacionales y clubes de élite. En eventos como el <em>Chess Olympiad</em>, los jugadores representan a sus países, luchando por medallas de oro y demostrando que el ajedrez es más que una actividad individual.'
		},
		{
			imgSrc: jovenes,
			text: '<strong>Los torneos juveniles de Ajedrez</strong> son cruciales para el desarrollo del deporte, proporcionando a los jóvenes talentos una plataforma para demostrar su habilidad. El <em>Campeonato Mundial Juvenil de Ajedrez</em> y otras competiciones similares ayudan a forjar nuevas estrellas en el ajedrez, permitiendo a los más jóvenes destacarse desde temprana edad y seguir su camino hacia la élite mundial.'
		},
		{
			imgSrc: panamericano,
			text: 'Los torneos continentales de Ajedrez, como el <strong>Campeonato Europeo de Ajedrez</strong> y el <strong>Campeonato Panamericano</strong>, ofrecen a los jugadores la oportunidad de enfrentarse a rivales de su propia región. Estos campeonatos no solo elevan el nivel de competencia, sino que también promueven el crecimiento del deporte en diferentes continentes, con una creciente popularidad en Asia, Europa y América.'
		},
		{
			imgSrc: ultima,
			text: 'Aunque el ajedrez no ha sido incluido en los Juegos Olímpicos, los <strong>World Games</strong> y otros eventos internacionales de gran prestigio han brindado a este deporte visibilidad en el escenario global. Con su inclusión en los Juegos Asiáticos y otros eventos multideportivos, el ajedrez continúa avanzando hacia la posibilidad de ser parte del programa olímpico en el futuro.'
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
	<!-- Pantalla de carga -->  
	<div id="loading-screen">  
		<div id="loading-spinner"></div>  
	</div>  

	<!-- Encabezado -->  
	<header>  
		<div class="menu-container">  
			<nav>  
				<img src={LogoPagina} alt="" class="logo">  
				<div class="lesson">Historia del Ajedrez</div>  
				
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

			<!-- Botón para proceder a la siguiente sección -->
			<a href="/ajedrez/ajedrez3" data-sveltekit-reload data-sveltekit-preload-data="tap">
				<button class="next svelte-zonnq2">
					<span class="arrow svelte-zonnq2"></span>
				</button>
			</a>
		</div>
	</div>  
</div>
