import React from 'react';

const Home: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <nav className="navbar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <h1>SHAH HUSSAIN</h1>
        <h2>Graphics Designer</h2>
        <p className="intro">I am a dedicated graphic designer with 2 years of professional experience, specializing in creating visually appealing and impactful designs. I have a strong command of tools like Adobe Creative Suite (Photoshop, Illustrator, InDesign), and I focus on delivering creative solutions tailored to each client’s unique vision. My expertise spans logo design, branding, social media graphics, and marketing materials. I am committed to providing high-quality, on-time results that enhance brand identity and engage target audiences. Let’s work together to bring your ideas to life!</p>

        <div className="image">
          <img
            src="https://eraflip.com/wp-content/uploads/2022/05/graphic-designer-job-description-removebg-preview.png"
            alt="Shah Hussain"
          />
        </div>

        <h1>My Skills</h1>

        {/* Updated card layout */}
        <div className="card-grid">
          <Card
            title="Logo Design"
            imgSrc="https://cdn1.designhill.com/uploads/personal_designs/thumbs/ac7c28f94f6a3cd8283bc067ac4e95ca-7c8a5f1b414b6ba1e105647ec6b6a3681693070124508.jpg?ver=2.12.78"
            description=" Here's a concise description focused on your logo design experience:With 2 years of experience in logo design, I specialize in crafting unique and memorable logos that capture the essence of your brand."/>
          <Card
            title="UI UX"
            imgSrc="https://sourcemediakw.com/wp-content/uploads/2023/04/UIUX.png"
            description="Here's a concise description focused on your logo design experience:With 2 years of experience in UI UX design, I specialize in crafting unique and memorable logos that capture the essence of your brand."
          />
          <Card
            title="Landing Pages"
            imgSrc="https://draftss.com/wp-content/uploads/2020/03/landing-page-designs.jpg"
            description="Here's a concise description focused on your logo design experience:With 2 years of experience in landing page design, I specialize in crafting unique and memorable logos that capture the essence of your brand."
          />
          <Card
            title="Web Design"
            imgSrc="https://media.licdn.com/dms/image/D4E12AQHg5U-_44yUng/article-cover_image-shrink_720_1280/0/1668786724570?e=2147483647&v=beta&t=DVJ89bIzg8pvsz6SViOiKukxTtJkK2RsnkQkSKyBcQM"
            description="Here's a concise description focused on your logo design experience:With 2 years of experience in web design, I specialize in crafting unique and memorable logos that capture the essence of your brand."
          />
          <Card
            title="Photo Editing"
            imgSrc="https://static-cse.canva.com/blob/1211412/PhotoEditingConsistent20.png"
            description="Here's a concise description focused on your logo design experience:With 2 years of experience in photo editing, I specialize in crafting unique and memorable logos that capture the essence of your brand."
          />
          <Card
            title="Business Cards"
            imgSrc="https://graphicsfamily.com/wp-content/uploads/edd/2022/10/Creative-Ready-to-Print-Business-Card-Design-1180x664.png"
            description="Here's a concise description focused on your logo design experience:With 2 years of experience in Business cards design, I specialize in crafting unique and memorable logos that capture the essence of your brand."
          />
        </div>
        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-content">
            <p>© 2024 Shah Hussain | Graphic Designer</p>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
};

// Card component with TypeScript types
interface CardProps {
  title: string;
  imgSrc: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, imgSrc, description }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#" className="btn">read more</a>
      </div>
    </div>
  );
};

export default Home;
