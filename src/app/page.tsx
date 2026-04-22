"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { CheckCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="largeSmallSizeLargeTitles"
        background="none"
        cardStyle="outline"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Menu",          id: "menu"},
        {
          name: "Story",          id: "about"},
        {
          name: "Visit",          id: "location"},
      ]}
      brandName="Ms. T's Kitchen"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars"}}
      title="Ms. T’s Kitchen"
      description="Where Every Bite Feels Like Home"
      buttons={[
        {
          text: "Order Now",          href: "#"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fried-salmon-fillet-with-sauce-top_140725-6436.jpg?_wi=1",          imageAlt: "Luxury restaurant soul food interior"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fried-fish-with-tomato-onion_176474-3362.jpg?_wi=1",          imageAlt: "Fried catfish dinner gourmet"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/chicken-wings-barbecue-sauce_140725-9472.jpg?_wi=1",          imageAlt: "Slow smoked chicken wings"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/noodles-with-peas-corns-pan-tablecloth_114579-50113.jpg?_wi=1",          imageAlt: "Soul food vegetable side dishes"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-business-owner-with-document_23-2149434529.jpg?_wi=1",          imageAlt: "Female chef in professional kitchen"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fried-salmon-with-rice-raddish_140725-3403.jpg",          imageAlt: "Luxury restaurant soul food interior"},
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          date: "Oct 2025",          title: "Regular Guest",          quote: "Everything was phenomenal… delicious and amazing customer service!",          tag: "5 Stars",          avatarSrc: "http://img.b2bpic.net/free-photo/friends-eating-conversating-restaurant_23-2148006713.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/fried-salmon-fillet-with-sauce-top_140725-6436.jpg?_wi=2",          imageAlt: "portrait of satisfied customer dining"},
        {
          id: "2",          name: "Marcus R.",          date: "Sep 2025",          title: "Food Enthusiast",          quote: "Best soul food! Catfish, mac & cheese, collard greens 🔥",          tag: "5 Stars",          avatarSrc: "http://img.b2bpic.net/free-photo/smiley-colleagues-eating-noodles-break_23-2149390520.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fried-fish-with-tomato-onion_176474-3362.jpg?_wi=2",          imageAlt: "portrait of satisfied customer dining"},
        {
          id: "3",          name: "Emily D.",          date: "Aug 2025",          title: "New Customer",          quote: "I can't remember the last time I had food this good.",          tag: "5 Stars",          avatarSrc: "http://img.b2bpic.net/free-photo/low-angle-friends-shaking-hands_23-2148395404.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/chicken-wings-barbecue-sauce_140725-9472.jpg?_wi=2",          imageAlt: "portrait of satisfied customer dining"},
        {
          id: "4",          name: "David K.",          date: "Jul 2025",          title: "Regular Guest",          quote: "Authentic, warm, and the portions are incredible.",          tag: "5 Stars",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-young-man-restaurant_23-2147861975.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/noodles-with-peas-corns-pan-tablecloth_114579-50113.jpg?_wi=2",          imageAlt: "portrait of satisfied customer dining"},
        {
          id: "5",          name: "Jessica M.",          date: "Jun 2025",          title: "Local Resident",          quote: "Ms. T puts her heart into every single meal.",          tag: "5 Stars",          avatarSrc: "http://img.b2bpic.net/free-photo/lunch-cafe-olive-women-eating_1303-2349.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-business-owner-with-document_23-2149434529.jpg?_wi=2",          imageAlt: "portrait of satisfied customer dining"},
      ]}
      title="Why Everyone Loves Us"
      description="Heartfelt feedback from our wonderful community."
    />
  </div>

  <div id="signature" data-section="signature">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "Golden Catfish Dinner",          price: "$18",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cooked-sliced-potatoes-with-meatballs-inside-plate-dark-blue-background_140725-50059.jpg"},
        {
          id: "2",          name: "Slow Smoked Wings",          price: "$14",          imageSrc: "http://img.b2bpic.net/free-photo/plate-chicken-wings-grunge-black-background_1258-200.jpg"},
        {
          id: "3",          name: "Creamy Mac & Cheese",          price: "$8",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-food-ingredients-with-soup-veggies_23-2148834779.jpg"},
        {
          id: "4",          name: "Seasoned Collard Greens",          price: "$7",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-tasty-chicken-salad-with-vegetables_140725-85143.jpg"},
        {
          id: "5",          name: "Candied Sweet Potatoes",          price: "$7",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-red-cabbage-green-onion_23-2148758897.jpg"},
        {
          id: "6",          name: "Signature Soul Plate",          price: "$22",          imageSrc: "http://img.b2bpic.net/free-photo/bowl-full-dry-pasta-wooden-table_114579-37402.jpg"},
      ]}
      title="Signature Favorites"
      description="Handcrafted soul food favorites served with pride."
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Made With Love"
      description="Ms. T’s Kitchen isn’t just a restaurant — it’s a place where flavor, culture, and heart come together. Every dish is crafted with passion, inspired by tradition, and served with genuine care."
      metrics={[
        {
          value: "10+",          title: "Years of Tradition"},
        {
          value: "100%",          title: "Handcrafted Flavors"},
        {
          value: "5k+",          title: "Happy Neighbors"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-man-holding-coffee-cup_23-2149434533.jpg"
      mediaAnimation="blur-reveal"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="menu-highlights" data-section="menu-highlights">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={false}
      features={[
        {
          title: "Fried Favorites",          description: "Crispy golden goodness.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/fried-salmon-fillet-with-sauce-top_140725-6436.jpg?_wi=3",            imageAlt: "fried catfish dinner gourmet"},
          items: [
            {
              icon: CheckCircle,
              text: "Catfish"},
            {
              icon: CheckCircle,
              text: "Wings"},
          ],
          reverse: false,
        },
        {
          title: "Soul Sides",          description: "Made fresh daily.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/top-view-fried-fish-with-tomato-onion_176474-3362.jpg?_wi=3",            imageAlt: "fried catfish dinner gourmet"},
          items: [
            {
              icon: CheckCircle,
              text: "Collard Greens"},
            {
              icon: CheckCircle,
              text: "Sweet Potatoes"},
          ],
          reverse: true,
        },
        {
          title: "Specialty Meats",          description: "Slow cooked perfection.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/chicken-wings-barbecue-sauce_140725-9472.jpg?_wi=3",            imageAlt: "fried catfish dinner gourmet"},
          items: [
            {
              icon: CheckCircle,
              text: "Smoked Ribs"},
            {
              icon: CheckCircle,
              text: "Fried Wings"},
          ],
          reverse: false,
        },
      ]}
      title="Daily Menu Highlights"
      description="Freshly prepared every afternoon for your enjoyment."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Shawnee Daily",        "City Eats",        "Black Owned Biz",        "Local Foodie",        "Community Hub",        "Comfort Kitchens",        "Top Rated Soul"]}
      title="Community Recognition"
      description="Proudly supporting and serving our amazing community."
    />
  </div>

  <div id="location" data-section="location">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "Where are you located?",          content: "10201 47th St B, Shawnee, KS"},
        {
          id: "2",          title: "What are your hours?",          content: "Open Daily from 3:30 PM"},
        {
          id: "3",          title: "Do you take orders online?",          content: "Yes, click the Order Now button!"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-baked-fish-fillet-garnished-with-vegetables-spices-sauce-plate-with-glass-white-wine-table_140725-11498.jpg"
      title="Visit Us"
      description="Come enjoy a warm meal in Shawnee."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Stay Connected"
      title="Get Special Updates"
      description="Sign up for daily specials and exclusive news."
      imageSrc="http://img.b2bpic.net/free-photo/top-view-savory-eggplant-rolls-with-lemon-slices-dark-grey-surface-fruit-cooking-meal-dinner-dish_140725-102037.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/profiteroles-chocolate-sauce-inside-white-plate_114579-2410.jpg"
      logoText="Ms. T's Kitchen"
      columns={[
        {
          title: "Navigate",          items: [
            {
              label: "Home",              href: "/"},
            {
              label: "Menu",              href: "#menu"},
          ],
        },
        {
          title: "Follow",          items: [
            {
              label: "Instagram",              href: "#"},
            {
              label: "Facebook",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2026 Ms. T’s Kitchen | Women-Owned • Black-Owned"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
