<script>
	import BotonVolver from "$lib/componentes/BotonVolver.svelte";
    import '$lib/CSS/futbol_card/futbol1.css'
    import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import Trofeo from '$lib/IMAGES/images_atletismo/TrofeoAtletismo.webp';
    import UsainBolt from '$lib/IMAGES/images_atletismo/UsainBolt.jpg';
    import MariaMutola from '$lib/IMAGES/images_atletismo/MariaMutola.jpeg';
    import jesse from '$lib/IMAGES/images_atletismo/JesseOwens.jpeg'
</script>

<header>  
    <div class="menu-container">  
        <nav>  
            <img src={LogoPagina} alt="" class="logo" />  
            <div class="lesson">Historia del Atletismo</div>  
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
        <h1>El Atletismo a través del tiempo</h1>  
        <hr>  
        <p>  
            El atletismo es uno de los deportes más antiguos, con raíces que se remontan a la Antigua Grecia. Se compone de varias disciplinas que incluyen carreras, saltos y lanzamientos. A lo largo de la historia, ha evolucionado y se ha expandido, convirtiéndose en un pilar de los Juegos Olímpicos modernos.  
        </p>  
        <p>  
            Hoy en día, el atletismo es <strong>uno de los deportes más practicados</strong> y seguidos en el mundo. Con eventos emblemáticos como los 100 metros, el maratón y los saltos de longitud, atrae a millones de espectadores en competiciones locales, nacionales e internacionales.  
        </p>  
        <p>  
            Además, el atletismo promueve la integración social y la inclusión, ya que es un deporte accesible que puede practicarse en diversas condiciones y por personas de todas las edades y habilidades.  
        </p>  
    </div>  
    <div class="image">  
        <img src={Trofeo} alt="" />  
        <p>Trofeos más icónicos en el mundo del atletismo</p>  
    </div>  
</div>
<div class="timeline-container">  
    <h1>Torneos más importantes en el mundo</h1>  
    <hr>  
    <div class="timeline">  
        <div class="timeline-event">  
            <div class="timeline-date">1896 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Juegos Olímpicos</h2>  
                <p>Los Juegos Olímpicos son el evento más prestigioso del atletismo, donde los mejores atletas del mundo compiten en diversas disciplinas, desde carreras hasta saltos y lanzamientos.</p>  
            </div>  
        </div>  
        
        <div class="timeline-event">  
            <div class="timeline-date">1983 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Copa del Mundo de Atletismo</h2>  
                <p>La Copa del Mundo de Atletismo reúne a los mejores atletas de todo el mundo para competir en un formato de naciones, destacando los logros en diversas disciplinas atléticas.</p>  
            </div>  
        </div>  
        
        <div class="timeline-event">  
            <div class="timeline-date">2003 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Diamond League</h2>  
                <p>La Diamond League es un circuito internacional de reuniones de atletismo que presenta a los mejores atletas en eventos clave durante la temporada, culminando en la final del Diamond League.</p>  
            </div>  
        </div>  
        
        <div class="timeline-event">  
            <div class="timeline-date">1991 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Campeonatos Mundiales de Atletismo</h2>  
                <p>Los Campeonatos Mundiales de Atletismo se celebran cada dos años, donde atletas de todo el mundo compiten por el título mundial en diversas disciplinas atléticas.</p>  
            </div>  
        </div>  
    </div>  
    <br><br>  
</div>
<div class="art-container">
    <h2>
        Los mejores atletas en la historia del atletismo
    </h2>
    <br>
    <div class="conlist">
        <div class="jugadores">
            <div class="card">
                <div class="player">
                    <img src={UsainBolt} alt="Usain Bolt">
                </div>
                <div class="intro">
                    <h1>¿Quién fue Usain Bolt?</h1>
                    <p>
                        Usain Bolt es considerado el hombre más rápido del mundo, conocido por sus récords en los 100 y 200 metros, y es una leyenda con múltiples medallas.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="player">
                    <img src={jesse} alt="Jesse Owens">
                </div>
                <div class="intro">
                    <h1>¿Quién fue Jesse Owens?</h1>
                    <p>
                        Jesse Owens es famoso por ganar cuatro medallas de oro en los Juegos Olímpicos de Berlín 1936, desafiando las teorías de la supremacía racial.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="player">
                    <img src={MariaMutola} alt="Maria Mutola">
                </div>
                <div class="intro">
                    <h1>¿Quién fue Maria Mutola?</h1>
                    <p>
                        Maria Mutola es una de las mejores atletas de medio fondo, ganadora de múltiples títulos mundiales y olímpicos en los 800 metros.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<a href="/atletismo/atletismo2" data-sveltekit-reload="" data-sveltekit-preload-data="tap">  
    <button class="next svelte-zonnq2">  
        <span class="arrow svelte-zonnq2"></span>  
    </button>  
</a>