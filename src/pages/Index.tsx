import Header from "@/components/Header";
import Hero from "@/components/Hero";
import KeyDetails from "@/components/KeyDetails";
import Highlights from "@/components/Highlights";
import Location from "@/components/Location";
import Schools from "@/components/Schools";
import Agent from "@/components/Agent";
import EnquiryForm from "@/components/EnquiryForm";
import Disclosure from "@/components/Disclosure";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <KeyDetails />
        <Highlights />
        <Location />
        <Schools />
        <Agent />
        <EnquiryForm />
        <Disclosure />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
