// Mock content for Jass Food & Kokani Delicacies
// Update this file easily to change all website content

export const siteContent = {
  // Contact Information
  contact: {
    phone: "9833987609",
    whatsappLink: "https://wa.me/919833987609",
    location: "Goregaon West, Mumbai",
    serviceAreas: "Mumbai, Thane & Navi Mumbai",
    email: "info@jassfood.com", // Update with actual email
    socialMedia: {
      instagram: "https://instagram.com/jassfood", // Update with actual handle
      facebook: "https://facebook.com/jassfood", // Update with actual page
    }
  },

  // Hero Section
  hero: {
    announcement: "Premium Homemade Konkani Delicacies",
    headline: "Authentic Konkan Sweet Traditions, Crafted with Love",
    subheadline: "Slow-cooked, handmade Konkani Muslim sweets using recipes passed down through generations. Experience the taste of heritage in every bite.",
    ctaText: "Order on WhatsApp",
    backgroundImage: "https://images.unsplash.com/photo-1769576918185-f4f57316d78a"
  },

  // About Section
  about: {
    founderName: "Saeeda Chougle",
    title: "A Legacy of Authentic Konkan Flavors",
    story: [
      "At Jass Food & Kokani Delicacies, every sweet tells a story of tradition, patience, and love. Founded by Saeeda Chougle, our home-based kitchen in Goregaon West brings you the authentic taste of Konkani Muslim cuisine that has been cherished for generations.",
      "Our recipes are not shortcuts—they are labor-intensive traditions. Our signature Duderi is stirred for hours until it reaches the perfect consistency, just as our grandmothers did. Each Sandan is steamed with the same care and precision that has defined Konkan cooking for centuries.",
      "We don't mass-produce. We don't use commercial shortcuts. Every order is freshly prepared in our home kitchen, using premium ingredients and time-honored techniques. Serving Mumbai, Thane, and Navi Mumbai, we bring the warmth of Konkan heritage to your celebrations."
    ],
    image: "https://images.unsplash.com/photo-1768729340731-85e386e62529"
  },

  // Signature Products
  products: [
    {
      id: 1,
      name: "Duderi",
      description: "A beloved Konkani treasure—jaggery-sweetened coconut rice pudding, slow-cooked for hours until it reaches creamy perfection. Rich, aromatic, and deeply nostalgic.",
      features: ["Made fresh to order", "Stirred for hours", "Premium ingredients"],
      image: "https://images.unsplash.com/photo-1665833613236-7c1d087463b1?crop=entropy&cs=srgb&fm=jpg",
      popular: true
    },
    {
      id: 2,
      name: "Sandan",
      description: "The quintessential Eid delicacy—a steamed, fermented sweet with layers of tradition in every bite. Light, fragrant, and authentically Konkani.",
      features: ["Ramadan Special", "Traditional fermentation", "Festive favorite"],
      image: "https://images.unsplash.com/photo-1695568181440-aca4dac18650?crop=entropy&cs=srgb&fm=jpg",
      popular: true
    },
    {
      id: 3,
      name: "Shing",
      description: "A traditional Konkani sweet made with patience and precision. Delicate, aromatic, and perfect for special occasions and celebrations.",
      features: ["Handcrafted", "Limited daily batch", "Wedding favorite"],
      image: "https://images.unsplash.com/photo-1695568181747-f54dff1d4654?crop=entropy&cs=srgb&fm=jpg",
      popular: false
    },
    {
      id: 4,
      name: "Sakhroli",
      description: "Sweet, spiraled perfection—a Konkani specialty that brings back memories of home and family gatherings. Made with love and traditional techniques.",
      features: ["Traditional recipe", "Fresh preparation", "Bulk orders available"],
      image: "https://images.pexels.com/photos/8887049/pexels-photo-8887049.jpeg",
      popular: false
    },
    {
      id: 5,
      name: "Khazoori",
      description: "Crisp on the outside, tender within—this traditional Konkani delight is perfect for festive celebrations and special moments.",
      features: ["Made to order", "Premium quality", "Perfect for gifting"],
      image: "https://images.unsplash.com/photo-1680359939304-7e27ee183e7a",
      popular: false
    },
    {
      id: 6,
      name: "Sarole",
      description: "A delicate Konkani sweet that melts in your mouth. Handcrafted with precision, bringing authentic flavors to your celebrations.",
      features: ["Artisan crafted", "Traditional method", "Limited availability"],
      image: "https://images.unsplash.com/photo-1635952346904-95f2ccfcd029",
      popular: false
    }
  ],

  // Special Occasions
  occasions: [
    {
      icon: "Moon",
      title: "Ramadan Special Boxes",
      description: "Curated assortments of traditional sweets perfect for breaking fast and sharing with loved ones.",
      available: true
    },
    {
      icon: "Sparkles",
      title: "Eid Pre-Bookings",
      description: "Reserve your favorite delicacies in advance. Limited slots available during peak season.",
      available: true
    },
    {
      icon: "Heart",
      title: "Wedding & Nikkah Orders",
      description: "Bulk orders for your special day. Authentic sweets that your guests will remember.",
      available: true
    },
    {
      icon: "Gift",
      title: "Custom Festive Orders",
      description: "Personalized sweet boxes for any celebration. Made fresh with premium ingredients.",
      available: true
    }
  ],

  // Why Choose Us
  whyChooseUs: [
    {
      icon: "Home",
      title: "100% Homemade",
      description: "Every sweet is crafted in our home kitchen—no factory production, no shortcuts."
    },
    {
      icon: "Clock",
      title: "Traditional Recipes",
      description: "Authentic Konkani Muslim recipes passed down through generations, prepared the traditional way."
    },
    {
      icon: "Sparkles",
      title: "Freshly Prepared",
      description: "We don't stock. Every order is made fresh, just for you, using premium ingredients."
    },
    {
      icon: "Award",
      title: "Premium Ingredients",
      description: "Only the finest coconut, jaggery, rice, and spices—quality you can taste in every bite."
    },
    {
      icon: "Users",
      title: "Limited Daily Capacity",
      description: "We maintain quality over quantity. Pre-booking ensures you don't miss out during peak seasons."
    },
    {
      icon: "Heart",
      title: "Labor of Love",
      description: "Each sweet is stirred, steamed, and crafted with the same care as cooking for family."
    }
  ],

  // Testimonials
  testimonials: [
    {
      name: "Fatima Sheikh",
      location: "Bandra, Mumbai",
      text: "The Duderi reminded me of my grandmother's cooking. I cried tears of joy! This is authentic Konkan taste. Thank you for keeping our traditions alive.",
      rating: 5,
      occasion: "Ramadan Order"
    },
    {
      name: "Ayesha Khan",
      location: "Thane",
      text: "Ordered for my daughter's Nikkah. The guests couldn't stop praising the sweets! So authentic and delicious. Saeeda ji, you are a blessing.",
      rating: 5,
      occasion: "Wedding Order"
    },
    {
      name: "Mohammed Ansari",
      location: "Navi Mumbai",
      text: "Best Sandan I've had in Mumbai! Tastes exactly like what my mother used to make in Ratnagiri. Will order again for Eid.",
      rating: 5,
      occasion: "Eid Order"
    },
    {
      name: "Zainab Patel",
      location: "Andheri, Mumbai",
      text: "Finally found authentic Kokani sweets in Mumbai! The quality and taste are unmatched. Worth every rupee. Highly recommend!",
      rating: 5,
      occasion: "Festive Order"
    }
  ],

  // Gallery Images
  gallery: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1680359939304-7e27ee183e7a",
      caption: "Traditional Sweet Platter",
      occasion: "Wedding Order"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1635952346904-95f2ccfcd029",
      caption: "Festive Celebration",
      occasion: "Eid Special"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1699708263762-00ca477760bd",
      caption: "Premium Bulk Order",
      occasion: "Corporate Gifting"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1769576918185-f4f57316d78a",
      caption: "Signature Delicacies",
      occasion: "Ramadan Collection"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1665833613236-7c1d087463b1?crop=entropy&cs=srgb&fm=jpg",
      caption: "Handcrafted Sweets",
      occasion: "Daily Fresh Batch"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1695568181440-aca4dac18650?crop=entropy&cs=srgb&fm=jpg",
      caption: "Traditional Favorites",
      occasion: "Festival Special"
    }
  ],

  // CTA Section
  cta: {
    headline: "Experience Authentic Konkan Sweet Traditions",
    subheadline: "Limited slots available during Ramadan & Eid. Pre-book now to secure your order.",
    ctaText: "Book Your Order Now on WhatsApp",
    urgencyText: "⚡ Limited daily capacity—book in advance"
  }
};
