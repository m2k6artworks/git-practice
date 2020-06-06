var article1 = "Cyberpunk 2077 is an upcoming role-playing video game developed and published by CD Projekt. It is scheduled to be released for Microsoft Windows, PlayStation 4, Stadia, and Xbox One on 17 September 2020. Adapted from the Cyberpunk franchise, it takes place in dystopian Night City, an open world with six distinct regions. Players assume the role of V, a customisable mercenary, in a first-person perspective, acquiring skills in hacking and machinery, an arsenal of ranged weapons, and options for melee combat. Both lethal and non-lethal playthroughs are possible."
var article2 = "CD Projekt Red's latest offering, Cyberpunk 2077, will be available this fall. This highly anticipated open-world immersive sim was originally teased seven years ago. It is one of the first major new IP's releasing this decade, and it's expected to be a contender for the title of biggest video game of 2020. Players will control V, a technologically enhanced delinquent and gun for hire, as they explore the fictional Night City, California in search of a mod that grants immortality. Along the way, V will take part in various quests given to them by Fixers, engage in combat either on foot or by way of automated transportation and customize their personage with various cyberware."

function changeimg0() 
{
	document.getElementById('img').src='img/img1.jpg';
}

function changeimg1() 
{
	document.getElementById('img').src='img/img2.jpg';
}

function changeimg2() 
{
	document.getElementById('img').src='img/img3.jpg';
}

function changeimg3() 
{
	document.getElementById('img').src='img/img4.jpg';
}

function changearticle()
{
	var tombol = document.getElementById('button4'); 
	if (tombol.innerHTML.match("Next Article")) 
	{
      	document.getElementById("article").innerHTML = article1;
		document.getElementById("article").style = 'text-align: left;';
		document.getElementById("button4").innerHTML = 'Previous Article';
    }
    else 
    {
        document.getElementById("article").innerHTML = article2;
		document.getElementById("article").style = 'text-align: justify;';
		document.getElementById("button4").innerHTML = 'Next Article';
    }
}