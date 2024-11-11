<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol1.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import trofeos from '$lib/IMAGES/images_ajedrez/TrofeosAjedrez.webp'
	import garry from '$lib/IMAGES/images_ajedrez/GarryKasparov.webp'
	import bobby from '$lib/IMAGES/images_ajedrez/BobbyFischer.jpg'
	import magnus from '$lib/IMAGES/images_ajedrez/MagnusenCarlsen.jpg'
</script>

<header>  
	<div class="menu-container">  
		<nav>  
			<img src={LogoPagina} alt="" class="logo" />  
			<div class="lesson">Historia del Ajedrez</div>  
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
		<h1>El Ajedrez a través del tiempo</h1>  
		<hr>  
		<p>  
			El ajedrez, uno de los juegos de estrategia más antiguos y prestigiosos del mundo, tiene una rica historia que se remonta a más de mil años. Originario de la India, se expandió por el mundo durante la Edad Media, convirtiéndose en un símbolo de inteligencia y habilidad táctica. Hoy en día, el ajedrez es jugado a nivel mundial y es reconocido tanto como un deporte competitivo como una forma de entretenimiento intelectual.
		</p>  
		<p>  
			A lo largo de los siglos, el ajedrez ha evolucionado, y hoy en día se juega tanto de manera física en tableros reales como en plataformas digitales. Los campeonatos mundiales han sido una parte importante de la historia del ajedrez, mostrando a los mejores talentos del mundo.
		</p>  
		<p>  
			El ajedrez también ha sido un escenario para el intercambio cultural y político, siendo testigo de algunas de las rivalidades más famosas, como la que ocurrió durante la Guerra Fría entre los campeones soviéticos y los desafíantes estadounidenses.
		</p>  
	</div>  
	<div class="image">  
		<img src={trofeos} alt="" />  
		<p>Trofeos más icónicos en el mundo del ajedrez</p>  
	</div>  
</div>  

<div class="timeline-container">  
	<h1>Torneos más importantes en el ajedrez</h1>  
	<hr>  
	<div class="timeline">  
		<div class="timeline-event">  
			<div class="timeline-date">1886 - Actualidad</div>  
			<div class="timeline-content">  
				<h2>Campeonato Mundial de Ajedrez</h2>  
				<p>El torneo más prestigioso en el mundo del ajedrez, donde los mejores jugadores del planeta luchan por el título mundial. El campeón es coronado después de un torneo de varias rondas.</p>  
			</div>  
		</div>  
		
		<div class="timeline-event">  
			<div class="timeline-date">1950 - Actualidad</div>  
			<div class="timeline-content">  
				<h2>El Torneo de Candidatos</h2>  
				<p>El Torneo de Candidatos es el torneo clave donde los mejores ajedrecistas luchan por el derecho de desafiar al campeón mundial.</p>  
			</div>  
		</div>  
		
		<div class="timeline-event">  
			<div class="timeline-date">1985 - Actualidad</div>  
			<div class="timeline-content">  
				<h2>Chess Olympiad</h2>  
				<p>Un evento multilateral que reúne a equipos de ajedrecistas de todo el mundo, representando a sus respectivos países, para competir por la medalla de oro.</p>  
			</div>  
		</div>  
		
		<div class="timeline-event">  
			<div class="timeline-date">2005 - Actualidad</div>  
			<div class="timeline-content">  
				<h2>Copa del Mundo de Ajedrez</h2>  
				<p>Un torneo de eliminación directa que determina a los mejores jugadores del mundo, clasificados a través de un sistema de clasificación especial.</p>  
			</div>  
		</div>  
		
		<div class="timeline-event">  
			<div class="timeline-date">2010 - Actualidad</div>  
			<div class="timeline-content">  
				<h2>Grand Slam de Ajedrez</h2>  
				<p>Un prestigioso conjunto de torneos internacionales de ajedrez, donde se enfrentan los mejores jugadores del mundo en varias ciudades clave.</p>  
			</div>  
		</div>  
	</div>  
	<br><br>  
</div>

<div class="art-container">
	<h2>
		Los mejores jugadores en la historia del ajedrez
	</h2>
	<br>
	<div class="conlist">
		<div class="jugadores">
			<div class="card">
				<div class="player">
					<img src={garry} alt="Garry Kasparov">
				</div>
				<div class="intro">
					<h1>¿Quién fue Garry Kasparov?</h1>
					<p>
						Garry Kasparov, considerado uno de los mejores ajedrecistas de todos los tiempos, fue el campeón mundial más joven de la historia y dominó el ajedrez durante más de dos décadas.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="player">
					<img src={bobby} alt="Bobby Fischer">
				</div>
				<div class="intro">
					<h1>¿Quién fue Bobby Fischer?</h1>
					<p>
						Bobby Fischer es reconocido como uno de los genios más brillantes en la historia del ajedrez. Su victoria en el Campeonato Mundial de 1972 contra Boris Spassky fue un momento clave en la Guerra Fría.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="player">
					<img src={magnus} alt="Magnus Carlsen">
				</div>
				<div class="intro">
					<h1>¿Quién es Magnus Carlsen?</h1>
					<p>
						Magnus Carlsen es el actual campeón mundial de ajedrez y uno de los jugadores más jóvenes en alcanzar el título. Su habilidad táctica y su rendimiento en torneos de élite lo han colocado como uno de los más grandes de la historia.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<a href="/ajedrez/ajedrez2" data-sveltekit-reload="" data-sveltekit-preload-data="tap">  
	<button class="next svelte-zonnq2">  
		<span class="arrow svelte-zonnq2"></span>  
	</button>  
</a>