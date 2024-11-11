import type { Actions } from './$types';
import { db } from '$lib/server/database/connect';
import { buzon } from '$lib/server/database/data';
import type { RequestEvent } from '@sveltejs/kit';

export const actions: Actions = {  
    sugerencia: async ({ request }: RequestEvent) => {  
        const formData = await request.formData();  
        const data = Object.fromEntries(formData);  

        // Validar que los campos obligatorios están presentes  
        if (!data.nombre || !data.correo || !data.mensaje) {  
            return { status: 400, error: 'Todos los campos son obligatorios' };  
        }  

        console.log("Datos para insertar:", data); // Agregado para verificar  

        // Insertar en la base de datos  
        try {  
            await db.insert(buzon).values({  
                nombre: data.nombre as string,  
                correo: data.correo as string,  
                mensaje: data.mensaje as string  
            } as any);  
            return { success: true };  
        } catch (error) {  
            console.error("Error detalle:", error); // Agregado para más detalles  
            return { status: 500, error: 'Error al guardar en la base de datos' };  
        }  
    }  
};