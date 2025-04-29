"use client"
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const musicSchoolContent = [
  {
    title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
    description:
      'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
  },
  {
    title: 'Unleash Your True Potential: Craft Your Musical Story',
    description:
      'Unlock the artist within you through personalized mentorship designed to amplify your strengths. Our expert instructors guide you in sculpting a musical identity that is authentic and inspiring, ensuring every note you play tells your unique story.',
  },
  {
    title: 'Your Passion, Our Mission: Nurturing Musical Excellence',
    description:
      'At our music school, your dreams are the foundation of our teaching. We tailor every lesson to ignite your passion, fuel your creativity, and foster a lifelong love for music. Let’s work together to turn your aspirations into achievements.',
  },
  {
    title: 'Live Feedback & Engagement',
    description:
      'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
  },
  {
    title: 'Cutting-Edge Curriculum',
    description:
      'Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.',
  },
  {
    title: 'Limitless Learning Opportunities',
    description:
      'With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.',
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs