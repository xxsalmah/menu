import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const menu = {
  "Tea Selection": [
    ["African Tea", "200"],
    ["Somali Tea", "250"],
    ["Iced Tea", "300"],
    ["Masala Tea", "250"],
    ["Dawa Tea", "250"],
    ["Lemon Tea", "200"],
    ["Ginger Tea", "200"],
    ["Black Tea", "100"],
    ["Camel Tea", "250"],
    ["Hibiscus Tea", "200"],
    ["Hot Chocolate", "250"],
    ["Karak Tea", "300"],
  ],

  "Hot Coffee": [
    ["Cappuccino", "250 / 280"],
    ["Latte", "250 / 280"],
    ["Mocha", "250 / 280"],
    ["Macchiato", "250 / 280"],
    ["Espresso", "100 / 150"],
    ["Americano", "200 / 250"],
    ["House Coffee", "250 / 280"],
  ],

  "Iced Coffee": [
    ["Regular Iced Latte", "300"],
    ["Vanilla Iced Latte", "350"],
    ["Caramel Iced Latte", "350"],
    ["Matcha Latte", "400"],
    ["Spanish Latte", "400"],
  ],

  "Flavoured Coffee": [
    ["Vanilla Latte", "280 / 300"],
    ["Caramel Latte", "280 / 300"],
    ["Hazelnut Latte", "280 / 300"],
    ["Strawberry Latte", "280 / 300"],
  ],

  Waffles: [
    ["Belgium Waffle (Plain)", "200"],
    ["Bubble Waffle (Plain)", "200"],
    ["Bubble Waffle with Ice Cream", "550"],
    ["Bubble Waffle with Ice Cream & Fruits", "600"],
  ],

  "Shawarma & Savory Bites": [
    ["Shawarma - Plain", "250"],
    ["Shawarma - Mix", "400"],
    ["Chips Plain", "150"],
    ["Chips Masala", "250"],
    ["Chips Mayai", "250"],
    ["Chips Viruga with Chicken & Veges", "450"],
    ["Bhajia", "100"],
    ["Samosa", "50"],
    ["Hotdog", "150"],
    ["Single Burger", "350"],
    ["Double Burger with Chips", "500"],
    ["Chicken Nuggets", "350"],
    ["Chicken Nuggets with Chips", "500"],
    ["Chicken Strips", "350"],
    ["Chicken Strips with Chips", "500"],
    ["Chicken Wings", "450"],
    ["Chicken Wings with Chips", "600"],
  ],

  Snacks: [
    ["Muffins", "120"],
    ["Doughnut", "100"],
    ["Cupcakes (Cream)", "50"],
    ["Chicken Pie", "200"],
    ["Samosa (2)", "150"],
    ["Croissant", "150"],
    ["Cinnamon Roll", "100"],
    ["Lotus Cinnamon Roll", "200"],
    ["Nutella Cinnamon Roll", "200"],
    ["Brownie", "120"],
    ["Chocoball", "80"],
    ["Chocolate Cream Cookies", "50"],
  ],

  Cakes: [
    ["Lotus Cake / Milk Cake", "450"],
    ["Fudge Cake", "400"],
    ["Black Forest", "300"],
    ["Red Velvet", "400"],
    ["Tiramisu Cake", "450"],
    ["White Forest", "300"],
  ],
};

const categories = ["All", ...Object.keys(menu)];


// ==============================
// MENU SECTION COMPONENT
// ==============================

function MenuSection({ title, items }) {
  const isCoffee =
    title === "Hot Coffee" ||
    title === "Flavoured Coffee";

  return (
    <section
      className="menu-section"
      id={title.toLowerCase().replaceAll(" ", "-")}
    >
      <div className="section-heading">

        <div>
          <span className="eyebrow">
            freshly made
          </span>

          <h2>{title}</h2>
        </div>


        {isCoffee && (
          <div className="price-note">
            <span>Small / Single</span>
            <span>Large / Double</span>
          </div>
        )}

      </div>


      <div className="menu-list">

        {items.map(([name, price]) => {

          const prices = price.split(" / ");

          return (
            <div
              className="menu-row"
              key={name}
            >

              <div className="item-name">

                <span className="item-dot"></span>

                <span>{name}</span>

              </div>


              <div className="item-price">

                {prices.map((p, index) => (
                  <span key={index}>
                    {p}
                  </span>
                ))}

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}


// ==============================
// MAIN APP
// ==============================

function App() {

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [showCategories, setShowCategories] =
    useState(false);


  const sections = useMemo(() => {

    if (activeCategory === "All") {
      return Object.entries(menu);
    }

    return [
      [
        activeCategory,
        menu[activeCategory],
      ],
    ];

  }, [activeCategory]);


  const scrollToMenu = () => {

    document
      .getElementById("menu")
      ?.scrollIntoView({
        behavior: "smooth",
      });

  };


  return (
    <div className="site-shell">


      {/* =========================
          DECORATIVE BACKGROUND
      ========================= */}

      <div className="decor decor-one"></div>

      <div className="decor decor-two"></div>

      <div className="decor decor-three"></div>



      {/* =========================
          NAVBAR
      ========================= */}

      <header className="topbar">


        {/* LOGO */}

        <a
          className="brand"
          href="#home"
          aria-label="Cafe home"
        >

          <img
            src="/logo.png"
            alt="Cafe logo"
          />

        </a>



        {/* DESKTOP NAVIGATION */}

        <nav className="desktop-nav">

          <a href="#home">
            Home
          </a>

          <a href="#menu">
            Menu
          </a>

          <a href="#about">
            Our Story
          </a>

          <a href="#contact">
            Contact
          </a>

        </nav>



        {/* MOBILE CATEGORY BUTTON */}

        <button
          className="menu-toggle"
          onClick={() =>
            setShowCategories(!showCategories)
          }
        >

          Categories

          <ChevronDown size={17} />

        </button>

      </header>



      {/* =========================
          MOBILE CATEGORY POPUP
      ========================= */}

      {showCategories && (

        <div className="category-popover">

          {categories.map((category) => (

            <button
              key={category}

              className={
                activeCategory === category
                  ? "active"
                  : ""
              }

              onClick={() => {

                setActiveCategory(category);

                setShowCategories(false);

                setTimeout(
                  scrollToMenu,
                  50
                );

              }}
            >

              {category}

            </button>

          ))}

        </div>

      )}



      <main>


        {/* =========================
            HERO
        ========================= */}

        <section
          className="hero"
          id="home"
        >

          <div className="hero-copy">

            <span className="eyebrow">
              welcome to our little corner
            </span>


            <h1>

              every sip

              <br />

              <em>
                is a little
              </em>

              <br />

              moment of happiness.

            </h1>


            <p>
              Coffee, tea, sweet treats and
              savory bites — made to turn an
              ordinary day into a good one.
            </p>


            <button
              className="primary-button"
              onClick={scrollToMenu}
            >

              Explore the menu

              <ArrowDown size={17} />

            </button>

          </div>



          {/* HERO DECORATION */}

          <div className="hero-art">

            <div className="art-circle large">

              <div className="coffee-cup">

                <span className="cup-latte"></span>

              </div>

            </div>


            <div className="floating-card card-one">
              ☕
            </div>

            <div className="floating-card card-two">
              ♡
            </div>

            <div className="floating-card card-three">
              ✦
            </div>

          </div>

        </section>



        {/* =========================
            INTRODUCTION
        ========================= */}

        <section
          className="intro-strip"
          id="about"
        >

          <div className="strip-icon">
            ✦
          </div>


          <div>

            <span className="eyebrow">
              a little note from us
            </span>


            <p>
              Come for the coffee. Stay for
              the conversations, the pastries,
              the cozy corners and the tiny
              moments that make a cafe feel
              like home.
            </p>

          </div>


          <div className="strip-icon">
            ♡
          </div>

        </section>



        {/* =========================
            MENU
        ========================= */}

        <section
          className="menu-wrap"
          id="menu"
        >

          <div className="menu-title">

            <span className="eyebrow">
              made with love
            </span>


            <h2>
              Our Menu
            </h2>


            <p>
              Pick your favourite. Or don't —
              there's always tomorrow.
            </p>

          </div>



          {/* CATEGORY BUTTONS */}

          <div className="category-tabs">

            {categories.map((category) => (

              <button
                key={category}

                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }

                onClick={() =>
                  setActiveCategory(category)
                }
              >

                {category}

              </button>

            ))}

          </div>



          {/* MENU ITEMS */}

          <div className="menu-grid">

            {sections.map(
              ([title, items]) => (

                <MenuSection
                  key={title}
                  title={title}
                  items={items}
                />

              )
            )}

          </div>

        </section>



        {/* =========================
            SPECIALS
        ========================= */}

        <section className="specials">

          <div className="special-copy">

            <span className="eyebrow">
              something sweet
            </span>


            <h2>

              Little treats,

              <br />

              big mood.

            </h2>


            <p>
              Our cakes, cinnamon rolls,
              waffles and little bites are
              perfect with your favourite cup.
            </p>


            <button
              className="outline-button"

              onClick={() => {

                setActiveCategory("Snacks");

                setTimeout(
                  scrollToMenu,
                  50
                );

              }}
            >

              See snacks

              <ArrowUpRight size={17} />

            </button>

          </div>



          <div className="treat-grid">


            <div className="treat-card treat-pink">

              <span>
                ♡
              </span>

              <strong>
                Cinnamon
                <br />
                rolls
              </strong>

              <small>
                soft • warm • sweet
              </small>

            </div>



            <div className="treat-card treat-green">

              <span>
                ✦
              </span>

              <strong>
                Waffles
                <br />
                & ice cream
              </strong>

              <small>
                made for sharing
              </small>

            </div>



            <div className="treat-card treat-brown">

              <span>
                ☕
              </span>

              <strong>
                Coffee
                <br />
                & cake
              </strong>

              <small>
                the perfect pair
              </small>

            </div>


          </div>

        </section>



        {/* =========================
            CONTACT
        ========================= */}

        <section
          className="contact"
          id="contact"
        >


          <div className="contact-heading">

            <span className="eyebrow">
              come say hello
            </span>


            <h2>

              Find your way

              <br />

              <em>
                to us.
              </em>

            </h2>

          </div>



          <div className="contact-details">


            {/* ADDRESS */}

            <div className="contact-item">

              <MapPin size={20} />

              <div>

                <span>
                  Location
                </span>

                <p>
                  Muhoho Ave , Nairobi
                </p>

              </div>

            </div>



            {/* PHONE */}

            <div className="contact-item">

              <Phone size={20} />

              <div>

                <span>
                  Phone
                </span>

                <p>
                  +254 777 712 777
                </p>

              </div>

            </div>



            {/* EMAIL */}

            <div className="contact-item">

              <Mail size={20} />

              <div>

                <span>
                  Email
                </span>

                <p>
                  spooned@gmail.com
                </p>

              </div>

            </div>


          </div>

        </section>

      </main>



      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <div className="footer-brand">


          <img
            src="/logo.png"
            alt="Cafe logo"
          />


          <div>

            <strong>
              Spooned 
            </strong>

            <span>
              every sip, a little happiness.
            </span>

          </div>

        </div>


        <p>
          © {new Date().getFullYear()}
          {" "}
          spooned.
          All rights reserved.
        </p>

      </footer>


    </div>
  );
}


export default App;