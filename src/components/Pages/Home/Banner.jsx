import React from 'react';
import SpicyNoodlesImg from '../../../assets/SpicyNoodlesImg.jpg'
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import Lady from '../../../assets/Intersect.jpg'

const Banner = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center', // Changed from flex-end for better vertical centering
      padding: '0 clamp(20px, 5vw, 40px)',
      fontFamily: "Poppins, sans-serif",
      position: 'relative',
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100%',
      backgroundColor: '#fff',
      boxSizing: 'border-box',
      gap: '40px',
      paddingTop: '120px', // Increased to clear fixed header
      paddingBottom: '40px',
    },

    textContainer: {
      flex: 1,
      zIndex: 1,
    },

    title: {
      fontSize: 'clamp(2rem, 6vw, 3.5rem)', // Scaled up for desktop impact
      fontWeight: 'bold',
      marginBottom: '20px',
      lineHeight: '1.2',
      color: '#000',
    },

    highlight: {
      color: '#7ED957',
    },

    subtitle: {
      fontSize: 'clamp(1rem, 2vw, 1.1rem)',
      color: '#555',
      marginBottom: '30px',
      lineHeight: '1.6',
      maxWidth: '500px'
    },

    buttons: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
    },

    orderBtn: {
      backgroundColor: '#7ED957',
      border: 'none',
      padding: '15px 35px',
      color: 'white',
      borderRadius: '35px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '1rem',
      boxShadow: '0 4px 15px rgba(126, 217, 87, 0.3)',
    },

    watchBtn: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      fontWeight: '600',
      fontSize: '1rem',
      color: '#333',
      gap: '10px'
    },

    imageContainer: {
      flex: 1.2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      position: 'relative',
    },

    mainImage: {
      width: 'clamp(150px, 25vw, 320px)', // Responsive sizing
      aspectRatio: '1 / 1',
      borderRadius: '50%',
      objectFit: 'cover',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      border: '8px solid #fff', // Adds a clean "sticker" look
    },
  };

  const mediaStyles = `
    @media (max-width: 1024px) {
      .banner-container {
        flex-direction: column !important;
        text-align: center;
        padding-top: 100px;
      }
      .text-container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .subtitle {
        margin-left: auto;
        margin-right: auto;
      }
    }

    @media (max-width: 640px) {
      .image-container {
        flex-direction: column; /* Stack images on small phones */
        gap: 15px;
      }
      .main-image {
        width: 250px !important;
      }
      .buttons {
        flex-direction: column;
        width: 100%;
      }
      .order-btn {
        width: 100%;
        max-width: 280px;
      }
    }
  `;

  return (
    <>
      <style>{mediaStyles}</style>

      <div className="banner-container" style={styles.container}>
        <div className="text-container" style={styles.textContainer}>
          <h1 style={styles.title}>
            Dive into Delights <br />
            Of Delectable <span style={styles.highlight}>Food</span>
          </h1>

          <p className="subtitle" style={styles.subtitle}>
            Where Each Plate Weaves a Story of Culinary 
            Mastery and Passionate Craftsmanship
          </p>

          <div className="buttons" style={styles.buttons}>
            <button className="order-btn" style={styles.orderBtn}>Order Now</button>
            <button style={styles.watchBtn}>
              <PlayCircleFilledRoundedIcon style={{ fontSize: '3rem', color: '#fff', filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.2))', backgroundColor: '#000', borderRadius: '50%' }} /> 
              Watch Video
            </button>
          </div>
        </div>

        <div className="image-container" style={styles.imageContainer}>
          {/* First Image */}
          <img 
            src={Lady} 
            alt="Chef or Person Enjoying Food" 
            className="main-image" 
            style={styles.mainImage} 
          />
          
          {/* Second Image (Noodles) */}
          <img 
            src={SpicyNoodlesImg} 
            alt="Spicy Noodles" 
            className="main-image" 
            style={{...styles.mainImage, marginTop: '40px'}} // Offset slightly for visual interest
          />
        </div>
      </div>
    </>
  );
};

export default Banner;