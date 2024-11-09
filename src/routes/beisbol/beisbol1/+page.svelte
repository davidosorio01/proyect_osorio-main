<script>
    import LogoPagina from "$lib/IMAGES/LogoPag.jpg";
    import '$lib/CSS/futbol_card/futbol1.css'
	import BotonVolver from "$lib/componentes/BotonVolver.svelte";
    import trofeosBeisbol from '$lib/IMAGES/images_beisbol/Trofeosbeisbol.jpeg'
    import Babe from '$lib/IMAGES/images_beisbol/Babe-Ruth.webp'
    import JackieRobinson from '$lib/IMAGES/images_beisbol/JackieRobinson.webp'
    import HankAaron from '$lib/IMAGES/images_beisbol/HankAaron.webp'
</script>

<header>  
    <div class="menu-container">  
        <nav>  
            <img src={LogoPagina} alt="" class="logo" />  
            <div class="lesson">Historia del béisbol</div>  
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
        <h1>El Béisbol a través del tiempo</h1>  
        <hr>  
        <p>  
            El béisbol se popularizó en el siglo XIX en Estados Unidos y ha crecido hasta convertirse en uno de los deportes más practicados en el continente americano y Asia. Las Grandes Ligas (MLB) se fundaron en 1869 y han evolucionado, atrayendo a jugadores de todo el mundo.
        </p>  
        <p>  
            Hoy en día, el béisbol es <strong>uno de los deportes más seguidos</strong> globalmente. Con eventos como la Serie Mundial, cada temporada culmina en una competencia que reúne a los equipos más destacados. La influencia del béisbol va más allá del campo de juego, impactando la cultura, el entretenimiento y la economía.
        </p>  
        <p>  
            Además, el béisbol ha sido una herramienta para la integración social y el cambio cultural. Desde el movimiento de derechos civiles hasta la inclusión de jugadores internacionales, el deporte sigue siendo una plataforma de unidad y diversidad.
        </p>  
    </div>  
    <div class="image">  
        <img src={trofeosBeisbol} alt="" />  
        <p>Trofeos más icónicos en el mundo del béisbol</p>  
    </div>  
</div>
<div class="timeline-container">  
    <h1>Torneos más importantes en el mundo</h1>  
    <hr>  
    <div class="timeline">  
        <div class="timeline-event">  
            <div class="timeline-date">1869 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Grandes Ligas de Béisbol (MLB)</h2>  
                <p>Las Grandes Ligas de Béisbol son la liga de béisbol profesional más importante de Estados Unidos y del mundo, destacando por su competitividad y popularidad, con equipos legendarios y grandes estrellas internacionales.</p>  
            </div>  
        </div>  
        
        <div class="timeline-event">  
            <div class="timeline-date">1947 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Serie Mundial</h2>  
                <p>La Serie Mundial es el evento final de la MLB, donde los campeones de la Liga Americana y la Liga Nacional se enfrentan en una serie de partidos para decidir al equipo campeón de la temporada.</p>  
            </div>  
        </div>  
        
        <div class="timeline-event">  
            <div class="timeline-date">1954 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Serie del Caribe</h2>  
                <p>La Serie del Caribe es el torneo de clubes más importante en América Latina, reuniendo a los campeones de las ligas de países del Caribe y América Central en una competencia anual de gran renombre.</p>  
            </div>  
        </div>  
        
        <div class="timeline-event">  
            <div class="timeline-date">1987 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Clásico Mundial de Béisbol</h2>  
                <p>El Clásico Mundial de Béisbol es una competencia internacional que reúne a selecciones de todo el mundo, celebrando la expansión y popularidad global del béisbol.</p>  
            </div>  
        </div>  
    </div>  
    <br><br>  
</div>
<div class="art-container">
    <h2>
        Los mejores jugadores en la historia del béisbol
    </h2>
    <br>
    <div class="conlist">
        <div class="jugadores">
            <div class="card">
                <div class="player">
                    <img src={Babe} alt="Babe Ruth">
                </div>
                <div class="intro">
                    <h1>¿Quién fue Babe Ruth?</h1>
                    <p>
                        Babe Ruth es uno de los jugadores más legendarios de la historia del béisbol, conocido por su récord de jonrones y su influencia en el juego.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="player">
                    <img src={JackieRobinson} alt="Jackie Robinson">
                </div>
                <div class="intro">
                    <h1>¿Quién fue Jackie Robinson?</h1>
                    <p>
                        Jackie Robinson fue el primer jugador afroamericano en jugar en las Grandes Ligas, abriendo el camino para la integración racial en el deporte.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="player">
                    <img src={HankAaron} alt="Hank Aaron">
                </div>
                <div class="intro">
                    <h1>¿Quién fue Hank Aaron?</h1>
                    <p>
                        Hank Aaron es recordado por su increíble número de jonrones, superando el récord de Babe Ruth y estableciendo una marca imborrable en la historia.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<a href="/beisbol/beisbol2" data-sveltekit-reload="" data-sveltekit-preload-data="tap">  
    <button class="next svelte-zonnq2">  
        <span class="arrow svelte-zonnq2"></span>  
    </button>  
</a>