<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol1.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import trofeos from '$lib/IMAGES/images_tenis/Trofeostenis.jpeg'
    import roger from '$lib/IMAGES/images_tenis/Rogerfederer.jpeg'
    import serena from '$lib/IMAGES/images_tenis/Serenawilliams.webp'
    import nadal from '$lib/IMAGES/images_tenis/nadal.jpg'

</script>

<header>  
    <div class="menu-container">  
        <nav>  
            <img src={LogoPagina} alt="" class="logo" />  
            <div class="lesson">Historia del Tenis</div> 
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
        <h1>El Tenis a través del tiempo</h1>  
        <hr>  
        <p>  
            El tenis es un deporte que se juega entre dos jugadores (individual) o entre dos equipos de dos jugadores cada uno (dobles). Sus orígenes se remontan a Francia en el siglo XII, evolucionando a lo largo de los siglos hasta convertirse en el deporte que conocemos hoy.  
        </p>  
        <p>  
            Este deporte se caracteriza por su combinación de habilidades físicas y mentales, donde los jugadores deben mostrar rapidez, agilidad y estrategia para ganar puntos. Se juega en diferentes superficies como hierba, tierra batida y pista dura, cada una ofreciendo un estilo de juego único.  
        </p>  
        <p>  
            El tenis ha crecido en popularidad y prestigio a lo largo de los años, siendo uno de los deportes más seguidos en el mundo, con competiciones de renombre como los torneos de Grand Slam.  
        </p>  
    </div>  

    <div class="image">  
        <img src={trofeos} alt="" />  
        <p>Trofeos más icónicos en el mundo del tenis</p>  
    </div>  
</div>

<div class="timeline-container">  
    <h1>Torneos más importantes en el mundo del Tenis</h1>  
    <hr>  
    <div class="timeline">  
        <div class="timeline-event">  
            <div class="timeline-date">1877 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Wimbledon</h2>  
                <p>
                    Wimbledon, celebrado entre junio y julio en Londres, Reino Unido, es el torneo de tenis más antiguo del mundo y quizás el más prestigioso. Se disputa en el All England Club, sobre césped, una superficie que permite un juego rápido y que favorece a jugadores con buenos saques y habilidades en la red.
                </p>  
            </div>  
        </div>  
        
        <div class="timeline-event">  
            <div class="timeline-date">1968 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Abierto de Australia</h2>  
                <p>
                    El Abierto de Australia se celebra cada año en enero, siendo el primer torneo de Grand Slam del calendario. Tiene lugar en Melbourne, Australia, específicamente en el Melbourne Park, y se juega en superficie dura (plexicushion), que permite un estilo de juego relativamente rápido. 
                </p>  
            </div>  
        </div>  
        
        <div class="timeline-event">  
            <div class="timeline-date">1891 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Abierto de Estados Unidos</h2>  
                <p>
                    El Abierto de Estados Unidos se lleva a cabo en agosto y septiembre en el USTA Billie Jean King National Tennis Center de Nueva York. Este torneo se juega en superficie dura y es el más vibrante y dinámico de los Grand Slams, con una atmósfera electrizante que refleja el espíritu de la ciudad. 
                </p>  
            </div>  
        </div>  
        <div class="timeline-event">  
            <div class="timeline-date">1891 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Roland Garros</h2>  
                <p>
                    Roland Garros, también conocido como el Abierto de Francia, se juega en París entre mayo y junio. Es el único Grand Slam que se disputa sobre tierra batida, una superficie que hace que el juego sea más lento y exige una gran resistencia y habilidades de fondo. Esto lo convierte en uno de los torneos más desafiantes física y mentalmente.
                </p>  
            </div>  
        </div>  
        <div class="timeline-event">  
            <div class="timeline-date">1970 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>ATP finales</h2>  
                <p>
                    Las Finales de la ATP, celebradas a finales de noviembre, son el evento culminante de la temporada masculina y se llevan a cabo en diferentes lugares, recientemente en Turín, Italia. Este torneo reúne a los ocho mejores jugadores y parejas de dobles de la temporada, y tiene un formato especial de round-robin (todos contra todos), lo cual garantiza que cada jugador dispute al menos tres partidos.
                </p>  
            </div>  
        </div>  
        <div class="timeline-event">  
            <div class="timeline-date">1972 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>WTA finales</h2>  
                <p>
                    Las Finales de la WTA se celebran a fines de temporada, generalmente en octubre o noviembre, con sedes variables, siendo Shenzhen, China, una de las más recientes. Al igual que en las ATP Finals, el torneo tiene un formato de round-robin con una fase de grupos, seguida de semifinales y una final, lo que permite un enfrentamiento estratégico entre las ocho mejores jugadoras del ranking. 
                </p>  
            </div>  
        </div>  
    </div>  
    <br><br>  
</div>

<div class="art-container">
    <h2>
        Los mejores jugadores en la historia del Tenis
    </h2>
    <br>
    <div class="conlist">
        <div class="jugadores">
            <div class="card">
                <div class="player">
                    <img src={roger} alt="Roger Federer">
                </div>
                <div class="intro">
                    <h1>¿Quién es Roger Federer?</h1>
                    <p>
                        Roger Federer es considerado uno de los mejores tenistas de todos los tiempos. Con 20 títulos de Grand Slam.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="player">
                    <img src={serena} alt="Serena Williams">
                </div>
                <div class="intro">
                    <h1>¿Quién es Serena Williams?</h1>
                    <p>
                        Serena Williams es una de las jugadoras de tenis más exitosas de la historia, con 23 títulos de Grand Slam. 
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="player">
                    <img src={nadal} alt="Rafael Nadal">
                </div>
                <div class="intro">
                    <h1>¿Quién es Rafael Nadal?</h1>
                    <p>
                        Rafael Nadal es conocido como el "Rey de la Tierra Batida" y ha ganado 22 títulos de Grand Slam. 
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<a href="/tenis/tenis2" data-sveltekit-reload="" data-sveltekit-preload-data="tap">  
    <button class="next svelte-zonnq2">  
        <span class="arrow svelte-zonnq2"></span>  
    </button>  
</a>