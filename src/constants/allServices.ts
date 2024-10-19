interface Service {
  id: string;
  service: string;
  price: string;
  description: string;
  body: string;
  heading: string; // Added heading property
}

export const allServices: Service[] = [
  {
    id: "general-handyman",
    service: "General Handyman Services",
    price: "$150/h",
    description: "For any general handyman needs not listed, we've got you covered. Fast, reliable service for various home repair jobs.",
    body: "When unexpected issues arise around your home, you need a reliable handyman to take care of it all. Our General Handyman Services are essential for ensuring your home remains in top shape. Whether it’s tightening that loose doorknob or fixing a leak under the sink, we handle it with care and professionalism. You don’t have to worry about finding different specialists for each job. Coachella Valley Handyman provides a comprehensive solution for all your household needs! Don't let those minor repairs turn into major problems—contact us today!",
    heading: "General Handyman Services: Because Every Home Needs a Hero!"
  },
  {
    id: "garbage-disposal-install",
    service: "Garbage Disposal Install",
    price: "$140",
    description: "Quick and professional installation of your garbage disposal. Get your kitchen back in action. (Parts not included)",
    body: "Installing a garbage disposal can be tricky, but our team makes it look easy! This essential kitchen appliance ensures that food waste is managed effectively, keeping your kitchen clean and functional. Whether you’re upgrading from an older model or getting one for the first time, we ensure a hassle-free installation. Say goodbye to kitchen clogs and enjoy smooth operation once again! Coachella Valley Handyman guarantees a quick, clean, and efficient installation that you can rely on for years. Ready to upgrade? Give us a call!",
    heading: "Garbage Disposal Install: Making Your Kitchen Waste Disappear Like Magic!"
  },
  {
    id: "ceiling-fan-install",
    service: "Ceiling Fan Install",
    price: "$155",
    description: "Efficient ceiling fan installation to keep your rooms cool and comfortable. Typically done in about an hour.",
    body: "Feeling the heat? A new ceiling fan can make all the difference in keeping your home cool and energy-efficient. Imagine a hot summer day with a refreshing breeze, all thanks to your newly installed fan! Our quick and professional service typically takes about an hour, allowing you to sit back and relax under the cool breeze without any hassle. Let us help you keep your home comfortable and stylish with expert ceiling fan installation. Contact us today to get started!",
    heading: "Ceiling Fan Install: Keeping You Cool When the Heat Is On!"
  },
  {
    id: "tv-mounting",
    service: "TV Mounting",
    price: "$155",
    description: "Securely mount your TV on the wall for the perfect viewing experience, no mess, no hassle.",
    body: "Ready to take your binge-watching to new heights? Mounting a TV can be nerve-wracking, especially if you’re concerned about it staying secure. But don’t worry—we take the stress out of the process with expert TV mounting that guarantees safety and the perfect viewing angle. Our goal is to create a sleek, polished look with zero hassle. Get the most out of your TV by letting Coachella Valley Handyman install it professionally! If you want to enjoy a clutter-free viewing experience, reach out to us today!",
    heading: "TV Mounting: Elevate Your Viewing Experience to New Heights!"
  },
  {
    id: "tv-mounting-cord-hiding",
    service: "TV Mounting with In-Wall Cord Hiding",
    price: "$300+",
    description: "Mount your TV and neatly hide cables behind the wall, with drywall repairs, painting, and a polished finish. Additional charges apply for complex structures.",
    body: "Want to enjoy a clean, cable-free look for your wall-mounted TV? Our in-wall cord hiding service ensures that all the wires disappear behind the wall for a neat and professional finish. We not only securely mount your TV but also handle drywall repairs, patching, and painting to make sure everything looks perfect. Whether it’s a simple job or a more complex one involving fire blocks, Coachella Valley Handyman will create a seamless entertainment setup you'll love.",
    heading: "TV Mounting with In-Wall Cord Hiding: Say Goodbye to Cable Clutter!"
  },
  {
    id: "angle-stops-install",
    service: "Angle Stops Install",
    price: "$150",
    description: "Install or replace angle stops to ensure your home’s plumbing system operates smoothly. Parts not included.",
    body: "Angle stops are a small but vital part of your home’s plumbing, ensuring that water can be quickly turned off during repairs or emergencies. If you’re experiencing issues with water pressure or leaks, we can install new angle stops or replace old ones, keeping your plumbing running smoothly. At Coachella Valley Handyman, we ensure the job is done right the first time, saving you potential headaches down the road. Trust us for professional installation that keeps your plumbing system in top shape.",
    heading: "Angle Stops Install: Because Plumbing Shouldn’t Be a Splash Zone!"
  },
  {
    id: "drywall-repair",
    service: "Drywall Repair",
    price: "$270+",
    description: "Fix holes and damage in your drywall. Repair includes multiple visits for drying time, texture matching, and paint. Pricing varies by damage severity.",
    body: "Drywall damage can feel like a major eyesore, whether it’s a small hole or something bigger. But don’t worry—Coachella Valley Handyman is here to make your walls look like new again! Our drywall repair service takes care of patching, smoothing, and texture matching so that the repair blends in seamlessly with the rest of your wall. Multiple visits may be necessary to ensure proper drying and finishing, but the result will be a flawless wall that looks brand new. Let us handle your drywall repair with expert care.",
    heading: "Drywall Repair: Fixing Holes So You Don’t Have to Live with a Patchwork Quilt!"
  },
  {
    id: "prehung-door-hanging",
    service: "Prehung Door Hanging",
    price: "$500+",
    description: "Professional installation of prehung doors, customized to fit your home. Price varies by door size and style.",
    body: "Prehung doors offer a quick and effective way to update your home’s interior or exterior, but they need to be installed correctly to function properly. At Coachella Valley Handyman, we provide expert door hanging services, ensuring a precise fit and smooth operation. Whether you’re replacing an old door or upgrading to a new style, we handle all the details, including leveling and securing the door frame. Don’t struggle with DIY—let us install your prehung door to perfection!",
    heading: "Prehung Door Hanging: Because Your Door Deserves a Grand Entrance!"
  },
  {
    id: "door-service",
    service: "Door Service",
    price: "$150",
    description: "Reseal or weatherproof your doors for energy efficiency or fix sliding doors for smooth operation. Includes silicone greasing.",
    body: "A door that doesn’t close properly or lets drafts in can be a major annoyance. Our door service ensures that your doors are sealed properly, keeping your home energy-efficient and secure. Whether it’s fixing weather stripping, greasing sliding doors, or replacing hardware, we make sure everything works smoothly. Coachella Valley Handyman guarantees a fast, efficient fix so that your doors are as good as new, improving both function and comfort.",
    heading: "Door Service: Sealing the Deal on Energy Efficiency!"
  },
  {
    id: "bbq-cleaning",
    service: "BBQ Cleaning or Service",
    price: "$135/h",
    description: "Keep your BBQ running smoothly with thorough cleaning or minor repairs. Based on one hour of labor.",
    body: "Your BBQ grill is a big part of outdoor fun, but it needs regular cleaning and maintenance to perform at its best. Coachella Valley Handyman offers professional BBQ cleaning services that remove grease, grime, and build-up, preventing clogs and extending the life of your grill. We also handle minor repairs, so your BBQ is ready for your next cookout. Whether you use it every weekend or just for special occasions, keep your BBQ in great shape with our expert service!",
    heading: "BBQ Cleaning: Because Even Your Grill Deserves a Spa Day!"
  },
  {
    id: "property-service",
    service: "Property Service",
    price: "$135",
    description: "Monthly property check and maintenance services, from weeding to general upkeep. Ideal for rental or vacant properties.",
    body: "Owning rental or vacant properties comes with its own set of responsibilities. From basic maintenance like weeding and clearing debris to ensuring everything is in working order, we handle it all with our comprehensive property service. Regular upkeep not only keeps your property looking its best but also prevents larger issues down the line. Coachella Valley Handyman makes property management easy, giving you peace of mind while we take care of the hard work. Let us handle the monthly checkups so you don’t have to!",
    heading: "Property Service: Your Home's Guardian Angel on Duty!"
  },
  {
    id: "sink-maintenance",
    service: "Sink Maintenance",
    price: "$140",
    description: "Install a new faucet or fix leaks with expert sink maintenance. Fast, clean, and reliable service.",
    body: "A leaky sink or outdated faucet can be more than just an annoyance—it can lead to higher water bills and potential damage over time. Our sink maintenance service covers everything from installing a brand-new faucet to fixing leaks quickly and efficiently. We make sure your plumbing works flawlessly, so you can enjoy a fully functional kitchen or bathroom without the hassle. Coachella Valley Handyman ensures expert care, leaving your sink in tip-top shape with minimal disruption to your day.",
    heading: "Sink Maintenance: Let Us Fix Your Drip Before It Turns into a Flood!"
  },
  {
    id: "toilet-install",
    service: "Toilet Install",
    price: "$155",
    description: "Standard toilet installation services, done quickly and efficiently. Get your bathroom in working order in no time.",
    body: "Need a new toilet installed? We’ve got you covered! A properly installed toilet is crucial to maintaining the hygiene and comfort of your home. Whether you’re replacing an old, inefficient model or outfitting a new bathroom, Coachella Valley Handyman guarantees a swift and seamless installation. Our attention to detail ensures everything is watertight and in perfect working order. With our team, you’ll have a fully functioning toilet in no time, so you can move on with your day worry-free.",
    heading: "Toilet Install: We Bring the Throne to Your Bathroom!"
  },
  {
    id: "drain-snaking",
    service: "Drain Snaking",
    price: "$150",
    description: "Unclog sinks, toilets, and drains using a professional snake tool to keep your plumbing flowing smoothly.",
    body: "Clogged drains are a common frustration that can disrupt your day-to-day life. Whether it’s a slow drain or a full blockage, our drain snaking service clears the problem fast. We use professional-grade snake tools to unclog your plumbing without causing damage, ensuring that water flows smoothly again. At Coachella Valley Handyman, we get to the root of the issue, so you don’t have to deal with recurring problems. Leave the tough work to us and get your home’s plumbing back to normal in no time.",
    heading: "Drain Snaking: No More Clogs, Just Smooth Sailing!"
  },
  {
    id: "dryer-vent-service",
    service: "Dryer Vent Service",
    price: "$135",
    description: "Regular cleaning and maintenance of dryer vents to prevent clogs and potential fire hazards. Parts not included.",
    body: "Over time, dryer vents can become clogged with lint and debris, which not only makes your dryer less efficient but also poses a serious fire risk. Our dryer vent cleaning service ensures that your vents are clear, improving air flow and reducing the chance of a fire hazard. We recommend this service as regular maintenance for any home. Coachella Valley Handyman will keep your dryer running safely and efficiently, so you can avoid costly repairs and dangerous situations.",
    heading: "Dryer Vent Service: Keeping Your Dryer Safe and Sound!"
  },
  {
    id: "ring-doorbell-install",
    service: "Ring Doorbell Install",
    price: "$140",
    description: "Securely install your Ring doorbell so you can monitor your home’s front entry with ease.",
    body: "A Ring doorbell is an excellent addition to your home security, but proper installation is key to getting the most out of its features. Coachella Valley Handyman provides expert installation of Ring doorbells, ensuring that they’re mounted securely and connected correctly to your home network. From the first knock to monitoring packages or visitors remotely, you’ll have peace of mind knowing your doorbell is installed by professionals. Let us take care of your smart home security setup with ease.",
    heading: "Ring Doorbell Install: Keep an Eye on Your Home with Style!"
  },
  {
    id: "solar-panel-cleaning",
    service: "Solar Panel Cleaning",
    price: "$150",
    description: "Keep your solar panels clean and efficient with expert cleaning services that optimize performance.",
    body: "Solar panels need regular cleaning to operate at peak efficiency. Dust, dirt, and debris can accumulate over time, reducing their effectiveness. Coachella Valley Handyman offers thorough cleaning services that remove buildup and keep your panels functioning at their best. Regular maintenance can extend the life of your solar system and help you maximize your energy savings. Let us handle the dirty work while you enjoy the benefits of a clean, energy-efficient home.",
    heading: "Solar Panel Cleaning: Shine On, Sunshine!"
  },
  {
    id: "power-washing-service",
    service: "Power Washing Service",
    price: "$150/h",
    description: "Refresh your home’s exterior with power washing. Ideal for patios, driveways, and siding. Price based on an hour of labor.",
    body: "Over time, dirt, mold, and grime can build up on your home’s exterior, leaving it looking worn and dingy. Our power washing service revitalizes your property by removing all that stubborn buildup. Perfect for driveways, patios, and siding, we use professional-grade equipment to clean surfaces without causing damage. Coachella Valley Handyman ensures your home looks fresh and inviting after just one session. It's an easy way to boost curb appeal and maintain the longevity of your outdoor spaces!",
    heading: "Power Washing Service: Blast Away the Grime and Grit!"
  },
  {
    id: "outlet-switch-dimmer-install",
    service: "Outlet/Switch/Dimmer Install",
    price: "$80/unit",
    description: "Install new outlets, switches, or dimmers to meet your electrical needs. Minimum of two units required.",
    body: "Upgrading or adding new electrical outlets, switches, or dimmers can make your home more convenient and functional. Coachella Valley Handyman provides expert electrical installations, ensuring everything is safe, up to code, and works perfectly. Whether you’re adding outlets in hard-to-reach places or upgrading to dimmer switches for better lighting control, our team can handle the job with ease. We guarantee efficient service and clean results, with a minimum of two units required per installation.",
    heading: "Outlet/Switch/Dimmer Install: Because You Deserve Power at Your Fingertips!"
  },
  {
    id: "pressure-regulator-replacement",
    service: "Pressure Regulator Replacement",
    price: "$300+",
    description: "Replace old or malfunctioning pressure regulators to keep your plumbing system safe. Labor only, parts not included.",
    body: "A pressure regulator controls the water pressure in your home, ensuring your plumbing operates safely and efficiently. If your regulator is malfunctioning or outdated, it can lead to costly damage or leaks. Our pressure regulator replacement service keeps your plumbing system safe by swapping out old or damaged parts. Coachella Valley Handyman performs expert installations and ensures that everything works perfectly. Let us help maintain the integrity of your home’s plumbing!",
    heading: "Pressure Regulator Replacement: Keeping Your Water Flowing Smoothly!"
  },
  {
    id: "led-retrofit-lighting",
    service: "LED Retrofit Lighting",
    price: "$25/unit",
    description: "Upgrade to energy-efficient LED retrofit lighting. Minimum of five units required.",
    body: "Switching to LED retrofit lighting is an excellent way to reduce energy consumption and brighten your home with modern, efficient bulbs. This installation is ideal for homeowners looking to improve lighting quality while cutting energy costs. Coachella Valley Handyman provides expert installation to ensure your new lighting system works flawlessly, enhancing both aesthetics and functionality. Whether you're retrofitting an entire home or a few key spaces, we’ll make the upgrade seamless. A minimum of five units is required for installation.",
    heading: "LED Retrofit Lighting: Brighten Up Your Space and Save on Bills!"
  },
  {
    id: "hard-wired-led-lighting",
    service: "Hard Wired LED Retrofit Lighting",
    price: "$120/unit",
    description: "Install hardwired LED lighting to brighten up your home with energy efficiency. Minimum of two units required.",
    body: "Hard-wired LED retrofit lighting provides a permanent and energy-efficient solution to illuminate your home beautifully. At Coachella Valley Handyman, we handle all aspects of the installation, from wiring to fixture mounting, ensuring a safe and efficient setup. With years of experience, we make the switch to LED lighting hassle-free, giving you the energy savings and modern lighting you deserve. Whether you want to illuminate your kitchen, living room, or outdoor space, we'll make sure everything is installed with precision and care.",
    heading: "Hard Wired LED Lighting: Shine Bright Like a Diamond!"
  },
  {
    id: "pendant-lighting-standard",
    service: "Pendant Lighting Install or Chandelier (Standard Ceiling)",
    price: "$140",
    description: "Install pendant lights or chandeliers for ceilings up to 8 feet, adding style to your space.",
    body: "Looking to elevate your space with new pendant lighting or a chandelier? Coachella Valley Handyman specializes in the installation of elegant lighting fixtures for standard ceiling heights up to 8 feet. Whether you’re seeking to create ambiance or make a bold statement, our team ensures a secure and flawless installation. We’ll handle all the wiring and mounting, so your new lighting fixture is not only beautiful but functional. Let us help brighten your home in style, without the hassle of DIY.",
    heading: "Pendant Lighting Install: Brighten Your Home, One Fixture at a Time!"
  },
  {
    id: "pendant-lighting-high-ceiling",
    service: "Pendant Lighting Install or High Ceiling Chandelier",
    price: "$150+",
    description: "Install lighting for high ceilings. Ladder or scaffolding may be required. Pricing ranges based on ceiling height and job complexity.",
    body: "Installing lighting on high ceilings can be tricky, but Coachella Valley Handyman is here to make the process easy. Whether you’re looking to install a grand chandelier or modern pendant lighting in spaces with tall ceilings, we bring the right tools and expertise. With options for ladder or scaffolding work, we ensure a safe and professional installation that enhances your home’s aesthetic. Trust our experienced team to get the job done efficiently, leaving you with beautifully lit rooms, no matter the ceiling height.",
    heading: "Pendant Lighting for High Ceilings: Let Us Reach New Heights!"
  },
  {
    id: "bathroom-exhaust-fan-install",
    service: "Bathroom Exhaust Fan Install",
    price: "$155",
    description: "Quickly and efficiently install a new bathroom exhaust fan to keep your bathroom ventilated.",
    body: "A properly installed bathroom exhaust fan is key to preventing mold and maintaining air quality in your home. Coachella Valley Handyman provides professional installation services that ensure optimal ventilation in your bathroom. Whether you're replacing an outdated fan or installing a brand new one, we handle the wiring and installation with precision. In no time, your bathroom will be properly ventilated, keeping moisture under control and helping to preserve the overall condition of your home.",
    heading: "Bathroom Exhaust Fan Install: Breathe Easy with Fresh Air!"
  },
  {
    id: "exterior-lighting",
    service: "Exterior Lighting",
    price: "$140",
    description: "Install exterior lighting to enhance security and curb appeal around your home.",
    body: "Exterior lighting does more than just illuminate your property—it adds security and curb appeal as well. Coachella Valley Handyman offers expert installation of exterior lights, making your home safer and more inviting. Whether it’s installing pathway lights, motion detectors, or decorative lighting around your patio, we ensure everything is wired correctly and positioned perfectly. With our help, you can transform your outdoor spaces into well-lit, secure areas that boost your home's appearance and functionality.",
    heading: "Exterior Lighting: Light Up the Night and Keep the Bad Guys Out!"
  },
  {
    id: "gfci-install",
    service: "GFCI Install",
    price: "$90/unit",
    description: "Install GFCI outlets to protect your home from electrical shocks. Minimum of two units required. Parts not included.",
    body: "Ground Fault Circuit Interrupter (GFCI) outlets are essential for protecting your home from electrical shocks, particularly in moisture-prone areas like bathrooms and kitchens. Coachella Valley Handyman will professionally install GFCI outlets, ensuring your home meets safety standards. With a minimum of two units required, our service is ideal for those upgrading older outlets to modern, safer alternatives. Keep your family safe from electrical hazards with a quick, efficient installation from our experienced team.",
    heading: "GFCI Install: Keeping Your Home Shock-Free!"
  },
  {
    id: "mixer-valve-install",
    service: "Mixer Valve",
    price: "$500+",
    description: "Professional installation of mixer valves for your shower or bathtub. Pricing starts at $500. Parts not included.",
    body: "A mixer valve is an essential component in balancing hot and cold water for your shower or bathtub. If your valve needs to be replaced or upgraded, Coachella Valley Handyman can take care of the entire installation process. We ensure the valve is installed properly to avoid temperature fluctuations and keep your bathroom plumbing running smoothly. Whether you’re renovating your bathroom or dealing with a faulty valve, our team provides expert service that guarantees comfort and safety.",
    heading: "Mixer Valve Installation: For the Perfect Shower Experience!"
  },
  {
    id: "garage-storage-racks",
    service: "Garage Storage Racks",
    price: "$500+",
    description: "Install overhead garage storage racks to maximize space. Pricing varies by rack size. Rack not included.",
    body: "Maximizing space in your garage is easy with overhead storage racks, and Coachella Valley Handyman is here to install them safely and securely. Whether you need additional space for seasonal items or simply want to declutter, our team ensures your storage racks are installed with precision. We’ll take care of mounting and positioning to ensure they can hold the weight of your belongings, giving you a functional and organized garage in no time. Pricing varies depending on the rack size and installation complexity.",
    heading: "Garage Storage Racks: Turning Clutter into Space!"
  },
  {
    id: "plug-add-on",
    service: "Plug Add-On",
    price: "$300+",
    description: "Add new electrical plugs. Pricing starts at $300 and may vary based on complexity. Parts not included.",
    body: "Need an extra outlet in a hard-to-reach area? Coachella Valley Handyman offers professional plug add-on services to help you power your devices in any room of your home. We handle everything from the wiring to the installation, ensuring the new outlet is safe and up to code. Whether you’re adding plugs for convenience or to accommodate new appliances, our team provides clean, efficient work that meets your needs. Pricing starts at $300 and may vary based on the complexity of the job.",
    heading: "Plug Add-On: Power Up Your Space!"
  },
  {
    id: "door-casing",
    service: "Door Casing",
    price: "$270+",
    description: "Replace door casing and frame for a fresh look. Parts not included.",
    body: "Updating your door casing can refresh the look of an entire room, and Coachella Valley Handyman is here to help. Our door casing replacement service includes precise measurement, cutting, and installation to give your doors a sleek, finished look. Whether your current casings are worn or you’re simply looking for an upgrade, we ensure professional results that enhance your home’s interior. This service not only improves aesthetics but also provides better insulation and durability around your doors.",
    heading: "Door Casing: The Frame That Changes Everything!"
  },
  {
    id: "keypad-lock-install",
    service: "Keypad Lock Service/Install",
    price: "$155",
    description: "Install or service keypad locks for added security and convenience.",
    body: "Keypad locks offer a secure, convenient way to access your home, and Coachella Valley Handyman is here to install or service these locks for you. Whether you’re upgrading your home security or replacing an outdated system, we ensure proper installation for peace of mind. With keypad locks, you’ll never have to worry about lost keys again—simply punch in a code and you’re good to go. Our professional service ensures everything works flawlessly, enhancing your home’s security and convenience.",
    heading: "Keypad Lock Service: Unlocking Security at Your Fingertips!"
  },
  {
    id: "painting-inspection",
    service: "Painting (Inspection Required)",
    price: "$270",
    description: "Full painting services available. Price determined after a site inspection to assess the scope of work.",
    body: "Painting is one of the most transformative home improvement services you can invest in, and Coachella Valley Handyman offers full-service painting solutions tailored to your needs. Whether you're looking to refresh a single room or repaint your entire home, we handle everything from prep to cleanup. After an initial site inspection, we'll provide you with a custom quote based on the scope of work. From color selection to the final brush stroke, we ensure your space looks vibrant and new, with a flawless finish every time.",
    heading: "Painting: Transform Your Space with a Splash of Color!"
  }
];
