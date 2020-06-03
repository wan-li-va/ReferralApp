import React from 'react';
import '../styling/InfoPages.css';

const aboutUs = () => {
  return (
    <div className="page">
      <img className="environment-img" src={require('../environmentally-friendly.png')}></img>
      <h2>Who is ReSHOE?</h2>
      <h5>We give people superpowers.</h5>
      <p>Have you ever thought that it was possible to clean the earth as you walked? To help children in need with each step?
      To buy a new pair of shoes and tell people, "I take part in saving the planet. My shoes save the planet."
      </p>

      <h2>Why ReSHOE?</h2>
      <h5>The environment is larger than our wallets.</h5>
      <p>Here at ReSHOE, we care more about our values than our profits. We are willing to take a hit to our profits if it means
      our policies can further benefit the environment while satisfying our customers.
      </p>

      <img className="shoes" src={require('../amazon-fakes.png')} align="left"></img>
      <h2>What are the benefits of ReSHOE?</h2>
      <h5>We seek to provide the most comfortable, fitting, and flexible shoes to our consumers while improving the world, one shoe
        at a time. </h5>
      <p>For every pair of shoes purchased, ReSHOE will donate a pair to children without sneakers. Not only do you
      buy YOURSELF a brand new pair of shoes, a child in need will be overzeleous when a brand, shiny new pair is delivered to them
        as well. </p>
      <p>Every shoe is made of sustainable material. We do not hurt the environment in the production or development of our products.
      </p>
      <p>
        If you are satisfied with your product but it needs to be repaired, you can send it right back and we will repair them
        for you, free of charge. Consumer satisfaction is a top priority.
      </p>
      <p>
        When your shoes are worn out, they can be sent back to the company for 10% credit towards buying a new pair. You can
        happily browse for a new comfortable and sleek look for your feet knowing, rest assured, that your old pair will not
        end up in a landfill. All shoes sent back to us are recycled and reused, keeping with ReSHOE's values.
      </p>


    </div>
  );
}
export default aboutUs;