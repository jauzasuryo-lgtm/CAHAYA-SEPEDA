/**
* Template Name: Arsha
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Updated: Feb 22 2025 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  const whatsappContactForm = document.querySelector('#whatsapp-contact-form');
  if (whatsappContactForm) {
    whatsappContactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(whatsappContactForm);
      const message = [
        'Halo Sepeda Cahaya, saya ingin bertanya.',
        '',
        `Nama: ${formData.get('name')}`,
        `Subjek: ${formData.get('subject')}`,
        `Pesan: ${formData.get('message')}`
      ].join('\n');
      const whatsappUrl = `https://wa.me/6281215683736?text=${encodeURIComponent(message)}`;
      const whatsappWindow = window.open(whatsappUrl, '_blank');

      if (whatsappWindow) {
        whatsappWindow.opener = null;
      } else {
        window.location.href = whatsappUrl;
      }
    });
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  const portfolioSection = document.querySelector('#portfolio');
  if (portfolioSection) {
    const categoryImages = {
      mtb: 'assets/css/img/kategori/mtb-bikepacking-unsplash.jpg',
      folding: 'assets/css/img/kategori/folding-brompton-wikimedia.jpg',
      commuter: 'assets/css/img/kategori/commuter-city-unsplash.jpg',
      racer: 'assets/css/img/kategori/racer-road-unsplash.jpg'
    };
    const categories = [
      { id: 'mtb', label: 'MTB', image: categoryImages.mtb },
      { id: 'folding', label: 'Folding Bikes', image: categoryImages.folding },
      { id: 'commuter', label: 'Commuter Bikes', image: categoryImages.commuter },
      { id: 'racer', label: 'Racer', image: categoryImages.racer }
    ];

    const bikeSpecs = ({ material, fork, size, gears, groupset, brakes, tires, weight, age }) => [
      { label: 'Material rangka', value: material },
      { label: 'Fork / suspensi', value: fork },
      { label: 'Ukuran roda', value: size },
      { label: 'Jumlah gear', value: gears },
      { label: 'Groupset / shifter', value: groupset },
      { label: 'Rem', value: brakes },
      { label: 'Tipe ban', value: tires },
      { label: 'Bobot', value: weight },
      { label: 'Rekomendasi usia / tinggi badan', value: age }
    ];
    const catalogImage = slug => `assets/img/katalog/${slug}`;
    const referenceNote = 'Foto referensi model; warna dan stok dapat berbeda.';

    const products = [
      { name: 'Polygon Cascade 5', category: 'mtb', price: null, age: 'Dewasa', image: catalogImage('polygon-cascade-5.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium AL6', fork: 'SR Suntour XCM, 100 mm', size: '27,5"', gears: '10 speed', groupset: 'Shimano CUES 1x10', brakes: 'Cakram hidrolik', tires: '27,5 x 2,10', weight: '±14,7 kg', age: 'Dewasa, 155–180 cm' }) },
      { name: 'Polygon Xtrada 5', category: 'mtb', price: null, age: 'Dewasa', image: catalogImage('polygon-xtrada-5.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium', fork: 'SR Suntour XCM, 100 mm', size: '27,5" / 29"', gears: '20 speed', groupset: 'Shimano Altus 2x10', brakes: 'Cakram hidrolik', tires: '27,5 x 2,10', weight: '±14,2 kg', age: 'Dewasa, 160–185 cm' }) },
      { name: 'Polygon Premier 5', category: 'mtb', price: null, age: 'Dewasa', image: catalogImage('polygon-premier-5.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium', fork: 'SR Suntour XCT, 100 mm', size: '27,5"', gears: '24 speed', groupset: 'Shimano Tourney/Altus 3x8', brakes: 'Cakram hidrolik', tires: '27,5 x 2,10', weight: '±14,5 kg', age: 'Dewasa, 155–180 cm' }) },
      { name: 'Pacific MTB 27.5', category: 'mtb', price: null, age: 'Dewasa', image: catalogImage('pacific-mtb-27-5.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium', fork: 'Suspensi depan, 100 mm', size: '27,5"', gears: '12 speed', groupset: 'Shimano 1x12', brakes: 'Cakram hidrolik', tires: '27,5 x 2,10', weight: '±14,0 kg', age: 'Dewasa, 160–185 cm' }) },
      { name: 'United Miami 27.5', category: 'mtb', price: null, age: 'Dewasa', image: catalogImage('united-miami-27-5.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium hydroformed', fork: 'Suntour XCM 30, 120 mm', size: '27,5" / 29"', gears: '27 speed', groupset: 'Shimano Altus/Alivio 3x9', brakes: 'Shimano MT200 hidrolik, 160 mm', tires: 'Kenda 27,5 x 2,10', weight: '±14,8 kg', age: 'Dewasa, 160–185 cm' }) },
      { name: 'TRINX M136', category: 'mtb', price: null, age: 'Dewasa', image: catalogImage('trinx-m136.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium', fork: 'Suspensi depan, 100 mm', size: '26"', gears: '21 speed', groupset: 'Shimano Tourney 3x7', brakes: 'Cakram mekanik', tires: '26 x 2,0', weight: '±14,0 kg', age: 'Dewasa, 160–180 cm' }) },
      { name: 'TREK Marlin 5', category: 'mtb', price: null, age: 'Dewasa', image: catalogImage('trek-marlin-5.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Alpha Silver Aluminium', fork: 'SR Suntour XCE 28, 100 mm', size: '27,5" / 29"', gears: '18 speed', groupset: 'Shimano CUES 2x9', brakes: 'Cakram hidrolik', tires: 'Bontrager Connection 27,5 x 2,20', weight: '±14,6 kg', age: 'Dewasa, 160–185 cm' }) },
      { name: 'Polygon Maze M20', category: 'mtb', price: null, age: 'Anak-anak', image: catalogImage('polygon-maze-m20.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium', fork: 'Suspensi depan, 40 mm', size: '20"', gears: '7 speed', groupset: 'Shimano Tourney 1x7', brakes: 'Cakram mekanik', tires: '20 x 2,0', weight: '±10,5 kg', age: 'Anak 6–9 tahun, 115–135 cm' }) },
      { name: 'Pacific Invert Cadet 20', category: 'mtb', price: null, age: 'Anak-anak', image: catalogImage('pacific-invert-cadet-20.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium', fork: 'Suspensi depan, 40 mm', size: '20"', gears: '6 speed', groupset: 'Shimano Tourney 1x6', brakes: 'V-brake', tires: '20 x 1,95', weight: '±10,0 kg', age: 'Anak 6–9 tahun, 115–135 cm' }) },
      { name: 'Polygon Maze M24', category: 'mtb', price: null, age: 'Anak-anak', image: catalogImage('polygon-maze-m24.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium', fork: 'Suspensi depan, 50 mm', size: '24"', gears: '7 speed', groupset: 'Shimano Tourney 1x7', brakes: 'Cakram mekanik', tires: '24 x 2,10', weight: '±12,0 kg', age: 'Anak 8–12 tahun, 130–150 cm' }) },
      { name: 'MTB Junior 20', category: 'mtb', price: null, age: 'Anak-anak', image: catalogImage('mtb-junior-20.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium', fork: 'Suspensi depan, 40 mm', size: '20"', gears: '7 speed', groupset: 'Shimano Tourney 1x7', brakes: 'Cakram mekanik', tires: '20 x 2,0', weight: '±10,5 kg', age: 'Anak 6–9 tahun, 115–135 cm' }) },
      { name: 'MTB Junior 24', category: 'mtb', price: null, age: 'Anak-anak', image: catalogImage('mtb-junior-24.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium', fork: 'Suspensi depan, 50 mm', size: '24"', gears: '7 speed', groupset: 'Shimano Tourney 1x7', brakes: 'Cakram mekanik', tires: '24 x 2,10', weight: '±12,0 kg', age: 'Anak 8–12 tahun, 130–150 cm' }) },
      { name: 'Dahon Route 16', category: 'folding', price: null, size: '16"', age: null, colors: [], image: catalogImage('dahon-route-16.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium', fork: 'Rigid', size: '16"', gears: '7 speed', groupset: 'Shimano Tourney 1x7', brakes: 'V-brake', tires: '16 x 1,75', weight: '±11,0 kg', age: 'Dewasa, 150–180 cm' }) },
      { name: 'Dahon Route 20', category: 'folding', price: null, size: '20"', age: null, colors: [], image: catalogImage('dahon-route-20.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium', fork: 'Rigid', size: '20"', gears: '7 speed', groupset: 'Shimano Tourney 1x7', brakes: 'V-brake', tires: '20 x 1,75', weight: '±12,0 kg', age: 'Dewasa, 155–185 cm' }) },
      { name: 'United Stylo 16', category: 'folding', price: null, size: '16"', age: null, colors: [], image: catalogImage('united-stylo-16.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Baja', fork: 'Rigid', size: '16"', gears: 'Single speed', groupset: 'Single speed, 48T', brakes: 'V-brake', tires: '16 x 1,75', weight: '±10,5 kg', age: 'Dewasa, 150–175 cm' }) },
      { name: 'Polygon Urbano 3 20"', category: 'folding', price: null, size: '20"', age: null, colors: [], image: catalogImage('polygon-urbano-3-20.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium', fork: 'Rigid', size: '20"', gears: '7 speed', groupset: 'Shimano Tourney 1x7', brakes: 'V-brake', tires: '20 x 1,50', weight: '±12,0 kg', age: 'Dewasa, 155–180 cm' }) },
      { name: 'Road Racer 700c', category: 'racer', price: null, size: '700c', age: null, colors: [], image: catalogImage('road-racer-700c.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium', fork: 'Rigid', size: '700c', gears: '14 speed', groupset: 'Shimano Tourney 2x7', brakes: 'Caliper', tires: '700 x 25c', weight: '±11,0 kg', age: 'Dewasa, 165–185 cm' }) },
      { name: 'Racer Aero 700c', category: 'racer', price: null, size: '700c', age: null, colors: [], image: catalogImage('racer-aero-700c.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium', fork: 'Karbon', size: '700c', gears: '16 speed', groupset: 'Shimano Claris 2x8', brakes: 'Caliper', tires: '700 x 25c', weight: '±10,5 kg', age: 'Dewasa, 165–185 cm' }) },
      { name: 'Racer Endurance 700c', category: 'racer', price: null, size: '700c', age: null, colors: [], image: catalogImage('racer-endurance-700c.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium', fork: 'Karbon', size: '700c', gears: '18 speed', groupset: 'Shimano Sora 2x9', brakes: 'Cakram hidrolik', tires: '700 x 28c', weight: '±11,0 kg', age: 'Dewasa, 165–185 cm' }) },
      { name: 'Commuter City 26"', category: 'commuter', price: null, size: '26"', age: null, colors: [], image: catalogImage('commuter-city-26.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium', fork: 'Rigid', size: '26"', gears: '7 speed', groupset: 'Shimano Tourney 1x7', brakes: 'V-brake', tires: '26 x 1,75', weight: '±14,0 kg', age: 'Dewasa, 155–180 cm' }) },
      { name: 'Sepeda Harian Urban 700c', category: 'commuter', price: null, size: '700c', age: null, colors: [], image: catalogImage('sepeda-harian-urban-700c.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium', fork: 'Rigid', size: '700c', gears: '8 speed', groupset: 'Shimano Altus 1x8', brakes: 'Cakram hidrolik', tires: '700 x 35c', weight: '±12,0 kg', age: 'Dewasa, 160–185 cm' }) },
      { name: 'Commuter Family 24"', category: 'commuter', price: null, size: '24"', age: null, colors: [], image: catalogImage('commuter-family-24.webp'), isReference: true, imageNote: referenceNote, dateAdded: null, specs: bikeSpecs({ material: 'Aluminium', fork: 'Rigid', size: '24"', gears: '7 speed', groupset: 'Shimano Tourney 1x7', brakes: 'V-brake', tires: '24 x 1,75', weight: '±12,0 kg', age: 'Remaja/dewasa, 150–175 cm' }) }
    ];

    const spareParts = [
      ['Rantai Sepeda 6–8 Speed', 'rantai-sepeda.webp', 'Rantai', '6–8 speed', 'Baru', 'Baja', '1/2" x 3/32"'],
      ['Ban Luar 26 x 1.95', 'ban-luar.webp', 'Ban luar', '26 x 1.95', 'Baru', 'Karet', '26 x 1,95'],
      ['Ban Dalam 26"', 'ban-dalam.webp', 'Ban dalam', '26 inci', 'Baru', 'Butyl', '26 x 1,75–2,125'],
      ['Kampas Rem Shimano L05A', 'kampas-rem.webp', 'Rem', 'Shimano hidrolik', 'Baru', 'Resin + pelat baja', 'Shimano L05A'],
      ['Sadel Sepeda City Comfort', 'sadel-sepeda.webp', 'Sadel', 'Universal', 'Baru', 'Sintetis + gel', '270 x 160 mm'],
      ['Stang Sepeda MTB 31.8 mm', 'stang-sepeda.webp', 'Stang', 'Clamp 31,8 mm', 'Baru', 'Aluminium', '31,8 mm, 720 mm'],
      ['Pedal Sepeda Fyxation', 'pedal-sepeda.webp', 'Pedal', '9/16 inci', 'Baru', 'Nylon komposit', '9/16 inci'],
      ['Shifter Sepeda 8-Speed', 'shifter-sepeda.webp', 'Shifter', '8 speed', 'Baru', 'Aluminium/plastik', '8 speed'],
      ['Gear Sepeda Shimano CS-HG51', 'cassette-gear.webp', 'Transmisi', '8 speed', 'Baru', 'Baja', '11–32T, 8 speed'],
      ['Velg Sepeda 26" Alloy', 'velg-sepeda.webp', 'Roda', '26 inci', 'Baru', 'Aluminium', '26 inci, 32H'],
      ['Lampu Depan USB Rechargeable', 'lampu-depan.webp', 'Lampu depan', 'Universal', 'Baru', 'Plastik/aluminium', 'USB rechargeable'],
      ['Lampu Belakang Sigma Hiro', 'lampu-belakang.webp', 'Lampu belakang', 'Universal', 'Baru', 'Plastik', '2 x AAA'],
      ['Bell Sepeda Rose Bikes', 'bel-sepeda.webp', 'Bell', 'Universal', 'Baru', 'Aluminium', '22,2 mm'],
      ['Spion Sepeda BTWIN 100', 'spion-sepeda.webp', 'Spion', 'Universal', 'Baru', 'Plastik + kaca', '22,2 mm']
    ].map(([name, file, type, compatible, condition, material, size]) => ({
      name, category: 'spareparts', price: null, image: catalogImage(file),
      isReference: true, imageNote: referenceNote, dateAdded: null, colors: [],
      meta: [{ label: 'JENIS', value: type }, { label: 'KOMPATIBEL', value: compatible }, { label: 'KONDISI', value: condition }],
      specs: [
        { label: 'Jenis', value: type },
        { label: 'Material', value: material },
        { label: 'Ukuran / dimensi', value: size },
        { label: 'Kompatibilitas', value: compatible },
        { label: 'Kondisi', value: condition }
      ]
    }));

    products.push(...spareParts);

    // Offline-friendly research data is loaded before this script.
    const researchedProducts = new Map(
      (window.CAHAYA_CATALOG?.products || []).map(product => [product.name, product])
    );
    products.forEach(product => {
      const researched = researchedProducts.get(product.name);
      if (researched) Object.assign(product, researched);
    });
    const formatRupiah = value => `Rp ${new Intl.NumberFormat('id-ID').format(value)}`;

    const mainTabButtons = portfolioSection.querySelectorAll('.portfolio-filters button');
    const categoryGrid = portfolioSection.querySelector('#portfolio-category-grid');
    const productToolbar = portfolioSection.querySelector('#portfolio-product-toolbar');
    const audienceGrid = portfolioSection.querySelector('#portfolio-audience-grid');
    const productGrid = portfolioSection.querySelector('#portfolio-product-grid');
    const categoryTitle = portfolioSection.querySelector('#portfolio-category-title');
    const backButton = portfolioSection.querySelector('#portfolio-back-button');
    const emptyState = portfolioSection.querySelector('#portfolio-empty-state');
    const existingItems = productGrid.querySelectorAll('[data-gallery-category]');
    let activeMainTab = 'all';
    let selectedCategory = null;
    let selectedAudience = null;
    let lastFocusedElement = null;
    const imagePreviewDialog = document.createElement('dialog');
    imagePreviewDialog.className = 'product-image-dialog';
    imagePreviewDialog.setAttribute('aria-labelledby', 'product-dialog-title');

    const imagePreviewClose = document.createElement('button');
    imagePreviewClose.type = 'button';
    imagePreviewClose.className = 'product-image-dialog-close';
    imagePreviewClose.setAttribute('aria-label', 'Tutup pratinjau gambar');
    imagePreviewClose.innerHTML = '<i class="bi bi-x-lg" aria-hidden="true"></i>';

    const imagePreviewLayout = document.createElement('div');
    imagePreviewLayout.className = 'product-image-dialog-layout';

    const imagePreviewDetails = document.createElement('div');
    imagePreviewDetails.className = 'product-image-dialog-details';

    const imagePreviewCaption = document.createElement('h2');
    imagePreviewCaption.className = 'product-image-dialog-caption';
    imagePreviewCaption.id = 'product-dialog-title';

    const imagePreviewPrice = document.createElement('p');
    imagePreviewPrice.className = 'product-image-dialog-price';

    const imagePreviewNote = document.createElement('p');
    imagePreviewNote.className = 'product-image-dialog-note';

    const imagePreviewColors = document.createElement('div');
    imagePreviewColors.className = 'product-image-dialog-colors';

    const imagePreviewSpecs = document.createElement('table');
    imagePreviewSpecs.className = 'product-image-dialog-specs';
    const imagePreviewSpecsBody = document.createElement('tbody');
    imagePreviewSpecs.appendChild(imagePreviewSpecsBody);

    const imagePreviewContact = document.createElement('a');
    imagePreviewContact.className = 'product-image-dialog-contact';
    imagePreviewContact.href = '#contact';
    imagePreviewContact.textContent = 'Hubungi Kami';
    imagePreviewContact.addEventListener('click', () => closeProductDialog());

    imagePreviewDetails.append(imagePreviewCaption, imagePreviewPrice, imagePreviewNote, imagePreviewColors, imagePreviewSpecs, imagePreviewContact);
    imagePreviewLayout.appendChild(imagePreviewDetails);
    imagePreviewDialog.append(imagePreviewClose, imagePreviewLayout);
    document.body.appendChild(imagePreviewDialog);

    imagePreviewClose.addEventListener('click', closeProductDialog);
    imagePreviewDialog.addEventListener('cancel', event => {
      event.preventDefault();
      closeProductDialog();
    });
    document.addEventListener('keydown', event => {
      if (!imagePreviewDialog.open) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        closeProductDialog();
      } else if (event.key === 'Tab') {
        trapProductDialogFocus(event);
      }
    });
    imagePreviewDialog.addEventListener('click', event => {
      if (event.target === imagePreviewDialog) closeProductDialog();
    });

    function closeProductDialog() {
      if (!imagePreviewDialog.open) return;
      imagePreviewDialog.close();
      if (lastFocusedElement && lastFocusedElement.isConnected) lastFocusedElement.focus();
    }

    function trapProductDialogFocus(event) {
      const focusable = Array.from(imagePreviewDialog.querySelectorAll('button:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    function openProductDetails(product, trigger) {
      lastFocusedElement = trigger;
      imagePreviewCaption.textContent = product.name;
      imagePreviewPrice.textContent = product.price
        ? formatRupiah(product.price)
        : 'Harga belum tersedia — hubungi toko';
      imagePreviewNote.textContent = product.description || product.imageNote || 'Informasi produk dapat ditanyakan langsung ke toko.';
      imagePreviewColors.replaceChildren();
      const variants = (product.colors || []).filter(color => color.image);
      if (variants.length) {
        const colorsLabel = document.createElement('strong');
        colorsLabel.textContent = 'Pilihan warna';
        imagePreviewColors.appendChild(colorsLabel);
        variants.forEach(variant => {
          const colorButton = document.createElement('button');
          colorButton.type = 'button';
          colorButton.className = 'product-dialog-color';
          colorButton.style.setProperty('--product-color', variant.value);
          colorButton.setAttribute('aria-label', `Lihat warna ${variant.name}`);
          colorButton.setAttribute('aria-pressed', String(variant.image === product.image));
          colorButton.textContent = variant.name;
          colorButton.addEventListener('click', () => {
            imagePreviewColors.querySelectorAll('.product-dialog-color').forEach(button => {
              button.setAttribute('aria-pressed', String(button === colorButton));
            });
          });
          imagePreviewColors.appendChild(colorButton);
        });
      }

      imagePreviewSpecsBody.replaceChildren();
      (product.specs || []).forEach(spec => {
        const row = document.createElement('tr');
        const label = document.createElement('th');
        label.scope = 'row';
        label.textContent = spec.label;
        const value = document.createElement('td');
        value.textContent = spec.value || '—';
        row.append(label, value);
        imagePreviewSpecsBody.appendChild(row);
      });

      imagePreviewDialog.showModal();
      imagePreviewClose.focus();
    }

    function createCategoryCard(category) {
      const column = document.createElement('div');
      column.className = 'col-lg-3 col-md-6 category-column';

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'portfolio-category-card';
      button.dataset.categoryId = category.id;
      button.setAttribute('aria-label', `Lihat kategori ${category.label}`);
      const image = document.createElement('img');
      image.className = 'portfolio-category-image';
      image.src = category.image;
      image.alt = `Kategori sepeda ${category.label}`;
      image.loading = 'lazy';
      image.decoding = 'async';
      const label = document.createElement('span');
      label.className = 'portfolio-category-label';
      label.textContent = category.label;
      button.append(image, label);

      column.appendChild(button);
      return column;
    }

    function createMetaItem(label, value, isColors) {
      const item = document.createElement('div');
      item.className = 'product-meta-item';

      const labelElement = document.createElement('span');
      labelElement.className = 'product-meta-label';
      labelElement.textContent = label;
      item.appendChild(labelElement);

      if (isColors) {
        if (!value.length) {
          const valueElement = document.createElement('span');
          valueElement.textContent = '—';
          item.appendChild(valueElement);
          return item;
        }
        const colorsElement = document.createElement('span');
        colorsElement.className = 'product-colors';
        colorsElement.setAttribute('role', 'img');
        colorsElement.setAttribute('aria-label', `Warna: ${value.map(color => color.name).join(', ')}`);
        value.forEach(color => {
          const dot = document.createElement('span');
          dot.className = 'product-color-dot';
          dot.style.setProperty('--product-color', color.value);
          dot.title = color.name;
          dot.setAttribute('aria-hidden', 'true');
          colorsElement.appendChild(dot);
        });
        item.appendChild(colorsElement);
      } else {
        const valueElement = document.createElement('span');
        valueElement.textContent = value || '—';
        item.appendChild(valueElement);
      }

      return item;
    }

    function createProductCard(product) {
      const column = document.createElement('div');
      column.className = 'col-lg-4 col-md-6 product-column';

      const card = document.createElement('article');
      card.className = 'product-card';

      const imageWrap = document.createElement('div');
      imageWrap.className = 'product-image-wrap';
      if (product.image) {
        const image = document.createElement('img');
        image.className = 'product-img';
        image.alt = `${product.isReference ? 'Foto referensi' : 'Foto produk'} ${product.name}`;
        image.loading = 'lazy';
        image.decoding = 'async';
        image.onerror = function() {
          this.onerror = null;
          this.hidden = true;
          const message = document.createElement('span');
          message.className = 'product-image-placeholder';
          message.textContent = 'Foto tidak dapat dimuat';
          imageWrap.appendChild(message);
        };
        image.src = product.image;
        imageWrap.appendChild(image);
      } else {
        const imagePlaceholder = document.createElement('div');
        imagePlaceholder.className = 'product-image-placeholder';
        imagePlaceholder.textContent = 'Foto produk akan diperbarui';
        imageWrap.appendChild(imagePlaceholder);
      }

      const body = document.createElement('div');
      body.className = 'product-card-body';

      const name = document.createElement('h3');
      name.className = 'product-name';
      name.textContent = product.name;

      const price = document.createElement('p');
      price.className = 'product-price';
      price.textContent = product.price
        ? formatRupiah(product.price)
        : 'Harga belum tersedia';

      body.appendChild(name);
      body.appendChild(price);

      if (product.category === 'spareparts') {
        const meta = document.createElement('div');
        meta.className = 'product-meta';
        product.meta.forEach(item => meta.appendChild(createMetaItem(item.label, item.value, item.colors)));
        body.appendChild(meta);
      }

      const detailsButton = document.createElement('button');
      detailsButton.type = 'button';
      detailsButton.className = 'product-open-details';
      detailsButton.textContent = 'Lihat Spesifikasi';
      detailsButton.addEventListener('click', () => openProductDetails(product, detailsButton));
      body.appendChild(detailsButton);

      card.append(imageWrap, body);
      column.appendChild(card);
      return column;
    }

    function updateMainTabState() {
      mainTabButtons.forEach(button => {
        const isActive = button.dataset.mainTab === activeMainTab;
        button.classList.toggle('filter-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
      });
    }

    function renderCategories() {
      categoryGrid.replaceChildren();
      categories.forEach(category => categoryGrid.appendChild(createCategoryCard(category)));
    }

    function renderAudienceChoices() {
      audienceGrid.replaceChildren();
      [
        { id: 'adult', label: 'Dewasa' },
        { id: 'children', label: 'Anak-anak' }
      ].forEach(audience => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'portfolio-audience-button';
        button.dataset.bikeAudience = audience.id;
        button.textContent = audience.label;
        button.setAttribute('aria-pressed', String(selectedAudience === audience.id));
        audienceGrid.appendChild(button);
      });
    }

    function renderProducts() {
      productGrid.querySelectorAll('.product-column').forEach(column => column.remove());

      const showCategories = activeMainTab === 'bikes' && !selectedCategory;
      const showCategoryFlow = activeMainTab === 'bikes' && Boolean(selectedCategory);
      const showCategoryProducts = showCategoryFlow && Boolean(selectedAudience);
      const showProductList = ['all', 'spareparts'].includes(activeMainTab) || showCategoryProducts;

      categoryGrid.hidden = !showCategories;
      productToolbar.hidden = !(showProductList || showCategoryFlow);
      audienceGrid.hidden = !showCategoryFlow;
      productGrid.hidden = !showProductList;
      emptyState.hidden = true;
      backButton.hidden = !showCategoryFlow;
      existingItems.forEach(item => { item.hidden = true; });

      if (showCategories) {
        renderCategories();
      } else {
        if (showCategoryFlow) {
          renderAudienceChoices();
          categoryTitle.textContent = categories.find(item => item.id === selectedCategory).label;
        }
        if (!showProductList) return;

        let visibleProducts = products;
        if (showCategoryProducts) {
          const category = categories.find(item => item.id === selectedCategory);
          visibleProducts = products.filter(product => {
            if (product.category !== selectedCategory) return false;
            const audience = product.age && product.age !== 'Dewasa' ? 'children' : 'adult';
            return audience === selectedAudience;
          });
          categoryTitle.textContent = `${category.label} — ${selectedAudience === 'adult' ? 'Dewasa' : 'Anak-anak'}`;
        } else if (activeMainTab === 'spareparts') {
          visibleProducts = spareParts;
          categoryTitle.textContent = 'Suku Cadang';
        } else {
          categoryTitle.textContent = 'Semua Produk';
        }

        const categoryProducts = [...visibleProducts];
        categoryProducts.sort((first, second) => (Date.parse(second.dateAdded) || 0) - (Date.parse(first.dateAdded) || 0));

        categoryProducts.forEach(product => productGrid.appendChild(createProductCard(product)));
        if (showCategoryProducts && categoryProducts.length === 0) {
          const audienceLabel = selectedAudience === 'adult' ? 'dewasa' : 'anak-anak';
          const category = categories.find(item => item.id === selectedCategory);
          emptyState.textContent = `Sepeda ${audienceLabel} untuk kategori ${category.label} belum tersedia.`;
        } else {
          emptyState.textContent = 'Segera hadir';
        }
        emptyState.hidden = categoryProducts.length > 0;
      }
    }

    mainTabButtons.forEach(button => {
      button.addEventListener('click', () => {
        activeMainTab = button.dataset.mainTab;
        selectedCategory = null;
        selectedAudience = null;
        updateMainTabState();
        renderProducts();
      });
    });

    document.querySelectorAll('[data-gallery-tab]').forEach(link => {
      link.addEventListener('click', () => {
        const tab = link.dataset.galleryTab;
        if (!['all', 'bikes', 'spareparts'].includes(tab)) return;
        activeMainTab = tab;
        selectedCategory = null;
        selectedAudience = null;
        updateMainTabState();
        renderProducts();
      });
    });

    categoryGrid.addEventListener('click', event => {
      const categoryButton = event.target.closest('button[data-category-id]');
      if (!categoryButton) return;

      activeMainTab = 'bikes';
      selectedCategory = categoryButton.dataset.categoryId;
      selectedAudience = null;
      updateMainTabState();
      renderProducts();
    });

    audienceGrid.addEventListener('click', event => {
      const audienceButton = event.target.closest('button[data-bike-audience]');
      if (!audienceButton) return;
      selectedAudience = audienceButton.dataset.bikeAudience;
      renderProducts();
    });

    backButton.addEventListener('click', () => {
      selectedCategory = null;
      selectedAudience = null;
      renderProducts();
    });

    updateMainTabState();
    renderProducts();
  }

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();