//Firebase stuff
var firebaseConfig = {
    apiKey: "AIzaSyAa56dlO-Ps9Zx363z7vTTzOg6RxMHR_LA",
    authDomain: "fryoalerts.firebaseapp.com",
    projectId: "fryoalerts",
    storageBucket: "fryoalerts.appspot.com",
    messagingSenderId: "46991049696",
    appId: "1:46991049696:web:5bf22bed2e0ab7588e6185",
    measurementId: "G-9CJLSKJG9K"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

safeOrNo = ''
let threatX = []
let threatY = []
let waterLevels = []
let waterLevelsCopy = []
safeRouteX = document.getElementById('safestRouteOutX')
safeRouteY = document.getElementById('safestRouteOutY')

db.collection("threatLocation")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(docs => {
        threatX.push(docs.data().AcoordinateX)
        threatY.push(docs.data().AcoordinateY)
        waterLevels.push(docs.data().waterLevel)
        waterLevelsCopy.push(docs.data().waterLevel)
      });
    })

function findLocation(){
    function success(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
  
      db.collection('location')
        .doc()
        .set({
          coordinateX: lat,
          coordinateY: long
      })

      console.log(lat, long)

      for (i=0; i<threatX.length; i ++){
          if (Math.floor(lat*100) == Math.floor(threatX[i]*100)){
            if (Math.floor(long*100) == Math.floor(threatY[i]*100)){
              safeOrNo += 'Not Safe'
              waterLevelsCopy.sort()
              safeRouteX.textContent += 'Safest route X coordinates: '
              safeRouteY.textContent += 'Safest route Y coordinates: '
              document.getElementById('buttonBoi').remove()
              for (a = 0; a<waterLevelsCopy.length; a++){
                let bruh = waterLevelsCopy[a]
                let bruh1 = waterLevels.indexOf(bruh)
                safeRouteX.textContent += threatX[bruh1] + ', '
                safeRouteY.textContent += threatY[bruh1] + ', '
                document.getElementById('okbuddie').style.backgroundColor = '#ff0000'
              }
              document.getElementById('safeOrNotSafe').textContent += 'You are in danger of a flood!'
              break
            }
          }
      }

      if (safeOrNo != 'Not Safe'){
        document.getElementById('buttonBoi').remove()
        document.getElementById('safeOrNotSafe').textContent += 'You are safe'
        document.getElementById('okbuddie').style.backgroundColor = '#8CE68C'
      } 
    }

    function error() {
      console.log('error')
    }
  
    if(!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser')
    } else {
      console.log('Locating…')
      navigator.geolocation.getCurrentPosition(success, error);
    }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function makeResponsive() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}