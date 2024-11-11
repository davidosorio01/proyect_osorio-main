<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol1.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import trofeos from '$lib/IMAGES/images_billar/TrofeosBillar.png'
	import efren from '$lib/IMAGES/images_billar/EfrenReyes.webp'
	import jean from '$lib/IMAGES/images_billar/JeanBalukas.png'
	import roni from '$lib/IMAGES/images_billar/RonnieOSollivan.jpg'

</script>

<header>  
	<div class="menu-container">  
		<nav>  
			<img src={LogoPagina} alt="" class="logo" />  
			<div class="lesson">Historia del billar</div>  
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
<div class="container">  
	<div class="text">  
		<h1>El Billar a través del tiempo</h1>  
		<hr>  
		<p>  
			A lo largo del tiempo, el billar ha evolucionado significativamente. Desde sus inicios en la Europa del siglo XV hasta convertirse en un deporte profesional a nivel mundial, el billar ha capturado la imaginación y la habilidad de muchos.
		</p>  
		<p>  
			Hoy en día, el billar es <strong>un deporte seguido en todo el mundo.</strong> Con una base de aficionados apasionados, los torneos más importantes como el Campeonato Mundial de Billar y el Torneo de Maestros cuentan con un alto nivel de competencia y talento.
		</p>  
		<p>  
			El billar no solo se limita al juego en sí; también es un motor económico que genera millones de dólares, incluyendo derechos de televisión, patrocinios y merchandising. Además, su impacto social es significativo, promoviendo la concentración, la estrategia y el espíritu deportivo en diversas comunidades.
		</p>  
	</div>  
	<div class="image">  
		<img src={trofeos} alt="" />  
		<p>Trofeos más icónicos en el mundo del billar</p>  
	</div>  
</div>
<div class="timeline-container">  
	<h1>Torneos más importantes en el mundo</h1>  
	<hr>  
	<div class="timeline">  
		<div class="timeline-event">  
			<div class="timeline-date">1928 - Actualidad</div>  
			<div class="timeline-content">  
				<h2>Campeonato Mundial de Billar</h2>  
				<p>El Campeonato Mundial de Billar es uno de los torneos más prestigiosos, con jugadores de todo el mundo compitiendo por el título de mejor del mundo.</p>  
			</div>  
		</div>  
		
		<div class="timeline-event">  
			<div class="timeline-date">1946 - Actualidad</div>  
			<div class="timeline-content">  
				<h2>Torneo de Maestros</h2>  
				<p>El Torneo de Maestros reúne a los mejores jugadores del mundo en una competencia de alto nivel, destacada por su emoción y prestigio.</p>  
			</div>  
		</div>  
		
		<div class="timeline-event">  
			<div class="timeline-date">1987 - Actualidad</div>  
			<div class="timeline-content">  
				<h2>Copa Mosconi</h2>  
				<p>La Copa Mosconi es una competencia anual entre equipos de Europa y Estados Unidos, conocida por su alto nivel de competencia y rivalidad intensa.</p>  
			</div>  
		</div>  
		<div class="timeline-event">  
			<div class="timeline-date">1981 - Actualidad</div>  
			<div class="timeline-content">  
				<h2>The World Games</h2>  
				<p>Este evento internacional reúne disciplinas deportivas no olímpicas, y el billar tiene un lugar importante con competiciones en pool, snooker y carambola. The World Games otorga a los jugadores de billar una plataforma mundial para representar a sus países.</p>  
			</div>  
		</div>  
		<div class="timeline-event">  
			<div class="timeline-date">1927 - Actualidad</div>  
			<div class="timeline-content">  
				<h2>Campeonato Mundial de Snooker</h2>  
				<p>Celebrado en el Crucible Theatre en Sheffield, Inglaterra, este campeonato es la cumbre del snooker. Atrae a los jugadores más talentosos del mundo, quienes compiten en una serie de juegos largos y estratégicos que requieren gran precisión y paciencia.</p>  
			</div>  
		</div>  
		<div class="timeline-event">  
			<div class="timeline-date">1928 - Actualidad</div>  
			<div class="timeline-content">  
				<h2>Campeonato Mundial de Carambola a Tres Bandas </h2>  
				<p>Este torneo, organizado por la Unión Mundial de Billar (UMB), es el más importante en la modalidad de carambola a tres bandas, una de las variantes más desafiantes del billar. Reúne a los mejores jugadores de carambola del mundo.</p>  
			</div>  
		</div>  
	</div>  
	<br><br>  
</div>
<div class="art-container">
	<h2>
		Los mejores jugadores en la historia del deporte
	</h2>
	<br>
	<div class="conlist">
		<div class="jugadores">
			<div class="card">
				<div class="player">
					<img src={efren} alt="Efren Reyes">
				</div>
				<div class="intro">
					<h1>¿Quién es Efren Reyes?</h1>
					<p>
						Efren Reyes es ampliamente considerado uno de los mejores jugadores de billar de todos los tiempos, conocido por su increíble habilidad y múltiples campeonatos mundiales.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="player">
					<img src={jean} alt="Jean Balukas">
				</div>
				<div class="intro">
					<h1>¿Quién es Jean Balukas?</h1>
					<p>
						Jean Balukas, de Estados Unidos, ha sido una figura dominante en el billar femenino, ganando múltiples títulos nacionales e internacionales.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="player">
					<img src={roni} alt="Ronnie O'Sullivan">
				</div>
				<div class="intro">
					<h1>¿Quién es Ronnie O'Sullivan?</h1>
					<p>
						Ronnie O'Sullivan, de Reino Unido, es uno de los jugadores más exitosos en la historia del billar, conocido por su velocidad y habilidades excepcionales.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
<a href="/billar/billar2" data-sveltekit-reload="" data-sveltekit-preload-data="tap">  
	<button class="next svelte-zonnq2">  
		<span class="arrow svelte-zonnq2"></span>  
	</button>  
</a>