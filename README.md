# Progetto_PAWM

Front end implementato con Angular e backend con FIrebase (reatime db). 

Front end, sezioni: 
-login e registrazione: chiamate al server firebase, login gestito con username e password, come risposta il server restituisce un jwt token. 
-profilo: informazioni sull'utente che ha eseguito il login
-bar e cucina: sezioni utilizzate dagli utenti che lavorano al bar o in cucina e possono gestire tutte le comande che arrivano. 
-tavoli: sezione che permette ai camerieri o a chi sta all'accoglienza di gestire i tavoli e le comande.
-menu: sezione per gestire gli elementi del menu. 

Dopo aver eseguito il login, le informazioni dell'utente vengono salvate nel local storage del browser. 
Ogni volta che viene fatta una richiesta http al server entra in gioco un interceptor che aggiunge il token per pemettere di autorizzare le chiamate al server. 

Lato server: 
Realtime database gestisce i dati attraverso file JSON. autenticare le chiamate è presente una console dove vanno indicate le regole di acesso al db.
Nel nostro caso l'accesso alle tabelle riferite ai tavoli, elementi del menu e comande è consentito a tutti gli utenti autenticati, mentre quello alla tabella riferita agli utenti è riservato solo agli admin
