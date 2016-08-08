var mongoose = require('mongoose');

var expSchema = new mongoose.Schema(
  {
    type:String, //Work,Travel,Education
    insitution: String, // Waitrose, University of Hertfordshire
    role: String, //Student, Junior Anylast,Backpacker
    description:String,
    expreience:String,
    expTag:[{text:String}],

    logo: String, //the URL of the logo

    started: {type: Date},
    ended: {type: Date},
    hide:Boolean
}
);


//Declare model called User with suerschema
mongoose.model("EXP",expSchema);
