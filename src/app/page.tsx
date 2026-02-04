import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import ClientsMarquee from "@/components/ClientsMarquee"
import ProductsShowcase from "@/components/ProductsShowcase"
import CustomizationSection from "../components/CustomizationSection"
import ServicesSlider from "@/components/ServicesSlider"
import WhyChooseUs from "@/components/WhyChooseUs"
import LatestBlogs from "@/components/LatestBlogs"
import LatestNews from "@/components/LatestNews"
import Footer from "@/components/Footer"
import { generateMetadata as generateSEOMetadata, generateOrganizationSchema } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateSEOMetadata({
  title: "Raise Lab Equipment – Best Pharmaceutical & Laboratory Testing Equipment in Hyderabad, India",
  
  description:
    "Raise Lab Equipment is a leading manufacturer and supplier of pharmaceutical and laboratory testing instruments in Hyderabad, India. We provide tablet testing machines, dissolution testers, hardness testers, friability testers, powder flow testers and ISO certified quality control equipment for pharma companies, research labs and universities.",

  // Balanced: Google-safe + Other engines
  keywords: [
    // Brand
    "Raise Lab Equipment",
    "Raise Lab",

    // Google core
    "pharmaceutical laboratory equipment",
    "laboratory testing instruments Hyderabad",
    "pharma quality control equipment",

    // Other search engines
    "laboratory equipment manufacturer India",
    "pharmaceutical testing machines",
    "lab instruments supplier",
    "tablet testing machines",
    "bulk density apparatus",
    "powder flow tester",
    "friability tester",
    "dissolution tester",
    "ISO certified lab equipment",
    "pharma lab equipment dealer",
    "laboratory equipment supplier Hyderabad",
    "pharmaceutical equipment India"
  ],

  url: "/",
  type: "website"
})

export default function Home() {
  const organizationSchema = generateOrganizationSchema()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Google Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="bg-background relative z-10">
          <ClientsMarquee />
          
          <div className="pb-12 lg:pb-20">
            <ProductsShowcase />
            <CustomizationSection />
            <WhyChooseUs />
            <ServicesSlider />
            <LatestBlogs />
            <LatestNews />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
