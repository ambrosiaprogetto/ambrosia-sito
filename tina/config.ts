import { defineConfig } from 'tinacms';

// Branch del repository su cui Tina salva le modifiche
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,
  // Questi due valori arrivano dall'account Tina Cloud gratuito (Fase 4).
  clientId: process.env.PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'contenuti',
        label: 'Contenuti del sito',
        path: 'content',
        format: 'json',
        match: { include: 'contenuti' },
        ui: {
          // Niccolò non può creare/eliminare: c'è un solo file di contenuti
          allowedActions: { create: false, delete: false },
          router: () => '/',
        },
        fields: [
          // ---------- SITO ----------
          {
            type: 'object',
            name: 'sito',
            label: 'Impostazioni generali',
            description: 'Titolo e descrizione che appaiono su Google e quando si condivide il sito.',
            fields: [
              { type: 'string', name: 'titoloPagina', label: 'Titolo della pagina (Google)' },
              { type: 'string', name: 'descrizione', label: 'Descrizione (Google)', ui: { component: 'textarea' } },
            ],
          },

          // ---------- HERO ----------
          {
            type: 'object',
            name: 'hero',
            label: 'Apertura (prima schermata)',
            description: 'La grande frase in cima al sito.',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Sopra-titolo' },
              { type: 'string', name: 'titoloParte1', label: 'Titolo — prima parte' },
              { type: 'string', name: 'titoloEnfasi', label: 'Titolo — parola evidenziata (in arancio corsivo)' },
              { type: 'string', name: 'titoloParte2', label: 'Titolo — parte finale' },
              { type: 'string', name: 'sottotitolo', label: 'Sottotitolo', ui: { component: 'textarea' } },
              { type: 'image', name: 'immagine', label: 'Foto di apertura' },
              { type: 'string', name: 'immagineAlt', label: 'Descrizione foto (per accessibilità)' },
              {
                type: 'object', name: 'tags', label: 'Etichette', list: true,
                ui: { itemProps: (i) => ({ label: i?.testo }) },
                fields: [{ type: 'string', name: 'testo', label: 'Testo' }],
              },
            ],
          },

          // ---------- CHI SIAMO ----------
          {
            type: 'object',
            name: 'chiSiamo',
            label: 'Chi siamo',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Sopra-titolo' },
              { type: 'string', name: 'titolo', label: 'Titolo sezione' },
              { type: 'string', name: 'introForte', label: 'Frase di apertura (in evidenza)', ui: { component: 'textarea' } },
              {
                type: 'object', name: 'paragrafi', label: 'Paragrafi', list: true,
                ui: { itemProps: (i) => ({ label: i?.testo?.slice(0, 50) + '…' }) },
                fields: [{ type: 'string', name: 'testo', label: 'Testo', ui: { component: 'textarea' } }],
              },
              { type: 'string', name: 'certificazione', label: 'Riga certificazione AiC', ui: { component: 'textarea' } },
              { type: 'string', name: 'citazione', label: 'Citazione (tra virgolette)' },
              { type: 'string', name: 'noteCitazione', label: 'Testo sotto la citazione', ui: { component: 'textarea' } },
            ],
          },

          // ---------- COSA FACCIAMO ----------
          {
            type: 'object',
            name: 'cosaFacciamo',
            label: 'Cosa facciamo',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Sopra-titolo' },
              { type: 'string', name: 'titolo', label: 'Titolo sezione' },
              { type: 'string', name: 'sottotitolo', label: 'Sottotitolo' },
              {
                type: 'object', name: 'servizi', label: 'Servizi / prodotti', list: true,
                ui: { itemProps: (i) => ({ label: i?.titolo }) },
                fields: [
                  { type: 'string', name: 'etichetta', label: 'Etichetta (es. "01 · Su misura")' },
                  { type: 'string', name: 'titolo', label: 'Titolo' },
                  { type: 'string', name: 'descrizione', label: 'Descrizione', ui: { component: 'textarea' } },
                  { type: 'image', name: 'immagine', label: 'Foto del prodotto' },
                  {
                    type: 'object', name: 'tags', label: 'Etichette', list: true,
                    ui: { itemProps: (i) => ({ label: i?.testo }) },
                    fields: [{ type: 'string', name: 'testo', label: 'Testo' }],
                  },
                ],
              },
            ],
          },

          // ---------- CATALOGO ----------
          {
            type: 'object',
            name: 'catalogo',
            label: 'Catalogo online',
            description: 'La sezione che rimanda al catalogo Cooki.',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Sopra-titolo' },
              { type: 'string', name: 'titolo', label: 'Titolo' },
              { type: 'string', name: 'descrizione', label: 'Descrizione', ui: { component: 'textarea' } },
              { type: 'string', name: 'noteLive', label: 'Nota "aggiornato in tempo reale"' },
              { type: 'string', name: 'testoBottone', label: 'Testo del bottone' },
              { type: 'string', name: 'linkCatalogo', label: 'Link al catalogo Cooki' },
              { type: 'string', name: 'anteprimaImmagineLabel', label: 'Anteprima — etichetta immagine (se senza foto)' },
              { type: 'image', name: 'anteprimaImmagine', label: 'Anteprima — foto prodotto' },
              { type: 'string', name: 'anteprimaNome', label: 'Anteprima — nome prodotto' },
              { type: 'string', name: 'anteprimaPrezzo', label: 'Anteprima — prezzo' },
            ],
          },

          // ---------- CONTATTI ----------
          {
            type: 'object',
            name: 'contatti',
            label: 'Contatti',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Sopra-titolo' },
              { type: 'string', name: 'titolo', label: 'Titolo' },
              { type: 'string', name: 'sottotitolo', label: 'Sottotitolo', ui: { component: 'textarea' } },
              { type: 'string', name: 'telefono', label: 'Telefono (come mostrato)' },
              { type: 'string', name: 'telefonoLink', label: 'Telefono (per il click, senza spazi)' },
              { type: 'string', name: 'email', label: 'Email' },
              { type: 'string', name: 'nomeLuogo', label: 'Nome del luogo' },
              { type: 'image', name: 'immagine', label: 'Foto del laboratorio' },
              { type: 'string', name: 'indirizzo', label: 'Indirizzo', ui: { component: 'textarea' } },
              { type: 'string', name: 'linkMappa', label: 'Link a Google Maps' },
              { type: 'string', name: 'instagram', label: 'Link Instagram' },
              { type: 'string', name: 'facebook', label: 'Link Facebook' },
              { type: 'string', name: 'whatsapp', label: 'WhatsApp (solo numero, es. 393476137994)' },
            ],
          },

          // ---------- FOOTER ----------
          {
            type: 'object',
            name: 'footer',
            label: 'Fondo pagina',
            fields: [
              { type: 'string', name: 'copyright', label: 'Riga copyright' },
              { type: 'string', name: 'claim', label: 'Claim finale' },
            ],
          },
        ],
      },
      {
        name: 'partner',
        label: 'Pagina Partner',
        path: 'content',
        format: 'json',
        match: { include: 'partner' },
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => '/partner',
        },
        fields: [
          {
            type: 'boolean',
            name: 'attiva',
            label: 'Pagina Partner attiva (visibile a tutti)',
            description: 'Lascia spento finché la pagina non è pronta. Quando accendi, la voce "Partner" appare nel menu e la pagina diventa pubblica.',
          },
          { type: 'string', name: 'eyebrow', label: 'Sopra-titolo' },
          { type: 'string', name: 'titolo', label: 'Titolo' },
          { type: 'string', name: 'sottotitolo', label: 'Sottotitolo', ui: { component: 'textarea' } },
          {
            type: 'object',
            name: 'partner',
            label: 'Aziende partner',
            list: true,
            ui: { itemProps: (i) => ({ label: i?.nome }) },
            fields: [
              { type: 'string', name: 'nome', label: 'Nome azienda' },
              { type: 'image', name: 'logo', label: 'Logo (opzionale)' },
              { type: 'string', name: 'sito', label: 'Sito web (opzionale)' },
              { type: 'string', name: 'descrizione', label: 'Breve descrizione (opzionale)' },
            ],
          },
        ],
      },
    ],
  },
});
