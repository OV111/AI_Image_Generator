const darkModeBtn = document.getElementById("darkmode");
const themeToggle = document.querySelector(".theme-toggle");


const textArea = document.querySelector(".text-area");
const promptBtn = document.querySelector(".prompt-btn");


const generateBtn = document.getElementById("generateButton");
const selectModel = document.getElementById("selectModel");
const imageCount = document.getElementById("imageCount");
const aspectRatio = document.getElementById("aspectRatio");

const propmtExamples = [
  "A magic forest with glowing plants and fairy homes among giant mushrooms:",
  "An old steampunk airship floating through golden clouds at sunset:",
  "A future Mars colony with glass domes and gardens against red mountains:",
  "A dragon sleeping on gold coins in a crystal cave:",
  "An underwater kingdom with merpeople and glowing coral buildings:",
  "A floating island with waterfalls pouring into clouds below:",
  "A witch's cottage in fall with magic herbs in the garden:",
  "A robot painting in a sunny studio with art supplies around it:",
  "A magical library with floating glowing books and spiral staircases:",
  "A Japanese shrine during cherry blossom season with lanterns and misty mountains:",
  "A cosmic beach with glowing sand and an aurora in the night sky:",
  "A medieval marketplace with colorful tents and street performers:",
  "A cyberpunk city with neon signs and flying cars at night:",
  "A peaceful bamboo forest with a hidden ancient temple:",
  "A giant turtle carrying a village on its back in the ocean:",
  "A hidden door in a tree trunk leading to a fairy village:",
  "A pirate ship sailing through the sky with giant sails:",
  "A snowy owl delivering letters in a magical forest:",
  "A city made entirely of crystal under a full moon:",
  "A neon-lit street in a rainy futuristic Tokyo:",
  "A cat wearing wizard robes casting a spell:",
  "A spaceship hovering above ancient pyramids at dusk:",
  "A surreal dreamscape with floating clocks and melting buildings:",
  "A knight riding a fire-breathing lion across a desert:",
  "An alien carnival with colorful lights and strange rides:",
  "A futuristic garden with robotic bees and levitating plants:",
  "A haunted mansion with glowing windows and stormy skies:",
  "A cozy hobbit-style kitchen with warm light and herbs hanging:",
  "A magical tea shop floating in the clouds with flying teapots:",
  "A painter standing in front of a canvas that paints itself:",
  "A flying whale with lanterns hanging from its fins in the sky:",
  "An enchanted waterfall that flows upward into the stars:",
  "A secret underwater cave with glowing jellyfish and ruins:",
  "A desert caravan crossing glowing dunes under twin moons:",
  "A child riding a giant firefly through a twilight forest:",
  "A robot gardener tending to flowers in a post-apocalyptic world:",
  "A frozen city with ice bridges and glowing crystal towers:",
  "A steam-powered train rushing through the sky with rainbow smoke:",
  "A dragon made of clouds coiling through mountain peaks:",
  "A moonlit field full of bioluminescent mushrooms and foxes:",
];


promptBtn.addEventListener("click", () => {
    let example = propmtExamples[Math.floor(Math.random() * propmtExamples.length)];
    textArea.value = example;
});

darkModeBtn.addEventListener("click", () => {
    const isDarkTheme = document.body.classList.toggle("dark-theme");
    themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon"; 
    themeToggle.style.backgroundColor = isDarkTheme ? "#7370a2":  "rgb(207, 205, 205)"; 
    // localStorage.setItem("theme", isDarkTheme ? "dark":"light");
});