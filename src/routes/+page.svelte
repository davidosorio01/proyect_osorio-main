<script lang="ts">
    export let form: { invalid?: boolean; credentials?: boolean } = {};
    let btnSignUp;
    let signIn = false;
    import '$lib/CSS/inicio_sesion.css';
    import Swal from 'sweetalert2';
    

    // Función para mostrar el modal
    function showWelcomeModal() {
        if (!localStorage.getItem('modalShown')) {
            Swal.fire({
                title: "¡Importante!",
                text: 'Debes registrarte (o iniciar sesión si ya tienes una cuenta) para acceder a Sport Score.',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                localStorage.setItem('modalShown', 'true');
            });
        }
    }
    showWelcomeModal();

    // Validación de correo
    function validateEmail(email: string): boolean {
        const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return gmailPattern.test(email);
    }

    // Función de manejo del submit
    function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const emailInput = form.querySelector("input[name='email']") as HTMLInputElement;

        if (!validateEmail(emailInput.value)) {
            Swal.fire({
                title: "Error",
                text: "El correo debe ser válido y terminar en @gmail.com.",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
        } else {
            form.submit(); // Enviar el formulario si es válido
        }
    }
</script>

<svelte:head>
    <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</svelte:head>

<div
    class="container"
    class:toggle={signIn}
    data-sveltekit-preload-data="tap"
    data-sveltekit-reload
>
    <div class="container-form">
        <form class="sign-in" action="?/login" method="POST" on:submit|preventDefault={handleSubmit}>
            <h2>Iniciar Sesión</h2>
            <div class="social-networks">
            </div>
            {#if form?.invalid}
                <p class="error">Se requiere nombre de usuario y contraseña</p>
            {/if}

            {#if form?.credentials}
                <p class="error">Usuario o contraseña invalido</p>
            {/if}
            <span>Ingresa tus datos para comenzar</span>
            <div class="container-input">
                <ion-icon name="mail-outline"></ion-icon>
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    required
                    pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
                    title="El correo debe contener @gmail.com"
                />
            </div>
            <div class="container-input">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input name="password" type="password" placeholder="Password" required />
            </div>
            <a href="/olvidar_contraseña">¿Olvidaste tu contraseña?</a>

            <button class="button">INICIAR SESIÓN</button>
        </form>
    </div>

    <div class="container-form" class:toggle={signIn} data-sveltekit-preload-data="tap">
        <form class="sign-up" action="?/register" method="POST" on:submit|preventDefault={handleSubmit}>
            <h2>¿No tienes una cuenta?¡Registrate!</h2>
            <div class="social-networks">
            </div>
            <span>Ingresa los siguientes datos para registrarte</span>
            <div class="container-input">
                <ion-icon name="person-outline"></ion-icon>
                <input name="nombre" type="text" placeholder="Nombre" required />
            </div>
            <div class="container-input">
                <ion-icon name="person-outline"></ion-icon>
                <input name="apellido" type="text" placeholder="Apellidos" required />
            </div>
            <div class="container-input">
                <ion-icon name="calendar"></ion-icon>
                <input name="nacimiento" type="date" placeholder="Fecha de nacimiento" required />
            </div>
            <div class="container-input">
                <ion-icon name="mail-outline"></ion-icon>
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    required
                    pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
                    title="El correo debe contener @gmail.com"
                />
            </div>
            <div class="container-input">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input name="password" type="password" placeholder="Password" required />
            </div>
            <button class="button">REGISTRARSE</button>
        </form>
    </div>

    <div class="container-welcome">
        <div class="welcome-sign-up welcome">
            <h3>¡Bienvenido!</h3>
            <p>Ingrese sus datos personales para continuar y poder disfrutar de nuestros servicios</p>
            <button
                on:click={() => (signIn = !signIn)}
                bind:this={btnSignUp}
                class="button"
                id="btn-sign-up">Registrarse</button
            >
        </div>
        <div class="welcome-sign-in welcome">
            <h3>¡Hola!</h3>
            <p>Regístrate con tus datos personales para utilizar todos los beneficios de nuestro sitio</p>
            <button
                on:click={() => (signIn = !signIn)}
                bind:this={btnSignUp}
                class="button"
                id="btn-sign-in">Iniciar Sesion</button
            >
        </div>
    </div>
</div>
