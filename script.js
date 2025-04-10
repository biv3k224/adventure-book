document.addEventListener('DOMContentLoaded', function() {
    // Hide loader after 2 seconds
    setTimeout(() => {
        document.querySelector('.loader').classList.add('fade-out');
    }, 2000);

    // Create floating hearts in header
    createHearts();
    
    // Sample data - replace with your actual memories
    const memories = [
        {
            date: "April 09, 2023",
            title: "Our First Talk",
            description: "After our bumble match on April 06, we stopped talking but after 3 days but I decided to reply your story and it was the best decision. You looked so pretty 😍 ",
            image: "pictures/image1.jpg",
            side: "left"
        },
        {
            date: "April 11, 2023",
            title: "Our first date",
            description: "Our first date after a week, we talked in snapchat. We went to ming's bubble tea, you ordered a bad drink :D but you looked so cute with the black tshirt and pink skirt in your big rav4. I was 1 hour late because of my first driving experience in highway.",
            image: "pictures/image2.jpg",
            side: "right"
        },
        {
            date: "April 12, 2023",
            title: "Our park date",
            description: "Our park date after our first date, we went to the park I gave you Nepali cheetos(kurkure), I told you that we eat goat and you were so sad but you looked so cute and beautiful.",
            image: "pictures/image3.jpg",
            side: "left"
        },
        {
            date: "April 18, 2023",
            title: "Our first sleepover",
            description: "Our first sleepover, last time we met at a park in between where i gifted you a squishmallow and we kissed for the first time which was awkward. But during our sleepover i looked you all night and just praised how beautiful were you, You were just gorgeous like a piece from heaven.",
            image: "pictures/image4.JPG",
            side: "right"
        },
        {
            date: "April 19, 2023",
            title: "You with your cute squishmallow",
            description: "You sent me a snap with the squishmallow i got for you, you looked so cute with the squishmallow and your outfit matched. I still couldn't process your obsession with the squishmallows 😂. ",
            image: "pictures/image5.JPG",
            side: "left"
        },
        {
            date: "April 26, 2023",
            title: "Official Dating started",
            description: "Our official date of dating a very special date for me as I got my US visa on the same day one year ago, we played my first UNO, made out and went to bed. I am sorry i didn't understood the hint and couldn't propose but you proposed me first but i fell so hard for you. I still can't process how beautiful you were.🥺 ",
            image: "pictures/image6.JPG",
            side: "right"
        },
        {
            date: "May 08, 2023",
            title: "Plum Creek Park Date",
            description: "Our park date after we officially started dating, we got chipotle and bubble tea and by this time we have shared so much things, you started calling me your honeybee and I called you mayalu. Your mom thought i was a murderer😂 and you sent me a voice note saying your dad was surpirsed i flew all this way just to be in OHIO.",
            image: "pictures/image7.JPG",
            side: "left"
        },
        {
            date: "May 23, 2023",
            title: "Our First IceCream Date",
            description: "Our first ice cream date in Handels near Akron, I was late to go to my sister house but still we spent a good time together and enjoyed each and every moment together and talked a lot. You looked so gorgeous the love of my ife.",
            image: "pictures/image8.JPG",
            side: "right"
        },
        {
            date: "May 30, 2023",
            title: "Our NYC trip proposal",
            description: "We met at a chick fil a place at akron, we talked and planned about our NYC trip in August, we were so excited for my dream city and your first airplane experience. You liked my tshirt so much that you decided to keep it with you.",
            image: "pictures/image9.jpg",
            side: "left"
        },
        {
            date: "June 14, 2023",
            title: "Our Cleveland Trip",
            description: "Our Cleveland trip, I drove to Medina for the first time and met with Pixie, sadly smedley had already passed away by this time. It was a fun day we sit on the grass nearby beach and stared at the city talked about life, our dreams and our future plan.",
            image: "pictures/image10.JPG",
            side: "right"
        },
        {
            date: "June 20, 2023",
            title: "Our usual dating spot",
            description: "The summer has oficially began, we found our favorite dating spot by now and we always went here the Gorge Metro Park. Even though, Ohio was boring you made every moment exciting for me, You are the best person I ever met.",
            image: "pictures/image11.jpg",
            side: "left"
        },
        {
            date: "July 04, 2023",
            title: "Our first July 4th",
            description: "Our first July 4th together, You looked so gorgeous on the pink dress and your pink mini bag. You wanted to see the fireworks and kiss but I had work that day, I couldn't made it, I am sorry Baby, But I really love you mayalu <3",
            image: "pictures/image12.jpg",
            side: "right"
        },
        {
            date: "July 25, 2023",
            title: "Our last date before NYC",
            description: "The final planning and last date before our NYC trip. We ate Chick-Fil-A and went to gamestop as well as Ross for some shopping. We had very much fun and our final plan before our trip.",
            image: "pictures/image13.jpg",
            side: "left"
        },
        {
            date: "August 02, 2023",
            title: "Finally NYC trip",
            description: "The first day of our NYC trip, I met Eddie, he was a cool guy and dropped us to the airport. It was my dream to go to NYC and your first airplane experience, I still remember how excited you were and all those excitement in your eyes.",
            image: "pictures/image14.JPG",
            side: "right"
        },
        {
            date: "August 02, 2023",
            title: "Our first day in NYC",
            description: "We went to our Air BnB, our first subway experience, those big buildings, the crowded city and our bubble tea date. We took a walk on brooklyn bridge and I remember you broke my phone, I wasn't mad at you because I was madly in Love with you and it was a great memory I will remember my whole life.",
            image: "pictures/image15.jpg",
            side: "left"
        },
        {
            date: "August 05, 2023",
            title: "Summit One Vanderbilt",
            description: "The best one week I ever lived, we went to the tall building, got so much Nepali food, cycling at the park, our rooftop movie, rooftop bus experience, missing out subway, finding a Nepali people at 7/11 in midnight. I enjoyed each and every moment, I enjoyed all the smile and happiness in your face.",
            image: "pictures/image16.jpg",
            side: "right"
        },
        {
            date: "August 06, 2023",
            title: "The Dream Times Square",
            description: "Finally lived my dream in Time Square with my Dream girl. By this time we have experienced so much things, times square, trying so many foods, knowing more and more about each other, loving more and more, cruise trip sadly i couldn't show you dolphins.",
            image: "pictures/image17.jpg",
            side: "left"
        },
        {
            date: "October 01, 2023",
            title: "Trip to Niagra falls",
            description: "Time Flies!! we have been dating for 5 months now baby, I really love you so much. Our trip to Niagra falls in your Rav4 and had Nepali food. It was so fun we went on a boat and enjoyed the date so much, I just can't believe how much I love you nautanki.",
            image: "pictures/image18.JPG",
            side: "right"
        },
        {
            date: "October 16, 2023",
            title: "Official meet with Arati",
            description: "One of the big day for my sister Arati and Dhruvin. We drove through the Pittsburgh downtown, it was very frustrating but we made it safely. We went to the dinner later and I gave you my Overcoat, You looked so beautiful, I got my first thought of our marriage that day.",
            image: "pictures/image19.jpg",
            side: "left"
        },
        {
            date: "October 24, 2023",
            title: "Our First Dashain",
            description: "Our first dashain together, we had so much fun teaching you about my culture and our biggest festival. You looked so gorgeous in that dress, I wish i could see you more on that dress, We look so great together a couple made in heaven just perfect for each other.",
            image: "pictures/image20.jpg",
            side: "right"
        },
        {
            date: "January 02, 2024",
            title: "Drive to Pittsburgh",
            description: "First time driving to Arati's new house in Pittsburgh, we watched movie, had ice cream and went to a view point at night, It was so much fun with crazy experience.",
            image: "pictures/image21.jpg",
            side: "left"
        },
        {
            date: "February 14, 2024",
            title: "First Valentine Day",
            description: "Not only our first Valentine day, but my life's first Valentine day with the girl of my Dreams. I am really in love with you, mad for you and so much garchu you. We went to Buffalo wild wings and also our first bowling date as well it was so much fun I enjoyed each and every second.",
            image: "pictures/image22.jpg",
            side: "right"
        },
        {
            date: "May 16, 2024",
            title: "Date after I came from Nepal",
            description: "I couldn't believe how fast time went, we have been dating for one year, so much things happened in this time frame I went back to Nepal because of my mom accident, my birthday passed, our sleepovers, our second summer together, but one thing that never changed is my Love towards you. I am so deeply in love with you.",
            image: "pictures/image23.jpg",
            side: "left"
        },
        {
            date: "May 30, 2024",
            title: "First Cedar Point",
            description: "Cedar Point- My baby's obsession and I got to experience it for the first time with my baby. It was magical, even tho I was scared but holding your hand and sitting in the scary rides gave me enough confidence to sit on the ride, Also, that day I sent this picture to my mom and she said you are so beautiful. I saw camel for the first time in my life.",
            image: "pictures/image24.jpg",
            side: "right"
        },
        {
            date: "November 28, 2024",
            title: "Our First Thanksgiving",
            description: "First Thanksgiving with your family, I feel so included with the good food and food coma afterwards, The Lemon Pie from Dave was so tasty. We looked so cute in this pictures clicked by your mom.",
            image: "pictures/image25.jpg",
            side: "left"
        }

    ];

    // Populate floating photos in intro section
    populateFloatingPhotos(memories);
    
    // Create timeline entries
    createTimeline(memories);
    
    // Set up image modal functionality
    setupImageModal();
    
    // Set up scroll animations
    setupScrollAnimations();
    
    // Set up letter functionality
    setupLetter();
});

function createHearts() {
    const container = document.querySelector('.hearts-container');
    const heartCount = 20;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-bg');
        
        // Random properties for each heart
        const size = Math.random() * 20 + 10;
        const duration = Math.random() * 5 + 5;
        const delay = Math.random() * 5;
        const left = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.3;
        
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${left}%`;
        heart.style.opacity = opacity;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${delay}s`;
        
        container.appendChild(heart);
    }
}

function populateFloatingPhotos(memories) {
    const container = document.querySelector('.floating-photos');
    
    // Use the first few memories for the floating photos
    const floatingPhotos = memories.slice(0, 3);
    
    floatingPhotos.forEach((memory, index) => {
        const img = document.createElement('img');
        img.src = memory.image;
        img.alt = memory.title;
        img.style.animationDelay = `${index * 0.5}s`;
        container.appendChild(img);
    });
}

function createTimeline(memories) {
    const timeline = document.querySelector('.timeline');
    
    memories.forEach((memory, index) => {
        const memoryElement = document.createElement('div');
        memoryElement.classList.add('memory', memory.side);
        
        memoryElement.innerHTML = `
            <div class="memory-content">
                <h2>${memory.title}</h2>
                <div class="date">${memory.date}</div>
                <p>${memory.description}</p>
                <img src="${memory.image}" alt="${memory.title}">
            </div>
        `;
        
        timeline.appendChild(memoryElement);
        
        // Add animation delay based on index
        memoryElement.style.transitionDelay = `${index * 0.2}s`;
    });
}

function setupImageModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <span class="close">&times;</span>
        <div class="modal-content">
            <img class="modal-image" src="" alt="">
            <div class="modal-caption"></div>
        </div>
    `;
    document.body.appendChild(modal);
    
    const modalImg = modal.querySelector('.modal-image');
    const modalCaption = modal.querySelector('.modal-caption');
    const closeBtn = modal.querySelector('.close');
    
    // Add click event to all memory images
    document.querySelectorAll('.memory-content img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            modalCaption.textContent = this.alt;
        });
    });
    
    // Close modal when clicking X
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });
    
    // Close modal when clicking outside image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

function setupScrollAnimations() {
    const memoryElements = document.querySelectorAll('.memory');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    memoryElements.forEach(memory => {
        observer.observe(memory);
    });
}

function setupLetter() {
    const letterIcon = document.querySelector('.letter-icon');
    const letterModal = document.querySelector('.letter-modal');
    const closeLetter = document.querySelector('.close-letter');
    
    // Open letter with animation
    letterIcon.addEventListener('click', () => {
        letterModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Trigger animations
        setTimeout(() => {
            letterModal.classList.add('show');
        }, 10);
    });
    
    // Close letter with animation
    closeLetter.addEventListener('click', () => {
        letterModal.classList.remove('show');
        
        setTimeout(() => {
            letterModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    });
    
    // Close when clicking outside
    letterModal.addEventListener('click', (e) => {
        if (e.target === letterModal) {
            letterModal.classList.remove('show');
            
            setTimeout(() => {
                letterModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }
    });
}