# SHPJEGIM JAVASCRIPT FILE SE SUN MAJ MEN SEN

1. Variablat Globale & Të Dhënat
 
Variablat e statistikave: Ruajnë numrat për numëruesit e animuar (klientët, produktet, vitet, kënaqësia)
Vargu i shërbimeve: Përmban të gjithë informacionin e shërbimeve (ikonën, titullin, përshkrimin) të përdorur në modale

2. Inicializimi
DOMContentLoaded: Pret që faqja të ngarkohet plotësisht para se të ekzekutojë ndonjë kod
initializeStatistics(): Regjistron të dhënat e statistikave në konsol
addEventListeners(): Konfiguron të gjitha dëgjuesit e ngjarjeve të klikimeve dhe formave
animateCounters(): Fillon efektin e numërimit të animuar për statistikat
addScrollEffects(): Shton animacionet fade-in kur bëhet scroll
setActiveNavigation(): Thekson faqen aktuale në menunë e navigimit

3. Animacioni i Numëruesit
Qëllimi: Krijon efektin e numërimit të animuar (0 → 1250 klientë, etj.)
Si funksionon:
Gjen elementet sipas ID (clientsCount, productsCount, etj.)
Animojë nga 0 në numrin e synuar gjatë 2 sekondave
Përdor setInterval për të rritur numrin gradualisht

5. Dëgjuesit e Ngjarjeve
Dorëzimet e formave: Kap kur përdoruesit dorëzojnë format e kontaktit
Klikimet e butonave: Trajton të gjitha ndërveprimet e butonave (shërbimet, kontakti, etj.)
Ndryshimet e input-eve: Ofron validimin në kohë reale dhe numërimin e karaktereve

6. Trajtimi i Formave
Parandalon dorëzimin normal: Ndalon shfletuesin nga dorëzimi i formës normalisht
Validojë të dhënat e formës: Kontrollon nëse të gjitha fushat e detyrueshme janë plotësuar saktë
Tregon gjendjen e ngarkimit: Shfaq "Duke u përpunuar..." gjatë simulimit të dorëzimit të formës
Tregon mesazhe suksesi/gabimi: Ofron reagim për përdoruesin
Rivendos formën: Pastron të gjitha fushat pas dorëzimit të suksesshëm
Mbyll modalin: Mbyll automatikisht modalin pas dorëzimit

7. Validimi i Formave
Kontrolli i fushave të detyrueshme: Siguron që asnjë fushë e detyrueshme të mos jetë bosh
Validimi i email-it: Përdor regex për të kontrolluar formatin e email-it
Validimi i telefonit: Siguron që numrat e telefonit të jenë të paktën 8 shifra
Kthen true/false: Tregon nëse forma është e vlefshme

8. Trajtimi i Klikimeve të Butonave
Merr veprimin e butonit: Lexon tekstin e butonit ose atributin data-action
Deklarata switch: Drejton në funksionin e duhur bazuar në llojin e butonit
Funksionet e modaleve: Hap modale të ndryshme (shërbimet, produktet, kontakti)

10. Sistemi i Modaleve
Krijimi dinamik i modaleve: Krijon modale në kohë reale duke përdorur JavaScript
Integrimi me Bootstrap: Përdor sistemin e modaleve të Bootstrap për animacionet
Injektimi i përmbajtjes: Injekton përmbajtjen HTML në modalin
Të dhënat e shërbimeve: Përdor vargun e shërbimeve për të populluar përmbajtjen e modalit

11. Validimi i Input-eve në Kohë Reale
Reagimi në kohë reale: Validojë ndërsa përdoruesi shkruan
Indikatorët vizualë: Shton/heq klasat e validimit të Bootstrap
Numërimi i karaktereve: Tregon karakteret e mbetura për textarea
Validimi i email-it: Kontrollon formatin e email-it në kohë reale
10. Efektet e Scroll-it
Intersection Observer: Mënyra moderne për të zbuluar kur elementet hyjnë në pamje
Animacioni fade-in: Shton klasën CSS kur elementet janë të dukshme
Optimizuar për performancën: Thotë vetëm kur elementet hyjnë në viewport

12. Menaxhimi i Navigimit
Theksimi i faqes aktive: Thekson faqen aktuale në navigim
Zbulimi i rrugës: Përcakton faqen aktuale nga URL
Menaxhimi i klasave: Shton/heq klasën 'active' në mënyrë të përshtatshme

Përmbledhja e Veçorive Kryesore:

Numërues të animuar për statistikat
Validimi i formave me reagim në kohë reale
Sistemi i modaleve për shërbimet dhe format e kontaktit
Animacionet e scroll-it për UX më të mirë
Theksimi i navigimit për faqen aktuale
Numërimi i karaktereve për zonat e tekstit
Gjendjet e ngarkimit dhe mesazhet e suksesit/gabimit
Ndërveprimet responsive në të gjitha faqet
