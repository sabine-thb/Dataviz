import {dataMonde, datAfrique, datAsie, datAmlat} from './data.js'

const myChart1=
  new Chart(
    document.getElementById('myChart'),
    {
      type: 'line',
      data:{
        labels: dataMonde.evolution.map(row => row.year),
        datasets: [
          {
            label: 'Pourcentage de la population en sous nutrition',
            data: dataMonde.evolution.map(row => row.value),
            pointRadius: 8, // Réglez la taille des points à 8 pixels
            pointBackgroundColor: '#890D3A',
            pointBorderColor: 'transparent',
            borderColor:'black',
            borderWidth:1.8,         
          }
          
        ]
        
      },

      options:{
        scales: {
          x: {        
              grid: {
                  color: 'white' // Définir la couleur de la grille en blanc
              },
              ticks: {
                  color: 'black', // Définir la couleur des labels en blanc
                  
              },
          },
          y: {
            display: true,
            min: 0,
            max: 25,
            padding:80,
              grid: {
                  color: 'white', // Définir la couleur de la grille en blanc
              },
              ticks: {
                  stepSize: 5,
                  padding: 10,
                  color: 'black' // Définir la couleur des labels en 

              },
              
          }
        },

        plugins: {
          legend: {
            display: false // Pour masquer la légende
            }
        },
          
      // responsive: false, 
      maintainAspectRatio: false, 

      }
      


    },

    
    );
  ;

  //je mets en place le deuxième graphique

const myChart2=
    new Chart(
      document.getElementById('myChart2'),
      {
        type: 'bar',
        data: {
          labels: dataMonde.facteur.map(row => row.cause),
          datasets: [
            {
              label: 'Evolution de la population en sous nutrition',
              data: dataMonde.facteur.map(row => row.count),
              backgroundColor: [
                  '#890D3A',
                  '#B4BC96',
                  '#D0B48F',
                  '#A1958D',
                  '#4B493D',
                ],
                barPercentage: 0.7, // Modifier la largeur des labels "cause"
                borderRadius: 10,
              
            }
            
          ]
          
        },
        options: {
          indexAxis: 'y',
          scales: {
              x: {
                  display: true,
                  min: 0,
                  max: 6,
                  grid: {
                      color: 'white' // Définir la couleur de la grille en blanc
                  },
                  ticks: {
                      stepSize: 1,
                      color: 'black', // Définir la couleur des labels en blanc
                  },
              },
              y: {
                  grid: {
                      color: 'white' // Définir la couleur de la grille en blanc
                  },
                  ticks: {
                      stepSize: 1,
                      color: 'black', // Définir la couleur des labels en 

                  },
              }
            

          },
          // responsive: false, 
          maintainAspectRatio: false,
          plugins: {
          legend: {
            display: false // Pour masquer la légende
          }
          },
        
      }
      }
    );
  ;






// Je sélectionne tous les éléments <use> avec la classe "button" 
const buttons = document.querySelectorAll('.button');

//Je change désormais les données en fonction du bouton sur lequel l'utilisateur clique

//J'associe les données aux classes de boutons
const dataByButtonClass = {
  buttonMonde: dataMonde,
  buttonAfrique: datAfrique,
  buttonAsie: datAsie,
  buttonAmLat: datAmlat,
};


buttons.forEach(button => {
  button.addEventListener('click', function() {
    //Je modifie la couleur du bouton 
    button.style.fill = '#FFFFFF'; 
    // Je change la couelru des autres boutons
    buttons.forEach(otherButton => {
      if (otherButton !== button) {
        otherButton.style.fill = "#FFF5DC"; 
      }
    });
    // J'obiens la classe du bouton 
    const buttonClass = button.classList[1];
    console.log(buttonClass)

    // J'obtiens les données associées à la classe du bouton
    const data = dataByButtonClass[buttonClass];
    console.log(data)

    // Je mets à jour les données des graphiques
    myChart1.data.labels = data.evolution.map(row => row.year);
    myChart1.data.datasets[0].data = data.evolution.map(row => row.value);
    myChart2.data.labels = data.facteur.map(row => row.cause);
    myChart2.data.datasets[0].data = data.facteur.map(row => row.count);

    // J'actualise les graphiques
    myChart1.update();
    myChart2.update();
  });
});











