//use "zenclassprogram",


dbs.zenclassprogram.insertMany[
    {
        "name" : "Anbu",
        "batch":"b43WD",
         "task": 80,
      "Mentor": "sanjay",
    "experience": 5,
    "companyplaced": "Aktech",
    "Companydrive":"oct15",
    
      
    },
    {
        "name" : "Aravinth",
    "batch": "b42WD",
    "Mentor": "Raghul",
        "mentorexperience": 4,
        "task":70, 
    "companyplaced": "Mktech",
    "Companydrive":"oct20",
    },
    {
        "name" : "Chandru",
    "batch": "b47WD",
    "Mentor": "Ajeeth",
        "Mentorexperience": 3,
        "task":65,
    "companyplaced": "Sktech",
    "Companydrive":"oct27",
    },
    {
        "name" : "Dinesh",
    "batch": "b45WD",
    "Mentor": "sanjay",
        "Mentorexperience": 2,
        "task":50,
       
    },
    {
        "name" : "Kalaivani",
    "batch": "b43WD",
    "Mentor": "Raghul",
        "Mentorexperience": 1,
        "task":95,
     "companyplaced": "Aktech",
    "Companydrive":"oct15",
    },
{
    "oct": "Topics-Html",
    "Nov": "Topics-CSS",
    "Dec": "Topics-JS",
    "Jan": "Topics-React",
    "Feb":"Topics-Node",
    
    },
    {
    

    }
]
db.zenclassprogram.find({ oct: "Topics-Html" })
db.zenclassprogram.find({ mentorexperience: { $lt1, $gt3 } })
db.zenclassprogram.find().sort({ Companydrive: { $gt15, $lt31 } })
db.zenclassprogram.find().array.forEach(function (task) {
    print (`task${task}`)
    
});
db.zenclassprogram.aggregate([
    {
        $lookup: {
            from: "zenclassprogram",
            localfield: 'CompanyDrive',
            foreignfield: "Companyplaced",
            as:"student-list",
        }
    }
])
   
