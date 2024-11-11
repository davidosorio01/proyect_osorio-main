<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol3.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import raqueta from '$lib/IMAGES/images_bad/RaquetaBadminton.png'
	import pregunta from '$lib/IMAGES/images_bad/PreguntaBadminton.png'
	import vs from '$lib/IMAGES/images_bad/1vsBadminton.png'

</script>

<div>
	<div id="loading-screen">
		<div id="loading-spinner"></div>
	</div>

	<header>
		<div class="menu-container">
			<nav>
				<img src={LogoPagina} alt="" class="logo" />
				<div class="lesson">Historia del badminton</div>
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
				src="https://www.youtube.com/embed/X8qJW5d59nQ?si=co0zKcE_5Ztqv-QZ"
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
				<img src={raqueta} alt="" />
				<h3>y8</h3>
			</div>
			<div class="face back">
				<h3>Power Badminton</h3>
				<p>
					Si quieres despejar la mente un rato, pero disfrutando de tu deporte favorito este juego
					es para ti. Llama a un amigo para que simulen un partido de badminton. También puedes
					jugar solo si así lo deseas.
				</p>
				<div class="link">
					<a href="https://es.y8.com/games/stick_figure_badminton_ii">Jugar</a>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="face front">
				<img src={pregunta} alt="" />
				<h3>Wordwarll</h3>
			</div>
			<div class="face back">
				<h3>Preguntas de Cultura Badminton</h3>
				<p>
					¿Te consideras un genio en cultura de badminton? Prueba tus conocimientos con estas
					preguntas y demuestra todo lo que sabes sobre el badminton.
				</p>
				<div class="link">
					<a href="https://wordwall.net/es/resource/61358972/preguntas-de-b%C3%A1dminton">Jugar</a>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="face front">
				<img src={vs} alt="" />
				<h3>Poki</h3>
			</div>
			<div class="face back">
				<h3>Simulador de Badminton</h3>
				<p>
					Si quieres despejar la mente un rato, pero disfrutando de tu deporte favorito este juego
					es para ti. Llama a un amigo para que simulen un partido de badminton. También puedes
					jugar solo si así lo deseas.
				</p>
				<div class="link">
					<a
						href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwit_7LH7sWJAxWSSDABHVIMHzEQFnoECBQQAQ&url=https%3A%2F%2Fes.twoplayergames.org%2Fjuego%2Fstick-badminton-2&usg=AOvVaw2IooQniReSGOUmCg2D0D2A&opi=89978449"
						>Jugar</a
					>
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
