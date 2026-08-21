import { useMemo, useState } from "react";
import {
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Coffee,
  CakeSlice,
  IceCream,
  CupSoda,
  Cookie,
  Utensils,
  GlassWater,
} from "lucide-react";

const menu = {
  "Shawarma & Savory Bites": [
    ["Shawarma - Plain", "250"],
    ["Shawarma - Mix", "400"],
    ["Chips Plain", "150"],
    ["Potato Tornado", "100"],
    ["Chips Masala", "250"],
    ["Chips Mayai", "250"],
    ["Chips Viruga with Chicken & Veges", "450"],
    ["Bhajia", "100"],
    ["Corndog", "150"],
    ["Single Burger", "350"],
    ["Double Burger with Chips", "500"],
    ["Chicken Nuggets", "350"],
    ["Chicken Nuggets with Chips", "500"],
    ["Chicken Strips with Chips", "500"],
    ["Chicken Wings", "450"],
    ["Chicken Wings with Chips", "600"],
  ],

  Waffle: [
    ["Belgium Waffle (Plain)", "200"],
    ["Belgium Waffle with Ice Cream", "550"],
    ["Belgium Waffle with Ice Cream & Fruits", "600"],
  ],

  Snacks: [
    ["Muffins", "120"],
    ["Doughnut", "100"],
    ["Cupcakes (Cream)", "50"],
    ["Chicken Pie", "200"],
    ["Samosa (2)", "150"],
    ["Croissant", "150"],
    ["Cinnamon roll", "100"],
    ["Lotus Cinnamon roll", "200"],
    ["Nutella Cinnamon roll", "200"],
    ["Brownie", "120"],
    ["Chocoball", "80"],
    ["Chocolate cream cookies", "50"],
  ],

  Cakes: [
    ["Lotus Cake/ Milk Cake", "450"],
    ["Fudge Cake", "400"],
    ["Black Forest", "300"],
    ["Red Velvet", "400"],
    ["Tiramisu Cake", "450"],
    ["White Forest", "300"],
  ],

  "Fruit Boba": [
    ["Passion", "500"],
    ["Blueberry", "500"],
    ["Strawberry", "500"],
    ["Lemon", "500"],
    ["Peach", "500"],
    ["Lychee", "500"],
    ["Mango", "500"],
    ["Green Apple", "500"],
    ["Kiwi", "500"],
    ["Fusion", "500"],
  ],

  "Regular Boba": [
    ["Vanilla", "550"],
    ["Chocolate", "550"],
    ["Strawberry", "550"],
  ],

  "Signature Boba": [
    ["Lotus", "600"],
    ["Oreo", "600"],
    ["Caramel", "600"],
    ["Taro", "600"],
    ["Tiger", "600"],
  ],

  "Tea Selection": [
    ["African Tea", "200"],
    ["Chai Latte", "300"],
    ["Somali Tea", "250"],
    ["Hot Chocolate", "250"],
    ["English Tea", "300"],
    ["Caramel Tea", "300"],
    ["Masala Tea", "250"],
    ["Karak Tea", "250"],
    ["Black Tea", "100"],
  ],

  "Herbal Tea": [
    ["African Tea", "200"],
    ["Chai Latte", "200"],
    ["Somali Tea", "250"],
    ["Hot Chocolate", "250"],
  ],

  "Hot Coffee": [
    ["Cappuccino", "270 / 300"],
    ["Latte", "270 / 300"],
    ["Mocha", "270 / 300"],
    ["Macchiato", "270 / 300"],
    ["Espresso", "120 / 170"],
    ["Americano", "220 / 270"],
    ["House Coffee", "270 / 300"],
  ],

  "Iced Coffee": [
    ["Hazelnut Iced Latte", "400"],
    ["Vanilla Iced Latte", "400"],
    ["Biscotti Iced Latte", "400"],
    ["Caramel Iced Latte", "400"],
    ["Iced Spanish Latte", "400"],
  ],

  "Flavored Coffee": [
    ["Vanilla Latte", "300 / 320"],
    ["Caramel Latte", "300 / 320"],
    ["Hazelnut Latte", "300 / 320"],
  ],

  Matcha: [
    ["Plain Matcha", "500"],
  ],

  "Flavoured Matcha": [
    ["Vanilla Matcha", "600"],
    ["Mango Matcha", "600"],
    ["Strawberry Matcha", "600"],
    ["Berry Matcha", "600"],
    ["Blue berry Matcha", "600"],
    ["Peach Matcha", "600"],
    ["Caramel Matcha", "600"],
  ],

  "Signature Matcha": [
    ["Taro Matcha", "450"],
    ["Matcha Frappe", "450"],
    ["Matcha espresso fusion", "450"],
    ["Toppings (Tapioca popping)", "50"],
  ],

  "Mojito Ades": [
    ["Passion", "450"],
    ["Blueberry", "450"],
    ["Strawberry", "450"],
    ["Lemon", "450"],
    ["Peach", "450"],
    ["Lychee", "450"],
    ["Mango", "450"],
    ["Green Apple", "450"],
    ["Virgin", "450"],
    ["Vision", "450"],
    ["Shaolin temple", "450"],
    ["Blue lagoon", "450"],
    ["Hurricane", "450"],
    ["Blue Hawaii", "450"],
    ["Pina colada", "450"],
    ["Banana avocado", "450"],
  ],

  "Ice Cream": [
    ["Single Scoop", "250"],
    ["Double scoop", "400"],
    ["Triple scoop", "550"],
    ["Soft Serve Cone - Small", "100"],
    ["Soft Serve Cone - Large", "200"],
    ["Soft Serve Cup - Small", "100"],
    ["Soft Serve Cup - Large", "200"],
    ["Affogato", "400"],
    ["Matcha-gato", "400"],
  ],

  Smoothies: [
    ["Mango Tropic", "400"],
    ["Hydroboost Smoothie", "400"],
    ["Tropical Smoothie", "400"],
    ["Mango Lassle", "400"],
    ["Strawberry Lassle", "400"],
  ],

  Shakes: [
    ["Regular Shake", "400"],
    ["Vanilla", "400"],
    ["Strawberry", "400"],
    ["Chocolate", "400"],
    ["Premium Flavours", "500"],
  ],

  Juices: [
    ["Passion", "300"],
    ["Mango", "300"],
    ["Water Melon", "300"],
    ["Avocado", "300"],
  ],

  Sundaes: [
    ["Brownie", "400"],
    ["Biscuit", "400"],
    ["Oreo", "400"],
    ["Boba", "400"],
  ],

  /*
   * ICE ROLLS
   * Kept from your previous Ice Rolls menu.
   * All 23 flavours are still included.
   */
  "Ice Rolls": [
    ["Blueberry", "300"],
    ["Strawberry", "300"],
    ["Coca Cola", "300"],
    ["Cookies", "350"],
    ["Caramel", "350"],
    ["Passion", "300"],
    ["Choco Chip", "300"],
    ["Kit Kat", "400"],
    ["Fanta", "300"],
    ["Banana", "300"],
    ["Fruits", "400"],
    ["Mabuyu", "300"],
    ["Oreo", "300"],
    ["Vanilla", "300"],
    ["Coffee", "300"],
    ["Lotus", "350"],
    ["Mabuyu Tile", "350"],
    ["Ukwaju", "300"],
    ["Coconut Cookies", "350"],
    ["Cake", "350"],
    ["Mango", "300"],
    ["Watermelon", "300"],
    ["Nuts", "300"],
  ],
};

const icons = {
  "Shawarma & Savory Bites": Utensils,
  Waffle: Cookie,
  Snacks: Cookie,
  Cakes: CakeSlice,

  "Fruit Boba": CupSoda,
  "Regular Boba": CupSoda,
  "Signature Boba": CupSoda,

  "Tea Selection": Coffee,
  "Herbal Tea": Coffee,
  "Hot Coffee": Coffee,
  "Iced Coffee": Coffee,
  "Flavored Coffee": Coffee,

  Matcha: Coffee,
  "Flavoured Matcha": Coffee,
  "Signature Matcha": Coffee,

  "Mojito Ades": GlassWater,

  "Ice Cream": IceCream,
  "Ice Rolls": IceCream,

  Smoothies: GlassWater,
  Shakes: CupSoda,
  Juices: GlassWater,
  Sundaes: IceCream,
};

const categories = ["All", ...Object.keys(menu)];

function MenuSection({ title, items, index }) {
  const Icon = icons[title] || Coffee;

  const hasTwoPrices =
    title === "Hot Coffee" ||
    title === "Flavored Coffee";

  return (
    <section
      className="menu-section"
      id={title.toLowerCase().replaceAll(" ", "-")}
    >
      <div className="category-icon">
        <Icon size={21} strokeWidth={2} />
      </div>

      <div className="section-card">
        <div className="section-heading">
          <div>
            <span className="section-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h2>{title}</h2>
          </div>

          {hasTwoPrices && (
            <div className="price-note">
              <span>Small</span>
              <span>Large</span>
            </div>
          )}
        </div>

        <div className="menu-list">
          {items.map(([name, price]) => {
            const prices = price.split(" / ");

            return (
              <div className="menu-row" key={name}>
                <div className="item-name">
                  <span>{name}</span>
                </div>

                <div className="item-price">
                  {prices.map((p, i) => (
                    <span key={i}>{p}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showCategories, setShowCategories] = useState(false);

  const sections = useMemo(() => {
    if (activeCategory === "All") {
      return Object.entries(menu);
    }

    return [[activeCategory, menu[activeCategory]]];
  }, [activeCategory]);

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const selectCategory = (category) => {
    setActiveCategory(category);
    setShowCategories(false);

    setTimeout(() => {
      scrollToMenu();
    }, 50);
  };

  return (
    <div className="site-shell">
      <div className="pattern pattern-one"></div>
      <div className="pattern pattern-two"></div>
      <div className="pattern pattern-three"></div>

      {/* NAVBAR */}
      <header className="topbar">
        <a
          className="brand"
          href="#home"
          aria-label="Cafe home"
        >
          <img
            src="/logo.png"
            alt="Cafe logo"
          />

          <span className="cafe-name">
            SPOONED
          </span>
        </a>

        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">Our Story</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() =>
            setShowCategories(!showCategories)
          }
        >
          Categories
          <ChevronDown size={16} />
        </button>
      </header>

      {/* MOBILE CATEGORIES */}
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
              onClick={() =>
                selectCategory(category)
              }
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow">
              welcome to our little cafe
            </span>

            <h1>
              every sip
              <br />
              <span>is a little</span>
              <br />
              moment of happiness.
            </h1>

            <p>
              Coffee, tea, boba, sweet treats
              and savoury bites — made for
              good moments and even better
              company.
            </p>

            <button
              className="primary-button"
              onClick={scrollToMenu}
            >
              Explore the menu
              <span>↓</span>
            </button>
          </div>

          {/* HERO ART */}
          <div className="hero-art">
            <div className="hero-orbit orbit-one"></div>
            <div className="hero-orbit orbit-two"></div>

            <div className="hero-badge badge-one">
              ☕
            </div>

            <div className="hero-badge badge-two">
              ♡
            </div>

            <div className="hero-badge badge-three">
              ✦
            </div>

            <div className="hero-center">
              <div className="hero-center-inner">
                <div className="coffee-cup">
                  <div className="coffee-rings">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          className="intro-strip"
          id="about"
        >
          <div className="intro-decoration">
            ✦
          </div>

          <div>
            <span className="eyebrow">
              a little note from us
            </span>

            <p>
              Come for the coffee. Stay for
              the conversations, pastries,
              boba and little moments that
              make a cafe feel like home.
            </p>
          </div>

          <div className="intro-decoration">
            ♡
          </div>
        </section>

        {/* MENU */}
        <section
          className="menu-wrap"
          id="menu"
        >
          <div className="menu-title">
            <span className="eyebrow">
              freshly made
            </span>

            <h2>MENU</h2>

            <p>
              Pick your favourite. Or don't —
              there's always tomorrow.
            </p>
          </div>

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

          <div className="menu-grid">
            {sections.map(
              ([title, items], index) => (
                <MenuSection
                  key={title}
                  title={title}
                  items={items}
                  index={index}
                />
              )
            )}
          </div>
        </section>

        {/* SPECIALS */}
        <section className="specials">
          <div className="special-heading">
            <span className="eyebrow">
              little treats
            </span>

            <h2>
              Good food.
              <br />
              Good mood.
            </h2>

            <p>
              Sweet, creamy, crispy and
              everything in between.
            </p>
          </div>

          <div className="special-cards">
            <div className="special-card pink">
              <span>♡</span>

              <strong>
                Cinnamon
                <br />
                Rolls
              </strong>

              <small>
                soft • warm • sweet
              </small>
            </div>

            <div className="special-card cream">
              <span>✦</span>

              <strong>
                Waffles
                <br />
                & Ice Cream
              </strong>

              <small>
                made for sharing
              </small>
            </div>

            <div className="special-card brown">
              <span>☕</span>

              <strong>
                Coffee
                <br />
                & Cake
              </strong>

              <small>
                the perfect pair
              </small>
            </div>
          </div>
        </section>

        {/* CONTACT */}
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
              <span>to us.</span>
            </h2>
          </div>

          <div className="contact-details">
            <div className="contact-item">
              <MapPin size={21} />

              <div>
                <span>Location</span>
                <p>
                  Muhoho Ave, Nairobi
                </p>
              </div>
            </div>

            <div className="contact-item">
              <Phone size={21} />

              <div>
                <span>Phone</span>
                <p>
                  +254 777 712 777
                </p>
              </div>
            </div>

            <div className="contact-item">
              <Mail size={21} />

              <div>
                <span>Email</span>
                <p>
                  spooned@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <img
            src="/logo.png"
            alt="Cafe logo"
          />

          <div>
            <strong>SPOONED</strong>

            <span>
              every sip, a little happiness.
            </span>
          </div>
        </div>

        <p>
          © {new Date().getFullYear()} SPOONED.
          {" "}
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;