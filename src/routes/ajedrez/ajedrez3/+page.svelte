<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol3.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import pregunta from '$lib/IMAGES/images_ajedrez/PreguntaAZ.png'
	import ficha from '$lib/IMAGES/images_ajedrez/FichaAZ.png'
	import simulador from '$lib/IMAGES/images_ajedrez/SimuladorAZ.webp'
</script>

<div>
	<div id="loading-screen">
		<div id="loading-spinner"></div>
	</div>

	<header>
		<div class="menu-container">
			<nav>
				<img src={LogoPagina} alt="" class="logo" />
				<div class="lesson">Historia del Ajedrez</div>
				<div class="nav-item" id="nav-item-1">
					<div class="progress-bar" id="progress-bar">
						<div class="rombo" id="rombo-1"><span class="numero"></span></div>
						<div class="square" id="square-1"><span class="numero-2"></span></div>
						<div class="rombo" id="rombo-2"><span class="numero"></span></div>
						<div class="circle" id="circle-2"><span class="numero">4</span></div>
					</div>
				</div>
				<BotonVolver />
			</nav>
		</div>
		<div class="level-info" id="level-info"></div>
	</header>

	<div class="container">
		<div class="header">
			<h1>¡Pon a prueba tu conocimiento y diviértete!</h1>
		</div>
		<div class="video-container">
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/wsicb6FuC24?si=iLQwY9-YmV_QFHj0"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	</div>
	<br />
	<hr />

	<div class="sport-container">
		<h2>Aquí tienes algunos juegos en la red, te invitamos a que midas tu conocimiento.</h2>
		<br />

		<div class="card">
			<div class="face front">
				<img src={ficha} alt="" />
				<h3>Chess.com</h3>
			</div>
			<div class="face back">
				<h3>Ajedrez</h3>
				<p>
					En esta página aprenderas todo acerca del ajedrez, además, podrás disfrutar de increibles
					actividades y juegos para que aprendas de manera divertida.
				</p>
				<div class="link">
					<a href="https://www.chess.com/es/terms/concurso-preguntas-ajedrez#answers">Jugar</a>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="face front">
				<img src={pregunta} alt="" />
				<h3>Wordwarll</h3>
			</div>
			<div class="face back">
				<h3>Preguntas sobre el Ajedrez</h3>
				<p>
					En este juego tipo cuestionario, tendras que responder la mayor cantidad de preguntas de
					manera correcta y con tiempo limitado.
				</p>
				<div class="link">
					<a href="https://wordwall.net/es/resource/6636170/ajedrez">Jugar</a>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="face front">
				<img src={simulador} alt="" />
				<h3>Chess</h3>
			</div>
			<div class="face back">
				<h3>Simulador de Ajedrez</h3>
				<p>
					¿Te consideras bueno jugando Ajedrez? En este juego podras medir todas tus capacidades
					contra un increíble bot.
				</p>
				<div class="link">
					<a href="https://www.chess.com/es/play/computer">Jugar</a>
				</div>
			</div>
		</div>
	</div>

	<a href="/empezar" data-sveltekit-reload="" data-sveltekit-preload-data="tap">
		<button class="next svelte-zonnq2">
			<span class="arrow svelte-zonnq2"></span>
		</button>
	</a>
</div>
