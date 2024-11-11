<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol1.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import trofeo from '$lib/IMAGES/images_bad/TrofeosBadminton.png'
	import lin from '$lib/IMAGES/images_bad/Lindan.jpg'
	import carolina from '$lib/IMAGES/images_bad/CarolinaMarin.webp'
	import lee from '$lib/IMAGES/images_bad/Leechong.jpg'
</script>

<header>
	<div class="menu-container">
		<nav>
			<img src={LogoPagina} alt="" class="logo" />
			<div class="lesson">Historia del badminton</div>
			<div class="nav-item" id="nav-item-1">
				<div class="progress-bar" id="progress-bar">
					<div class="rombo" id="rombo-1"><span class="numero"></span></div>
					<div class="square" id="square-1"><span class="numero-2">2</span></div>
					<div class="rombo" id="rombo-2"><span class="numero"></span></div>
					<div class="circle" id="circle-2"><span class="numero"></span></div>
				</div>
			</div>
			<BotonVolver />
		</nav>
	</div>
	<div class="level-info" id="level-info"></div>
</header>
<div class="container">
	<div class="text">
		<h1>El Badminton a través del tiempo</h1>
		<hr />
		<p>
			El bádminton tiene sus raíces en el juego indio "Poona," llevado a Inglaterra en el siglo XIX
			por oficiales británicos. Rápidamente se convirtió en un pasatiempo de la nobleza y empezó a
			difundirse en otros países. En 1899 se celebró el primer torneo masculino en Inglaterra y,
			poco después, el femenino. En 1934 se fundó la Federación Internacional de Bádminton, hoy la
			Federación Mundial de Bádminton (BWF), encargada de regular este deporte en crecimiento.
		</p>
		<p>
			En 1972, el bádminton fue presentado como deporte de demostración en los Juegos Olímpicos de
			Múnich, y en 1992 se incluyó oficialmente en los Juegos Olímpicos de Barcelona, lo que le dio
			un impulso internacional. Actualmente, es uno de los deportes de raqueta más populares del
			mundo, practicado en más de 200 países y accesible a jugadores de todas las edades y
			habilidades.
		</p>
		<p>
			Además de su impacto deportivo, el bádminton es un motor económico y social, generando
			millones de dólares en derechos de transmisión, patrocinios y merchandising. Asimismo, fomenta
			la salud y la integración en distintas comunidades, mostrando su importancia como deporte
			accesible y en constante evolución.
		</p>
	</div>
	<div class="image">
		<img src={trofeo} alt="" />
		<p>Trofeos más icónicos en el mundo del badminton</p>
	</div>
</div>
<div class="timeline-container">
	<h1>Torneos más importantes en el mundo</h1>
	<hr />
	<div class="timeline">
		<div class="timeline-event">
			<div class="timeline-date">1934 - Actualidad</div>
			<div class="timeline-content">
				<h2>Thomas Cup</h2>
				<p>
					La Thomas Cup es el campeonato mundial de equipos masculinos de badminton, celebrado desde
					1934. Es uno de los torneos más prestigiosos y competitivos en el deporte.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1956 - Actualidad</div>
			<div class="timeline-content">
				<h2>Uber Cup</h2>
				<p>
					La Uber Cup es el equivalente femenino de la Thomas Cup, reuniendo a los mejores equipos
					femeninos del mundo en una competencia feroz por el título.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1977 - Actualidad</div>
			<div class="timeline-content">
				<h2>Campeonato Mundial de Badminton</h2>
				<p>
					El Campeonato Mundial de Badminton es un evento anual que determina a los mejores
					jugadores individuales y de dobles del mundo. Es famoso por su alto nivel de competencia y
					emoción.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1992 - Actualidad</div>
			<div class="timeline-content">
				<h2>Badminton en los Juegos Olímpicos</h2>
				<p>
					El badminton se convirtió en deporte olímpico en 1992, y desde entonces ha sido uno de los
					eventos más esperados y seguidos en cada edición de los Juegos Olímpicos.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1989 - Actualidad</div>
			<div class="timeline-content">
				<h2>Sudirman Cup</h2>
				<p>
					La Sudirman Cup es una competencia mundial por equipos mixtos, donde los países compiten
					en partidos tanto masculinos como femeninos. Es conocida por su emoción y el espíritu de
					equipo.
				</p>
			</div>
		</div>
	</div>
	<br /><br />
</div>
<div class="art-container">
	<h2>Los mejores jugadores en la historia del deporte</h2>
	<br />
	<div class="conlist">
		<div class="jugadores">
			<div class="card">
				<div class="player">
					<img src={lin} alt="Lin Dan" />
				</div>
				<div class="intro">
					<h1>¿Quién es Lin Dan?</h1>
					<p>
						Lin Dan es considerado uno de los mejores jugadores de badminton en la historia,
						conocido por su increíble habilidad y múltiples campeonatos mundiales y olímpicos.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="player">
					<img src={carolina} alt="Carolina Marin" />
				</div>
				<div class="intro">
					<h1>¿Quién es Carolina Marin?</h1>
					<p>
						Carolina Marin, de España, ha ganado múltiples títulos mundiales y olímpicos, y es
						celebrada por su determinación y habilidad en la cancha.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="player">
					<img src={lee} alt="" />
				</div>
				<div class="intro">
					<h1>¿Quién es Lee Chong Wei?</h1>
					<p>
						Lee Chong Wei, de Malasia, es uno de los jugadores más exitosos en la historia del
						badminton, conocido por su consistencia y logros en torneos internacionales.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
<a href="/badminton/badminton2" data-sveltekit-reload="" data-sveltekit-preload-data="tap">
	<button class="next svelte-zonnq2">
		<span class="arrow svelte-zonnq2"></span>
	</button>
</a>
