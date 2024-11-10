<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol1.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import JackNicklaus from '$lib/IMAGES/images_golf/JackNicklaus.jpg';
    import Tigerwoods from '$lib/IMAGES/images_golf/Tigerwoods.webp';
    import ArnorlPalmer from '$lib/IMAGES/images_golf/ArnorlPalmer.jpg';
    import trofeos from '$lib/IMAGES/images_golf/Trofeosgolf.jpeg';
</script>

<header>
	<div class="menu-container">
		<nav>
			<img src={LogoPagina} alt="" class="logo" />
			<div class="lesson">Historia del Golf</div>
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
		<h1>El Golf a través del tiempo</h1>
		<hr />
		<p>
			El golf es un deporte que se originó en Escocia en el siglo XV y ha crecido hasta convertirse
			en uno de los deportes más populares del mundo. La precisión, la estrategia y la calma son
			elementos clave en el golf, que ha evolucionado y se ha profesionalizado con torneos de gran
			prestigio.
		</p>
		<p>
			Actualmente, el golf cuenta con <strong>cuatro torneos mayores</strong>, también conocidos
			como los "Majors", que representan el pináculo del éxito en este deporte: el Masters, el U.S.
			Open, el Open Championship (British Open) y el PGA Championship. Estos eventos reúnen a los
			mejores golfistas del mundo, quienes compiten en campos icónicos y buscan dejar su huella en
			la historia.
		</p>
		<p>
			Además, el golf es un deporte que promueve la concentración y la disciplina, permitiendo a los
			jugadores disfrutar de la naturaleza mientras buscan mejorar su rendimiento. A través de
			generaciones, los mejores golfistas han inspirado a nuevos talentos a participar en este
			deporte desafiante y refinado.
		</p>
	</div>
	<div class="image">
		<img src={trofeos} alt="" />
		<p>Trofeos más icónicos en el mundo del golf</p>
	</div>
</div>
<div class="timeline-container">
	<h1>Torneos más importantes en el mundo del Golf</h1>
	<hr />
	<div class="timeline">
		<div class="timeline-event">
			<div class="timeline-date">1934 - Actualidad</div>
			<div class="timeline-content">
				<h2>Masters Tournament</h2>
				<p>
					El Masters Tournament se celebra cada abril en el Augusta National Golf Club, en Georgia,
					Estados Unidos. Es famoso por la chaqueta verde, que se entrega al ganador, y por su bello
					escenario lleno de azaleas y puentes icónicos. El Masters es el único torneo mayor que se
					juega en el mismo lugar cada año.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1895 - Actualidad</div>
			<div class="timeline-content">
				<h2>U.S. Open</h2>
				<p>
					El U.S. Open es organizado por la Asociación de Golf de Estados Unidos (USGA) y se celebra
					en diferentes campos en todo el país. Este torneo es conocido por sus condiciones de juego
					extremadamente desafiantes, con roughs densos y greens veloces, lo que pone a prueba la
					precisión y resistencia de los golfistas.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1860 - Actualidad</div>
			<div class="timeline-content">
				<h2>The Open Championship</h2>
				<p>
					Conocido comúnmente como el British Open, es el torneo de golf más antiguo del mundo y se
					celebra en campos tradicionales de Escocia e Inglaterra. Los golfistas compiten por la
					famosa Claret Jug en campos que exponen a los jugadores a condiciones climáticas
					impredecibles, haciendo de este torneo un verdadero test de habilidad y adaptabilidad.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1916 - Actualidad</div>
			<div class="timeline-content">
				<h2>PGA Championship</h2>
				<p>
					El PGA Championship, organizado por la Asociación de Golfistas Profesionales de América
					(PGA), reúne a los mejores golfistas en uno de los eventos más prestigiosos del golf
					profesional. Este torneo ofrece un gran reto competitivo y es el cierre de los cuatro
					Majors cada temporada.
				</p>
			</div>
		</div>
	</div>
	<br /><br />
</div>
<div class="art-container">
	<h2>Los mejores golfistas en la historia del golf</h2>
	<br />
	<div class="conlist">
		<div class="jugadores">
			<div class="card">
				<div class="player">
					<img src={JackNicklaus} alt="Jack Nicklaus" />
				</div>
				<div class="intro">
					<h1>¿Quién fue Jack Nicklaus?</h1>
					<p>
						Jack Nicklaus, conocido como el "Oso Dorado", es uno de los golfistas más exitosos en la
						historia, con un récord de 18 títulos de Majors.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="player">
					<img src={Tigerwoods} alt="Tiger Woods" />
				</div>
				<div class="intro">
					<h1>¿Quién es Tiger Woods?</h1>
					<p>
						Tiger Woods es un ícono del golf moderno, conocido por su gran habilidad y su impacto en
						la popularidad del deporte. Con múltiples títulos de Majors.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="player">
					<img src={ArnorlPalmer} alt="Arnold Palmer" />
				</div>
				<div class="intro">
					<h1>¿Quién fue Arnold Palmer?</h1>
					<p>
						Arnold Palmer, conocido cariñosamente como "The King", fue una figura clave en
						popularizar el golf en Estados Unidos y en todo el mundo.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
<a href="/golf/golf2" data-sveltekit-reload="" data-sveltekit-preload-data="tap">
	<button class="next svelte-zonnq2">
		<span class="arrow svelte-zonnq2"></span>
	</button>
</a>
