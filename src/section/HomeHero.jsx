import React, { useEffect,useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { homeherobackground, searchline, micfill, miclisten,doctor,aiagent } from "../assets";

function HomeHero() {
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      perView: 3,
      gap: 24,
      breakpoints: {
        768: { perView: 1 },
      },
    });

    glide.mount();
  }, []);
  const [micIcon, setMicIcon] = useState(micfill);
  const toggleMicIcon = () => {
    setMicIcon((prevIcon) => (prevIcon === micfill ? miclisten : micfill));
  };
  return (
   
    
   <main class="mt-16"> 
   
    <section
      className="relative bg-gray-50"
      style={{
        backgroundImage: `url(${homeherobackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="absolute inset-0 bg-gray-50 bg-opacity-80"></div>
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center gap-8">
          <div>
            <div className="space-y-6">
              <h1 className="text-5xl font-custom font-bold text-gray-900 mb-6 leading-tight">
                <span>
                  Your <span className="text-custom">Personal Health </span>
                </span>
                Journey Starts Here
              </h1>
              <div className="relative w-full max-w-3xl">
                <div className="mb-6 text-center">
                  <i className="fas fa-user-md text-7xl text-custom mb-4"></i>
                </div>
                <div className="flex items-center relative">
                  <input
                    type="search"
                    placeholder="Search health issues, symptoms, or doctors..."
                    className="w-full px-6 py-4 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom focus:border-transparent"
                  />
                  <button className="absolute right-0 top-0 flex flex-col justify-center items-center h-full px-6 bg-custom text-white rounded-r-lg hover:bg-opacity-90">
                    <img className="absolute w-6 h-6" src={searchline} alt="search-button" />
                  </button>
                  <button
                    className="absolute flex flex-col justify-center items-center right-20 top-1/2 -translate-y-1/2 text-gray-400 hover:text-custom p-3 transition-colors"
                    onClick={toggleMicIcon}
                  >
                    <img className="absolute transform transition-transform hover:scale-130" src={micIcon} alt="mic-button" />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="form-checkbox text-custom" />
                  <span>Enable Read Aloud</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-16 bg-white">
            <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-4xl font-custom font-bold text-gray-900 mb-16 text-center">Our Top Specialists</h2>
                <div class="glide">
                    <div class="glide__track" data-glide-el="track">
                        <ul class="glide__slides">
                            <li class="glide__slide">
                                <div
                                    class="bg-white rounded-xl shadow-lg p-8 mx-2 transform hover:-translate-y-1 transition-all duration-200">
                                      {/* https://creatie.ai/ai/api/search-image?query=Professional headshot of a confident female doctor wearing a white coat against a neutral background, warm and approachable expression, high-quality studio lighting&width=400&height=400&orientation=squarish&flag=72a5c2b3-6dfa-4d39-b719-14ce698ca4b7&flag=9feceda3-d643-4689-818c-56090508dfb6&flag=f71131bb-d771-44e2-9047-606c76a51c05&flag=b6f2be18-4ea6-4276-9000-114d44c86d91&flag=281789b9-2651-4b3f-93fb-05dede00795e&flag=e16c05ef-7352-4f29-9ad3-2b0a080d5102&flag=ab4b61b6-37fd-4112-b29f-586c5fd18544&flag=54ae723c-636f-450f-8758-c19d07d724bb&flag=9b38284e-60a8-4db6-a982-562128fe7e5e" */}
                                    <img src={doctor} 
                                        alt="Doctor" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                                    <h3 class="text-lg font-semibold text-gray-900 text-center">Dr. Sarah Johnson</h3>
                                    <p class="text-sm text-gray-600 text-center mb-2">Gynecologist</p>
                                    <div class="flex justify-center items-center mb-4">
                                        <i class="fas fa-star text-yellow-400"></i>
                                        <span class="ml-1 text-sm text-gray-600">4.9 (2.1k reviews)</span>
                                    </div>
                                    <button
                                        class="w-full bg-custom text-white !rounded-button py-2 text-sm font-medium hover:bg-opacity-90">Book
                                        Consultation</button>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    <div class="glide__bullets" data-glide-el="controls[nav]">
                        <button class="glide__bullet" data-glide-dir="=0"></button>
                        <button class="glide__bullet" data-glide-dir="=1"></button>
                        <button class="glide__bullet" data-glide-dir="=2"></button>
                    </div>
                </div>
            </div>
        </section>
    

        <section class="py-16 bg-gray-50">
            <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-4xl font-custom font-bold text-gray-900 mb-16 text-center">Common Health Issues</h2>
                <div class="space-y-12">
                    <div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-6">Women&#39;s Health</h3>
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200">
                                <i class="fas fa-female text-custom text-2xl mb-4"></i>
                                <h4 class="text-lg font-medium text-gray-900 mb-2">PCOS</h4>
                                <p class="text-sm text-gray-600 mb-4">Understanding and managing Polycystic Ovary
                                    Syndrome symptoms and treatment options.</p>
                                <a href="#" class="text-custom font-medium text-sm">Learn More →</a>
                            </div>
                         
                            <div class="bg-white rounded-lg shadow-sm p-6"><i
                                    class="fas fa-heartbeat text-custom text-2xl mb-4"></i>
                                <h4 class="text-lg font-medium text-gray-900 mb-2">Endometriosis</h4>
                                <p class="text-sm text-gray-600 mb-4">Expert guidance on managing endometriosis symptoms
                                    and treatment options.</p><a href="#" class="text-custom font-medium text-sm">Learn
                                    More →</a>
                            </div>
                            <div class="bg-white rounded-lg shadow-sm p-6"><i
                                    class="fas fa-calendar-alt text-custom text-2xl mb-4"></i>
                                <h4 class="text-lg font-medium text-gray-900 mb-2">Menstrual Disorders</h4>
                                <p class="text-sm text-gray-600 mb-4">Understanding and treating various menstrual cycle
                                    irregularities.</p><a href="#" class="text-custom font-medium text-sm">Learn More
                                    →</a>
                            </div>
                            <div class="bg-white rounded-lg shadow-sm p-6"><i
                                    class="fas fa-plus-circle text-custom text-2xl mb-4"></i>
                                <h4 class="text-lg font-medium text-gray-900 mb-2">Explore More</h4>
                                <p class="text-sm text-gray-600 mb-4">Discover more women&#39;s health issues and
                                    treatment options.</p><a href="/womens-health"
                                    class="text-custom font-medium text-sm">View All →</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-6">Men&#39;s Health</h3>
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div class="bg-white rounded-lg shadow-sm p-6">
                                <i class="fas fa-male text-custom text-2xl mb-4"></i>
                                <h4 class="text-lg font-medium text-gray-900 mb-2">Erectile Dysfunction</h4>
                                <p class="text-sm text-gray-600 mb-4">Expert guidance on causes, treatments, and
                                    maintaining sexual health.</p>
                                <a href="#" class="text-custom font-medium text-sm">Learn More →</a>
                            </div>
                           
                            <div class="bg-white rounded-lg shadow-sm p-6"><i
                                    class="fas fa-venus-mars text-custom text-2xl mb-4"></i>
                                <h4 class="text-lg font-medium text-gray-900 mb-2">Low Testosterone</h4>
                                <p class="text-sm text-gray-600 mb-4">Understanding symptoms and treatment options for
                                    low testosterone levels.</p><a href="#"
                                    class="text-custom font-medium text-sm">Learn More →</a>
                            </div>
                            <div class="bg-white rounded-lg shadow-sm p-6"><i
                                    class="fas fa-baby text-custom text-2xl mb-4"></i>
                                <h4 class="text-lg font-medium text-gray-900 mb-2">Infertility</h4>
                                <p class="text-sm text-gray-600 mb-4">Comprehensive guide to male infertility causes and
                                    treatments.</p><a href="#" class="text-custom font-medium text-sm">Learn More →</a>
                            </div>
                            <div class="bg-white rounded-lg shadow-sm p-6"><i
                                    class="fas fa-plus-circle text-custom text-2xl mb-4"></i>
                                <h4 class="text-lg font-medium text-gray-900 mb-2">Explore More</h4>
                                <p class="text-sm text-gray-600 mb-4">Discover more men&#39;s health issues and
                                    treatment options.</p><a href="/mens-health"
                                    class="text-custom font-medium text-sm">View All →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 bg-white">
            <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 class="text-2xl font-bold text-gray-900 mb-8">Health Tips &amp; Insights</h2>
                        <div class="bg-gray-50 rounded-xl p-8 shadow-inner">
                            <div class="glide">
                                <div class="glide__track" data-glide-el="track">
                                    <ul class="glide__slides">
                                        <li class="glide__slide">
                                            <h3 class="text-lg font-medium text-gray-900 mb-2">Maintaining Hormonal
                                                Balance</h3>
                                            <p class="text-sm text-gray-600">Learn about natural ways to support your
                                                hormonal health through diet and lifestyle changes.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold text-gray-900 mb-8">Community Support</h2>
                        <div class="space-y-4">
                            <div
                                class="bg-gray-50 rounded-xl p-8 shadow-inner hover:bg-gray-100 transition-all duration-200">
                                <h3 class="text-lg font-medium text-gray-900 mb-2">PCOS Support Group</h3>
                                <p class="text-sm text-gray-600 mb-4">Join 5000+ members sharing experiences and
                                    support.</p>
                                <button
                                    class="bg-custom text-white !rounded-button px-4 py-2 text-sm font-medium hover:bg-opacity-90">Join
                                    Group</button>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="fixed bottom-6 right-6 z-50"><button
            class="bg-custom text-white !rounded-full px-6 h-14 flex items-center justify-center shadow-xl hover:bg-opacity-90 transition-all duration-200"
            onclick="toggleChatPanel()"><img className="text-xl font-bold mr-2 w-8 h-8" src={aiagent} /><span class="text-sm">AI Health
                Assistant</span></button>
        <div id="chat-panel"
            class="hidden fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl border border-gray-200">
            <div class="p-4 border-b border-gray-200">
                <h3 class="text-lg font-semibold">AI Health Assistant</h3>
            </div>
            <div class="p-6 space-y-4">
                <div class="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100">
                    <h4 class="font-medium mb-2">PCOS Symptoms</h4>
                    <p class="text-sm text-gray-600">Learn about common symptoms and early warning signs of PCOS</p>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100">
                    <h4 class="font-medium mb-2">Fertility Concerns</h4>
                    <p class="text-sm text-gray-600">Understanding fertility issues and treatment options</p>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100">
                    <h4 class="font-medium mb-2">Hormonal Imbalance</h4>
                    <p class="text-sm text-gray-600">Identify symptoms and natural remedies for hormonal balance</p>
                </div>
            </div>
        </div>
    </div>
   </main>
   
  );
}

export default HomeHero;
