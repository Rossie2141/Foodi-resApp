import React from 'react';

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Main Dish',
      count: '86 dishes',
      image: '🍔',
      bgColor: '#C8E6C9',
    },
    {
      id: 2,
      name: 'Break Fast',
      count: '12 break fast',
      image: '🥪',
      bgColor: '#C8E6C9',
    },
    {
      id: 3,
      name: 'Dessert',
      count: '48 dessert',
      image: '🍰',
      bgColor: '#C8E6C9',
    },
    {
      id: 4,
      name: 'Browse All',
      count: '255 Items',
      image: '🥤',
      bgColor: '#C8E6C9',
    },
  ];

  const styles = {
    /* FULL WIDTH SECTION */
    section: {
      width: '100vw',
      backgroundColor: '#fff',
      fontFamily: 'Poppins, sans-serif',
    },

    /* CENTERED CONTENT WRAPPER */
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: 'clamp(40px, 5vw, 60px) clamp(20px, 5vw, 40px)',
      boxSizing: 'border-box',
    },

    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },

    subtitle: {
      color: '#FF6B6B',
      textTransform: 'uppercase',
      fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
      letterSpacing: '2px',
      marginBottom: '10px',
      fontWeight: '600',
    },

    title: {
      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
      fontWeight: 'bold',
      color: '#000',
      margin: 0,
    },

    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 'clamp(20px, 3vw, 30px)',
    },

    card: {
      backgroundColor: '#fff',
      borderRadius: '20px',
      padding: 'clamp(30px, 4vw, 40px)',
      textAlign: 'center',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      cursor: 'pointer',
    },

    imageCircle: {
      width: 'clamp(100px, 15vw, 140px)',
      height: 'clamp(100px, 15vw, 140px)',
      borderRadius: '50%',
      margin: '0 auto 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    },

    categoryName: {
      fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
      fontWeight: 'bold',
      color: '#000',
      marginBottom: '8px',
    },

    categoryCount: {
      fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
      color: '#666',
    },
  };

  const mediaStyles = `
    @media (max-width: 768px) {
      .categories-grid {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }

    @media (max-width: 480px) {
      .categories-grid {
        grid-template-columns: 1fr !important;
        gap: 15px !important;
      }
    }

    @media (hover: hover) {
      .category-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0,0,0,0.12);
      }
    }
  `;

  return (
    <>
      <style>{mediaStyles}</style>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.header}>
            <p style={styles.subtitle}>Customer Favorites</p>
            <h2 style={styles.title}>Popular Categories</h2>
          </div>

          <div className="categories-grid" style={styles.grid}>
            {categories.map((category) => (
              <div
                key={category.id}
                className="category-card"
                style={styles.card}
              >
                <div
                  style={{
                    ...styles.imageCircle,
                    backgroundColor: category.bgColor,
                  }}
                >
                  {category.image}
                </div>
                <h3 style={styles.categoryName}>{category.name}</h3>
                <p style={styles.categoryCount}>({category.count})</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCategories;
