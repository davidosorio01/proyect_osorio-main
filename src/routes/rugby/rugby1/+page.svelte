<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol1.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import trofeos from '$lib/IMAGES/images_rugby/Trofeosrugby.jpeg';
    import Richiemccaw from '$lib/IMAGES/images_rugby/Richiemccaw.jpg';
    import Jonahlomu from '$lib/IMAGES/images_rugby/Jonahlomu.jpg';
    import Brianodriscoll from '$lib/IMAGES/images_rugby/Brianodriscoll.jpeg';
</script>

<header>
	<div class="menu-container">
		<nav>
			<img src={LogoPagina} alt="" class="logo" />
			<div class="lesson">Historia del Rugby</div>
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
		<h1>El Rugby a través del tiempo</h1>
		<hr />
		<p>
			El rugby es un deporte de equipo que se originó en Inglaterra a principios del siglo XIX. Se
			juega en dos formatos principales: rugby union y rugby league, cada uno con sus propias reglas
			y estilos de juego. Desde sus humildes comienzos, el rugby ha crecido para convertirse en un
			deporte global, disfrutado por millones de personas alrededor del mundo.
		</p>
		<p>
			El rugby se caracteriza por su juego físico, donde se combinan la fuerza, la estrategia y el
			trabajo en equipo. A menudo se le atribuyen valores como la lealtad, el respeto y la
			deportividad, lo que lo convierte en un deporte no solo competitivo sino también formativo.
		</p>
		<p>
			Las competiciones de rugby han ganado popularidad a lo largo de los años, destacando eventos
			como la Copa del Mundo de Rugby, que atrae a las mejores selecciones nacionales y genera un
			gran interés global.
		</p>
	</div>

	<div class="image">
		<img src={trofeos} alt="" />
		<p>Trofeos más icónicos en el mundo del rugby</p>
	</div>
</div>

<div class="timeline-container">
	<h1>Torneos más importantes en el mundo del Rugby</h1>
	<hr />
	<div class="timeline">
		<div class="timeline-event">
			<div class="timeline-date">1987 - Actualidad</div>
			<div class="timeline-content">
				<h2>Copa del Mundo de Rugby</h2>
				<p>
					La Copa del Mundo de Rugby es el torneo más prestigioso del rugby union, celebrado cada
					cuatro años. Las selecciones nacionales compiten por el título, y ha visto a equipos como
					Nueva Zelanda y Australia triunfar en múltiples ocasiones.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">2000 - Actualidad</div>
			<div class="timeline-content">
				<h2>Six Nations Championship</h2>
				<p>
					Este torneo anual reúne a las selecciones de Inglaterra, Francia, Irlanda, Italia, Escocia
					y Gales. Es uno de los campeonatos más antiguos y emocionantes del rugby, donde las
					naciones compiten por el prestigioso Trofeo de las Seis Naciones.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1895 - Actualidad</div>
			<div class="timeline-content">
				<h2>Super Rugby</h2>
				<p>
					Super Rugby es un torneo profesional de rugby que involucra equipos de varias naciones del
					hemisferio sur. Con un formato emocionante y un alto nivel de competencia, ha contribuido
					significativamente al desarrollo del rugby en la región.
				</p>
			</div>
		</div>
		<div class="timeline-event">
			<div class="timeline-date">1895 - Actualidad</div>
			<div class="timeline-content">
				<h2>Copa Heineken de Campeones</h2>
				<p>
					Esta es la competición más importante de clubes de rugby en Europa, en la que compiten los
					mejores equipos de las ligas de Inglaterra, Francia, Irlanda, Escocia, Gales e Italia. La
					Heineken Cup es un torneo de gran prestigio y nivel competitivo, que corona al mejor club
					de rugby europeo.
				</p>
			</div>
		</div>
		<div class="timeline-event">
			<div class="timeline-date">1895 - Actualidad</div>
			<div class="timeline-content">
				<h2>Rugby Championship</h2>
				<p>
					Este torneo es el equivalente del Seis Naciones en el hemisferio sur, en el que participan
					Nueva Zelanda, Australia, Sudáfrica y Argentina. Celebrado anualmente, el Rugby
					Championship es un torneo de altísimo nivel en el que compiten varias de las potencias del
					rugby mundial.
				</p>
			</div>
		</div>
		<div class="timeline-event">
			<div class="timeline-date">1895 - Actualidad</div>
			<div class="timeline-content">
				<h2>Juegos Olímpicos</h2>
				<p>
					Desde 2016, el rugby sevens (versión de siete jugadores por equipo) se incluyó en los
					Juegos Olímpicos, lo que le ha dado una gran visibilidad a esta variante rápida y
					emocionante del rugby. Los mejores equipos de sevens del mundo compiten por las medallas
					olímpicas, y el torneo ha impulsado la popularidad global del rugby en su formato
					reducido.
				</p>
			</div>
		</div>
	</div>
	<br /><br />
</div>

<div class="art-container">
	<h2>Los mejores jugadores en la historia del Rugby</h2>
	<br />
	<div class="conlist">
		<div class="jugadores">
			<div class="card">
				<div class="player">
					<img src={Richiemccaw} alt="Richie McCaw" />
				</div>
				<div class="intro">
					<h1>¿Quién es Richie McCaw?</h1>
					<p>
						Richie McCaw es considerado uno de los mejores jugadores de rugby de todos los tiempos.
						Como capitán de Nueva Zelanda.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="player">
					<img src={Jonahlomu} alt="Jonah Lomu" />
				</div>
				<div class="intro">
					<h1>¿Quién fue Jonah Lomu?</h1>
					<p>
						Jonah Lomu es una leyenda del rugby conocido por su impresionante velocidad y potencia.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="player">
					<img src={Brianodriscoll} alt="Brian O'Driscoll" />
				</div>
				<div class="intro">
					<h1>¿Quién es Brian O'Driscoll?</h1>
					<p>
						Brian O'Driscoll es uno de los mejores jugadores irlandeses de rugby, conocido por su
						habilidad como centro.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<a href="/rugby/rugby2" data-sveltekit-reload="" data-sveltekit-preload-data="tap">
	<button class="next svelte-zonnq2">
		<span class="arrow svelte-zonnq2"></span>
	</button>
</a>
