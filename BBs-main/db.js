var mongoose = require('mongoose');
const { Schema } = mongoose;
const url = 'mongodb+srv://emem:1234@cluster0.iarne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';







const connectionParams={
    useNewUrlParser: true,
    
    useUnifiedTopology: true 
}
mongoose.connect(url,function(err, db) {  
    if (err) throw err;  
    var userobj =[
     { UserID: 1,Role: "donor", UserFirstName: "Ahmed",UserSecondName: "Salem", Email: "Ahmeds@gmail.com", password: "1234",phoneNumber: 010203044, age: 23 , weight: 96 , BloodType: "A-" },
     { UserID: 2,Role: "donor", UserFirstName: "Kamal",UserSecondName: "Mohamed", Email: "Kamalmo@gmail.com", password: "1234",phoneNumber: 010673044, age: 37 , weight: 76 , BloodType: "B+" },
     { UserID: 3,Role: "donor", UserFirstName: "Fatma",UserSecondName: "Omar", Email: "FatmaOmar45@gyahoo.com", password: "1234",phoneNumber: 01225304, age: 18 , weight: 46 , BloodType: "AB-" },
     { UserID: 4, Role: "donor",UserFirstName: "Kareem",UserSecondName: "Ali", Email: "AliKareem@hotmail.com", password: "1234",phoneNumber: 013224644, age: 49 , weight: 86 , BloodType: "O+" },
     { UserID: 5, Role: "donor",UserFirstName: "Ahmed",UserSecondName: "Shokry", Email: "AShokri7@gmail.com", password: "1234",phoneNumber: 010253070, age: 21 , weight: 106 , BloodType: "A-" },
     { UserID: 6, Role: "donor",UserFirstName: "Omar",UserSecondName: "Mahmoud", Email: "Omar7ooda@gmail.com", password: "1234",phoneNumber: 011203044, age: 65 , weight: 56 , BloodType: "A+" },
     { UserID: 7, Role: "donor",UserFirstName: "Ahmed",UserSecondName: "Zakria", Email: "AhmedZakareya@gmail.com", password: "1234",phoneNumber: 010263044, age: 59 , weight: 73 , BloodType: "B-" },
     { UserID: 8, Role: "donor",UserFirstName: "Loai",UserSecondName: "Ragi", Email: "LoaiRag69@yahoo.com", password: "1234",phoneNumber: 011103044, age: 37 , weight: 93 , BloodType: "O-" },
     { UserID: 9, Role: "donor",UserFirstName: "Zahra",UserSecondName: "Adel", Email: "Zahrazozo@gmail.com", password: "1234",phoneNumber: 012207044, age: 61 , weight: 80 , BloodType: "AB+" },
     { UserID: 11,Role: "admin" ,UserFirstName: "Eman",UserSecondName: "Samy", Email: "EmanSamy79@gmail.com", password: "1234",phoneNumber: 0104203044},
     { UserID: 21,Role: "admin", UserFirstName: "Adham",UserSecondName: "Ahmed", Email: "AdhamAhmed@gmail.com", password: "1234",phoneNumber: 01320673044},
     { UserID: 31,Role: "admin", UserFirstName: "Omar",UserSecondName: "Haitham", Email: "OmarHaitham@yahoo.com", password: "1234",phoneNumber: 0123225304},
     { UserID: 101,Role: "distributer", UserFirstName: "Mai",UserSecondName: "Omar", Email: "Maioya@gmail.com", password: "1234",phoneNumber: 0104203044},
     { UserID: 201,Role: "distributer", UserFirstName: "Adham",UserSecondName: "Hamdy", Email: "HamdiAdham@gmail.com", password: "1234",phoneNumber: 01320673044},
     { UserID: 301,Role: "distributer", UserFirstName: "Omar",UserSecondName: "Karim", Email: "Omarkarem@yahoo.com", password: "1234",phoneNumber: 0123225304},
     { UserID: 111,Role: "collector", UserFirstName: "Lamya",UserSecondName: "Omar", Email: "Maioya@gmail.com", password: "1234",phoneNumber: 0104203044},
     { UserID: 211,Role: "collector", UserFirstName: "David",UserSecondName: "Fahmy", Email: "DavidFahmi@gmail.com", password: "1234",phoneNumber: 01320673044},
     { UserID: 311,Role: "collector", UserFirstName: "Katy",UserSecondName: "Milad", Email: "KatyMilad@yahoo.com", password: "1234",phoneNumber: 0123225304}


    ];
    db.collection("User").insertMany(userobj, function(err, res) {  
    if (err) throw err;  
    console.log("record/s inserted");  
   
    }); 
    var donorobj =[
        { UserID: 1,Role: "donor", UserFirstName: "Ahmed",UserSecondName: "Salem", Email: "Ahmeds@gmail.com", password: "1234",phoneNumber: 010203044, age: 23 , weight: 96 , BloodType: "A-" },
     { UserID: 2,Role: "donor", UserFirstName: "Kamal",UserSecondName: "Mohamed", Email: "Kamalmo@gmail.com", password: "1234",phoneNumber: 010673044, age: 37 , weight: 76 , BloodType: "B+" },
     { UserID: 3,Role: "donor", UserFirstName: "Fatma",UserSecondName: "Omar", Email: "FatmaOmar45@gyahoo.com", password: "1234",phoneNumber: 01225304, age: 18 , weight: 46 , BloodType: "AB-" },
     { UserID: 4, Role: "donor",UserFirstName: "Kareem",UserSecondName: "Ali", Email: "AliKareem@hotmail.com", password: "1234",phoneNumber: 013224644, age: 49 , weight: 86 , BloodType: "O+" },
     { UserID: 5, Role: "donor",UserFirstName: "Ahmed",UserSecondName: "Shokry", Email: "AShokri7@gmail.com", password: "1234",phoneNumber: 010253070, age: 21 , weight: 106 , BloodType: "A-" },
     { UserID: 6, Role: "donor",UserFirstName: "Omar",UserSecondName: "Mahmoud", Email: "Omar7ooda@gmail.com", password: "1234",phoneNumber: 011203044, age: 65 , weight: 56 , BloodType: "A+" },
     { UserID: 7, Role: "donor",UserFirstName: "Ahmed",UserSecondName: "Zakria", Email: "AhmedZakareya@gmail.com", password: "1234",phoneNumber: 010263044, age: 59 , weight: 73 , BloodType: "B-" },
     { UserID: 8, Role: "donor",UserFirstName: "Loai",UserSecondName: "Ragi", Email: "LoaiRag69@yahoo.com", password: "1234",phoneNumber: 011103044, age: 37 , weight: 93 , BloodType: "O-" },
     { UserID: 9, Role: "donor",UserFirstName: "Zahra",UserSecondName: "Adel", Email: "Zahrazozo@gmail.com", password: "1234",phoneNumber: 012207044, age: 61 , weight: 80 , BloodType: "AB+" }
       
       ];
       db.collection("Donor").insertMany(donorobj, function(err, res) {  
        if (err) throw err;  
        console.log("record/s inserted");  
  
        });
    var adminobj =[
        { AdminID: 11, UserFirstName: "Eman",UserSecondName: "Samy", Email: "EmanSamy79@gmail.com", password: "1234",phoneNumber: 0104203044},
        { AdminID: 21, UserFirstName: "Adham",UserSecondName: "Ahmed", Email: "AdhamAhmed@gmail.com", password: "1234",phoneNumber: 01320673044},
        { AdminID: 31, UserFirstName: "Omar",UserSecondName: "Haitham", Email: "OmarHaitham@yahoo.com", password: "1234",phoneNumber: 0123225304}
       
       ];
       db.collection("Admin").insertMany(adminobj, function(err, res) {  
        if (err) throw err;  
        console.log("record/s inserted");  
  
        });     


        var distributerobj =[
            { DistID: 101, UserFirstName: "Mai",UserSecondName: "Omar", Email: "Maioya@gmail.com", password: "1234",phoneNumber: 0104203044},
            { DistID: 201, UserFirstName: "Adham",UserSecondName: "Hamdy", Email: "HamdiAdham@gmail.com", password: "1234",phoneNumber: 01320673044},
            { DistID: 301, UserFirstName: "Omar",UserSecondName: "Karim", Email: "Omarkarem@yahoo.com", password: "1234",phoneNumber: 0123225304}
           
           ];
           db.collection("Distributer").insertMany(distributerobj, function(err, res) {  
            if (err) throw err;  
            console.log("record/s inserted");  
           
            });        
            var collectorobj =[
                { CollectorID: 111, UserFirstName: "Lamya",UserSecondName: "Omar", Email: "Maioya@gmail.com", password: "1234",phoneNumber: 0104203044},
                { CollectorID: 211, UserFirstName: "David",UserSecondName: "Fahmy", Email: "DavidFahmi@gmail.com", password: "1234",phoneNumber: 01320673044},
                { CollectorID: 311, UserFirstName: "Katy",UserSecondName: "Milad", Email: "KatyMilad@yahoo.com", password: "1234",phoneNumber: 0123225304}
               
               ];
               db.collection("Collector").insertMany(collectorobj, function(err, res) {  
                if (err) throw err;  
                console.log("record/s inserted");  
                db.close();  
                });            
    });  
          