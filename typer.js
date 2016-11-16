var time = 0.000;
var text = [
            "This day is called the feast of Crispian: He that outlives this day, and comes safe home, Will stand a tip-toe when the day is named, And rouse him at the name of Crispian. He that shall live this day, and see old age, Will yearly on the vigil feast his neighbours, And say To-morrow is Saint Crispian: Then will he strip his sleeve and show his scars.",
           
           "The Legend of Zelda is a high-fantasy action-adventure video game series created by Japanese game designers Shigeru Miyamoto and Takashi Tezuka. It is primarily developed and published by Nintendo, although some portable installments have been outsourced to Capcom, Vanpool, and Grezzo. The series' gameplay incorporates elements of action, adventure, and puzzle-solving games. The Legend of Zelda is one of Nintendo's most prominent franchises.",
           
           "After, 3 more days passed. The researchers checked the microphones hourly to make sure they were working, since they thought it impossible that no sound could be coming with 5 people inside. The oxygen consumption in the chamber indicated that all 5 must still be alive. In fact it was the amount of oxygen 5 people would consume at a very heavy level of strenuous exercise.",
           
           "I'm sorry too, Dmitri. I'm very sorry. All right, you're sorrier than I am. But I am sorry as well. I am as sorry as you are, Dmitri. Don't say that you're more sorry than I am because I am capable of being just as sorry as you are. So we're both sorry, all right? All right.",
           
           "We have an almost empty flight, tonight, so feel free to fold the armrests up into the seatbacks and stretch out. You stretch out, zigzag, knees bent, waist bent, elbows bent across three or four seats. I set my watch two hours earlier or three hours later, Pacific, Mountain, Central, or Eastern time; lose an hour, gain an hour. This is your life, and it's ending one minute at a time.",

            "A day may come when the courage of men fails, when we forsake our friends and break all bonds of fellowship, but it is not this day. An hour of wolves and shattered shields, when the age of men comes crashing down, but it is not this day! This day we fight!! By all that you hold dear on this good Earth, I bid you stand, Men of the West!!!",

            "Things have got to change. But first, you've gotta get mad!... You've got to say, 'I'm as mad as hell, and I'm not gonna take this anymore!' Then we'll figure out what to do about the depression and the inflation and the oil crisis. But first, get up out of your chairs, open the window, stick your head out, and yell, and say it: 'I'm as mad as hell, and I'm not gonna take this anymore!",

            "Look at it, a world built on fantasy. Synthetic emotions in the form of pills. Psychological warfare in the form of advertising. Mind altering chemicals in the form of food. Brain washing seminars in the form of media. Controlled isolated bubbles in the form of social networks.",

            "Is this the real life? Is this just fantasy? Caught in a landslide, no escape from reality. Open your eyes, look up to the skies and see. I'm just a poor boy, I need no sympathy, because I'm easy come, easy go, a little high, little low. Anyway the wind blows, doesn't really matter to me, to me."];

var index = Math.floor(Math.random()*text.length);
var words = text[index].split(" ");
document.getElementById("text").innerHTML = "\"" + text[index] + "\"";
var equal = false;
var loop = 0;
document.getElementById("input").value = "";
var checker;
var timeKeeper;
var wpm;
var done = false;

function execute(){
    if(done){
        index = Math.floor(Math.random()*text.length);
        words = text[index].split(" ");
        document.getElementById("text").innerHTML = "\"" + text[index] + "\"";
        done = false;
        document.getElementById("button").innerHTML = "Start!";
    }
    else{
        document.getElementById("input").focus();
        time = 0.000;
        loop = 0;
        checker = setInterval(check,1);
        timeKeeper = setInterval(keepTime, 1);
    }
}

function check(){
    
    document.getElementById("word").innerHTML = words[loop];
    if(document.getElementById("word").innerHTML ===    
        document.getElementById("input").value.replace(/ /g,"")){
        document.getElementById("input").value = "";
        if(loop < words.length-1){
            loop++;
            responsiveVoice.speak(words[loop], "US English Female");
        }
        else{
            done = true;
            clearInterval(timeKeeper);
            clearInterval(checker);
            document.getElementById("word").innerHTML = "Done! ";
            wpm = parseFloat((loop + 1)/(time/60.0));
            document.getElementById("result").innerHTML = Math.round(wpm) + " WPM";
            document.getElementById("button").innerHTML = "Another?";
        }
    }
}

function keepTime(){
    document.getElementById("timer").innerHTML = String(time).substring(0,String(time).indexOf(".") + 4) + " secs";
    time += .004;
}