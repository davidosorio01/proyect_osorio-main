import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions: Actions = {
    cerrar: async ({ cookies }) => {
        cookies.delete('session', { path: '/' }); // Asegúrate de que el nombre y el path coincidan con la cookie del login
        throw redirect(303, '/');
    },
};
