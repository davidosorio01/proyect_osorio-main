<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol3.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import pregunta from '$lib/IMAGES/images_billar/PreguntaBillar.png';
	import bola8 from '$lib/IMAGES/images_billar/PreguntaBillar.png';
	import partido2 from '$lib/IMAGES/images_billar/PartidoBillar2.png';
</script>

<div>
	<div id="loading-screen">
		<div id="loading-spinner"></div>
	</div>

	<header>
		<div class="menu-container">
			<nav>
				<img src={LogoPagina} alt="" class="logo" />
				<div class="lesson">Historia del billar</div>
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
				src="https://www.youtube.com/embed/tTw0qhlvgOA?si=spAaj_56v_Lqtztr"
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
				<img src={bola8} alt="" />
				<h3>MiniJuegos</h3>
			</div>
			<div class="face back">
				<h3>8 pool</h3>
				<p>
					Si quieres despejar la mente un rato, pero disfrutando de tu deporte favorito este juego
					es para ti. Juega en este Simulador online de billar y disfruta de la experiencia.
				</p>
				<div class="link">
					<a href="https://www.minijuegos.com/juego/8-ball-pool">Jugar</a>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="face front">
				<img src={pregunta} alt="" />
				<h3>Educaplay</h3>
			</div>
			<div class="face back">
				<h3>Preguntas de Cultura Billar</h3>
				<p>
					¿Te consideras un genio en cultura de billar? Prueba tus conocimientos con estas preguntas
					y demuestra todo lo que sabes sobre el billar.
				</p>
				<div class="link">
					<a
						href="https://es.educaplay.com/recursos-educativos/1243680-que_tanto_sabes_del_billar.html"
						>Jugar</a
					>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="face front">
				<img src={partido2} alt="" />
				<h3>Poki</h3>
			</div>
			<div class="face back">
				<h3>Simulador de Billar</h3>
				<p>
					Si quieres despejar la mente un rato, pero disfrutando de tu deporte favorito este juego
					es para ti. A través de una increíble historia diviertete y ve conociendo más de ella
					mientras juegas.
				</p>
				<div class="link">
					<a href="https://poki.com/es/g/mafia-billiard-tricks">Jugar</a>
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
