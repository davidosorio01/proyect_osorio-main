<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/saber_mas.css';
	import david from '$lib/IMAGES/images_saber_mas/DavidOsorio.jpg';
	import aguiar from '$lib/IMAGES/images_saber_mas/JoseDavidAguiar.jpg';
	import holguin from '$lib/IMAGES/images_saber_mas/JuanMiguelHolguín.jpg';
	import tomas from '$lib/IMAGES/images_saber_mas/TomásOsorio.jpg';
	import ximena from '$lib/IMAGES/images_saber_mas/XimenaBedoya.jpg';
</script>

<svelte:head>
	<link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
</svelte:head>

<div>
	<div id="loading-screen">
		<div id="loading-spinner"></div>
	</div>

	<header>
		<div class="header-container">
			<div class="logo">
				<h2>
					<a href="/saber_mas" class="brand" data-sveltekit-preload-data="tap" data-sveltekit-reload>
						<i class="bx bx-run"></i>
						<span class="text">SPORT SCORE</span>
					</a>
				</h2>
			</div>
			<div class="menu-container">
				<nav>
					<div class="lesson">Sobre Nosotros</div>
				</nav>
			</div>
			<BotonVolver />
		</div>
	</header>
</div>
<hr />

<div class="container">
	<div class="Text">
	</div>
	<br />
	<p>
		Bienvenido a <strong>Sport Score</strong>, un sitio creado especialmente para los amantes del
		deporte como tú. Aquí encontrarás un espacio donde la dedicación, creatividad y pasión de un
		grupo de estudiantes han dado vida a la mejor plataforma para que puedas conocer, aprender y
		disfrutar de tus deportes favoritos. Nos esforzamos por brindarte toda la información que
		necesitas. Desde noticias de última hora y puntajes en tiempo real hasta análisis profundos y
		datos curiosos e históricos sobre cada deporte. En <strong>Sport Score</strong>, nuestro
		compromiso es acercarte al mundo deportivo con precisión, emoción y calidad. ¡Únete a nuestra
		comunidad y vive tu pasión por el deporte al máximo!
	</p>
</div>
<br />
<hr />
<div class="container">
	<div class="Text2">
		<h1>¿Cómo Empezamos?</h1>
	</div>
	<br />
	<p>
		Sport Score nació como resultado de la asignación de proyectos en la educación media técnica en
		2023. La coincidencia de que todos éramos grandes apasionados del deporte nos llevó, desde el
		primer día, a desarrollar una visión clara y a trabajar con entusiasmo en la creación de un
		sitio web excepcional. Nuestro objetivo era compartir nuestra pasión e incentivar a otros a
		adentrarse en el mundo deportivo. Así surgió la idea de crear una plataforma que reuniera toda
		la información relevante para los aficionados de diversas disciplinas deportivas. Inspirados por
		la carencia de sitios accesibles y completos que ofrecieran no solo puntajes en vivo, sino
		también análisis, datos históricos y curiosidades, decidimos convertir esa idea en realidad y
		construir Sport Score.
	</p>
</div>
<br />
<hr />
<div class="container">
	<div class="Text3">
		<h1>¿Cuál es nuestro propósito?</h1>
	</div>
	<br />
	<p>
		El propósito de Sport Score es ofrecer una plataforma completa donde los usuarios puedan
		sumergirse en el apasionante y diverso mundo del deporte. Nuestro sitio busca ser el recurso
		ideal para aquellos que desean mantenerse informados con datos precisos y detallados sobre
		múltiples disciplinas deportivas. A través de Sport Score, los usuarios pueden acceder a
		resultados y estadísticas en tiempo real, explorar análisis profundos de los juegos, conocer
		datos históricos, y descubrir contenidos educativos que enriquecen su conocimiento y conexión
		con el deporte. Además, el sitio está diseñado para ayudar a las personas a descubrir sus
		preferencias deportivas, fomentar la realización de actividad física y fortalecer la pasión por
		el deporte. Con Sport Score, queremos inspirar e incentivar a las personas a involucrarse en sus
		disciplinas favoritas, ya sea como espectadores entusiastas o como participantes activos.
	</p>
</div>
<br />
<hr />

<div class="about">
	<div>
		<h1>Conoce a nuestro fantástico equipo</h1>
	</div>

	<br />

	<div class="about-images">
		<div class="member">
			<img src={david} alt="David Osorio" />
			<p><strong>David Osorio</strong><br />Líder del equipo, Programador Back-end</p>
		</div>
		<div class="member">
			<img src={aguiar} alt="Jose David" />
			<p>
				<strong>Jose David Aguiar</strong><br />Líder del Front-end, Diseñador y Programador
				Front-end
			</p>
		</div>
		<div class="member">
			<img src={tomas} alt="Tomás Osorio" />
			<p><strong>Tomás Osorio</strong><br />Programador Front-end</p>
		</div>
		<div class="member">
			<img src={holguin} alt="Juan Miguel" />
			<p><strong>Juan Miguel Holguín</strong><br />Programador Front-end</p>
		</div>
		<div class="member">
			<img src={ximena} alt="Ximena Bedoya" />
			<p><strong>Ximena Bedoya</strong><br />Programadora Front-end</p>
		</div>
	</div>
</div>

<br />
<hr />

<div class="container">
	<div class="Text3">
		<h1>¡Unete a Sport Score y se parte de la familia!</h1>
	</div>
	<br />
	<p>
		¡Únete a Sport Score y forma parte de nuestra comunidad apasionada por el deporte! Aquí
		encontrarás un espacio donde puedes descubrir, aprender y disfrutar de tus disciplinas favoritas
		con contenido de calidad, estadísticas en tiempo real y análisis detallados. No importa si eres
		un experto o estás comenzando, en Sport Score tenemos un lugar para ti. ¡Ven y comparte nuestra
		pasión!
	</p>
</div>
<br />
<br />
<div class="red">
	<h1>Redes Sociales</h1>
</div>
<div class="box__footer">
	<!--Contenedor de nuestros contactos-->

	<a href="https://x.com/sportscores2024"
		><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
			><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
				d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
			/></svg
		> Twitter</a
	>
	<a href="https://www.tiktok.com/@sport.score"
		><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
			><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
				d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
			/></svg
		>Tik Tok</a
	>
	<a href="https://www.instagram.com/sport_scores24/"
		><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
			><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
				d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
			/></svg
		> Instagram</a
	>
</div>

<div class="box__copyright">
	<hr />
	<p>Todos los derechos reservados © 2024 <b>Sport Scores</b></p>
</div>

<style>
	.header-container {
		display: flex;
		justify-content: flex-start; /* Alinea los elementos a la izquierda */
	}
</style>
