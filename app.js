const h = require('izi/vanilla-h').proxy
const input = require('./input')
const fmt = require('./fmt')
const required = true

document.getElementById('app') && document.getElementById('app').remove()

const paragraphe = fmt(`
Apprendre est l'idee de rassembler des personnes qui on
le temps et l'envie d'apprendre ensemble.

Ce premier test acceptera 15 personnes maximum pendant 7 jours.
Les frais seront partager equitablement entre les participants (100 a 150euro).

Le sujet sera apprendre la programation par le javascript.

Ceci doit etre une immersion intense et totale dans la programation.
Il faut etre capable de passer ses journee devant un ordinateur.
non stop


Requis
  - Majeur
  - Pas d'experience en javascript
  - Ce debrouiller pour le deplacement

Materiel requis
  - Ordinateur

Competences recommandee
  - Savoir lire l'anglais
`)

document.body.appendChild(h['#app']([
  h.h1({
    style: {
      textAlign: 'center',
      margin: '50px 0',
      letterSpacing: '2px',
      fontWeight: 'normal',
    }
  }, 'Apprendre'),
  h.div({
    style: {
      marginBottom: '25px',
      maxWidth: '600px',
      margin: '0 auto',
      color: '#8295ad',
    }
  }, paragraphe),
  h.form([
    input({ name: 'nom', placeholder: 'Jean-michel Pepito', required }),
    input({ name: 'email', placeholder: 'jm.pepito@gmail.com', required }),
    input({ name: 'tel', placeholder: '0654682237', required }),
    input({ name: 'age', type: 'number', min: 18, placeholder: '18+', required }),
    h.label([
      'Qui tu est',
      h.textarea({ style: { height: '240px' }, name: 'who', required }),
    ]),

    h.label([
      'Pourquoi tu veux venir',
      h.textarea({ style: { height: '240px' }, name: 'why', required }),
    ]),

    h.input({
      type: 'submit',
      value: 'Je suis chaud patate',
      style: {
        background: 'black',
        color: 'white',
      }
    }),
    //input({  }),
    //input(),
  ]),
])
)