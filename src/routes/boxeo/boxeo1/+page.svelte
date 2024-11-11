<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol1.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import wc from '$lib/IMAGES/images_boxeo/WCboxeo.png';
	import muh from '$lib/IMAGES/images_boxeo/MuhammadAli.avif';
	import mt from '$lib/IMAGES/images_boxeo/MikeTyson.jpeg';
	import floyd from '$lib/IMAGES/images_boxeo/FloydMayweather.avif';

</script>

<header>  
	<div class="menu-container">  
		<nav>  
			<img src={LogoPagina} alt="Logo" class="logo" />  
			<div class="lesson">Historia del boxeo</div>  

			<div class="nav-item" id="nav-item-1">  
				<div class="progress-bar" id="progress-bar">  
					<div class="rombo" id="rombo-1"><span class="numero"></span></div>  
					<div class="square" id="square-1"><span class="numero-2">2</span></div>  
					<div class="rombo" id="rombo-2"><span class="numero"></span></div>  
					<div class="circle" id="circle-2"><span class="numero"></span></div>  
				</div>  
			</div>  
			<BotonVolver/>
		</nav>  
	</div>  
	<div class="level-info" id="level-info"></div>  
</header>  

<main class="container">  
	<section class="text">  
		<h1>El Boxeo a través del tiempo</h1>  
		<hr>  
		<p>A lo largo del tiempo, el boxeo ha evolucionado significativamente. Desde sus inicios en la antigua Grecia hasta convertirse en un deporte profesional a nivel mundial, el boxeo ha capturado la imaginación y la habilidad de muchos.</p>  
		<p>Hoy en día, el boxeo es <strong>un deporte seguido en todo el mundo.</strong> Con una base de aficionados apasionados, los torneos más importantes como el Campeonato Mundial de Boxeo y el Torneo de Maestros cuentan con un alto nivel de competencia y talento.</p>  
		<p>El boxeo no solo se limita al combate en sí; también es un motor económico que genera millones de dólares, incluyendo derechos de televisión, patrocinios y merchandising. Además, su impacto social es significativo, promoviendo la disciplina, la estrategia y el espíritu deportivo en diversas comunidades.</p>  
	</section>  

	<section class="image">  
		<img src={wc} alt="Trofeos icónicos del boxeo" />  
		<p>Trofeos más icónicos en el mundo del boxeo</p>  
	</section>  
</main>  

<div class="timeline-container">  
	<h1>Torneos más importantes en el mundo</h1>  
	<hr>  
	<div class="timeline">  
		<div class="timeline-event">  
			<div class="timeline-date">1892 - Actualidad</div>  
			<div class="timeline-content">  
				<h2>Campeonato Mundial de Boxeo</h2>  
				<p>El Campeonato Mundial de Boxeo es uno de los torneos más prestigiosos, con boxeadores de todo el mundo compitiendo por el título de mejor del mundo.</p>  
			</div>  
		</div>  
		<div class="timeline-event">  
			<div class="timeline-date">1952 - Actualidad</div>  
			<div class="timeline-content">  
				<h2>Torneo de Maestros</h2>  
				<p>El Torneo de Maestros reúne a los mejores boxeadores del mundo en una competencia de alto nivel, destacada por su emoción y prestigio.</p>  
			</div>  
		</div>  
		<div class="timeline-event">  
			<div class="timeline-date">1985 - Actualidad</div>  
			<div class="timeline-content">  
				<h2>Copa Mundial de Boxeo</h2>  
				<p>La Copa Mundial de Boxeo es una competencia anual entre equipos de diferentes países, conocida por su alto nivel de competencia y rivalidad intensa.</p>  
			</div>  
		</div>  
		<div class="timeline-event">  
			<div class="timeline-date">1904 - Actualidad</div>  
			<div class="timeline-content">  
				<h2>Campeonato Olímpico de Boxeo</h2>  
				<p>Para boxeadores amateur, los Juegos Olímpicos representan el torneo máximo. Ganar una medalla olímpica, especialmente la de oro, es un gran honor y es un trampolín hacia una carrera profesional.
				</p>  
			</div>  
		</div>  
		<div class="timeline-event">  
			<div class="timeline-date">2017 - Actualidad</div>  
			<div class="timeline-content">  
				<h2>WBSS</h2>  
				<p> Este torneo es un formato de eliminación directa que reúne a campeones y contendientes de diferentes organizaciones y categorías. Los ganadores reciben el Trofeo Muhammad Ali, junto con un reconocimiento de prestigio en el boxeo mundial.</p>  
			</div>  
		</div>  
		<div class="timeline-event">  
			<div class="timeline-date">1974 - Actualidad</div>  
			<div class="timeline-content">  
				<h2>Copa Mundial de la AIBA </h2>  
				<p> En el boxeo amateur, esta copa es uno de los eventos más relevantes y representa el campeonato mundial en diversas categorías de peso. Sirve como una plataforma importante para boxeadores jóvenes que buscan ganar experiencia y reconocimiento a nivel internacional.</p>  
			</div>  
		</div>  
	</div>  
</div>  

<div class="art-container">  
	<h2>Los mejores boxeadores en la historia del deporte</h2>  
	<br>  
	<div class="conlist">  
		<div class="jugadores">  
			<div class="card">  
				<div class="player">  
					<img src={muh} alt="Muhammad Ali">  
				</div>  
				<div class="intro">  
					<h1>¿Quién fue Muhammad Ali?</h1>  
					<p>Muhammad Ali es ampliamente considerado uno de los mejores boxeadores de todos los tiempos, conocido por su increíble habilidad y múltiples campeonatos mundiales.</p>  
				</div>  
			</div>  

			<div class="card">  
				<div class="player">  
					<img src={mt} alt="Mike Tyson">  
				</div>  
				<div class="intro">  
					<h1>¿Quién fue Mike Tyson?</h1>  
					<p>Mike Tyson, de Estados Unidos, ha sido una figura dominante en el boxeo, ganando múltiples títulos mundiales y siendo conocido por su ferocidad en el ring.</p>  
				</div>  
			</div>  

			<div class="card">  
				<div class="player">  
					<img src={floyd} alt="Floyd Mayweather">  
				</div>  
				<div class="intro">  
					<h1>¿Quién es Floyd Mayweather?</h1>  
					<p>Floyd Mayweather, de Estados Unidos, es uno de los boxeadores más exitosos en la historia del deporte, conocido por su récord invicto y habilidades excepcionales.</p>  
				</div>  
			</div>  
		</div>  
	</div>  
</div>  

<a href="/boxeo/boxeo2" data-sveltekit-reload="" data-sveltekit-preload-data="tap">  
	<button class="next svelte-zonnq2">  
		<span class="arrow svelte-zonnq2"></span>  
	</button>  
</a>  