import { Component } from '@angular/core';

const SERVICES = [
  {
    title: "Exterior Painting",
    description: "Boost your home's curb appeal and protect it from the elements with our expert exterior painting services. Our team carefully prepares surfaces, selects high-quality paints, and employs precise application techniques to deliver a durable, visually striking finish that complements your property's style.",
    image: "../../../assets/images/front-view.webp"
  },
  {
    title: "Interior Painting",
    description: "Transform your home's atmosphere with our professional interior painting services. From selecting the perfect color palette to meticulous preparation and flawless application, our experienced painters breathe new life into your living spaces, ensuring a stunning and long-lasting finish.",
    image: "../../../assets/images/front-view.webp"
  },
  {
    title: "Plastering / Stucco",
    description: "Our skilled team specializes in both plastering and stucco applications, providing a durable and visually appealing finish to your walls and ceilings. From repairing existing surfaces to creating brand new installations, we ensure a flawless, long-lasting result that enhances the beauty of your home.",
    image: "../../../assets/images/front-view.webp"
  },
  {
    title: "Carpentry",
    description: "With a focus on exceptional craftsmanship, our carpentry services range from framing and trim work to custom cabinetry and built-ins. Our experienced carpenters bring your design ideas to life, creating functional and stylish woodwork that complements and elevates your living spaces.",
    image: "../../../assets/images/front-view.webp"
  },
  {
    title: "Roofing",
    description: "Protecting your home with a sturdy and reliable roof is essential. Our roofing services cover installation, repair, and maintenance, utilizing high-quality materials and best practices to ensure your home's safety and longevity.",
    image: "../../../assets/images/front-view.webp"
  },
  {
    title: "Landscaping",
    description: "Transform your outdoor spaces into beautiful, functional extensions of your home with our landscaping services. From garden design and planting to hardscaping and outdoor lighting, we'll create an inviting and enjoyable environment tailored to your personal style and needs.",
    image: "../../../assets/images/front-view.webp"
  },
  {
    title: "Flooring / Tiling",
    description: "Enhance the aesthetic and value of your home with our professional flooring and tiling services. From hardwood and laminate to ceramic and porcelain tiles, our team installs and maintains a variety of flooring materials that suit your taste and lifestyle.",
    image: "../../../assets/images/front-view.webp"
  },
  {
    title: "Masonry",
    description: "Our masonry services offer expert craftsmanship in brick, stone, and concrete work for both structural and decorative applications. From retaining walls to patios and fireplaces, we bring elegance and durability to your property.",
    image: "../../../assets/images/front-view.webp"
  },
  {
    title: "Concrete",
    description: "From foundations and driveways to patios and sidewalks, our concrete services provide strong, long-lasting surfaces for your property. We offer a variety of finishes and decorative options, ensuring a seamless blend with your home's design.",
    image: "../../../assets/images/front-view.webp"
  },
  {
    title: "Vinyl Siding",
    description: "Upgrade your home's exterior with our high-quality vinyl siding services. Durable, low-maintenance, and available in various styles and colors, vinyl siding is an excellent choice for enhancing curb appeal and weather resistance.",
    image: "../../../assets/images/front-view.webp"
  },
  {
    title: "Seamless Gutters",
    description: "Protect your home from water damage with our seamless gutter installation and maintenance services. Custom-fitted to your home, seamless gutters offer superior performance and a clean, attractive appearance.",
    image: "../../../assets/images/front-view.webp"
  },
  {
    title: "Metal Wrap",
    description: "Our metal wrap services provide an additional layer of protection and insulation for your home's exterior. By covering wood trim and fascia with custom-formed aluminum or steel, we help prevent weather-related damage and reduce maintenance needs.",
    image: "../../../assets/images/front-view.webp"
  },
  {
    title: "Power Washing",
    description: "Refresh your home's exterior with our professional power washing services. We safely and effectively remove dirt, mildew, and stains from siding, decks, driveways, and more, revitalizing your property's appearance.",
    image: "../../../assets/images/front-view.webp"
  },
  {
    title: "Windows / Doors",
    description: "Enhance your home's energy efficiency, security, and curb appeal with our window and door services. We provide expert installation and replacement, ensuring the perfect fit and performance for your property.",
    image: "../../../assets/images/front-view.webp"
  },
  {
    title: "Plumbing",
    description: "Our experienced plumbers handle a range of services, from repairs and maintenance to fixture installations and whole-house repiping. We ensure your home's plumbing systems operate efficiently and reliably.",
    image: "../../../assets/images/front-view.webp"
  },
  {
    title: "Electrical",
    description: "Trust our licensed electricians to handle all your electrical needs, from wiring and panel upgrades to lighting installations and troubleshooting. We prioritize safety and adherence to code, ensuring your home's electrical systems function optimally.",
    image: "../../../assets/images/front-view.webp"
  },
  {
    title: "Decks",
    description: "Expand your living space and enjoy the outdoors with our custom deck design and construction services. From traditional wood to low-maintenance composite materials, we create beautiful, functional, and durable outdoor spaces tailored to your preferences.",
    image: "../../../assets/images/front-view.webp"
  }
]

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = SERVICES
}
