<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol3.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import boxeadores from '$lib/IMAGES/images_boxeo/Boxeadores.png';
	import pregunta from '$lib/IMAGES/images_boxeo/PreguntasBox.png';
	import peleamas from '$lib/IMAGES/images_boxeo/PeleaMasculinaBox.png';
</script>

<div>
	<div id="loading-screen">
		<div id="loading-spinner"></div>
	</div>

	<header>
		<div class="menu-container">
			<nav>
				<img src={LogoPagina} alt="" class="logo" />
				<div class="lesson">Historia del boxeo</div>
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
				src="https://www.youtube.com/embed/d2dSYdVVl9Y?si=WmqOGh76vdxNLXpB"
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
				<img src={boxeadores} alt="" />
				<h3>Minijuegos</h3>
			</div>
			<div class="face back">
				<h3>boxing-random</h3>
				<p>
					En este juego tendrás que responder preguntas sobre la historia y los campeones del boxeo.
					¡Demuestra toda tu destreza y conocimientos acerca del boxeo!
				</p>
				<div class="link">
					<a href="https://www.minijuegos.com/juego/boxing-random">Jugar</a>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="face front">
				<img src={pregunta} alt="" />
				<h3>WordWarll</h3>
			</div>
			<div class="face back">
				<h3>Preguntas Box</h3>
				<p>
					¿Te consideras un experto en boxeo? Prueba tus conocimientos identificando a famosos
					boxeadores por sus imágenes y logros.
				</p>
				<div class="link">
					<a href="https://wordwall.net/resource/57005293/boxeo">Jugar</a>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="face front">
				<img src={peleamas} alt="" />
				<h3>Pokki</h3>
			</div>
			<div class="face back">
				<h3>Simulador de Boxeo</h3>
				<p>
					Si quieres despejar la mente un rato, pero disfrutando de tu deporte favorito este juego
					es para ti. Llama a un amigo para que simulen una pelea de boxeo. También puedes jugar
					solo si así lo deseas.
				</p>
				<div class="link">
					<a href="https://poki.com/es/g/punchers">Jugar</a>
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
