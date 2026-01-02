import React, { useState } from "react";

// --- Components ---

// Cart Hero Component
export const CartHero = () => (
  <section style={{
    background: 'linear-gradient(135deg, #f8fff9 0%, #ffffff 100%)',
    padding: '60px 80px 40px',
    textAlign: 'center'
  }}>
    <h1 style={{
      fontSize: '48px',
      marginBottom: '15px',
      color: '#1a1a1a',
      margin: '0 0 15px 0'
    }}>Shopping Cart</h1>
    <p style={{
      fontSize: '18px',
      color: '#666'
    }}>Review your items and proceed to checkout</p>
  </section>
);

// Cart Item Component
export const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '120px 1fr auto',
    gap: '20px',
    padding: '25px',
    border: '2px solid #f0f0f0',
    borderRadius: '20px',
    marginBottom: '20px',
    transition: 'all 0.3s'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.borderColor = '#39DB4A';
    e.currentTarget.style.boxShadow = '0 4px 15px rgba(57,219,74,0.1)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.borderColor = '#f0f0f0';
    e.currentTarget.style.boxShadow = 'none';
  }}>
    <div style={{
      width: '120px',
      height: '120px',
      borderRadius: '16px',
      background: item.gradient,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '48px'
    }}>
      {item.icon}
    </div>
    
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#1a1a1a',
          marginBottom: '8px'
        }}>{item.name}</h3>
        <p style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '12px',
          lineHeight: '1.5'
        }}>{item.description}</p>
      </div>
      <div style={{
        fontSize: '22px',
        fontWeight: '700',
        color: '#39DB4A'
      }}>${item.price.toFixed(2)}</div>
    </div>

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }}>
      <button 
        onClick={() => onRemove(item.id)}
        style={{
          background: '#ffebee',
          color: '#FF6B6B',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '10px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '600',
          transition: 'all 0.3s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#FF6B6B';
          e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#ffebee';
          e.currentTarget.style.color = '#FF6B6B';
        }}
      >
        Remove
      </button>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        background: '#f5f5f5',
        padding: '8px 12px',
        borderRadius: '12px'
      }}>
        <button 
          onClick={() => onUpdateQuantity(item.id, -1)}
          style={{
            width: '32px',
            height: '32px',
            border: 'none',
            background: '#39DB4A',
            color: 'white',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#2ec93e';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#39DB4A';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          -
        </button>
        <span style={{
          fontSize: '18px',
          fontWeight: '700',
          color: '#1a1a1a',
          minWidth: '30px',
          textAlign: 'center'
        }}>{item.quantity}</span>
        <button 
          onClick={() => onUpdateQuantity(item.id, 1)}
          style={{
            width: '32px',
            height: '32px',
            border: 'none',
            background: '#39DB4A',
            color: 'white',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#2ec93e';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#39DB4A';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          +
        </button>
      </div>
    </div>
  </div>
);

// Cart Items List Component
export const CartItemsList = ({ items, onUpdateQuantity, onRemove }) => (
  <div style={{
    background: 'white',
    borderRadius: '24px',
    padding: '30px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px',
      paddingBottom: '20px',
      borderBottom: '2px solid #f0f0f0'
    }}>
      <h2 style={{
        fontSize: '28px',
        color: '#1a1a1a',
        margin: 0
      }}>Cart Items</h2>
      <span style={{
        background: '#e8f5e9',
        color: '#39DB4A',
        padding: '6px 16px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: '600'
      }}>{items.length} Items</span>
    </div>

    {items.length > 0 ? (
      items.map(item => (
        <CartItem 
          key={item.id} 
          item={item} 
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
        />
      ))
    ) : (
      <p style={{ textAlign: 'center', padding: '40px', color: '#666' }}>Your cart is empty.</p>
    )}

    <div style={{
      marginTop: '20px',
      textAlign: 'center'
    }}>
      <a href="#" style={{
        color: '#39DB4A',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '15px'
      }}>← Continue Shopping</a>
    </div>
  </div>
);

// Promo Code Component (UPDATED with Remove logic)
export const PromoCode = ({ promoCode, onApplyPromo, onRemovePromo }) => {
  const [code, setCode] = useState('');

  const handleApply = () => {
    if (code.trim()) {
      onApplyPromo(code);
      setCode(''); // Reset input
    }
  };

  return (
    <div style={{ marginBottom: '25px' }}>
      <label style={{
        fontSize: '14px',
        color: '#666',
        marginBottom: '10px',
        display: 'block'
      }}>Have a promo code?</label>
      
      {/* Show input only if NO promo is applied */}
      {!promoCode ? (
        <div style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter code (Try SAVE20)"
            style={{
              flex: 1,
              padding: '12px 15px',
              border: '2px solid #e8e8e8',
              borderRadius: '12px',
              fontSize: '14px',
              outline: 'none'
            }}
          />
          <button 
            onClick={handleApply}
            style={{
              background: '#39DB4A',
              color: 'white',
              padding: '12px 20px',
              borderRadius: '12px',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            Apply
          </button>
        </div>
      ) : (
        /* Show the applied code message with a Remove button */
        <div style={{
          background: '#e8f5e9',
          color: '#2e7d32',
          padding: '12px 15px',
          borderRadius: '10px',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>✓</span>
            <span><strong>{promoCode.code}</strong> applied - {promoCode.discount}% off!</span>
          </div>
          <button 
            onClick={onRemovePromo}
            style={{
              background: 'none',
              border: 'none',
              color: '#d32f2f',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '12px',
              textDecoration: 'underline'
            }}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

// Order Summary Component
export const OrderSummary = ({ 
  subtotal, discount, deliveryFee, tax, total, 
  promoCode, onApplyPromo, onRemovePromo, onCheckout 
}) => (
  <div style={{
    background: 'white',
    borderRadius: '24px',
    padding: '30px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    height: 'fit-content',
    position: 'sticky',
    top: '20px'
  }}>
    <h2 style={{
      fontSize: '24px',
      color: '#1a1a1a',
      fontWeight: '700',
      marginBottom: '25px',
      paddingBottom: '20px',
      borderBottom: '2px solid #f0f0f0',
      margin: '0 0 25px 0'
    }}>Order Summary</h2>

    <PromoCode 
      promoCode={promoCode} 
      onApplyPromo={onApplyPromo} 
      onRemovePromo={onRemovePromo} 
    />

    <div style={{ margin: '25px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <span style={{ color: '#666' }}>Subtotal</span>
        <span style={{ color: '#1a1a1a', fontWeight: '600' }}>${subtotal.toFixed(2)}</span>
      </div>
      
      {discount > 0 && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <span style={{ color: '#666' }}>Discount ({promoCode?.discount}%)</span>
          <span style={{ color: '#39DB4A', fontWeight: '600' }}>-${discount.toFixed(2)}</span>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <span style={{ color: '#666' }}>Delivery Fee</span>
        <span style={{ color: '#1a1a1a', fontWeight: '600' }}>${deliveryFee.toFixed(2)}</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <span style={{ color: '#666' }}>Tax (8%)</span>
        <span style={{ color: '#1a1a1a', fontWeight: '600' }}>${tax.toFixed(2)}</span>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
        paddingTop: '20px',
        borderTop: '2px solid #f0f0f0'
      }}>
        <span style={{ fontSize: '20px', fontWeight: '700' }}>Total</span>
        <span style={{ fontSize: '28px', fontWeight: '700', color: '#39DB4A' }}>
          ${total.toFixed(2)}
        </span>
      </div>
    </div>

    <button 
      onClick={onCheckout}
      style={{
        width: '100%',
        background: '#39DB4A',
        color: 'white',
        padding: '16px',
        borderRadius: '15px',
        border: 'none',
        fontWeight: '700',
        fontSize: '17px',
        cursor: 'pointer',
        transition: 'all 0.3s'
      }}
    >
      Proceed to Checkout
    </button>

    <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '13px', color: '#666' }}>
      🔒 Secure Checkout
    </div>
  </div>
);

// --- Main Page ---

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Spicy Noodles', description: 'Asian noodles', price: 18.00, quantity: 2, icon: '🍜', gradient: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)' },
    { id: 2, name: 'Margherita Pizza', description: 'Fresh mozzarella', price: 22.00, quantity: 1, icon: '🍕', gradient: 'linear-gradient(135deg, #fff8e1, #ffecb3)' },
    { id: 3, name: 'Caesar Salad', description: 'Fresh salad', price: 20.00, quantity: 1, icon: '🥗', gradient: 'linear-gradient(135deg, #fce4ec, #f8bbd0)' }
  ]);

  const [promoCode, setPromoCode] = useState({ code: 'SAVE20', discount: 20 });

  const handleUpdateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const handleApplyPromo = (code) => {
    if (code.toUpperCase() === 'SAVE20') {
      setPromoCode({ code: code.toUpperCase(), discount: 20 });
    } else {
      alert("Invalid Code! Try 'SAVE20'");
    }
  };

  // NEW: Handler to remove promo
  const handleRemovePromo = () => {
    setPromoCode(null);
  };

  const handleCheckout = () => alert('Proceeding to checkout...');

  // --- Calculations ---
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = promoCode ? (subtotal * promoCode.discount) / 100 : 0;
  const deliveryFee = subtotal > 0 ? 5.00 : 0;
  const taxRate = 0.08;
  const taxAmount = (subtotal - discountAmount + deliveryFee) * taxRate;
  const total = Math.max(0, subtotal - discountAmount + deliveryFee + taxAmount);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f9f9f9',
      fontFamily: 'sans-serif'
    }}>
      <CartHero />
      
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '40px 80px 80px',
        display: 'grid',
        gridTemplateColumns: '1fr 400px',
        gap: '40px'
      }}>
        <CartItemsList 
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemove={handleRemoveItem}
        />
        
        <OrderSummary 
          subtotal={subtotal}
          discount={discountAmount}
          deliveryFee={deliveryFee}
          tax={taxAmount}
          total={total}
          promoCode={promoCode}
          onApplyPromo={handleApplyPromo}
          onRemovePromo={handleRemovePromo}
          onCheckout={handleCheckout}
        />
      </div>
    </div>
  );
}