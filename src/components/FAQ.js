import React from 'react';

import '../styling/InfoPages.css';

const faq = () => {
  return (
    <div className="page">
      <h1>FAQ</h1>
      <h4>Q: How do I get points?</h4>
      <p>
        A: One referral gets you one point,
        and sharing on social media also gets
        you one point.
        </p>
      <h4>Q: What counts as a referral?</h4>
      <p>
        A: When someone makes an account using your
        referral code.
      </p>
      <h4>Q: I shared on social media, why didn't I get a point?</h4>
      <p>
        A: You can only get a point from sharing from social
        media once, so once you've already shared you can't get
        anymore points.
      </p>
    </div>
  );
}
export default faq;