import User from './User';

function Tableau({titre}) {
      const utilisateurs = [
    {id : "1-", nom : "SY", prenom : "Amadou"}, // User.js ne gère que  cette ligne c'est pourquoi on peut pas mettre le la déclaration du tableau dans user.js 
    {id : "2-",nom : "SY", prenom : "Abass"},
// Format JSon
  ]
    return (
        <div>
            <h1>Tableau {titre}</h1>
            {
                utilisateurs.map(({id, nom, prenom}, index) => (<User key={id} id={id} nom={nom} prenom={prenom}/>)) /*Le .map permet de parcourir l'ensemble des éléments du tableau*/
            }   
        </div>
    ) // ici mieux vaut mieux vaut mettre index même si on ne l'utilise pas au cas où on oublie le id

}
export default Tableau;