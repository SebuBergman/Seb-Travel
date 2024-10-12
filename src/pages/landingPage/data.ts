import Image1 from "./assets/image1.jpeg";
import Image2 from "./assets/image2.jpeg";
import Image3 from "./assets/image3.jpeg";
import Ellipse1 from "./assets/Ellipse1.png";
import Ellipse2 from "./assets/Ellipse2.png";
import Ellipse3 from "./assets/Ellipse3.png";
import Ellipse4 from "./assets/Ellipse4.png";
import GalleryImage from "./assets/Gallery.png";
import ExpensesImage from "./assets/Expenses.png";

export interface LandigPageImage {
  id: string;
  src: string;
  alt: string;
}

export interface LandigPageEllipseImage {
  id: string;
  src: string;
  alt: string;
}

export const LANDING_PAGE_IMAGES: LandigPageImage[] = [
  {
    id: "Image1",
    src: Image1,
    alt: "Trailer in a park.",
  },
  {
    id: "Image2",
    src: Image2,
    alt: "Beautiful sandy beach with trees.",
  },
  {
    id: "Image3",
    src: Image3,
    alt: "Big city view.",
  },
];

export const LANDING_PAGE_ELLIPSE_IMAGES: LandigPageEllipseImage[] = [
  {
    id: "Ellipse1",
    src: Ellipse1,
    alt: "Profile icon.",
  },
  {
    id: "Ellipse2",
    src: Ellipse2,
    alt: "Profile icon.",
  },
  {
    id: "Ellipse3",
    src: Ellipse3,
    alt: "Profile icon.",
  },
  {
    id: "Ellipse4",
    src: Ellipse4,
    alt: "Profile icon.",
  },
];
