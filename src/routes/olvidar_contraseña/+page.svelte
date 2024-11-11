<script>
	import '$lib/CSS/olvidar_contraseña.css';
	import Swal from 'sweetalert2';

	async function handleSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		const response = await fetch('/olvidar_contraseña?/recuperar', {
			// Asegúrate de que el nombre coincida
			method: 'POST',
			body: formData
		});

		const result = await response.json();

		if (result.success) {
			Swal.fire({
				title: 'Error',
				text: result.message,
				icon: 'error',
				confirmButtonText: 'Aceptar'
			})
		} else {
			Swal.fire({
				title: '¡Contraseña actualizada!',
				text: 'Ya puedes ir a iniciar sesión de nuevo.',
				icon: 'success',
				confirmButtonText: 'Aceptar'
			}).then(() => {
				window.location.href = '/';
			});
		}
	}
</script>

<section>
	<div class="color"></div>
	<div class="color"></div>
	<div class="color"></div>
	<div class="box">
		<div class="square" style="--i:0;"></div>
		<div class="square" style="--i:1;"></div>
		<div class="square" style="--i:2;"></div>
		<div class="square" style="--i:3;"></div>
		<div class="square" style="--i:4;"></div>
		<div class="container">
			<div class="form">
				<h2>Recuperar contraseña</h2>
				<form on:submit={handleSubmit} method="POST">
					<div class="inputBox">
						<input name="email" type="text" placeholder="Correo electrónico" required />
					</div>
					<div class="inputBox">
						<input name="new_password" type="text" placeholder="Nueva Contraseña" required />
					</div>
					<div class="inputBox">
						<input type="submit" value="Enviar" />
					</div>
					<p class="forget">
						¿Ya tienes una cuenta? <a
							href="/"
							data-sveltekit-preload-data="tap"
							data-sveltekit-reload>Iniciar sesión</a
						>
					</p>
				</form>
			</div>
		</div>
	</div>
</section>