// This is the configuration file for Kanji startpage. Basic settings are here.

var data = {

    // -------------------------------------------------
    // Greetings config. Change greetings from here

    g1: "おやすみなさい", // From 23:00 to 5:00
    g2: "おはようございます", // Until 12:00
    g3: "こんにちは", // Until 17:00
    g4: "おやすみなさい", // Rest of the time

    // Font size of the greeting
    greeting_fontsize: "40px",
    // Foreground color of the greeting
    greeting_fgcolor: "#79acf3",

    // -------------------------------------------------
    // Clock config

    // Enable/disable clock
    clock: true,
    // Foreground color of the clock
    clock_fgcolor: "#79acf3",
    // Font size of the clock
    clock_fontsize: "20px",

    // -------------------------------------------------
    // Change image proprieties from here

    // Border radius: set it to 50% to create a circle
    image_radius: "20px",
    // Border for the image
    image_border: "0px",
    // Color of the border
    image_bordercolor: "#79acf3",
    // Filters for the image.
    image_filter: "grayscale(56%) brightness(60%)",
    // Width/height for the image
    image_width: "300px",
    // Image source: you can use local files, or a link
    // Ex.: image_source: "/img/kanji.jpg"
    image_source: "https://raw.githubusercontent.com/Alededorigo/Kanji/main/img/kanji.jpg",

    // -------------------------------------------------
    // Enable/disable site icons
    enable_icons: false,
    links_hover: true,

    // -------------------------------------------------
    // Page title
    title: "アーガマン",

    // -------------------------------------------------
    // Change search bar proprietis from here
    // Search bar placeholder
    search_placeholder: "Search here",
    // Search engine
    // Possible choices: (case sensitive)
    // google
    // duckduckgo
    // qwant
    // startpage
    // ecosia
    // youtube
    search_engine: "duckduckgo",

}
