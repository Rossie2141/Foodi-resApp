import React from 'react';
import MainFoodImg from "../assets/MainFoodImg.jpg";
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';

const Banner = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      padding: '0 clamp(20px, 5vw, 40px)',
      fontFamily: "Poppins, sans-serif",
      position: 'relative',
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100vw',
      backgroundColor: '#fff',
      boxSizing: 'border-box',
      gap: '30px',
      paddingTop: '80px',
      paddingBottom: '10px', // ✅ THIS is the key fix
    },


    textContainer: {
      flex: 1,
      maxWidth: '100%',
      zIndex: 1,
    },

    title: {
      fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
      fontWeight: 'bold',
      marginBottom: '20px',
      lineHeight: '1.2',
    },

    highlight: {
      color: '#7ED957',
    },

    subtitle: {
      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
      color: '#555',
      marginBottom: '30px',
      lineHeight: '1.6',
    },

    buttons: {
      display: 'flex',
      gap: '15px',
      alignItems: 'center',
      flexWrap: 'wrap',
    },

    orderBtn: {
      backgroundColor: '#7ED957',
      border: 'none',
      padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 25px)',
      color: 'white',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
    },

    watchBtn: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
      color: '#333',
    },

    playIcon: {
      marginRight: '8px',
      color: '#000',
      fontSize: '1.2em',
    },

    imageContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
    },

    mainImage: {
      width: '380px',
      aspectRatio: '1 / 1',
      borderRadius: '50%',
      objectFit: 'cover',
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
      flexShrink: 0,
    },
  };

  const mediaStyles = `
    @media (max-width: 968px) {
      .banner-container {
        flex-direction: column;
      }
      .text-container {
        text-align: center;
        margin-bottom: 30px;
      }
      .buttons {
        justify-content: center;
      }
      .image-container {
        justify-content: center;
      }
    }

    @media (max-width: 640px) {
      .title br {
        display: none;
      }
      .buttons {
        flex-direction: column;
        width: 100%;
        gap: 10px;
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

          <p style={styles.subtitle}>
            Where Each Plate Weaves a Story of Culinary<br></br>
             Mastery and Passionate Craftsmanship
          </p>

          <div className="buttons" style={styles.buttons}>
            <button style={styles.orderBtn}>Order Now</button>
            <button style={styles.watchBtn}>
              <span style={styles.playIcon}><PlayCircleFilledRoundedIcon/></span> Watch Video
            </button>
          </div>
        </div>

        <div className="image-container" style={styles.imageContainer}>
          <img src={MainFoodImg} alt="Main Dish" style={styles.mainImage} />
        </div>
      </div>
    </>
  );
};

export default Banner;
