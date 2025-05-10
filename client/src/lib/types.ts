export interface Testimonial {
  text: string;
  author: string;
  rating: number;
}

export interface Service {
  image: string;
  title: string;
  description: string;
  price: string;
  alt: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  petName: string;
  breed: string;
  service: string;
  message?: string;
}
