// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// Validamos que lo que viene de Keystatic sea correcto
const noticias = defineCollection({
    type: 'content',
    schema: z.object({
        titulo: z.string(),
        fecha: z.coerce.date(),
        extracto: z.string(),
        portada: z.string().optional(),
    }),
});

const eventos = defineCollection({
    type: 'content', 
    schema: z.object({
        nombre: z.string(),
        fechaHora: z.coerce.date(), // Importante: guarda fecha Y hora
        lugar: z.string(),
        tipo: z.enum(['Conferencia', 'Taller', 'Ceremonia', 'Webinar']),
        afiche: z.string().optional(),
    }),
});

const docentes = defineCollection({
    type: 'data', // Solo datos (JSON/YAML)
    schema: z.object({
        nombre: z.string(),
        grado: z.enum(['Ing.', 'Mg.', 'Dr.']),
        cargo: z.string(),
        foto: z.string().optional(),
        linkedin: z.string().url().optional().nullable(), // Puede ser null o vacío
    }),
});

export const collections = {
    noticias,
    eventos,
    docentes,
};