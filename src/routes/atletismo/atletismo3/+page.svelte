<script>
    import BotonVolver from '$lib/componentes/BotonVolver.svelte';
    import '$lib/CSS/futbol_card/futbol3.css'
    import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import Juego1 from '$lib/IMAGES/images_atletismo/Juego1.jpeg';
    import Juego2 from '$lib/IMAGES/images_atletismo/Juego2atletismo.jpeg';
    import Juego3 from '$lib/IMAGES/images_atletismo/Juego3.jpeg';
</script>

<div>  
    <div id="loading-screen">  
        <div id="loading-spinner"></div>  
    </div>  
    
    <header>  
        <div class="menu-container">  
            <nav>  
                <img src={LogoPagina} alt="" class="logo">   
                <div class="lesson">Historia del Atletismo</div>   
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kZxFtqiNkY0?si=rVY2jeeHvicH74Bn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                <img src={Juego1} alt="">
                <h3>Educaplay</h3>
            </div>
            <div class="face back">
                <h3>Historia</h3>
                <p>¿Crees saber mucho sobre este deporte? Descubre tu verdadero conocimiento sobre el atletismo en este juego sobre preguntas historicas del deporte</p>
                <div class="link">
                    <a href="https://www.educaplay.com/printablegame/17579902-preguntas_sobre_la_historia_del_atletismo.html">Jugar</a>
                </div>
            </div>
        </div>
    
        <div class="card">
            <div class="face front">
                <img src={Juego2} alt="">
                <h3>Celebriti</h3>
            </div>
            <div class="face back">
                <h3>Acciones</h3>
                <p>Reune todo lo que sabes y intenta arrastrar cada palabra a su imagen correspondiente.</p>
                <div class="link">
                    <a href="https://www.cerebriti.com/juegos-de-deportes/atletismo">Jugar</a>
                </div>
            </div>
        </div>
    
        <div class="card">
            <div class="face front">
                <img src={Juego3} alt="">
                <h3>Minijuegos</h3>
            </div>
            <div class="face back">
                <h3>Juego Interactivo</h3>
                <p>Si quieres despejar la mente un rato, pero disfrutando de tu deporte favorito este juego es para ti. Escoge tu país y compite contra otros en una carrera de 100 metros</p>
                <div class="link">
                    <a href="https://www.minijuegos.com/juego/100-metres-race">Jugar</a>
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