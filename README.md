# FRYO-FRYO_SCDFXIBM

# Team FRYO

## Members:
#### Muskaan:
Muskaan is 17 and loves to read and enjoys experimentation and learning new things. She prides herself on her knack for writing and is undeniably a potterhead. Having been in the student council for two consecutive years in her previous school, Muskaan revels in her ability to organize events and communicate effectively.  Her problem solving approach has helped her ace two international trade challenges. She strongly believes this idea of a flood relief system can aid Singapore in becoming better equipped at dealing with flood emergencies.

#### Shalini:
Shalini is a student at GIIS Singapore. She enjoys playing football and prefers to maintain and organise things in any aspect of her student life. She likes taking up activities which stimulate her imagination and creativity, for example reading. She took up the SCDF innovator’s challenge because It would encourage her to think outside the box and along the way enable her to come up with technological solutions that might help save lives in the future. 

#### Siddarth:
Siddarth is a coder at heart. He loves playing around with computers and coding new applications. Besides coding, he also enjoys playing the guitar, playing video games and can solve a Rubik’s cube in about 20 seconds. My goal is to entertain people in new and unique ways and make the world a better place.

#### Utkarsh:
Utkarsh is extremely passionate about STEM, especially math and physics. He prides himself on his ability to play almost everything including online games. He’s also an avid reader. He has been the Winner of International Science Olympiad by Silverzone holding the 1st International rank and has been a Qualifier for science seminar held by Satyendra Nath Bose National Centre Science for Basic Science. He has also qualified for the Conscious Youth Challenge
By The Conscious Living. The high risks of flood in lower coastal areas that threaten the civilian population reminds him of the uncertainty of life. He believes that we must always be prepared and is therefore, onboard Team FRYO!

#### Mahek:  
Mahek has a strong academic background evidenced by her diverse aptitude in literature and physics. Her involvement in youth leadership programs has led her to gain insights from experienced individuals. Having held leadership positions in multiple projects such as Project FoodTree, GIIS Sustainability Talks podcast as well as heading the Climate Action club, she believes in the power of experience. The prospects and applications of AI in the future intrigue her and she loves to trod down the path of exploration to educate herself more through challenges like these. She finds the FRYO solution promising and wishes to support the cause of better disaster management in Singapore.

## Meaning of FRYO:
FRYO is an acronym for Flood Relief Youth Operations which successfully summarizes the team’s aim of providing assistance to people in flood prone areas by modelling a technological solution to tackle the problem of flash floods in Singapore. 

It also refers to an internal joke among the team mates which corresponds to the answer to the deductive statement: ‘A group of three is considered a trio, then a group of five should be fryo.’ 

## The problem we're tackling:
There has been a steady increase in the number of flash flood events in Singapore. Flash floods are most often caused by heavy or excessive precipitation in a short period of time. In such a situation, technology can be put to use by alerting people in the flooded regions (and people in nearby areas) about the risen water levels and suggesting the safest routes out of those regions. 

Our proposed software FRYO (Flood Relief Youth Operation) aims to promote flash flood preparedness by:
1. Sending alert messages to people in flooded regions (their locations determined by end-to-end encrypted GPS trackers)
2. Suggesting safe routes out/away from the flooded regions using a combination of  real-time data and historical data
3. Providing guidelines to be followed during flash floods to educate the general public and enhance preparedness on an individual level. 
We hope that through these efforts, the response time is minimised and there’s less requirement for assistance.

## Architecture:
The problem statement we've chosen is:
*How might we leverage technology to better predict and prepare for the foreseeably higher frequency and greater severity of extreme weather events and natural disasters?*

The number of people with access to technology like smartphones is growing by the day, and we must use this to our advantage. Since the majority of the population has smartphones now, and the number of people that don't is reducing, we could use the smartphones as an alert device to give alerts in times of natural disasters.

The threat posed by the prospective increase in rainfall as a result of climate change calls for a multi-faceted solution. The solution that has been generated with the united efforts of all the team members is presented in the form of an app called Flood Relief Youth Operation (FRYO). FRYO addresses the aforementioned problem on three different fronts:

Firstly, if and when the water levels at any location rise beyond the safety threshold, a message - alerting the users of the development - will be sent through an encrypted GPS tracker built within the app. Along with this, by utilizing real-time inputs from PUB installed cameras and water sensors, the app would calibrate the safest route for the vehicles to evacuate low-lying areas as an effort to decrease the response time to floods while simultaneously preventing traffic jams and road accidents. Last but not least, the app would provide guidelines to be followed during floods to educate the general public and prepare them for diverse circumstances. 

This protocol is extremely feasable because we are using existing sensors installed by PUB to get the location of areas that might be prone to floods. There is minimal to no external hardware attachments required and all that would have to change would be on the software side of the sensors. 

However, we do have certain limitations. The first problem we encountered was that some users might not be comfortable with sharing their location actively with the app. To overcome this, we made sure to use an encrypted database so that no one other than the user and the server could read the user's location.

The second limitation is that the safest route is calibrated based on decreasing order of water levels in various locations and not with AI. However, we do plan to overcome this problem by integrating AI using python and making it calibrate the safest route based on other factors like time and reachability.

The third limitation we have is that this is a website and not an app which wouldn't really help in times of natural disaster because people wouldn't go to a website if they were in such a situation. To overcome this, we are planning to turn this website into an app using the framework that we already have built.

## Getting started:
This is a simple web application, so there is no setup required at all. All you have to do is download the code files, go to the public folder and open index.html which will take you to the FRYO webpage. 

To check if you are in the proximity of a potential flood region, all you have to do is click on the button which says 'Click to check flood exposure'. This will tell you if your are in danger of a flood and if you are, the safest route out of that area.

For now, since we do not currently have access to the water level sensors installed by PUB, we currently have fake threat coordinates which are **Latitude: 1.39267** and **Longitude: 103.8221315**. 

To run a test and check if the app actually works, you can change the values of the variables lat and long on lines 37 and 38 respectively in the fryoAlerts.js javascript file to something close to the fake coordinates to see how it would respond if there were an actual threat.

## Tools used
We used html, css and javascript to code the webpage, the built in Geolocation API to find the user's coordinates and Firebase as the back-end database to store the coordinates of both the threat locations and the user's location
