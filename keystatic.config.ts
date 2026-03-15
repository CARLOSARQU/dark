// keystatic.config.ts
import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
    storage: process.env.NODE_ENV === 'development'
        ? {
            kind: 'local'
        }
        : {
            kind: 'cloud',
        },
    cloud: {
        project: 'sistemas/dark',
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
            linkedin: fields.url({ label: 'Perfil de LinkedIn (Opcional)', validation: { isRequired: false } }),
        },
        }),
    },

    singletons: {
        mallaCurricular: singleton({
            label: 'Malla Curricular',
            path: 'src/data/malla-curricular',
            schema: {
                planNombre: fields.text({
                    label: 'Nombre del Plan',
                    description: 'Ej: Plan de Estudios 2022',
                    validation: { isRequired: true },
                }),
                vigencia: fields.text({
                    label: 'Años de Vigencia',
                    description: 'Ej: 2022 – 2027',
                    validation: { isRequired: true },
                }),
                totalCreditos: fields.text({
                    label: 'Total de Créditos',
                    description: 'Número total de créditos del plan',
                }),
                resolucion: fields.text({
                    label: 'N° de Resolución de Aprobación',
                    description: 'Ej: R.R. N° 0191-2022-R-UNA',
                }),
                archivoPdf: fields.file({
                    label: 'Archivo PDF de la Malla Curricular',
                    description: 'Sube el PDF oficial desde tu computador.',
                    directory: 'public/docs/malla',
                    publicPath: '/docs/malla/',
                }),
                notas: fields.text({
                    label: 'Notas adicionales (opcional)',
                    multiline: true,
                    description: 'Información complementaria visible en la página.',
                }),
            },
        }),
    },
});