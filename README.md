# Ambrosia Laboratorio — Sito + TinaCMS

Sito statico in **Astro** con **TinaCMS** per la modifica autonoma dei contenuti.
Hosting su **Netlify** (gratuito), dominio su **Aruba**.

---

## Struttura

```
content/contenuti.json    → tutti i testi del sito (li modifica Tina)
src/pages/index.astro     → la pagina, legge da contenuti.json
src/styles/global.css     → grafica del sito
tina/config.ts            → definisce i campi modificabili da Niccolò
public/images/            → foto del laboratorio (già incluse)
public/uploads/           → dove finiscono le foto caricate da Tina
GUIDA-NICCOLO.md          → istruzioni per il cliente
netlify.toml              → configurazione deploy + redirect .com→.it
```

Le foto in `public/images/` sono state estratte dal materiale di Ambrosia e
ottimizzate per il web. Sono già collegate nel sito e sostituibili via Tina.

Per cambiare i testi NON si tocca il codice: si usa Tina, oppure si modifica
direttamente `content/contenuti.json`.

---

## Provarlo in locale (facoltativo)

```bash
npm install
npm run dev
```
Sito su http://localhost:4321 — pannello Tina su http://localhost:4321/admin

> Nota: `npm install` richiede Node 18+ e un ambiente che compili le dipendenze
> native di Tina. Su Netlify funziona senza problemi.

---

## FASE 3 — Mettere online (io ti guido passo-passo)

1. **GitHub**: crea un account gratuito su github.com. Crea un repository nuovo
   (es. `ambrosia-sito`), e carica dentro tutti questi file.
2. **Netlify**: account gratuito su netlify.com → "Add new site" → "Import an
   existing project" → collega GitHub → scegli il repository.
3. Netlify legge `netlify.toml` da solo: build `npm run build`, cartella `dist`.
4. Parte il primo deploy. Otterrai un indirizzo tipo `ambrosia-xxxx.netlify.app`.
   **Qui verifichiamo che tutto si veda bene PRIMA di toccare il dominio.**

## FASE 4 — Collegare Tina

1. Account gratuito su **tina.io** (Tina Cloud).
2. Crea un progetto collegato allo stesso repository GitHub.
3. Tina ti dà due valori: **Client ID** e **Token**.
4. In Netlify → Site settings → Environment variables, aggiungi:
   - `PUBLIC_TINA_CLIENT_ID` = (il Client ID)
   - `TINA_TOKEN` = (il Token)
5. Rilancia il deploy. Ora `tuosito/admin` chiede il login e funziona.
6. Crea l'utente per Niccolò dentro Tina Cloud e fai una modifica di prova.

## FASE 5 — Puntare il dominio Aruba

**Prima:** nel pannello DNS Aruba, ANNOTA i record MX esistenti (la posta).
NON si toccano: le email @progettoambrosia.it devono continuare a funzionare.

1. In Netlify → Domain settings → aggiungi `progettoambrosia.it`.
2. Netlify ti indica i valori da impostare. Tipicamente:
   - Record **A** del dominio nudo → IP di Netlify (Netlify lo fornisce)
   - Record **CNAME** per `www` → il tuo indirizzo `.netlify.app`
3. Nel pannello DNS Aruba: modifica SOLO i record A e CNAME del web.
   Lascia intatti gli MX e gli altri record della posta.
4. Aggiungi anche `progettoambrosia.com` in Netlify: il redirect verso il `.it`
   è già pronto in `netlify.toml`.
5. Attendi la propagazione (da minuti a qualche ora). Verifica su dnschecker.org.
6. Netlify attiva il certificato HTTPS in automatico.

---

## Se in futuro Tina non convince

Alternativa pronta: **Keystatic** (anch'esso gratuito, Git-based, interfaccia
più moderna). Si aggancia allo stesso `contenuti.json` con poche modifiche.
