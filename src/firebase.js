import * as firebase from  'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyDwcKooLoAy4Kf96csJisAvYDGVBBrumkw",
    authDomain: "nbafull-f95f1.firebaseapp.com",
    databaseURL: "https://nbafull-f95f1.firebaseio.com",
    projectId: "nbafull-f95f1",
    storageBucket: "nbafull-f95f1.appspot.com",
    messagingSenderId: "1094732591985",
    appId: "1:1094732591985:web:6a0e9bcf1be577b347fcd0",
    measurementId: "G-6VD6RS2Z8H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');
  
  let nome='';
  let pass='';

  const getNome=()=>{
    return nome;
  }

  const getPass=()=>{
    return pass;
  }

  const funcao = (n, p)=>{
    nome = n;
    pass=p;

  }

  


  const firebaseLooper = (snapshot) =>{

   

        const data = [];
        snapshot.forEach((childSnapshot)=>{
          data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
          })
        });
        return data;
        
      
      
    }


  
    

    
    


  export{
      
      firebase,
      firebaseDB,
      firebaseArticles,
      firebaseTeams,
      firebaseVideos,
      firebaseLooper,
      getNome,
      getPass,
      funcao
      
      
      
  }