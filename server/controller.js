module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Allow compassion to guide your decisions", 
        "All your hard work will soon pay off", 
        "Gee, you're a smart cookie!", 
        "Cool shirt!", 
        "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
       
      
        res.status(200).send(randomCompliment);
    }

}