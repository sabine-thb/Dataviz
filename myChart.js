
import {dataMonde, datAfrique, datAsie, datAmlat} from './data.js'

new Chart(
  document.getElementById('myChart'),
  {
    type: 'line',
    data:{
      labels: dataMonde.evolution.map(row => row.year),
      datasets: [
        {
          label: 'Evolution de la population en sous nutrition',
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

  //je mets en place le deuxième graphique

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




  //   function resizeChart2(newWidth, newHeight) {
  //     canvas.width = newWidth;
  //     canvas.height = newHeight;
  //     myChart2.resize(); // Actualisez le graphique
  // }
  
  // // Exemple d'appel de la fonction pour redimensionner le graphique
  // resizeChart2(400, 800);



