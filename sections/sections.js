Vvveb.Sections.add("cohub/about", {
    name: "About",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/about-thumb.jpeg",
    html: `<section class="about">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="page-header">
          <h2>About CoHub</h2>
          <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.</p>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/blog", {
    name: "Blog",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/blog-thumb.jpeg",
    html: `<section class="blog" id="blog" data-v-component-posts="popular" data-v-limit="6">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title">
          <h2>News, updates and insights</h2>
          <p>
            With a decade of insights and expertise, we’re reimagining property so that you can focus on
            your business.
          </p>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6" data-v-post data-v-if="posts.count > 0">
        <article class="blog-post">
          <img src="images/blog/blog-thumb-1.jpg" alt="blog-images" data-v-post-image>
          <div class="blog-content">
            <h3>
              <a href="blog-post.html" data-v-post-url>
                <span data-v-post-name>How four tech companies use property<span>
              </a>
            </h3>
            <p data-v-post-exerpt>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, atque!</p>
            <a class="more" href="blog-post.html" data-v-post-url>
              <span>Read more <span>⟶</span>
              </span>
            </a>
          </div>
        </article>
      </div>
      <div class="col-lg-4 col-md-6" data-v-post>
        <article class="blog-post">
          <img src="images/blog/blog-thumb-2.jpg" alt="blog-images" data-v-post-image>
          <div class="blog-content">
            <h3>
              <a href="blog-post.html">A cancer survivor built a wellness platform</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <a class="more" href="blog-post.html">Read more <span>⟶</span>
            </a>
          </div>
        </article>
      </div>
      <div class="col-lg-4 col-md-6" data-v-post>
        <article class="blog-post">
          <img src="images/blog/blog-thumb-3.jpg" alt="blog-images" data-v-post-image>
          <div class="blog-content">
            <h3>
              <a href="blog-post.html">The difference between meeting and connecting</a>
            </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a class="more" href="blog-post.html">Read more <span>⟶</span>
            </a>
          </div>
        </article>
      </div>
      <div class="col-12 text-center">
        <a href="blog.html" class="btn btn-primary">View blog page</a>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/call-to-action", {
    name: "Call to action",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/call-to-action-thumb.jpeg",
    html: `<section class="cta">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="cta-content">
          <h2>Visit coHub for a day.</h2>
          <a href="contact.html" class="btn btn-primary mb-3">
            Schedule your day
          </a>
          <p style="font-size: 12px;">or check out <a class="scroll-to" href="#pricing">pricing plans</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/clients", {
    name: "Clients",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/clients-thumb.jpeg",
    html: `<section class="clients">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h2>Featured In</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="clients-slider">
          <div class="clients-slider-item">
            <img src="images/client/clients01.png" alt="images">
          </div>
          <div class="clients-slider-item">
            <img src="images/client/clients02.png" alt="images">
          </div>
          <div class="clients-slider-item">
            <img src="images/client/clients03.png" alt="images">
          </div>
          <div class="clients-slider-item">
            <img src="images/client/clients04.png" alt="images">
          </div>
          <div class="clients-slider-item">
            <img src="images/client/clients03.png" alt="images">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/contact-form", {
    name: "Contact form",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/contact-form-thumb.jpeg",
    html: `<section class="contact-section">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 mx-auto col-md-12">
        <div class="page-header">
          <h2>Contact Me</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores ea rebum Stet
            clita.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <div class="contact-form">
          <h2>Contact Form</h2>


          <div class="notifications" data-v-notifications>

            <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

              <div class="icon align-middle me-2">
                <i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
              </div>

              <div class="flex-grow-1 align-self-center text-small">
                <div>
                  <div data-v-notification-text>
                    This is a placeholder for a notification message.
                  </div>
                </div>
              </div>


              <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">
                  <!-- <i class="la la-times"></i> -->
                </span>
              </button>
            </div>

            <div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success>

              <div class="icon align-middle me-2">
                <i class="align-middle la la-2x lh-1 la-check-circle"></i>
              </div>

              <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
                This is a placeholder for a success message.
              </div>

              <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">
                  <!-- <i class="la la-times"></i> -->
                </span>
              </button>
            </div>

            <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info>

              <div class="icon align-middle me-2">
                <i class="align-middle la la-2x lh-1  la-info-circle"></i>
              </div>

              <div class="flex-grow-1 align-self-center" data-v-notification-text>
                This is a placeholder for a info message.
              </div>

              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">
                  <!-- <i class="la la-times"></i> -->
                </span>
              </button>
            </div>

          </div>

          <div class="contact-form-input" data-v-component-plugin-contact-form-form data-v-storage="database" data-v-name="contact-us-page">
            <form method="post" action="">
              <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">

              <div class="row">
                <div class="col-md-6">
                  <input type="text" class="form-control" id="namme" name="name" placeholder="Your Name" required>
                </div>
                <div class="col-md-6">
                  <input type="email" class="form-control" id="validationCustom02" required="" placeholder="Your Email" name="email" required>
                </div>
                <div class="col-md-12">
                  <textarea class="form-control" id="message" name="message" rows="8" placeholder="Message here…"></textarea>
                </div>
                <div class="col-md-12">
                  <div class="form-check d-inline-block">
                    <input class="form-check-input" type="checkbox" id="gridCheck" required>
                    <label class="form-check-label" for="gridCheck">
                      I agree that my submitted data is being collected and stored.
                    </label>
                  </div>
                </div>
              </div>

              <!-- if these hidden inputs are filled then ignore, robots -->

              <input type="text" class="form-control d-none" placeholder="Subject" name="contact-form">

              <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

              <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">
              <div class="col-lg-12">
                <button type="submit" class="btn btn-primary">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/contact", {
    name: "Contact",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/contact-thumb.jpeg",
    html: `<section class="contact" id="contact">
  <div class="container-fulid">
    <div class="row g-0">
      <div class="col-lg-6">
        <div id="map">
        </div>
      </div>
      <div class="col-lg-6">
        <div class="contact-aria">
          <h3>
            115 W 18th St.
            <br>
            New York, NY 10011
          </h3>
          <ul>
            <li>
              <a href="mailto:hello@cohub.com">hello@cohub.com</a>
            </li>
            <li>
              <a href="tel:+613 4827 2294">+613 4827 2294</a>
            </li>
          </ul>
          <p>
            Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on
            business days.
          </p>
          <p>We are open from 7am — 7pm week days.</p>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/error", {
    name: "Error",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/error-thumb.jpeg",
    html: `<section class="error">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <!--start error-content -->
        <div class="error-content">
          <h2>404 Error</h2>
          <p>Oops! Page Not Found</p>
          <form action="#">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search again...">
              <div class="input-search">
                <a href="#">
                  <i class="ti-search"></i>
                </a>
              </div>
            </div>
          </form>
          <div class="error-content-link">
            <a href="index.html">
              <i class="ti-arrow-left"></i>
              back to home
            </a>
          </div>
        </div>
        <!--end error-content -->
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/faq", {
    name: "Faq",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/faq-thumb.jpeg",
    html: `<section class="faq" id="faq">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-12">
        <div class="faq-content text-block">
          <h2>Frequently Asked Questions</h2>
        </div>
      </div>
      <div class="col-lg-8 col-md-12">
        <div class="row">
          <div class="col-lg-6">
            <div class="faq-content">
              <h3>Q. How do I apply?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, consectetur?
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="faq-content">
              <h3>Q. What are entry requirements?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quasi.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="faq-content">
              <h3>Q. Where can I find out about funding?</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, velit?
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="faq-content">
              <h3>Q. How do I get a reference?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, repudiandae.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="faq-content">
              <h3>Q. How can I make a change to my application?</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit excepturi eaque quidem
                recusandae facere obcaecati optio, perferendis iusto maxime eligendi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/footer", {
    name: "Footer",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/footer-thumb.jpeg",
    html: `<section class="footer">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-12" data-v-component-site>
        <div class="footer-logo">
          <img src="images/logo.png"" loading=" lazy" class="logo-default-dark logo-main" src="images/logo.svg" alt="logo" data-v-site-logo>
        </div>
        <p class="footer-description" data-v-site-description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quia ab, natus fugiat voluptas saepe
          ipsum animi officiis in molestiae?
        </p>
        <div class="footer-text-block">
          <p data-v-site-address>
            coHub HQ, 115 W 18th St. New York, NY 10011
          </p>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 align-self-end">
        <div class="footer-icon">
          <ul>
            <li>
              <a href="#">
                <i class="ti-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="ti-twitter-alt" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="ti-dribbble" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="ti-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-copyright-text">
          <p>All right reserved copyright &copy;
            <a href="https://staticmania.com/" data-v-global-site-url target="_blank">
              <span data-v-global-site-title>StaticMania</span>
            </a>

            <span id="newYear" data-v-year></span>&ensp;
            <span class="muted">Powered by</span>
            <a href="https://vvveb.com/" target="_blank">Vvveb</a>
          </p>
          <ul>
            <li>
              <a href="PrivacyPolicy.html">Privacy Policy</a>
            </li>
            <li>
              <a href="terms.html">Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/gallery", {
    name: "Gallery",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/gallery-thumb.jpeg",
    html: `<section class="gallery" id="gallery">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="section-title">
          <h2>Take a look at Our Exibhition</h2>
          <p>
            We are the world’s largest provider of flexible workspace solutions, with customers including
            some of the most successful entrepreneurs
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="gallery-item">
          <a href="images/gallery/gallery01.jpg" data-source="images/gallery/gallery01.jpg" title="Exibhition 01">
            <img src="images/gallery/gallery01.jpg" alt="gallery-images">
          </a>
        </div>
      </div>
      <div class="col-md-6">
        <div class="gallery-item">
          <a href="images/gallery/gallery02.jpg" data-source="images/gallery/gallery02.jpg" title="Exibhition 02">
            <img src="images/gallery/gallery02.jpg" alt="gallery-images">
          </a>
        </div>
      </div>
      <div class="col-md-6">
        <div class="gallery-item">
          <a href="images/gallery/gallery03.jpg" data-source="images/gallery/gallery03.jpg" title="Exibhition 03">
            <img src="images/gallery/gallery03.jpg" alt="gallery-images">
          </a>
        </div>
      </div>
      <div class="col-md-6">
        <div class="gallery-item">
          <a href="images/gallery/gallery04.jpg" data-source="images/gallery/gallery04.jpg" title="Exibhition 04">
            <img src="images/gallery/gallery04.jpg" alt="gallery-images">
          </a>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/hero-aria", {
    name: "Hero aria",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/hero-aria-thumb.jpeg",
    html: `<section class="hero">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-12">
        <div class="hero-content">
          <h1>STAY PRODUCTIVE WITH
            <br> MODERN WORKSPACE
          </h1>
          <p>
            We have the world's largest network of workspaces and co-working spaces.
          </p>

          <div class="hero-video-player">
            <div class="hero-video-player-icon">
              <a class="popup-vimeo" href="https://vimeo.com/45830194?autoplay=1&rel=0">
                <i class="ti-control-play"></i>
              </a>
            </div>
            <span>
              <strong>coHub. in</strong> 30 Seconds
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/navigation-colored", {
    name: "Navigation colored",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/navigation-colored-thumb.jpeg",
    html: `<!-- Navbar Start -->
<nav class="main-nav main-nav-colored navbar navbar-expand-lg">
  <div class="container-fluid">
    <!-- Logo -->

    <div data-v-component-site>
      <a class="navbar-brand" href="index.html" data-v-url-params='{"host":"www.*.*"}'>
        <img class="logo-main" src="images/logo.png" alt="site-logo" data-v-site-logo>
        <img class="logo-white" src="images/logo-white.png" alt="logo" data-v-site-logo-dark>
        <!--
		   <img src="img/logo.png" loading="lazy" class="logo-sticky logo-main" src="images/logo.svg" alt="logo" data-v-site-logo-sticky>
		   <img src="img/logo-white.png" loading="lazy" class="logo-default-dark-sticky logo-main" src="images/logo.svg" alt="logo" data-v-site-logo-dark-sticky>
		   -->
      </a>
    </div>
    <!-- Toogle Button -->
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#mainNav">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <div class="collapse navbar-collapse nav-list" id="mainNav" data-v-component-menu="header" data-v-slug="main-menu">
      <!-- Navigation Links -->
      <ul class="navbar-nav ms-auto" data-v-menu-items>
        <li class="nav-item dropdown" data-v-menu-item data-v-class-if-has-dropdown="category.children > 0">

          <a class="nav-link" href="#" data-v-class-if-dropdown-toggle="category.children > 0" aria-haspopup="true" aria-expanded="false" data-v-menu-item-url>
            <span data-v-menu-item-name>Resources</span>
          </a>

          <div class="dropdown-menu" data-v-menu-item-recursive>
            <div data-v-menu-item class="nav-item" data-v-menu-item data-v-class-if-dropdown="category.children > 0">
              <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                <span data-v-menu-item-name>User Documentation</span>
              </a>
            </div>
            <div data-v-menu-item class="nav-item" data-v-menu-item data-v-class-if-dropdown="category.children > 0">
              <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                <span data-v-menu-item-name>Developer Documentation</span>
              </a>
            </div>
          </div>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a class="nav-link" href="content/index.html" data-v-menu-item-url>
            <span data-v-menu-item-name>Blog</span>
          </a>
        </li>

        <li class="nav-item" data-v-menu-item>
          <a href="#gallery" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Exibhition</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="#service" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Feature</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="about.html" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>About</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="#faq" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>FAQ</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="#blog" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Blog</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="#pricing" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Pricing</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="contact.html" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Contact</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>`
});Vvveb.Sections.add("cohub/navigation", {
    name: "Navigation",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/navigation-thumb.jpeg",
    html: `<!-- Navbar Start -->
<nav class="main-nav navbar navbar-expand-lg">
  <div class="container-fluid">
    <!-- Logo -->

    <div data-v-component-site>
      <a class="navbar-brand" href="index.html" data-v-url-params='{"host":"www.*.*"}'>
        <img class="logo-main" src="images/logo.png" alt="site-logo" data-v-site-logo>
        <img class="logo-white" src="images/logo-white.png" alt="logo" data-v-site-logo-dark>
        <!--
		   <img src="img/logo.png" loading="lazy" class="logo-sticky logo-main" src="images/logo.svg" alt="logo" data-v-site-logo-sticky>
		   <img src="img/logo-white.png" loading="lazy" class="logo-default-dark-sticky logo-main" src="images/logo.svg" alt="logo" data-v-site-logo-dark-sticky>
		   -->
      </a>
    </div>
    <!-- Toogle Button -->
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#mainNav">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <div class="collapse navbar-collapse nav-list" id="mainNav" data-v-component-menu="header" data-v-slug="main-menu">
      <!-- Navigation Links -->
      <ul class="navbar-nav ms-auto" data-v-menu-items>
        <li class="nav-item dropdown" data-v-menu-item data-v-class-if-has-dropdown="category.children > 0">

          <a class="nav-link" href="#" data-v-class-if-dropdown-toggle="category.children > 0" aria-haspopup="true" aria-expanded="false" data-v-menu-item-url>
            <span data-v-menu-item-name>Resources</span>
          </a>

          <div class="dropdown-menu" data-v-menu-item-recursive>
            <div data-v-menu-item class="nav-item" data-v-menu-item data-v-class-if-dropdown="category.children > 0">
              <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                <span data-v-menu-item-name>User Documentation</span>
              </a>
            </div>
            <div data-v-menu-item class="nav-item" data-v-menu-item data-v-class-if-dropdown="category.children > 0">
              <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                <span data-v-menu-item-name>Developer Documentation</span>
              </a>
            </div>
          </div>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a class="nav-link" href="content/index.html" data-v-menu-item-url>
            <span data-v-menu-item-name>Blog</span>
          </a>
        </li>

        <li class="nav-item" data-v-menu-item>
          <a href="#gallery" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Exibhition</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="#service" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Feature</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="about.html" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>About</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="#faq" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>FAQ</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="#blog" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Blog</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="#pricing" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Pricing</span>
          </a>
        </li>
        <li class="nav-item" data-v-menu-item>
          <a href="contact.html" class="nav-link scroll" data-v-menu-item-url>
            <span data-v-menu-item-name>Contact</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!-- Navbar End -->`
});Vvveb.Sections.add("cohub/popular-post", {
    name: "Popular post",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/popular-post-thumb.jpeg",
    html: `<section class="popular-post">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="blog-content">
          <img src="images/blog/blog-1.jpg" alt="blog-images">
          <div class="blog-content-text-blog" style="padding-top: 20px;text-align:center;">
            <h3>Built for teams</h3>
            <p>Ideal for large and small organisations</p>
            <a href="blog-post.html" target="_blank">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="blog-content">
          <img src="images/blog/blog-2.jpg" alt="blog-images">
          <div class="blog-content-text-blog" style="padding-top: 20px;text-align:center;">
            <h3>Modern Aesthetic</h3>
            <p>A highly adaptable look that's simple</p>
            <a href="blog-post.html" target="_blank">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="blog-content">
          <img src="images/blog/blog-3.jpg" alt=" blog-images">
          <div class="blog-content-text-blog" style="padding-top: 20px;text-align:center;">
            <h3>Beautiful markup</h3>
            <p>Following BEM conventions for readability</p>
            <a href="blog-post.html" target="_blank">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/post", {
    name: "Post",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/post-thumb.jpeg",
    html: `<article class="post" data-v-component-post="post">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <div class="post-title">
          <h2 data-v-post-name>The difference between meeting and connecting</h2>
        </div>
        <div class="post-meta">
          <p>
            <<span data-v-post-created_at data-filter-friendly_date>Jan 20, 2020</span> in <span>Web Design</span>
          </p>
        </div>
        <div class="post-image" data-v-if="post.image">
          <img src="images/blog/blog-feature.jpg" alt="feature-image" loading="lazy" data-v-post-image>
        </div>
        <div class="post-body" data-v-post-content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eius eum dolor voluptatum autem minima magni soluta reiciendis corrupti, iste odio, minus odit voluptates rerum veritatis nam vel! Odio, totam?
          </p>
          <h3>A sample heading</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore mollitia quas maiores, error magnam distinctio doloribus fugiat ea minima incidunt odio facere nam nisi quod nobis aut quae aliquid. Atque voluptas esse voluptate. Placeat laudantium veniam, repellendus laboriosam blanditiis commodi!
          </p>
          <blockquote>
            “Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex deleniti porro impedit iure nisi, eius sapiente dolorum magni tempora harum!”
          </blockquote>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est blanditiis totam dicta saepe, ducimus asperiores maxime omnis repudiandae perferendis. Itaque vitae cum reiciendis amet minima labore. Numquam, nemo? Cupiditate?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui a non sit eos deleniti hic iusto odit ratione temporibus cumque sequi tempore sint omnis officiis, illum inventore. Cum, aliquid minima.
          </p>
          <ul>
            <li>List item number 01</li>
            <li>List item number 02</li>
            <li>List item number 03</li>
            <li>List item number 04</li>
            <li>List item number 05</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</article>`
});Vvveb.Sections.add("cohub/pricing", {
    name: "Pricing",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/pricing-thumb.jpeg",
    html: `<section class="pricing" id="pricing">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-12">
        <div class="section-title">
          <h2>Simple pricing for everyone</h2>
          <p>Whether you're looking for a full-time workspace or are just visiting Melbourne, we've got an
            option for everyone
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="pricing-wraper">
          <div class="pricing-item">
            <span class="price">
              <sup>$</sup>19
            </span>
            <h3>Daily</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur quidem, impedit
              ipsa repellat sed!
            </p>
          </div>
          <a href="contact.html" class="btn btn-primary">Join Us</a>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="pricing-wraper">
          <div class="pricing-item">
            <span class="pricing-item-badge">Popular</span>
            <span class="price">
              <sup>$</sup>79
            </span>
            <h3>Weekly</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero exercitationem sed eius
              autem quisquam sapiente?
            </p>
          </div>
          <a href="contact.html" class="btn btn-primary">Join Us</a>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="pricing-wraper">
          <div class="pricing-item">
            <span class="price">
              <sup>$</sup>99
            </span>
            <h3>Monthly</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quas nesciunt vitae
              suscipit necessitatibus ea.
            </p>
          </div>
          <a href="contact.html" class="btn btn-primary">Join Us</a>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/privacy", {
    name: "Privacy",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/privacy-thumb.jpeg",
    html: `<section class="privacy-policy">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="page-header">
          <h1>CoHub Privacy Policy</h1>
          <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="privacy-policy-content">
          <div class="privacy-policy-item">
            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
          <div class="privacy-policy-item">
            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
          <div class="privacy-policy-item">
            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
          <div class="privacy-policy-item">
            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
          <div class="privacy-policy-item">
            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
          <div class="privacy-policy-item">
            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/quotes", {
    name: "Quotes",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/quotes-thumb.jpeg",
    html: `<section class="quotes">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="quotes-slider">
          <div class="quotes-slider-item">
            <h2>Behind every great product, there is a great mind.</h2>
            <span>-TechCrunch</span>
          </div>
          <div class="quotes-slider-item">
            <h2>Behind every great product, there is a great mind.</h2>
            <span>-TechCrunch</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/service", {
    name: "Service",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/service-thumb.jpeg",
    html: `<section class="service" id="service">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="section-title">
          <h2>Why Choose us?</h2>
          <p>
            We enable people and businesses to work where they want, when they want and how they want.
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="service-item">
          <i class="ti-view-grid" aria-hidden="true"></i>
          <h3>largest network</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel mollitia sit. Dicta maxime
            ullam quos sapiente eveniet odio accusamus.
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="service-item">
          <i class="ti-infinite" aria-hidden="true"></i>
          <h3>All sizes and budget</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod pariatur officia delectus commodi
            id temporibus fugit dolor excepturi iste nulla!
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="service-item">
          <i class="ti-help-alt" aria-hidden="true"></i>
          <h3>dedicated account manager</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, reiciendis. Dolore velit
            doloribus harum libero illo magni adipisci numquam placeat!
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="service-item">
          <i class="ti-credit-card" aria-hidden="true"></i>
          <h3>Easy Payment</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem pariatur nostrum enim neque
            nesciunt hic repudiandae, eaque obcaecati quisquam quae?
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="service-item">
          <i class="ti-lock" aria-hidden="true"></i>
          <h3>Dedicated Locker</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dicta eos quidem dolorem eaque
            hic dolore esse nisi illum ullam!
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="service-item">
          <i class="ti-image" aria-hidden="true"></i>
          <h3>Personalization</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti aspernatur dicta beatae
            alias dolorum fugiat rem ullam accusamus ut!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/story", {
    name: "Story",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/story-thumb.jpeg",
    html: `<section class="story">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="story-content">
          <h2>This Is Our Story.
          </h2>
          <p>We’re here for those who refuse to settle. Who never stop moving forwards. Who continue to search for new
            ideas and better experiences in everything they do. Because today’s hyper-connected world deserves a
            financial partner just as progressive.One that adapts to your needs, gives you control and constantly pushes
            you into new exciting spaces.</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="story-slider">
          <div class="slider-item">
            <img src="images/stor/story-01.jpg" alt="images">
          </div>
          <div class="slider-item">
            <img src="images/stor/story-01.jpg" alt="images">
          </div>
          <div class="slider-item">
            <img src="images/stor/story-01.jpg" alt="images">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/team", {
    name: "Team",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/team-thumb.jpeg",
    html: `<section class="team">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="section-title">
          <h2>Our Angel Investors</h2>
          <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis
            at tellus. Nulla quis lorem ut libero malesuada feugiat.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3">
        <div class="member-informashion">
          <div class="member-thume">
            <img src="images/team/design-team-01.jpg" alt="image">
          </div>
          <h3>Spider Web</h3>
          <p>Investor</p>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="member-informashion">
          <div class="member-thume">
            <img src="images/team/design-team-02.jpg" alt="image">
          </div>
          <h3>Spider Web</h3>
          <p>Investor</p>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="member-informashion">
          <div class="member-thume">
            <img src="images/team/design-team-03.jpg" alt="image">
          </div>
          <h3>Spider Web</h3>
          <p>Investor</p>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="member-informashion">
          <div class="member-thume">
            <img src="images/team/marketing-team-01.jpg" alt="image">
          </div>
          <h3>Spider web</h3>
          <p>Investor</p>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="member-informashion">
          <div class="member-thume">
            <img src="images/team/marketing-team-05.jpg" alt="image">
          </div>
          <h3>Spider Marketing</h3>
          <p>Investor</p>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="member-informashion">
          <div class="member-thume">
            <img src="images/team/design-team-02.jpg" alt="image">
          </div>
          <h3>Spider Marketing</h3>
          <p>Investor</p>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="member-informashion">
          <div class="member-thume">
            <img src="images/team/marketing-team-02.jpg" alt="image">
          </div>
          <h3>Spider Marketing</h3>
          <p>Investor</p>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="member-informashion">
          <div class="member-thume">
            <img src="images/team/marketing-team-03.jpg" alt="image">
          </div>
          <h3>Spider Marketing</h3>
          <p>Investor</p>
        </div>
      </div>

    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/terms", {
    name: "Terms",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/terms-thumb.jpeg",
    html: `<section class="privacy-policy">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="page-header">
          <h1>CoHub Terms & Conditions</h1>
          <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="privacy-policy-content">
          <div class="privacy-policy-item">
            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
          <div class="privacy-policy-item">
            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
          <div class="privacy-policy-item">
            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
          <div class="privacy-policy-item">
            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
          <div class="privacy-policy-item">
            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
          <div class="privacy-policy-item">
            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("cohub/testimonial", {
    name: "Testimonial",
    image: Vvveb.themeBaseUrl + "/screenshots/cohub/testimonial-thumb.jpeg",
    html: `<section class="testimonial">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="testimonial-content">
          <h3>Valuable Feedback</h3>
          <blockquote>
            ‘We achieved a cost-savings project while achieving cultural transformation to collaborate better together.
            Our innovation lab brings ideas, skills and importantly, individuals together to enable innovation.’
            <cite>FRANCIS VAN PARYS, PRESIDENT AND CEO, GE HEALTHCARE KOREA</cite>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</section>`
});
	Vvveb.SectionsGroup["Cohub"] = ["cohub/about","cohub/blog","cohub/call-to-action","cohub/clients","cohub/contact-form","cohub/contact","cohub/error","cohub/faq","cohub/footer","cohub/gallery","cohub/hero-aria","cohub/navigation-colored","cohub/navigation","cohub/popular-post","cohub/post","cohub/pricing","cohub/privacy","cohub/quotes","cohub/service","cohub/story","cohub/team","cohub/terms","cohub/testimonial"];
