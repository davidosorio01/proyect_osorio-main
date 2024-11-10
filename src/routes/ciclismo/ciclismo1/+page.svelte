<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol1.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import fausto from '$lib/IMAGES/images_ciclismo/FaustoCoppi.jpg';
	import trofeos from '$lib/IMAGES/images_ciclismo/Trofeosciclismo.jpeg';
	import eddy from '$lib/IMAGES/images_ciclismo/EddyMerckx.webp';
	import bernard from '$lib/IMAGES/images_ciclismo/BernardHinault.jpg';
</script>

<header>
	<div class="menu-container">
		<nav>
			<img src={LogoPagina} alt="" class="logo" />
			<div class="lesson">Historia del ciclismo</div>
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
		<h1>El Ciclismo a través del tiempo</h1>
		<hr />
		<p>
			El ciclismo se popularizó en el siglo XIX en Europa y ha evolucionado hasta convertirse en uno
			de los deportes de resistencia más practicados en el mundo. Desde competiciones en carreteras,
			montañas y pistas, el ciclismo ha forjado campeones que inspiran con su perseverancia y
			habilidad.
		</p>
		<p>
			Hoy en día, el ciclismo es <strong>uno de los deportes más competitivos</strong> y emocionantes.
			Las Grandes Vueltas, como el Tour de Francia, el Giro de Italia y la Vuelta a España, son los eventos
			de ciclismo en ruta más prestigiosos, atrayendo a ciclistas y seguidores de todo el mundo.
		</p>
		<p>
			Además, el ciclismo es un símbolo de esfuerzo y superación personal, promoviendo una cultura
			de salud y sostenibilidad. En muchos países, este deporte no solo es popular como competición,
			sino también como medio de transporte y estilo de vida saludable.
		</p>
	</div>
	<div class="image">
		<img src={trofeos} alt="" />
		<p>Trofeos más icónicos en el mundo del ciclismo</p>
	</div>
</div>
<div class="timeline-container">
	<h1>Torneos más importantes en el mundo</h1>
	<hr />
	<div class="timeline">
		<div class="timeline-event">
			<div class="timeline-date">1903 - Actualidad</div>
			<div class="timeline-content">
				<h2>Tour de Francia</h2>
				<p>
					El Tour de Francia es la competición de ciclismo en ruta más importante del mundo. Durante
					tres semanas, los ciclistas recorren los Alpes y los Pirineos en una carrera agotadora que
					corona al campeón con el prestigioso maillot amarillo.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1909 - Actualidad</div>
			<div class="timeline-content">
				<h2>Giro de Italia</h2>
				<p>
					El Giro de Italia es conocido por sus etapas desafiantes a través de las montañas
					italianas. Las cimas como el Stelvio y el Mortirolo son legendarias, y el maillot rosa es
					símbolo de gloria en el ciclismo profesional.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1935 - Actualidad</div>
			<div class="timeline-content">
				<h2>Vuelta a España</h2>
				<p>
					La Vuelta a España es la última de las tres Grandes Vueltas y es famosa por sus etapas de
					alta montaña, incluyendo el Angliru. Ciclistas de todo el mundo compiten en esta exigente
					carrera.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1927 - Actualidad</div>
			<div class="timeline-content">
				<h2>Campeonato Mundial de Ciclismo</h2>
				<p>
					El Campeonato Mundial de Ciclismo reúne a los mejores ciclistas de cada país en una
					competencia internacional. Los campeones reciben el maillot arcoíris, un símbolo de
					excelencia en el ciclismo.
				</p>
			</div>
		</div>
	</div>
	<br /><br />
</div>
<div class="art-container">
	<h2>Los mejores ciclistas en la historia del ciclismo</h2>
	<br />
	<div class="conlist">
		<div class="jugadores">
			<div class="card">
				<div class="player">
					<img src={eddy} alt="Eddy Merckx" />
				</div>
				<div class="intro">
					<h1>¿Quién fue Eddy Merckx?</h1>
					<p>
						Eddy Merckx es considerado uno de los mejores ciclistas de todos los tiempos, con
						múltiples victorias en las Grandes Vueltas.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="player">
					<img src={bernard} alt="Bernard Hinault" />
				</div>
				<div class="intro">
					<h1>¿Quién fue Bernard Hinault?</h1>
					<p>
						Bernard Hinault es uno de los pocos ciclistas que ha ganado las tres Grandes Vueltas.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="player">
					<img src={fausto} alt="Fausto Coppi" />
				</div>
				<div class="intro">
					<h1>¿Quién fue Fausto Coppi?</h1>
					<p>
						Fausto Coppi fue un ciclista italiano legendario, conocido por su destreza en el Giro de
						Italia y el Tour de Francia, y por su rivalidad con Gino Bartali.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
<a href="/ciclismo/ciclismo2" data-sveltekit-reload="" data-sveltekit-preload-data="tap">
	<button class="next svelte-zonnq2">
		<span class="arrow svelte-zonnq2"></span>
	</button>
</a>
