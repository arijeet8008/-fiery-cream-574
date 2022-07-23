let videos = [
    {
        link:"https://www.dnaindia.com/india/video-shocking-on-camera-speeding-ambulance-crashes-into-toll-plaza-in-karnataka-2970142",
        title:"SHOCKING: On camera speeding ambulance crashes into toll plaza in Karnataka",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523851-20thumbnail1800406.jpeg",
        description:"An ambulance carrying a patient and two attendants lost control and crashed into a toll booth in Karnataka's Udupi district today. Tragic accident left four people injured. The incident took place at toll plaza near Kundapura Taluk district.",
    },
    {
        link:"https://www.dnaindia.com/india/video-sidhu-moose-wala-murder-4-hour-long-encounter-2-gangsters-killed-2970141",
        title:"Sidhu Moose Wala Murder: 4-hour long encounter, 2 gangsters killed",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523850-20thumbnail1800403.jpeg",
        description:"Two gangsters involved in Sidhu Moosewala murder killed in shootout near Amritsar. A fierce encounter broke out between Punjab Police and two gangsters suspected to have played a role in the killing of singer Sidhu Moosewala.",
    },
    {
        link:"https://www.dnaindia.com/entertainment/video-shamshera-a-candid-chat-with-actors-ranbir-kapoor-vaani-kapoor-director-karan-malhotra-2970134",
        title:"Shamshera: A candid chat with actors Ranbir Kapoor-Vaani Kapoor, director Karan Malhotra",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523838-20thumbnail1800405.jpeg",
        description:"In a free wheeling chat with DNA, the leading cast of Shamshera, actors Ranbir Kapoor and Vaani Kapoor along with director Karan Malhotra spoke about their larger-than-life movie that hits theatres on July 22. The trio spoke about the film’s budget, how much box office numbers matter. Meanwhile, Karan also spoke about how Ranbir convinced him to let him do a double role in the film. Listen in.",
    },
    {
        link:"https://www.dnaindia.com/entertainment/video-netflix-loses-nearly-1-million-subscribers-but-stays-positive-2970131",
        title:"Netflix loses nearly 1 million subscribers but stays positive",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523835-20thumbnail1800404.jpeg",
        description:"Netflix is losing subscribers for the second quarter in a row. Streaming giant battles fierce competition and plateauing demand. But hopes for the better next quarters.",
    },
    {
        link:"https://www.dnaindia.com/world/video-on-camera-sinkhole-opens-in-new-york-swallow-van-2970129",
        title:"On camera, sinkhole opens in New York, swallow van",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523833-20thumbnail1800402.jpeg",
        description:"The New York City Department of Environmental Protection responded to the Bronx to investigate the scene. The van was parked and unattended at the time. Another vehicle's wheel could be seen hanging over the opening on the roadway.",
    },
    {
        link:"https://www.dnaindia.com/sports/video-from-shikhar-dhawan-to-rahul-dravid-team-india-participates-in-hey-trend-2970115",
        title:"From Shikhar Dhawan to Rahul Dravid, Team India participates in ‘hey’ trend",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523825-20thumbnail1800400.jpeg",
        description:"The Team India members joined the ‘hey’ trend on social media with a video of them greeting the camera that has gone viral. Shikhar Dhawan took to Instagram to share the video of himself leading the many members including head coach Rahul Dravid joining his players in the fun video.",
    },
    {
        link:"https://www.dnaindia.com/lifestyle/video-inflammatory-diet-linked-with-depression-study-2970112",
        title:"Inflammatory diet linked with depression: Study",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523817-2000000009.jpg",
        description:"A recent study showed a connection between depression, food, and the emergence of frailty. This study was published in The Journal of Gerontology: Medical Sciences. Affecting 10-15 per cent of older persons, frailty is characterised as an identifiable state of heightened vulnerability brought on by a loss in function across several physiological systems. It frequently co-occurs with other medical problems, such as depression. Affecting 10-15 per cent of older persons, frailty is characterised as an identifiable state of heightened vulnerability brought on by a loss in function across several physiological systems. It frequently co-occurs with other medical problems, such as depression. The development of frailty is thought to be significantly influenced by diet. This is one of the first studies to attempt to understand the relationship between dietary inflammation and frailty and depression. According to the exploratory data, middle-aged and older persons who consume a pro-inflammatory diet are more likely to simultaneously acquire frailty and depression symptoms than they are to do so separately.",
    },
    {
        link:"https://www.dnaindia.com/india/video-vice-president-venkaiah-naidu-meets-four-african-leaders-over-lunch-at-hyderabad-house-2970110",
        title:"Vice President Venkaiah Naidu meets four African leaders over lunch at Hyderabad House",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523815-2000000009.jpg",
        description:"Vice President M Venkaiah Naidu met four African leaders over lunch at Hyderabad House in Delhi on July 19. Venkaiah Naidu met Gambian VP Badara A Joof and Mauritius VP Marie Cyril Eddy Boissezon. He also met Zambian VP WK Mutale Nalumango and Namibian Deputy Prime Minister Netumbo N Ndaitwah.",
    },
    {
        link:"https://www.dnaindia.com/india/video-speaker-om-birla-recognises-rahul-shewale-as-shiv-sena-leader-in-lok-sabha-2970108",
        title:"Speaker Om Birla recognises Rahul Shewale as Shiv Sena leader in Lok Sabha",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523814-2000000010.jpg",
        description:"Lok Sabha Speaker Om Birla on July 19 recognised Rahul Shewale as the floor leader of the party in the lower house. This came after 12 of the 19 Shiv Sena Members of Parliament (MPs) in the Lok Sabha including Maharashtra Chief Minister Eknath Shinde’s son Shrikant Shinde, requested the Speaker for the change. Speaking to ANI Shiv Sena (Shinde faction) leader Rahul Shewale said, “Many MPs were upset with the work of the internal group leader Vinayak Raut so we had written to the Speaker to change the group leader. The Speaker will take action on this. Our chief whip will be the same, there will be no change.”",
    },
    {
        link:"https://www.dnaindia.com/india/video-ed-arrests-jharkhand-cm-s-aide-pankaj-mishra-in-illegal-mining-case-2970107",
        title:"ED arrests Jharkhand CM’s aide Pankaj Mishra in illegal mining case",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523811-2000000006.jpg",
        description:"The Enforcement Directorate (ED) on July 19 arrested Pankaj Mishra, a close aide of Jharkhand Chief Minister Hemant Soren, in an illegal mining case. He has been taken to a special PMLA court. Mishra was arrested under the Prevention of Money Laundering Act (PMLA), 2002. The move comes days after the agency seized cash amounting to Rs 11.88 crore lying in 37 bank accounts belonging to Mishra in the case. The seized amount belonged to Mishra, one Dahoo Yadav and their associates.",
    }

    
]
    

function append(){
   let container = document.getElementById("center");
    videos.forEach(element => {
        
        let img = document.createElement("img");
        img.src = element.image;

        let t = document.createElement("h2");
        t.innerText = element.title;
      

        let  div = document.createElement("div");
        div.setAttribute("id","news")
        div.onclick = () => {
            savePhoto1(element);
        }
        

        div.append(t,img);
        container.append(div);

    });      
}
append()

let savePhoto1 = (data) => {
    localStorage.setItem("Photo", JSON.stringify(data));
    window.location.href = "video.html";
};
