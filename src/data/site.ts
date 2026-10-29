export const company = {
  name: 'Certified Environmental Management, Ltd.',
  tagline: 'Innovative Industrial Hygiene Services',
  tollFree: '1-800-252-2236',
  tollFreeHref: 'tel:+18002522236',
  address: ['3115 Enterprise Dr., Ste. C', 'Salina, KS USA 67401'],
};

export const ctaMessage =
  'Our approach to Industrial Hygiene is to provide flexible and effective solutions to ensure the health & safety of your employees. Let our knowledge, experience, and commitment to excellence serve you!';

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Services', href: '/services/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Technical Info', href: '/technical-info/' },
  { label: 'Contact Us', href: '/contact-us/' },
];

export const aboutNav: NavItem[] = [
  { label: 'Company Profile', href: '/about-us/company-profile/' },
  { label: 'Accreditations', href: '/about-us/accreditations/' },
  { label: 'Facilities & Technology', href: '/about-us/facilities-technology/' },
  { label: 'Personnel', href: '/about-us/personnel/' },
  { label: 'Highest Standards', href: '/about-us/highest-standards/' },
];

// `icon` is a Font Awesome (solid) icon name, used on the home page grid.
export const services: (NavItem & { icon: string })[] = [
  { label: 'Chemical Hazard Assessment', href: '/services/chemical-hazard-assessment/', icon: 'list-ol' },
  { label: 'Chemical Exposure Sampling', href: '/services/chemical-exposure-sampling/', icon: 'chart-column' },
  { label: 'Laboratory Services', href: '/services/laboratory-services/', icon: 'flask' },
  { label: 'Job Safety Analysis', href: '/services/job-safety-analysis/', icon: 'magnifying-glass' },
  { label: 'Hazardous Chemical Toxicology', href: '/services/hazardous-chemical-toxicology/', icon: 'exclamation' },
  { label: 'SDS Authoring', href: '/services/sds-authoring/', icon: 'file-lines' },
  { label: 'Noise Monitoring', href: '/services/noise-monitoring/', icon: 'volume-high' },
  { label: 'Heat/Cold Stress Monitoring', href: '/services/heat-cold-stress-monitoring/', icon: 'sun' },
  { label: 'Physical Risk Assessment', href: '/services/physical-risk-assessment/', icon: 'user' },
  { label: 'MSDS & EHS Data Management', href: '/services/msds-and-ehs-data-management/', icon: 'box-archive' },
  { label: 'EHS Program Development', href: '/services/ehs-program-development/', icon: 'gears' },
  { label: 'Loss Prevention & Risk Management', href: '/services/loss-prevention-and-risk-management/', icon: 'gavel' },
  { label: 'Training & Education', href: '/services/training-and-education/', icon: 'circle-question' },
  { label: 'VPP Star Certification', href: '/services/vpp-star-certification/', icon: 'star' },
  { label: 'Audit Support', href: '/services/audit-support/', icon: 'check' },
];
