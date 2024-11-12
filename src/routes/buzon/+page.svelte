<script lang="ts">
	import '$lib/CSS/buzon.css';
	import Swal from 'sweetalert2'; // Importa SweetAlert2

	let nombre = '';
	let email = '';
	let mensaje = '';
	let nombreInput: HTMLInputElement;
	let emailInput: HTMLInputElement;

	// Función para validar el correo electrónico
	function validateEmail(email: string): boolean {
		const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
		return gmailPattern.test(email);
	}

	async function handleSubmit(event: Event) {
		event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
		const form = event.target as HTMLFormElement;
		const emailInput = form.querySelector("input[name='correo']") as HTMLInputElement;

		// Validar el correo electrónico
		if (!validateEmail(emailInput.value)) {
			Swal.fire({
				title: 'Error',
				text: 'El correo debe ser válido y terminar en @gmail.com.',
				icon: 'error',
				confirmButtonText: 'Aceptar'
			});
		} else {
			const response = await fetch('?/sugerencia', {
				method: 'POST',
				body: new FormData(event.target as HTMLFormElement)
			});

			if (response.ok) {
				nombre = '';
				email = '';
				mensaje = '';

				Swal.fire({
					title: 'Éxito',
					text: 'Mensaje enviado exitosamente. Pronto estaremos analizando tu sugerencia o situación.',
					icon: 'success',
					confirmButtonText: 'Aceptar'
				}).then((result) => {
					if (result.isConfirmed) {
						window.location.href = '/empezar'; // Redirecciona a /empezar
					}
				});
			} else {
				const error = await response.json();
				Swal.fire({
					title: 'Error',
					text: error.message || 'Error al enviar el mensaje',
					icon: 'error',
					confirmButtonText: 'Aceptar'
				});
			}
		}
	}
</script>

<svelte:head>
	<link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

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
		<div class="container-form">
			<div class="info-form">
				<h2>Contáctanos</h2>
				<p>
					¡Tu opinión es muy importante para nosotros! Te invitamos a que compartas tus pensamientos
					sobre nuestra página web. Nos encantaría conocer tus sugerencias, ideas e incluso
					cualquier inconformidad que hayas podido experimentar durante tu navegación. Cada
					comentario nos ayuda a mejorar y a ofrecerte una mejor experiencia. No dudes en dejar tu
					comentario; estamos aquí para escucharte y hacer de nuestra plataforma un lugar aún más
					valioso para ti.
				</p>
				<p><i class="material-icons">phone</i> 319 6170872</p>
				<p><i class="material-icons">email</i> sportscores24@gmail.com</p>
				<p><i class="material-icons">location_on</i> Medellín, Colombia</p>
			</div>
			<form
				method="POST"
				action="?/sugerencia"
				on:submit|preventDefault={handleSubmit}
				autocomplete="off"
			>
				<input
					type="text"
					bind:value={nombre}
					placeholder="Tu nombre"
					class="campo"
					required
					minlength="4"
					bind:this={nombreInput}
					name="nombre"
				/>

				<input
					type="email"
					bind:value={email}
					placeholder="Correo electronico"
					class="campo"
					required
					bind:this={emailInput}
					name="correo"
				/>

				<textarea bind:value={mensaje} placeholder="Tu Mensaje..." required name="mensaje"
				></textarea>

				<input type="submit" value="Enviar Mensaje" class="btn-enviar" />
			</form>
		</div>
	</div>
</section>
