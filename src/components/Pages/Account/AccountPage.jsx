import React from "react";

// ============= AccountHero.jsx =============
export const AccountHero = () => (
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
    }}>My Account</h1>
    <p style={{
      fontSize: '18px',
      color: '#666'
    }}>Manage your profile, orders, and preferences</p>
  </section>
);

// ============= ProfileSidebar.jsx =============
export const ProfileSidebar = ({ user }) => (
  <aside style={{
    background: 'white',
    borderRadius: '24px',
    padding: '30px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    height: 'fit-content',
    position: 'sticky',
    top: '20px'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #39DB4A, #2ec93e)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '36px',
        color: 'white',
        margin: '0 auto 15px',
        fontWeight: '700'
      }}>
        {user.initials}
      </div>
      <div style={{
        fontSize: '20px',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '5px'
      }}>{user.name}</div>
      <div style={{
        fontSize: '14px',
        color: '#666'
      }}>{user.email}</div>
    </div>
  </aside>
);

// ============= StatsCards.jsx =============
export const StatsCards = ({ stats }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '25px',
    marginBottom: '10px'
  }}>
    {stats.map((stat, index) => (
      <div
        key={index}
        style={{
          background: 'white',
          borderRadius: '20px',
          padding: '25px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          transition: 'all 0.3s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
        }}
      >
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          marginBottom: '15px',
          background: stat.gradient
        }}>
          {stat.icon}
        </div>
        <div style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '5px'
        }}>{stat.label}</div>
        <div style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#1a1a1a'
        }}>{stat.value}</div>
      </div>
    ))}
  </div>
);

// ============= ProfileInfo.jsx =============
export const ProfileInfo = ({ profileData }) => (
  <div style={{
    background: 'white',
    borderRadius: '24px',
    padding: '35px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '25px',
      paddingBottom: '20px',
      borderBottom: '2px solid #f0f0f0'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: '700',
        color: '#1a1a1a',
        margin: 0
      }}>Profile Information</h2>
      <button style={{
        background: '#e8f5e9',
        color: '#39DB4A',
        padding: '10px 20px',
        borderRadius: '10px',
        border: 'none',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s',
        fontSize: '14px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#39DB4A';
        e.currentTarget.style.color = 'white';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#e8f5e9';
        e.currentTarget.style.color = '#39DB4A';
      }}>
        Edit Profile
      </button>
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '25px'
    }}>
      {Object.entries(profileData).map(([key, value]) => (
        <div key={key} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{
            fontSize: '13px',
            color: '#666',
            marginBottom: '8px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            fontWeight: '600'
          }}>{key}</div>
          <div style={{
            fontSize: '16px',
            color: '#1a1a1a',
            fontWeight: '500'
          }}>{value}</div>
        </div>
      ))}
    </div>
  </div>
);

// ============= RecentOrders.jsx =============
export const RecentOrders = ({ orders }) => {
  const getStatusStyle = (status) => {
    const styles = {
      delivered: { background: '#e8f5e9', color: '#2e7d32' },
      processing: { background: '#fff8e1', color: '#f57c00' },
      cancelled: { background: '#ffebee', color: '#c62828' }
    };
    return styles[status.toLowerCase()] || styles.delivered;
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '24px',
      padding: '35px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '25px',
        paddingBottom: '20px',
        borderBottom: '2px solid #f0f0f0'
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#1a1a1a',
          margin: 0
        }}>Recent Orders</h2>
        <button style={{
          background: '#e8f5e9',
          color: '#39DB4A',
          padding: '10px 20px',
          borderRadius: '10px',
          border: 'none',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s',
          fontSize: '14px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#39DB4A';
          e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#e8f5e9';
          e.currentTarget.style.color = '#39DB4A';
        }}>
          View All
        </button>
      </div>

      {orders.map((order) => (
        <div
          key={order.id}
          style={{
            padding: '20px',
            border: '2px solid #f0f0f0',
            borderRadius: '16px',
            marginBottom: '15px',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#39DB4A';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(57,219,74,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#f0f0f0';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '15px'
          }}>
            <div style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#1a1a1a'
            }}>Order #{order.id}</div>
            <div style={{
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: '600',
              ...getStatusStyle(order.status)
            }}>
              {order.status}
            </div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '14px',
            color: '#666'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>📅</span>
              <span>{order.date}</span>
            </div>
            <div style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#39DB4A'
            }}>
              ${order.amount.toFixed(2)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ============= SavedAddresses.jsx =============
export const SavedAddresses = ({ addresses }) => (
  <div style={{
    background: 'white',
    borderRadius: '24px',
    padding: '35px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '25px',
      paddingBottom: '20px',
      borderBottom: '2px solid #f0f0f0'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: '700',
        color: '#1a1a1a',
        margin: 0
      }}>Saved Addresses</h2>
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '20px'
    }}>
      {addresses.map((address, index) => (
        <div
          key={index}
          style={{
            padding: '25px',
            border: address.isDefault ? '2px solid #39DB4A' : '2px solid #f0f0f0',
            borderRadius: '16px',
            position: 'relative',
            transition: 'all 0.3s',
            background: address.isDefault ? '#f8fff9' : 'white'
          }}
          onMouseEnter={(e) => {
            if (!address.isDefault) {
              e.currentTarget.style.borderColor = '#39DB4A';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(57,219,74,0.1)';
            }
          }}
          onMouseLeave={(e) => {
            if (!address.isDefault) {
              e.currentTarget.style.borderColor = '#f0f0f0';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
        >
          {address.isDefault && (
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: '#39DB4A',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              Default
            </div>
          )}
          <div style={{
            fontSize: '16px',
            fontWeight: '700',
            color: '#1a1a1a',
            marginBottom: '10px'
          }}>{address.title}</div>
          <div style={{
            fontSize: '14px',
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '15px'
          }}>{address.address}</div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button style={{
              flex: 1,
              padding: '8px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontSize: '13px',
              background: '#e8f5e9',
              color: '#39DB4A'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#39DB4A';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#e8f5e9';
              e.currentTarget.style.color = '#39DB4A';
            }}>
              Edit
            </button>
            <button style={{
              flex: 1,
              padding: '8px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontSize: '13px',
              background: '#f5f5f5',
              color: '#666'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e0e0e0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f5f5f5';
            }}>
              Delete
            </button>
          </div>
        </div>
      ))}

      <button style={{
        width: '100%',
        padding: '60px 20px',
        border: '2px dashed #e0e0e0',
        borderRadius: '16px',
        background: '#fafafa',
        cursor: 'pointer',
        transition: 'all 0.3s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#39DB4A';
        e.currentTarget.style.background = '#f8fff9';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#e0e0e0';
        e.currentTarget.style.background = '#fafafa';
      }}>
        <div style={{
          fontSize: '40px',
          color: '#39DB4A'
        }}>+</div>
        <div style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#666'
        }}>Add New Address</div>
      </button>
    </div>
  </div>
);

// ============= PaymentMethods.jsx =============
export const PaymentMethods = ({ payments }) => (
  <div style={{
    background: 'white',
    borderRadius: '24px',
    padding: '35px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '25px',
      paddingBottom: '20px',
      borderBottom: '2px solid #f0f0f0'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: '700',
        color: '#1a1a1a',
        margin: 0
      }}>Payment Methods</h2>
      <button style={{
        background: '#e8f5e9',
        color: '#39DB4A',
        padding: '10px 20px',
        borderRadius: '10px',
        border: 'none',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s',
        fontSize: '14px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#39DB4A';
        e.currentTarget.style.color = 'white';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#e8f5e9';
        e.currentTarget.style.color = '#39DB4A';
      }}>
        Add New
      </button>
    </div>

    {payments.map((payment, index) => (
      <div
        key={index}
        style={{
          padding: '25px',
          border: '2px solid #f0f0f0',
          borderRadius: '16px',
          marginBottom: '15px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.3s',
          flexWrap: 'wrap',
          gap: '15px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#39DB4A';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(57,219,74,0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#f0f0f0';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            background: payment.gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: 'white'
          }}>
            💳
          </div>
          <div>
            <h4 style={{
              fontSize: '16px',
              color: '#1a1a1a',
              marginBottom: '5px',
              margin: '0 0 5px 0'
            }}>{payment.type} ending in {payment.last4}</h4>
            <p style={{
              fontSize: '14px',
              color: '#666',
              margin: 0
            }}>Expires {payment.expiry}</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s',
            fontSize: '13px',
            background: '#e8f5e9',
            color: '#39DB4A'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#39DB4A';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#e8f5e9';
            e.currentTarget.style.color = '#39DB4A';
          }}>
            Edit
          </button>
          <button style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s',
            fontSize: '13px',
            background: '#f5f5f5',
            color: '#666'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#e0e0e0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#f5f5f5';
          }}>
            Remove
          </button>
        </div>
      </div>
    ))}
  </div>
);

// ============= AccountPage.jsx (Main Component) =============
export default function AccountPage() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    initials: 'JD'
  };

  const profileData = {
    'Full Name': 'John Doe',
    'Email Address': 'john.doe@example.com',
    'Phone Number': '+1 (234) 567-8900',
    'Date of Birth': 'January 15, 1990',
    'Member Since': 'March 2023',
    'Account Status': 'Gold Member'
  };

  const orders = [
    { id: '12847', status: 'Delivered', date: 'Dec 28, 2025', amount: 45.99 },
    { id: '12846', status: 'Processing', date: 'Dec 30, 2025', amount: 67.50 },
    { id: '12845', status: 'Delivered', date: 'Dec 25, 2025', amount: 89.00 }
  ];

  const addresses = [
    {
      title: 'Home',
      address: '123 Food Street, Culinary District\nNew York, NY 10001\nUnited States',
      isDefault: true
    },
    {
      title: 'Office',
      address: '456 Business Ave, Financial Center\nNew York, NY 10002\nUnited States',
      isDefault: false
    }
  ];

  const payments = [
    {
      type: 'Visa',
      last4: '4242',
      expiry: '12/2026',
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)'
    },
    {
      type: 'Mastercard',
      last4: '8888',
      expiry: '09/2027',
      gradient: 'linear-gradient(135deg, #f093fb, #f5576c)'
    }
  ];

  const stats = [
    {
      icon: '📦',
      label: 'Total Orders',
      value: '47',
      gradient: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)'
    },
    {
      icon: '💰',
      label: 'Total Spent',
      value: '$1,842',
      gradient: 'linear-gradient(135deg, #fff8e1, #ffecb3)'
    },
    {
      icon: '⭐',
      label: 'Loyalty Points',
      value: '2,450',
      gradient: 'linear-gradient(135deg, #fce4ec, #f8bbd0)'
    },
    {
      icon: '🎁',
      label: 'Rewards',
      value: '5 Active',
      gradient: 'linear-gradient(135deg, #e3f2fd, #bbdefb)'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f9f9f9',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <AccountHero />
      
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '40px 80px 80px',
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        gap: '40px'
      }}>
        <ProfileSidebar user={user} />
        
        <main style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px'
        }}>
          <ProfileInfo profileData={profileData} />
          <RecentOrders orders={orders} />
          <SavedAddresses addresses={addresses} />
          <PaymentMethods payments={payments} />
          <StatsCards stats={stats} />
        </main>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .account-container {
            grid-template-columns: 1fr !important;
            padding: 40px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}