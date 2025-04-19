/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('https://www.apple.com/v/apple-watch-series-10/b/images/overview/welcome/welcome_hero_endframe__xoqjrm8575ey_xlarge.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'computer-image': "url('https://www.apple.com/v/macbook-pro/al/images/meta/macbook-pro__catc3my4a336_og.png')",
        'iPhone-image': "url('https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg')",
        'appleWatch-image': "url('https://media.wired.com/photos/632a1fd0995b6da54b57efd1/master/pass/Apple-Watch-Series-8-Review-Gear.jpg')",
        'iPad-image': "url('https://www.apple.com/v/ipad-pro/an/images/overview/closer-look/space-black/slide_1A__cxvssgdj2v6u_large.jpg')",
        'accessori-image': "url('https://www.apple.com/v/airpods-pro/l/images/meta/og__eui2mpgzwyaa_overview.png')",
        'altro-image': "url('https://applepro.news/wp-content/uploads/2024/05/psa-perehodite-na-ipad-pro-m4-vam-ponadobitsya-novyj-apple.webp.jpeg')",
        'chi-siamo-image': "url('https://rtlimages.apple.com/cmc/dieter/store/16_9/R427.png?resize=2880:1612&output-format=jpg&output-quality=85&interpolation=progressive-bicubic')"
      }
    },
  },
  plugins: [],
}

// arrow-icon"https://www.reshot.com/preview-assets/icons/UCA8NGYZDJ/right-arrow-UCA8NGYZDJ.svg"