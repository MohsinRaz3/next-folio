# Neo-Brutalism Portfolio Redesign Prompt

Design an updated **Neo-Brutalism** style theme for the existing Next.js portfolio website (with Hero, Skills, Projects, Testimonials, and Contact components). Focus only on visual redesign and styling using Tailwind CSS. Neo-Brutalism is a bold, raw aesthetic inspired by mid-20th-century Brutalist architecture. It features sharp contrasts, simple geometric shapes, and loud typography, creating an unapologetically graphic look.

## Color Palette & Theme

### Neon Color Palette

Use the provided neon color palette for accents and backgrounds:

- **Light Cyan**: `#7DF9FF`
- **Neon Green**: `#2FFF2F`
- **Neon Pink**: `#FF00F5`
- **Electric Blue**: `#3300FF`
- **Pure Yellow**: `#FFFF00`
- **Bright Orange**: `#FF4911`

These are bold, high-contrast hues that grab attention.

### Additional Colors

Incorporate additional vibrant or muted/vintage colors as needed (for example, colors like `#DAF5F0`, `#B5D2AD`, `#FDFD96`, etc.). These add variety while preserving the flat, high-contrast style.

### Design Rules

- **Do not use any gradients**: keep colors solid and flat in each area. Neo-Brutalism emphasizes distinct color blocks, not gradients.
- Use **pitch-black** (`#000000`) for outlines, borders, and shadows. Black is essential in this style: thick black outlines and drop-shadows help elements stand out against neon colors.
- Alternate between dark (black or dark gray) backgrounds and vivid color blocks for different sections. For example, the Hero section might have a neon or pastel backdrop, while the next section is black, etc. The overall effect should remain high-contrast and energetic.

## Typography

### Font Characteristics

Use bold, geometric sans-serif fonts. Headings should be very large (e.g. `text-5xl` or larger) and attention-grabbing. Neo-Brutalism often treats typography as a graphic element.

### Suggested Fonts

Incorporate the suggested fonts:

- **Lexend Mega** (bold)
- **Public Sans** (bold)
- **Mabry Pro** (bold)
- **Archivo** (bold)

For example, configure Tailwind with `font-lexend: ['Lexend Mega', 'sans-serif']` and then use `className="font-lexend"` on headings.

### Styling Guidelines

- Use **uppercase text** and extra letter-spacing (e.g. `tracking-wider`) for emphasis. This matches the loud, unapologetic style.
- Keep body copy clean and legible. Use generous line-height and spacing to give a slightly mechanical feel.
- Remember: Neo-Brutalist typography is intentionally unrefined and bold, so let headings and key text make a strong impact.

## Layout, Shapes & Decorations

### Structure

- Structure content in cards or panels with **thick black borders** (`border-4 border-black`). For example, wrap skills or project items in boxed cards to create distinct blocks on the page.
- Add **raw geometric shapes** (circles, squares, stars, polygons) as decorative elements or section backgrounds. These shapes should have black strokes or shadows. Place them asymmetrically or partially overlapping content to create a dynamic, irregular layout.

### Section Division

- Use **bold separators** (thick lines or blocks) to divide sections. For example, a thick horizontal line or offset colored bar can break up the content areas.
- Assign each section (Hero, Skills, etc.) its own background style (bright or dark). Embrace asymmetry: offset content, use angled elements or uneven grids (Neo-Brutalism is not about perfect symmetry).
- Ensure ample spacing (padding/margin) around elements. "White" (or blank) space is part of the brutalist feel and prevents clutter.

## Components & Animations

### Buttons and Interactive Elements

Style them boldly (neon background with black text or vice versa). Add a noticeable hover effect: for example, on hover slightly scale up the button or add a chunky colored drop-shadow (e.g. `shadow-[8px_8px_0_#000]`) to make it pop.

### Cards and Boxes

On hover, apply a simple transform or color change. Use Tailwind transitions (e.g. `transition ease-in-out duration-200`). For example, a skill or project card could lift up (`hover:-translate-y-1`) or change its border color on hover.

### Animation Principles

Keep animations simple and quick. Neo-Brutalist design relies on a static, high-impact layout, so animations should only add subtle emphasis (no complex motion).

### Forms and Inputs

Style inputs with dark backgrounds and bright borders. On focus, highlight the border in a neon color. For example, give input fields a black outline that turns neon-green (or other neon) on focus.

## Implementation Tips (Tailwind CSS)

### Tailwind Configuration
```javascript
// tailwind.config.js (extend the theme)
module.exports = {
  theme: {
    extend: {
      colors: {
        'neo-cyan': '#7DF9FF',
        'neo-green': '#2FFF2F',
        'neo-pink': '#FF00F5',
        'neo-blue': '#3300FF',
        'neo-yellow': '#FFFF00',
        'neo-orange': '#FF4911',
        // add muted/vintage tones if needed
      },
      fontFamily: {
        lexend: ['Lexend Mega', 'sans-serif'],
        public: ['Public Sans', 'sans-serif'],
        // add Mabry Pro, Archivo similarly
      },
      boxShadow: {
        'neo': '8px 8px 0 #000',  // sharp black shadow
      },
    },
  },
}
```

### Usage Guidelines

- Use Tailwind utility classes throughout (e.g. `bg-neo-pink`, `text-black`, `border-black`, `font-lexend`, `shadow-neo`). You can use arbitrary values in JIT mode as needed (e.g. `shadow-[8px_8px_0_#000]`).
- Import the selected Google Fonts (Lexend Mega, Public Sans, etc.) in `_app.js` or a global CSS so Tailwind can apply them.
- Apply classes to the existing components (`<Hero />`, `<Skills />`, etc.) to restyle them. For example, wrap the hero content in a container with `bg-neo-cyan text-black p-8 border-4 border-black`.

### Example (Hero Section)
```jsx
<section className="bg-neo-cyan text-black p-16 border-4 border-black">
  <h1 className="font-lexend text-6xl uppercase">Your Name</h1>
  <p className="mt-4 tracking-wider">Web Developer & Designer</p>
  <button className="mt-8 bg-neo-pink text-black px-6 py-3 font-bold transition hover:scale-105 shadow-neo">
    Contact Me
  </button>
</section>
```

## Section Guidelines

### Hero Section

Feature a large bold headline and a short intro. Use a full-width color block (neon or dark) as the background. Add a prominent CTA button styled in neon (or black text on neon) with a hover pop effect. Include an oversized geometric shape (e.g. a circle or polygon) as a decorative accent behind the text.

### Skills Section

Show skills in cards or blocks. Each skill card can have a neon border and a black/dark background (or vice versa). Label each skill in uppercase bold text, and include a simple icon or graphic (outlined in black). You may separate categories of skills with a thick black line.

### Projects Section

Display projects as cards or tiles with thick black outlines and subtle shadows (`shadow-neo`). On hover, cards can lift slightly. Use a bright background color block or a neon bar to highlight each project's title or category.

### Testimonials Section

Put each testimonial in a box with a light neon or muted background and a black border. Emphasize quotation marks or add decorative lines. Use large, italic or stylized font for quotes and bold uppercase for names/roles.

### Contact Section

Style the contact form area with a dark background (`bg-black` or `bg-[#0a0a0a]`) and neon borders on inputs (neon color on focus). The submit button should be neon with black text and a simple hover transform.

---

By following these detailed guidelines, the existing Next.js portfolio will be transformed into a cohesive Neo-Brutalism design. Use Tailwind CSS utilities (and minimal custom CSS) to implement these styles. The final result should feel raw and impactful, yet remain clear and navigable.