<script>
    import BotonVolver from '$lib/componentes/BotonVolver.svelte';
import '$lib/CSS/futbol_card/futbol3.css';
	import LogoPagina from "$lib/IMAGES/LogoPag.jpg";
    import juego1 from '$lib/IMAGES/images_beisbol/Juego1beisbol.jpeg'
    import juego2 from '$lib/IMAGES/images_beisbol/Juego2beisbol.jpeg'
    import juego3 from '$lib/IMAGES/images_beisbol/Juego3beisbol.jpeg'
</script>

<div>  
    <div id="loading-screen">  
        <div id="loading-spinner"></div>  
    </div>  
    
    <header>  
        <div class="menu-container">  
            <nav>  
                <img src={LogoPagina} alt="" class="logo">   
                <div class="lesson">Historia del béisbol</div>   
                <div class="nav-item" id="nav-item-1">  
                    <div class="progress-bar" id="progress-bar">  
                        <div class="rombo" id="rombo-1"><span class="numero"></span></div>  
                        <div class="square" id="square-1"><span class="numero-2"></span></div>  
                        <div class="rombo" id="rombo-2"><span class="numero"></span></div>  
                        <div class="circle" id="circle-2"><span class="numero">4</span></div>   
                    </div>  
                </div>  
                <BotonVolver/>
            </nav>  
        </div>  
        <div class="level-info" id="level-info"></div>  
    </header>  

    <div class="container">  
        <div class="header">  
            <h1>¡Pon a prueba tu conocimiento y diviertete¡</h1>  
        </div>  
        <div class="video-container">  
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_mTTdPtYtqE?si=hSQvOcp4Q2YL8xiC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                
        </div>  
    </div>   
    <br>
    <hr>

    <div class="sport-container">
        <h2>
            Aquí tienes algunos juegos en la red, te invitamos a que midas tu conocimiento.
        </h2>
        <br>

        <div class="card">
            <div class="face front">
                <img src={juego1} alt="">
                <h3>Educaplay</h3>
            </div>
            <div class="face back">
                <h3>Preguntas de cultura</h3>
                <p>¿Crees saber mucho sobre este deporte? Descubre tu verdadero conocimiento sobre el béisbol en este juego sobre preguntas generales del deporte</p>
                <div class="link">
                    <a href="https://es.educaplay.com/recursos-educativos/612890-que_sabes_del_beisbol.html">Jugar</a>
                </div>
            </div>
        </div>
    
        <div class="card">
            <div class="face front">
                <img src={juego2} alt="">
                <h3>Celebriti</h3>
            </div>
            <div class="face back">
                <h3>Jugadores</h3>
                <p>Reune todo lo que sabes y intenta adivinar cada jugador de béisbol de la MLB.</p>
                <div class="link">
                    <a href="https://www.cerebriti.com/juegos-de-deportes/adivina-el-jugador-de-la-mlb">Jugar</a>
                </div>
            </div>
        </div>
    
        <div class="card">
            <div class="face front">
                <img src={juego3} alt="">
                <h3>Pokki</h3>
            </div>
            <div class="face back">
                <h3>Juego Interactivo</h3>
                <p>Si quieres despejar la mente un rato, pero disfrutando de tu deporte favorito este juego es para ti. Vive una experiencia interactiva de un partido real de béisbol</p>
                <div class="link">
                    <a href="https://poki.com/es/g/baseball-kid-pitcher-cup">Jugar</a>
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