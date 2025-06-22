// Sidebar interactivity for categories and recent posts

document.addEventListener('DOMContentLoaded', function() {
  // Blog data
  const blogs = [
    {
      id: 'digital',
      title: 'Why Digital Marketing Is No Longer Optional for Growing Businesses',
      img: 'assets/img/blog/blog-1.jpg',
      date: 'Jun 22, 2025',
      category: 'digital',
      summary: `In today\'s dynamic digital landscape, businesses that fail to adapt to digital marketing are quickly falling behind. The days of relying solely on traditional advertising methods are long gone. Today, having a strong online presence is a non-negotiable factor for sustainable growth.`
    },
    {
      id: 'social',
      title: 'Social Media Marketing: The Secret Weapon for Brand Engagement',
      img: 'assets/img/blog/blog-2.jpg',
      date: 'Jun 22, 2025',
      category: 'social',
      summary: `Social media is not just a trend — it\'s a revolution in how businesses connect with consumers. With over 4 billion users globally, platforms like Facebook, Instagram, LinkedIn, and Twitter offer unparalleled opportunities to showcase your brand.`
    },
    {
      id: 'influencer',
      title: 'Influencer Marketing in 2025: Why Your Brand Needs It Now',
      img: 'assets/img/blog/blog-3.jpg',
      date: 'Jun 22, 2025',
      category: 'influencer',
      summary: `Influencer marketing has rapidly become one of the most effective strategies for driving brand awareness, credibility, and conversions. With the explosion of Instagram and YouTube creators, audiences are increasingly turning to influencers for product recommendations and lifestyle inspiration.`
    }
  ];

  // Detect if we are on a blog details page (not the main blog list)
  const isDetailsPage = !!document.querySelector('.blog-details-page');

  // Category filter or navigation
  const categoryList = document.getElementById('category-list');
  if (categoryList) {
    categoryList.querySelectorAll('a[data-category]').forEach(link => {
      link.addEventListener('click', function(e) {
        if (!isDetailsPage) {
          e.preventDefault();
          const cat = this.getAttribute('data-category');
          showBlogs(cat);
        } // else, let the link navigate
      });
    });
  }

  // Recent post click or navigation
  document.querySelectorAll('.recent-posts-widget a[data-post]').forEach(link => {
    link.addEventListener('click', function(e) {
      if (!isDetailsPage) {
        e.preventDefault();
        const postId = this.getAttribute('data-post');
        showBlogs(postId);
      } // else, let the link navigate
    });
  });

  // Show blogs by category or id (main blog page only)
  function showBlogs(filter) {
    const blogRows = document.querySelectorAll('#blog-posts .row .col-12');
    blogRows.forEach(row => row.style.display = 'none');
    blogs.forEach((blog, idx) => {
      if (blog.category === filter || blog.id === filter) {
        blogRows[idx].style.display = 'block';
      }
    });
  }
});
