// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: process.env.NODE_ENV === 'development'
        ? {
            kind: 'local'
        }
        : {
            kind: 'cloud', // En producción, se conecta a GitHub
        },
    cloud: {
        project: 'nombre-de-tu-equipo/nombre-de-tu-proyecto',
    },
    collections: {
        // 1. SECCIÓN NOTICIAS
        noticias: collection({
        label: 'Noticias',
        slugField: 'titulo',
        path: 'src/content/noticias/*',
        format: { contentField: 'contenido' },
        schema: {
            titulo: fields.slug({ name: { label: 'Título' } }),
            fecha: fields.date({ label: 'Fecha de publicación' }),
            extracto: fields.text({ label: 'Extracto corto (para la tarjeta)', multiline: true }),
            portada: fields.image({
            label: 'Imagen Principal',
            directory: 'public/img/noticias',
            publicPath: '/img/noticias/',
            }),
            contenido: fields.document({
            label: 'Cuerpo de la noticia',
            formatting: true,
            dividers: true,
            links: true,
            images: true,
            }),
        },
        }),

        // --- EVENTOS ---
        eventos: collection({
        label: 'Eventos',
        slugField: 'nombre',
        path: 'src/content/eventos/*',
        format: { contentField: 'detalles' },
        schema: {
            nombre: fields.slug({ name: { label: 'Nombre del Evento' } }),
            fechaHora: fields.datetime({ label: 'Fecha y Hora del Evento' }),
            lugar: fields.text({ label: 'Lugar (Auditorio / Link Zoom)' }),
            tipo: fields.select({
                label: 'Tipo de Evento',
                options: [
                    { label: 'Conferencia', value: 'Conferencia' },
                    { label: 'Taller', value: 'Taller' },
                    { label: 'Ceremonia', value: 'Ceremonia' },
                    { label: 'Webinar', value: 'Webinar' }
                ],
                defaultValue: 'Conferencia'
            }),
            afiche: fields.image({
            label: 'Afiche / Flyer',
            directory: 'public/img/eventos',
            publicPath: '/img/eventos/',
            }),
            detalles: fields.document({
                label: 'Detalles del evento',
                formatting: true,
                links: true
            })
        },
        }),

        // 2. SECCIÓN PLANA DOCENTE
        docentes: collection({
        label: 'Plana Docente',
        slugField: 'nombre',
        path: 'src/content/docentes/*',
        schema: {
            nombre: fields.slug({ name: { label: 'Nombre Completo' } }),
            grado: fields.select({
            label: 'Grado Académico',
            options: [
                { label: 'Ingeniero', value: 'Ing.' },
                { label: 'Magíster', value: 'Mg.' },
                { label: 'Doctor', value: 'Dr.' },
            ],
            defaultValue: 'Ing.',
            }),
            cargo: fields.text({ label: 'Cargo / Especialidad' }),
            foto: fields.image({
            label: 'Foto del Docente',
            directory: 'public/img/docentes',
            publicPath: '/img/docentes/',
            }),
            linkedin: fields.url({ label: 'Perfil de LinkedIn (Opcional)' }),
        },
        }),
    },
});