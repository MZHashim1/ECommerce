/* =========================================
   Pera - Premium E-Commerce JavaScript
========================================= */

// All 18 Products Database
const products = [
    {
        id: "1",
        name: "Premium Leather Jacket",
        category: "Apparel",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "2",
        name: "Himalayan Pink Salt Lamp",
        category: "Home Decor",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1544976451-246e7f226cd9?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "3",
        name: "Authentic Peshawari Chappal",
        category: "Footwear",
        price: 85.00,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "4",
        name: "Hand-knotted Afghan Carpet",
        category: "Home Decor",
        price: 350.00,
        image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "5",
        name: "Premium Basmati Rice (Export)",
        category: "Food",
        price: 25.00,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "6",
        name: "Brass Handicraft Lamp",
        category: "Home Decor",
        price: 110.00,
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "7",
        name: "Surgical Grooming Kit",
        category: "Accessories",
        price: 18.00,
        image: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "8",
        name: "Kashmir Pashmina Shawl",
        category: "Apparel",
        price: 120.00,
        image: "https://images.unsplash.com/photo-1606822409748-0c6444fd3fdf?auto=format&fit=crop&w=800&q=80"
    },
    // --- 10 NEW PRODUCTS ADDED ---
    {
        id: "9",
        name: "Onyx Marble Chess Set",
        category: "Home Decor",
        price: 145.00,
        image: "https://images.unsplash.com/photo-1610631066894-62452ccb9c7c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "10",
        name: "Handcrafted Blue Pottery Plate",
        category: "Home Decor",
        price: 35.00,
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "11",
        name: "Premium Leather Duffle Bag",
        category: "Accessories",
        price: 180.00,
        image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "12",
        name: "Ajrak Block Print Scarf",
        category: "Apparel",
        price: 40.00,
        image: "https://images.unsplash.com/photo-1614022807952-4fc46bc84aef?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "13",
        name: "Copper Hammered Serving Bowl",
        category: "Home Decor",
        price: 55.00,
        image: "https://images.unsplash.com/photo-1583526563606-de019e072b22?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "14",
        name: "Export Quality Mangoes (Box)",
        category: "Food",
        price: 65.00,
        image: "https://images.unsplash.com/photo-1553279768-865429ef193f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "15",
        name: "Camel Skin Painted Lamp",
        category: "Home Decor",
        price: 95.00,
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "16",
        name: "Traditional Khussa Shoes",
        category: "Footwear",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1601002575027-46321eeef3c1?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "17",
        name: "Himalayan Pink Salt Cooking Block",
        category: "Food",
        price: 50.00,
        image: "https://images.unsplash.com/photo-1622484210996-3392410a5601?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "18",
        name: "Handmade Wooden Jewelry Box",
        category: "Accessories",
        price: 60.00,
        image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=80"
    }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('pera_cart')) || [];

document.addEventListener('DOMContentLoaded', () => {

    // --- Cursor Follower ---
    const cursor = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- Scroll Reveal Animation ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-text').forEach(el => observer.observe(el));

    // Animate hero text immediately
    setTimeout(() => {
        document.querySelectorAll('.hero-content .reveal-text').forEach(el => el.classList.add('active'));
    }, 100);

    // --- Cart Sidebar Toggle ---
    const cartToggle = document.getElementById('cart-toggle');
    const closeCart = document.getElementById('close-cart');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');

    if (cartToggle && closeCart && cartSidebar && cartOverlay) {
        const openCartMenu = () => {
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
            updateCartUI();
        };

        const closeCartMenu = () => {
            cartSidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
        };

        cartToggle.addEventListener('click', openCartMenu);
        closeCart.addEventListener('click', closeCartMenu);
        cartOverlay.addEventListener('click', closeCartMenu);
    }

    // --- Add to Cart Functionality ---
    setupAddToCartButtons();
    updateCartCount();

    // --- Dynamic Visitor Counter (About Page) ---
    const visitorCount = document.getElementById('visitor-count');
    if (visitorCount) {
        let currentCount = 1245;
        // Simulate live visitors coming and going
        setInterval(() => {
            const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
            currentCount += change;
            if (currentCount < 1000) currentCount = 1000;
            visitorCount.innerText = currentCount.toLocaleString();

            // Subtle flash effect on update
            visitorCount.style.color = '#fff';
            setTimeout(() => {
                visitorCount.style.color = 'var(--primary)';
            }, 300);
        }, 3000);
    }
});

// Shop Page Initialization
function initShop() {
    const shopGrid = document.getElementById('shop-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (shopGrid) {
        renderProducts(products, shopGrid);

        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active class from all
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active to clicked
                e.target.classList.add('active');

                const filterValue = e.target.getAttribute('data-filter');
                if (filterValue === 'all') {
                    renderProducts(products, shopGrid);
                } else {
                    const filtered = products.filter(p => p.category === filterValue);
                    renderProducts(filtered, shopGrid);
                }
            });
        });
    }
}

// Render Products to Grid
function renderProducts(productsArray, container) {
    container.innerHTML = ''; // Clear container

    if (productsArray.length === 0) {
        container.innerHTML = '<p style="color:var(--text-muted); grid-column: 1/-1; text-align:center;">No products found in this category.</p>';
        return;
    }

    productsArray.forEach((product, index) => {
        const delay = index * 0.1;
        const card = document.createElement('div');
        card.className = 'product-card glass';
        card.style.animation = `fadeUp 0.5s ease ${delay}s forwards`;
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        card.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" loading="lazy" alt="${product.name}">
                <div class="overlay">
                    <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
            <div class="product-info">
                <span class="category">${product.category}</span>
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
            </div>
        `;
        container.appendChild(card);
    });

    // Re-bind Add to Cart buttons for newly rendered elements
    setupAddToCartButtons();
}

// Add keyframes for the shop render animation dynamically
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;
document.head.appendChild(style);

// Cart Logic
function setupAddToCartButtons() {
    const btns = document.querySelectorAll('.add-to-cart-btn');
    btns.forEach(btn => {
        // remove old listeners
        btn.replaceWith(btn.cloneNode(true));
    });

    // re-select and add new listeners
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            addToCart(id);

            // Visual feedback
            const originalText = e.target.innerText;
            e.target.innerText = "Added!";
            e.target.style.background = "#4CAF50";

            setTimeout(() => {
                e.target.innerText = originalText;
                e.target.style.background = "var(--primary)";
            }, 1000);
        });
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartCount();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('pera_cart', JSON.stringify(cart));
}

function updateCartCount() {
    const countEl = document.getElementById('cart-count');
    if (countEl) {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        countEl.innerText = count;

        // Bounce animation
        countEl.style.transform = 'scale(1.5)';
        setTimeout(() => {
            countEl.style.transform = 'scale(1)';
        }, 200);
    }
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total-price');

    if (!cartItemsContainer || !cartTotalEl) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-cart fa-3x mb-3"></i><p>Your cart is empty.</p></div>';
        cartTotalEl.innerText = '$0.00';
        return;
    }

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const tr = document.createElement('div');
        tr.className = 'cart-item';
        tr.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p class="price">$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <button class="remove-item" onclick="removeFromCart('${item.id}')">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItemsContainer.appendChild(tr);
    });

    cartTotalEl.innerText = '$' + total.toFixed(2);
}
