interface Review {
  name: string;
  location?: string;
  rating: number;
  review: string;
  date: string;
  image: string;
}

export const REVIEWS: Review[] = [
    {
      name: "Greg S.",
      location: "Palm Desert, CA",
      rating: 5,
      review: "Reached out to Hughes Home Services based on their location and rating. Response time was quick. I advised that we needed some window cornices customized (purchased from Home Depot) as the standard shape would not allow for cornices over windows in corners. Liam came to see the cornices and to determine if he could help us. After a few minutes of looking at what he had to work with, he decided that he could miter the two cornices that met (where we had corner windows) and would be happy to hang those and the rest. Took him all of 3ish hours to get the supplies he needed, make the cuts and hang the cornices. All for a very reasonable price. He cleaned up after himself leaving no indication he'd been here (other than all the new cornices hanging over our windows). Five stars all around for this company...so glad to have found them!!",
      date: "Oct 2, 2024",
      image: "/images/reviews/gregs.jpg"
    },
    {
      name: "Paul O.",
      rating: 5,
      review: "Hughes and his team were an absolute pleasure to have come to my business and fix my vintage refrigerator cabinets. A fantastic much needed fix. Hughes summed up the job in a flash during the first visit. He ordered the hard to get vintage door looks and handles and as soon as they arrived I got a text and they were installed, perfectly the next day. I also hired Hughes to install my mailbox at my new home. On time and in short order my mailbox was perfectly set on the sidewalk. I will be hiring Hughes whenever I need a tough job done...!",
      date: "Mar 25, 2023",
      image: "/images/reviews/paulo.jpg"
    },
    {
      name: "Sarah L.",
      rating: 5,
      review: "Great service! Responsive as well! Perfect and budget friendly. Would definitely recommend other people in the area.",
      date: "Apr 1, 2023",
      image: "/images/reviews/sarahl.jpg"
    }
  ];
  