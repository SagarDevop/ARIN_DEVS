import WebDev from "./WebDev";
import UiUx from "./UiUx";
import Responsive from "./Responsive";
import Perfomance from "./Perfomance";
import Chatbot from "./Chatbot";

const Services = () => {
  return (

   <section id="services" className="overflow-x-hidden">

      <div className="text-center my-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">What We Provide </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fields where we work
          </p>
        </div>
      <WebDev/>
      <UiUx/>
      <Responsive/>
      <Perfomance/>
      <Chatbot/>
    </section>
  );
};

export default Services;

