import React, { useState } from "react";

// Reusable Card Component
const DishCard = ({ bg, icon, title, desc, price, rating, badge }) => (
  <div style={{
    borderRadius: '24px',
    overflow: 'hidden',
    backgroundColor: 'white',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.3s ease',
    
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-8px)';
    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
  }}>
    {badge && (
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        backgroundColor: badge === 'New' ? '#39DB4A' : '#FF6B6B',
        color: 'white',
        padding: '6px 14px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: '600',
        zIndex: 10
      }}>
        {badge}
      </div>
    )}
    <div style={{
      background: bg,
      height: '208px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <span style={{ fontSize: '60px' }}>{icon}</span>
      <button style={{
        position: 'absolute',
        bottom: '16px',
        right: '16px',
        width: '44px',
        height: '44px',
        backgroundColor: '#39DB4A',
        border: 'none',
        borderRadius: '50%',
        color: 'white',
        fontSize: '24px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(57,219,74,0.3)',
        transition: 'all 0.2s ease',
        fontWeight: '300'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.backgroundColor = '#2ec93e';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.backgroundColor = '#39DB4A';
      }}>
        +
      </button>
    </div>
    <div style={{ padding: '20px' }}>
      <h4 style={{
        fontWeight: '700',
        fontSize: '20px',
        marginBottom: '8px',
        color: '#1a1a1a'
      }}>{title}</h4>
      <p style={{
        fontSize: '14px',
        color: '#666',
        marginBottom: '16px',
        lineHeight: '1.5'
      }}>{desc}</p>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <span style={{
          color: '#39DB4A',
          fontWeight: '700',
          fontSize: '22px'
        }}>${price}</span>
        <span style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#333',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <span style={{ color: '#FFC107' }}>⭐</span> {rating}
        </span>
      </div>
    </div>
  </div>
);

// Main Dishes
export const MainDishes = () => (
  <section style={{ marginBottom: '64px' }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '32px'
    }}>
      <h2 style={{
        fontSize: '32px',
        fontWeight: '700',
        color: '#1a1a1a',
        margin: 0
      }}>Main Dishes</h2>
      <span style={{
        backgroundColor: '#f0f0f0',
        color: '#666',
        padding: '6px 16px',
        borderRadius: '20px',
        fontSize: '14px'
      }}>86 dishes</span>
    </div>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '32px'
    }}>
      <DishCard 
        bg="linear-gradient(135deg, #f5f5f5, #e8f5e9)" 
        icon="🍜" 
        title="Spicy Noodles" 
        desc="Delicious Asian-style noodles with a spicy kick and fresh vegetables" 
        price="18.00" 
        rating="4.8"
        badge="New"
      />
      <DishCard 
        bg="linear-gradient(135deg, #f5f5f5, #fff8e1)" 
        icon="🍕" 
        title="Margherita Pizza" 
        desc="Classic Italian pizza with fresh mozzarella, basil, and tomato sauce" 
        price="22.00" 
        rating="4.9"
      />
      <DishCard 
        bg="linear-gradient(135deg, #f5f5f5, #fce4ec)" 
        icon="🍔" 
        title="Gourmet Burger" 
        desc="Juicy beef patty with premium toppings and artisan bun" 
        price="19.00" 
        rating="4.7"
        badge="Popular"
      />
      <DishCard 
        bg="linear-gradient(135deg, #f5f5f5, #e8eaf6)" 
        icon="🍛" 
        title="Chicken Curry" 
        desc="Aromatic curry with tender chicken and fragrant rice" 
        price="21.00" 
        rating="4.6"
      />
    </div>
  </section>
);

// Fresh Salads
export const FreshSalads = () => (
  <section style={{ marginBottom: '64px' }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '32px'
    }}>
      <h2 style={{
        fontSize: '32px',
        fontWeight: '700',
        color: '#1a1a1a',
        margin: 0
      }}>Fresh Salads</h2>
      <span style={{
        backgroundColor: '#f0f0f0',
        color: '#666',
        padding: '6px 16px',
        borderRadius: '20px',
        fontSize: '14px'
      }}>32 dishes</span>
    </div>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '32px'
    }}>
      <DishCard 
        bg="linear-gradient(135deg, #f5f5f5, #e8f5e9)" 
        icon="🥗" 
        title="Fattoush Salad" 
        desc="Mediterranean salad with crispy pita and tangy dressing" 
        price="24.00" 
        rating="4.9"
      />
      <DishCard 
        bg="linear-gradient(135deg, #f5f5f5, #f1f8e9)" 
        icon="🥗" 
        title="Vegetable Salad" 
        desc="Fresh garden vegetables with house vinaigrette" 
        price="26.00" 
        rating="4.6"
      />
      <DishCard 
        bg="linear-gradient(135deg, #f5f5f5, #fff3e0)" 
        icon="🥗" 
        title="Egg Vegi Salad" 
        desc="Protein-rich salad with boiled eggs and fresh veggies" 
        price="23.00" 
        rating="4.5"
        badge="New"
      />
      <DishCard 
        bg="linear-gradient(135deg, #f5f5f5, #e3f2fd)" 
        icon="🥗" 
        title="Caesar Salad" 
        desc="Classic Caesar with parmesan and croutons" 
        price="20.00" 
        rating="4.8"
      />
    </div>
  </section>
);

// Desserts
export const Desserts = () => (
  <section style={{ marginBottom: '64px' }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '32px'
    }}>
      <h2 style={{
        fontSize: '32px',
        fontWeight: '700',
        color: '#1a1a1a',
        margin: 0
      }}>Sweet Desserts</h2>
      <span style={{
        backgroundColor: '#f0f0f0',
        color: '#666',
        padding: '6px 16px',
        borderRadius: '20px',
        fontSize: '14px'
      }}>45 desserts</span>
    </div>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '32px'
    }}>
      <DishCard 
        bg="linear-gradient(135deg, #f5f5f5, #fce4ec)" 
        icon="🍰" 
        title="Chocolate Cake" 
        desc="Rich chocolate cake with creamy frosting" 
        price="15.00" 
        rating="4.9"
        badge="Popular"
      />
      <DishCard 
        bg="linear-gradient(135deg, #f5f5f5, #fff9e6)" 
        icon="🍨" 
        title="Ice Cream" 
        desc="Creamy vanilla ice cream with your choice of toppings" 
        price="12.00" 
        rating="4.7"
      />
      <DishCard 
        bg="linear-gradient(135deg, #f5f5f5, #f3e5f5)" 
        icon="🧁" 
        title="Cupcake" 
        desc="Delicious cupcake with buttercream frosting" 
        price="8.00" 
        rating="4.8"
      />
      <DishCard 
        bg="linear-gradient(135deg, #f5f5f5, #ffebee)" 
        icon="🍮" 
        title="Caramel Pudding" 
        desc="Smooth caramel pudding with whipped cream" 
        price="10.00" 
        rating="4.6"
        badge="New"
      />
    </div>
  </section>
);

// Filter Section
export const FilterSection = () => {
  const [active, setActive] = useState('All');
  const filters = ['All', 'Main Dish', 'Breakfast', 'Dessert', 'Beverages', 'Salads'];
  
  return (
    <section style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      padding: '40px 20px',
      flexWrap: 'wrap'
    }}>
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => setActive(filter)}
          style={{
            padding: '12px 32px',
            borderRadius: '25px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: active === filter ? 'none' : '2px solid #e8e8e8',
            backgroundColor: active === filter ? '#39DB4A' : 'white',
            color: active === filter ? 'white' : '#333',
            fontSize: '15px'
          }}
          onMouseEnter={(e) => {
            if (active !== filter) {
              e.currentTarget.style.borderColor = '#39DB4A';
            }
          }}
          onMouseLeave={(e) => {
            if (active !== filter) {
              e.currentTarget.style.borderColor = '#e8e8e8';
            }
          }}
        >
          {filter}
        </button>
      ))}
    </section>
  );
};

// Hero Section
export const MenuHero = () => (
  <section style={{
    textAlign: 'center',
    padding: '64px 20px',
    background: 'linear-gradient(135deg, #f8fff9 0%, #ffffff 100%)'
  }}>
    <h1 style={{
      fontSize: '48px',
      fontWeight: '700',
      marginBottom: '16px',
      color: '#1a1a1a',
      margin: '0 0 16px 0'
    }}>Our Menu</h1>
    <p style={{
      fontSize: '18px',
      color: '#666',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6'
    }}>
      Explore our delicious selection of dishes crafted with passion and the finest ingredients
    </p>
  </section>
);

// Example usage - Full Menu Page
export default function MenuPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <MenuHero />
      <FilterSection />
      <div style={{
        padding: '20px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <MainDishes />
        <FreshSalads />
        <Desserts />
      </div>
    </div>
  );
}