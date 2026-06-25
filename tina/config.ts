import { defineConfig } from 'tinacms';

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,
  clientId: process.env.PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'images',
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
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: 'object', name: 'sito', label: 'Impostazioni generali',
            description: 'Titolo e descrizione per Google.',
            fields: [
              { type: 'object', name: 'titoloPagina', label: 'Titolo pagina (Google)', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'descrizione', label: 'Descrizione (Google)', fields: [
                { type: 'string', name: 'it', label: 'Italiano', ui: { component: 'textarea' }, },
                { type: 'string', name: 'en', label: 'English', ui: { component: 'textarea' }, },
              ] },
            ],
          },
          {
            type: 'object', name: 'hero', label: 'Apertura (prima schermata)',
            fields: [
              { type: 'object', name: 'eyebrow', label: 'Sopra-titolo', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'titoloParte1', label: 'Titolo — prima parte', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'titoloEnfasi', label: 'Titolo — parola evidenziata', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'titoloParte2', label: 'Titolo — parte finale', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'sottotitolo', label: 'Sottotitolo', fields: [
                { type: 'string', name: 'it', label: 'Italiano', ui: { component: 'textarea' }, },
                { type: 'string', name: 'en', label: 'English', ui: { component: 'textarea' }, },
              ] },
              { type: 'image', name: 'immagine', label: 'Foto di apertura' },
              { type: 'object', name: 'immagineAlt', label: 'Descrizione foto', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              {
                type: 'object', name: 'tags', label: 'Etichette', list: true,
                ui: { itemProps: (i) => ({ label: i?.it }) },
                fields: [
                  { type: 'string', name: 'it', label: 'Italiano' },
                  { type: 'string', name: 'en', label: 'English' },
                ],
              },
            ],
          },
          {
            type: 'object', name: 'chiSiamo', label: 'Chi siamo',
            fields: [
              { type: 'object', name: 'eyebrow', label: 'Sopra-titolo', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'titolo', label: 'Titolo sezione', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'introForte', label: 'Frase di apertura', fields: [
                { type: 'string', name: 'it', label: 'Italiano', ui: { component: 'textarea' }, },
                { type: 'string', name: 'en', label: 'English', ui: { component: 'textarea' }, },
              ] },
              {
                type: 'object', name: 'paragrafi', label: 'Paragrafi', list: true,
                ui: { itemProps: (i) => ({ label: i?.it?.slice(0,40) }) },
                fields: [
                  { type: 'string', name: 'it', label: 'Italiano', ui: { component: 'textarea' } },
                  { type: 'string', name: 'en', label: 'English', ui: { component: 'textarea' } },
                ],
              },
              { type: 'object', name: 'certificazione', label: 'Riga certificazione AiC', fields: [
                { type: 'string', name: 'it', label: 'Italiano', ui: { component: 'textarea' }, },
                { type: 'string', name: 'en', label: 'English', ui: { component: 'textarea' }, },
              ] },
              { type: 'object', name: 'citazione', label: 'Citazione', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'noteCitazione', label: 'Testo sotto la citazione', fields: [
                { type: 'string', name: 'it', label: 'Italiano', ui: { component: 'textarea' }, },
                { type: 'string', name: 'en', label: 'English', ui: { component: 'textarea' }, },
              ] },
            ],
          },
          {
            type: 'object', name: 'cosaFacciamo', label: 'Cosa facciamo',
            fields: [
              { type: 'object', name: 'eyebrow', label: 'Sopra-titolo', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'titolo', label: 'Titolo sezione', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'sottotitolo', label: 'Sottotitolo', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              {
                type: 'object', name: 'servizi', label: 'Servizi / prodotti', list: true,
                ui: { itemProps: (i) => ({ label: i?.titolo?.it }) },
                fields: [
                  { type: 'object', name: 'etichetta', label: 'Etichetta', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
                  { type: 'object', name: 'titolo', label: 'Titolo', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
                  { type: 'object', name: 'descrizione', label: 'Descrizione', fields: [
                { type: 'string', name: 'it', label: 'Italiano', ui: { component: 'textarea' }, },
                { type: 'string', name: 'en', label: 'English', ui: { component: 'textarea' }, },
              ] },
                  { type: 'image', name: 'immagine', label: 'Foto del prodotto' },
                  {
                    type: 'object', name: 'tags', label: 'Etichette', list: true,
                    ui: { itemProps: (i) => ({ label: i?.it }) },
                    fields: [
                      { type: 'string', name: 'it', label: 'Italiano' },
                      { type: 'string', name: 'en', label: 'English' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'object', name: 'catalogo', label: 'Catalogo online',
            fields: [
              { type: 'object', name: 'eyebrow', label: 'Sopra-titolo', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'titolo', label: 'Titolo', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'descrizione', label: 'Descrizione', fields: [
                { type: 'string', name: 'it', label: 'Italiano', ui: { component: 'textarea' }, },
                { type: 'string', name: 'en', label: 'English', ui: { component: 'textarea' }, },
              ] },
              { type: 'object', name: 'noteLive', label: 'Nota tempo reale', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'testoBottone', label: 'Testo bottone', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'string', name: 'linkCatalogo', label: 'Link al catalogo Cooki' },
              { type: 'object', name: 'anteprimaNome', label: 'Anteprima — nome prodotto', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'anteprimaImmagineLabel', label: 'Anteprima — etichetta', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'image', name: 'anteprimaImmagine', label: 'Anteprima — foto' },
              { type: 'object', name: 'anteprimaPrezzo', label: 'Anteprima — prezzo', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
            ],
          },
          {
            type: 'object', name: 'contatti', label: 'Contatti',
            fields: [
              { type: 'object', name: 'eyebrow', label: 'Sopra-titolo', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'titolo', label: 'Titolo', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'sottotitolo', label: 'Sottotitolo', fields: [
                { type: 'string', name: 'it', label: 'Italiano', ui: { component: 'textarea' }, },
                { type: 'string', name: 'en', label: 'English', ui: { component: 'textarea' }, },
              ] },
              { type: 'string', name: 'telefono', label: 'Telefono (mostrato)' },
              { type: 'string', name: 'telefonoLink', label: 'Telefono (link, senza spazi)' },
              { type: 'string', name: 'email', label: 'Email' },
              { type: 'string', name: 'nomeLuogo', label: 'Nome del luogo' },
              { type: 'image', name: 'immagine', label: 'Foto del laboratorio' },
              { type: 'string', name: 'indirizzo', label: 'Indirizzo', ui: { component: 'textarea' } },
              { type: 'string', name: 'linkMappa', label: 'Link Google Maps' },
              { type: 'string', name: 'instagram', label: 'Link Instagram' },
              { type: 'string', name: 'facebook', label: 'Link Facebook' },
              { type: 'string', name: 'whatsapp', label: 'WhatsApp (solo numero)' },
              { type: 'object', name: 'labelTelefono', label: 'Etichetta "Telefono"', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'labelEmail', label: 'Etichetta "Email"', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'labelCatalogo', label: 'Etichetta "Catalogo"', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'labelSeguici', label: 'Etichetta "Seguici"', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'sfogliaOnline', label: 'Testo "Sfoglia online"', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'apriMappa', label: 'Testo "Apri in mappa"', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
            ],
          },
          {
            type: 'object', name: 'menu', label: 'Menu e bottoni',
            fields: [
              { type: 'object', name: 'chiSiamo', label: 'Voce "Chi siamo"', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'cosaFacciamo', label: 'Voce "Cosa facciamo"', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'catalogo', label: 'Voce "Catalogo"', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'partner', label: 'Voce "Partner"', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'contatti', label: 'Voce "Contatti"', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'catalogoOnline', label: 'Bottone "Catalogo online"', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'scopriProdotti', label: 'Bottone "Scopri i prodotti"', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'nostraStoria', label: 'Bottone "La nostra storia"', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
            ],
          },
          {
            type: 'object', name: 'footer', label: 'Fondo pagina',
            fields: [
              { type: 'object', name: 'copyright', label: 'Riga copyright', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'claim', label: 'Claim finale', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
              { type: 'object', name: 'naviga', label: 'Etichetta "Naviga"', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
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
        },
        fields: [
          {
            type: 'boolean', name: 'attiva',
            label: 'Pagina Partner attiva (visibile a tutti)',
            description: 'Lascia spento finche la pagina non e pronta.',
          },
          { type: 'object', name: 'eyebrow', label: 'Sopra-titolo', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
          { type: 'object', name: 'titolo', label: 'Titolo', fields: [
                { type: 'string', name: 'it', label: 'Italiano', },
                { type: 'string', name: 'en', label: 'English', },
              ] },
          { type: 'object', name: 'sottotitolo', label: 'Sottotitolo', fields: [
                { type: 'string', name: 'it', label: 'Italiano', ui: { component: 'textarea' }, },
                { type: 'string', name: 'en', label: 'English', ui: { component: 'textarea' }, },
              ] },
          {
            type: 'object', name: 'partner', label: 'Aziende partner', list: true,
            ui: { itemProps: (i) => ({ label: i?.nome }) },
            fields: [
              { type: 'string', name: 'nome', label: 'Nome azienda' },
              { type: 'image', name: 'logo', label: 'Logo (opzionale)' },
              { type: 'string', name: 'sito', label: 'Sito web (opzionale)' },
              { type: 'string', name: 'descrizione', label: 'Descrizione (opzionale)' },
            ],
          },
        ],
      },
    ],
  },
});
