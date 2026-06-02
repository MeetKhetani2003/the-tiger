export const generateCityContext = (cityName: string, serviceName: string) => {
  const risks = [
    `Rising commercial property disputes in ${cityName}`,
    `Increased footfall in ${cityName}'s major business districts`,
    `Vulnerability of industrial assets in ${cityName} outskirts`,
    `High-profile event crowd management in ${cityName}`
  ];

  const needs = [
    `Stringent access control for ${cityName} corporate offices`,
    `24/7 surveillance for ${cityName} residential complexes`,
    `Rapid response deployment across ${cityName}`,
    `Specialized guard training localized to ${cityName} dialects and norms`
  ];

  return {
    risks,
    needs,
    intro: `As ${cityName} continues to expand its economic and residential footprint in Uttar Pradesh, the demand for highly trained ${serviceName.toLowerCase()} has reached an all-time high. Local businesses and residential welfare associations in ${cityName} are increasingly recognizing that generic security measures are no longer sufficient.`,
    approach: `Maa Shiva Services understands the unique topography and demographic challenges of ${cityName}. Our personnel are not just trained in advanced security protocols, but are also deeply familiar with ${cityName}'s local environment. We provide:`
  };
};

export const generateServiceFAQs = (serviceName: string, cityName?: string) => {
  const locationText = cityName ? ` in ${cityName}` : '';
  const providerText = cityName ? `Maa Shiva Services is the leading provider of ${serviceName.toLowerCase()}${locationText}. ` : '';

  return [
    {
      question: `What is included in your ${serviceName.toLowerCase()}${locationText}?`,
      answer: `${providerText}Our ${serviceName.toLowerCase()} include comprehensive risk assessment, deployment of trained personnel, 24/7 monitoring, and rapid emergency response tailored to your specific requirements.`
    },
    {
      question: `Are your security personnel trained for high-risk situations${locationText}?`,
      answer: `Yes, all our guards undergo rigorous physical and tactical training. Depending on the tier of service, this includes fire safety, crowd control, first aid, and conflict de-escalation.`
    },
    {
      question: `How much do ${serviceName.toLowerCase()} cost${locationText}?`,
      answer: `The cost of ${serviceName.toLowerCase()}${locationText} depends on the scale of deployment, whether the guards are armed or unarmed, and the specific risk profile of the site. Contact us for a customized quote.`
    },
    {
      question: `Do you provide customized security plans${locationText}?`,
      answer: `Absolutely. We conduct a thorough audit of your premises before deploying our ${serviceName.toLowerCase()} to ensure every vulnerability is addressed.`
    }
  ];
};
