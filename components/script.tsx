"use client";

import Script from "next/script";

declare global {
  interface Window {
    CreateWhatsappChatWidget?: (options: any) => void;
  }
}

export default function WhatsappWidgetScript() {
  const options = {
    host: "https://edna.io",
    enabled: true,
    chatButtonSetting: {
      backgroundColor: "#4fce5d",
      ctaText: "",
      icon: "whatsapp",
      position: "right",
    },
    brandSetting: {
      backgroundColor: "#085b53",
      brandImg:
        "https://edna.io/wp-content/plugins/whatsapp-widget-generator/img/edna-logo.svg",
      brandName: "FixDuo",
      brandSubTitle: "Typically replies within a day",
      ctaText: "Start Chat",
      phoneNumber: "5541987870564",
      welcomeText:
        "Olá! Preciso de um orçamento para minha casa. Poderia me ajudar?",
    },
  };

  return (
    <Script
      src="https://edna.io/wp-content/plugins/whatsapp-widget-generator/js/generator.js?99470"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== "undefined" && window.CreateWhatsappChatWidget) {
          window.CreateWhatsappChatWidget(options);
        }
      }}
    />
  );
}
