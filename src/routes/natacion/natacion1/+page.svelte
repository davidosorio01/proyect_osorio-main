<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol1.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import trofeos from '$lib/IMAGES/images_natacion/Trofeosnatacion.jpeg'
    import MichaelPhelps from '$lib/IMAGES/images_natacion/MichaelPhelps.jpg'
    import Markspitz from '$lib/IMAGES/images_natacion/Markspitz.jpg'
    import Katieledecky from '$lib/IMAGES/images_natacion/Katieledecky.avif'
</script>

<header>  
    <div class="menu-container">  
        <nav>  
            <img src={LogoPagina} alt="" class="logo" />  
            <div class="lesson">Historia de la Natación</div>  
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
        <h1>La Natación a través del tiempo</h1>  
        <hr>  
        <p>  
            La natación es una de las disciplinas más antiguas de la humanidad, practicada desde tiempos prehistóricos. Este deporte ha evolucionado de ser una habilidad de supervivencia a una actividad competitiva y recreativa a nivel mundial. La natación no solo mejora la condición física, sino que también es un arte en sí misma, promoviendo la salud y el bienestar.
        </p>  
        <p>  
            Hoy en día, la natación se practica en diversas formas, incluyendo <strong>natación en piscina, natación en aguas abiertas y sincronizada</strong>, cada una con su propia técnica y estilo. La participación en competiciones ha llevado a un aumento en el interés por este deporte, destacando eventos como los Juegos Olímpicos y campeonatos mundiales.
        </p>  
        <p>  
            La natación promueve valores como la disciplina, el trabajo en equipo y el respeto. Además, es un deporte accesible que puede ser disfrutado por personas de todas las edades y habilidades.
        </p>  
    </div>  
    <div class="image">  
        <img src={trofeos} alt="" />  
        <p>Trofeos más icónicos en el mundo de la natación</p>  
    </div>  
</div>
<div class="timeline-container">  
    <h1>Torneos más importantes en el mundo de la Natación</h1>  
    <hr>  
    <div class="timeline">  
        <div class="timeline-event">  
            <div class="timeline-date">1896 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Juegos Olímpicos</h2>  
                <p>La natación ha sido parte de los Juegos Olímpicos modernos desde 1896. Este evento reúne a los mejores nadadores del mundo, compitiendo en diversas disciplinas y distancias, y es el pináculo del éxito en la natación competitiva.</p>  
            </div>  
        </div>  
        
        <div class="timeline-event">  
            <div class="timeline-date">1973 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Campeonatos Mundiales de Natación</h2>  
                <p>Organizados por la FINA, los Campeonatos Mundiales se celebran cada dos años, permitiendo a los nadadores competir en piscina y aguas abiertas, destacando en un evento de gran prestigio a nivel internacional.</p>  
            </div>  
        </div>  
        
        <div class="timeline-event">  
            <div class="timeline-date">2000 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Copas del Mundo de Natación</h2>  
                <p>La Copa del Mundo de Natación consiste en una serie de competiciones que se celebran en distintas ciudades del mundo, donde los nadadores acumulan puntos a lo largo del circuito, demostrando su excelencia en el agua.</p>  
            </div>  
        </div>  
        <div class="timeline-event">  
            <div class="timeline-date">2000 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Juegos Panamericanos</h2>  
                <p>
                    Celebrados cada cuatro años, los Juegos Panamericanos reúnen a los mejores nadadores de América y sirven como clasificatorio para los Juegos Olímpicos. Este evento es de gran prestigio en el continente americano y tiene una importante participación de nadadores de países de toda América Latina, Canadá y Estados Unidos.
                </p>  
            </div>  
        </div>  
        <div class="timeline-event">  
            <div class="timeline-date">2000 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Campeonato Europeo de Natación</h2>  
                <p>
                     Este torneo es la principal competición de natación en Europa y se celebra cada dos años. Reúne a los mejores nadadores europeos y abarca diferentes disciplinas acuáticas, como la natación, el waterpolo y la natación artística.
                </p>  
            </div>  
        </div>  
        <div class="timeline-event">  
            <div class="timeline-date">2000 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Juegos de la Commonwealth</h2>  
                <p>
                    Celebrados cada cuatro años, los Juegos de la Commonwealth son una competición internacional entre países de la Commonwealth. La natación es uno de los eventos principales y es una oportunidad para los nadadores de estos países de competir en un escenario de alto nivel similar al de los Juegos Olímpicos.
                </p>  
            </div>  
        </div>  
    </div>  
    <br><br>  
</div>
<div class="art-container">
    <h2>
        Los mejores nadadores en la historia de la natación
    </h2>
    <br>
    <div class="conlist">
        <div class="jugadores">
            <div class="card">
                <div class="player">
                    <img src={MichaelPhelps} alt="Michael Phelps">
                </div>
                <div class="intro">
                    <h1>¿Quién es Michael Phelps?</h1>
                    <p>
                        Michael Phelps es el nadador más condecorado de todos los tiempos, con un total de 23 medallas de oro olímpicas. 
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="player">
                    <img src={Markspitz} alt="Mark Spitz">
                </div>
                <div class="intro">
                    <h1>¿Quién fue Mark Spitz?</h1>
                    <p>
                        Mark Spitz, conocido por su impresionante actuación en los Juegos Olímpicos de 1972, ganó siete medallas de oro en una sola edicións.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="player">
                    <img src={Katieledecky} alt="Katie Ledecky">
                </div>
                <div class="intro">
                    <h1>¿Quién es Katie Ledecky?</h1>
                    <p>
                        Katie Ledecky es una de las nadadoras más dominantes en la distancia de fondo, con múltiples récords mundiales y medallas olímpicas. 
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<a href="/natacion/natacion2" data-sveltekit-reload="" data-sveltekit-preload-data="tap">  
    <button class="next svelte-zonnq2">  
        <span class="arrow svelte-zonnq2"></span>  
    </button>  
</a>

