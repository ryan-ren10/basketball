/* name, age, position, skill, team, pts, reb, ast*/
dataSet = [
    ["Jeremy Lin", 33, "PG", "NBA", "Raptors", 11.6, 2.8, 4.3],
    ["Michael Wang", 21, "PF", "College", "Penn", 6.4, 2.1, 1.3],
    ["More Free", 33, "PG", "Other", "Streetball", "??", "??", "??"],
    ["Fanbo Zeng", 19, "SF", "NBA", "Ignite", 3.8, 1.4, 0.8],
    ["Kevin Zhang", 23, "PF", "College", "Tulane", 5.8, 2.3, 0.6],
    ["Yi Jianlian", 34, "C", "NBA", "Lakers", 7.9, 4.9, 0.7],
    ["Guo Ailun", 28, "SG", "Other", "Leopards", 21.5, 3.7, 6.5],
    ["Jinqiu Hu", 24, "C", "Other", "China", 18.1, 8.3, 0.8],
    ["Yao Ming", 41, "C", "NBA", "Rockets", 19.0, 9.2, 1.6]
]

//since the select option value attribute are young, middle, and old, I matched and
//represented the age in dataSet with dataValues, where young is 18-24, middle is 25-31, and old is 32-41
dataValues = ["old", "young", "old", "young", "young", "old", "middle", "young", "old"];

//function to find player in photo gallery when search bar button is clicked 
function findPlayer() {
    //get string value entered in the search bar
    player_name = document.getElementById("searchPlayer").value;

    //for loop that goes through dataSet that ultimately will determine which player was selected  
    for (let i = 0; i < dataSet.length; i++) {
        //player name in dataSet
        dataName = dataSet[i][0];
        //split player first and last name into array, gets rid of space
        myArray = dataName.split(" ");
        //if statement to see if searched string does not match player name in dataset
        if (dataName.toUpperCase() != player_name.toUpperCase()) {
            //if searched value does not match dataSet player name, grey and blur the player's image in the photo gallery 
            document.getElementById(myArray[0] + myArray[1]).style.filter = 'blur(3px) grayscale(1)';
        }
        //if searched value does match player name in dataset
        else if (dataName.toUpperCase() == player_name.toUpperCase()) {
            //set the corresponding player image in photo gallery to zero blur and full color 
            document.getElementById(myArray[0] + myArray[1]).style.filter = 'blur(0px) grayscale(0)';
        }

    }

}
//function that will filter the photo gallery players based off of the dropdown options selected, invoked when the filter button is called
function filterAll() {
    //get the age value from the age dropdown, position value from position dropdown, and skill value from skill dropdown
    age_val = document.getElementById("age").value;
    pos_val = document.getElementById("position").value;
    skill_val = document.getElementById("skill").value;
    //for loop going through dataSet 
    for (let i = 0; i < dataSet.length; i++) {
        //define dataSet variables:
        dataName = dataSet[i][0]; // player name 
        dataPosition = dataSet[i][2]; //position
        dataSkill = dataSet[i][3]; //player skill
        let checks = 0; ///checks int variable
        //check if age value is all in dropdown
        if (age_val == "all") {
            // add 1 to checks
            checks += 1;
        }
        else {
            //if drodown is not all, check if the age dropdown option matches dataSet player age through dataValues 
            if (dataValues[i] == age_val) {
                // if age matches, add 1 to checks 
                checks += 1;
            }
        }
        if (pos_val == "all") { //check if dropdown option is all for position
            checks += 1; //add 1 to checks 
        }
        else {
            //if position val not all, check if position value in dropdown matches dataSet position val 
            if (dataPosition == pos_val) {
                checks += 1; //if position is same, add 1 to checks 
            }
        }
        if (skill_val == "all") {//if dropdown skill value is all
            checks += 1;//add 1 to checks 
        }
        else {
            if (dataSkill == skill_val) {//if dropdown not all, check if dataSet skill value matches the dropdown skill value 
                checks += 1;//if skill value is same, add 1 to checks 
            }
        }
        //delete space in name to match photo ID
        namee = dataName.replace(' ', '');
        //reset the photo image to full color and no blur in the case it matches all criteria 
        document.getElementById(namee).style.filter = 'blur(0px) grayscale(0)';
        //if checks is less than three(meaning the 3 dropdown value criteria weren't met)
        if (checks < 3) {
            document.getElementById(namee).style.filter = 'blur(3px) grayscale(1)';//blur and grey the image

        }
    }
}


function resetAll(){
    for(let i = 0; i<dataSet.length; i++){
        namee = dataSet[i][0].replace(' ','');
        document.getElementById(namee).style.filter = 'blur(0px) grayscale(0)';
    }
    document.getElementById('age').selectedIndex = "0";
    document.getElementById('position').selectedIndex = "0";
    document.getElementById('skill').selectedIndex = "0";
}

//list containing each embed youtube link for each player, listed in same player order as dataSet 
vidSrc = [
    'https://www.youtube.com/embed/m3A6wJBZ7hE',
    'https://www.youtube.com/embed/fV8FzMlm_Iw',
    'https://www.youtube.com/embed/mYluG-dbEs8',
    'https://www.youtube.com/embed/rT2Uk_mKijk',
    'https://www.youtube.com/embed/zBssL5EW1CM',
    'https://www.youtube.com/embed/J8pf2y5ERh8',
    'https://www.youtube.com/embed/bysC_1Z5bzE',
    'https://www.youtube.com/embed/CeRxVNg34to',
    'https://www.youtube.com/embed/Ve3H4tYj47c'
]
//function to update player info on RS of site depending on what image is clicked in photo gallery on LS
function updateInfo(imgName) { // parameter is the unique ID of each image
    //for loop through dataSet 
    for(let i = 0; i<dataSet.length; i++){
        console.log(imgName);
        namee2 = dataSet[i][0].replace(' ','');//get rid of space in player name in dataSet so it is one word
        console.log(namee2);
        console.log(namee2 == imgName);
        //if namee2 is equal to image ID
        if (namee2 == imgName) {
            srcName = dataSet[i][0] + ".jpg";//concatenate player image src
            document.getElementById("playerHeader").innerHTML = dataSet[i][0];//change header in RS info section to chosen player name
            document.getElementById("playerImage").src = srcName;//change image src in RS to srcName 
            document.getElementById("vid").src = vidSrc[i];//change video src to chosen player's video by using vidSrc 
            document.getElementById("ageVal").innerHTML = dataSet[i][1];//change age stat to correct value 
            document.getElementById("posVal").innerHTML = dataSet[i][2];//change position stat to correct value
            document.getElementById("lgVal").innerHTML = dataSet[i][3];//change league stat to correct value 
            document.getElementById("teamVal").innerHTML = dataSet[i][4];//change team stat to correct value
            document.getElementById("ptDot").innerHTML = dataSet[i][5];//change pt stat to correct value
            document.getElementById("rebDot").innerHTML = dataSet[i][6];//change reb stat to correct value
            document.getElementById("astDot").innerHTML = dataSet[i][7];//change ast stat to correct value
            break//since clicked player is found and info has been changed, break for loop
        }

    }
}
