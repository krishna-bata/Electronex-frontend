import React from "react";
import "./HomePage.scss";
import HeroBanner from "../../features/components/hero-banner/HeroBanner";

const HomePage = () => {
  const banners = [
    {
      imgUrl:
        "https://images.pexels.com/photos/10914594/pexels-photo-10914594.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Iphone 15 pro max",
      description:
        "Titanium. A17 Pro chip. Action button. 48MP Main camera. Learn more. iPhone 15 Pro Max introduces 5x optical zoom. Far out. Pro camera system. 5x optical zoom. A17 Pro chip. iOS 17. Super Retina XDR Display. All-new Action button.",
      buttonText: "Buy Now",
      link:"/products/1"
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Iphone 15 pro max",
      description:
        "Titanium. A17 Pro chip. Action button. 48MP Main camera. Learn more. iPhone 15 Pro Max introduces 5x optical zoom. Far out. Pro camera system. 5x optical zoom. A17 Pro chip. iOS 17. Super Retina XDR Display. All-new Action button.",
      buttonText: "Buy Now",
      link:"/products/2"
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/5939401/pexels-photo-5939401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Iphone 15 pro max",
      description:
        "Titanium. A17 Pro chip. Action button. 48MP Main camera. Learn more. iPhone 15 Pro Max introduces 5x optical zoom. Far out. Pro camera system. 5x optical zoom. A17 Pro chip. iOS 17. Super Retina XDR Display. All-new Action button.",
      buttonText: "Buy Now",
      link:"/products/3"
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Iphone 15 pro max",
      description:
        "Titanium. A17 Pro chip. Action button. 48MP Main camera. Learn more. iPhone 15 Pro Max introduces 5x optical zoom. Far out. Pro camera system. 5x optical zoom. A17 Pro chip. iOS 17. Super Retina XDR Display. All-new Action button.",
      buttonText: "Buy Now",
      link:"/products/4"
    },
  ];
  return (
    <>
      <HeroBanner banners={banners} />
      <div className="spacer"></div>
    </>
  );
};

export default HomePage;
