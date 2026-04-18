/*  =====================================================
    Dragonfly Mission International — Blog Posts
    =====================================================

    TO ADD A NEW POST:
    1. Copy the block between the dashed lines below
    2. Paste it at the TOP of the POSTS array (newest first)
    3. Fill in each field — details below
    4. Save the file. It appears on the site immediately.

    FIELDS:
      slug       — URL identifier, lowercase, hyphens only. E.g. 'spring-update-2026'
      title      — Post headline as it appears on the site
      date       — Display date. E.g. 'April 17, 2026'
      category   — Used for filtering. Keep consistent. E.g. 'The Dragonfly Board'
      excerpt    — 1–2 sentence preview shown on the blog index
      paragraphs — Full post text, one paragraph per entry in the list

    - - - - - - - - - - - - - - - - - - - - - - - - - -
    {
      slug: 'your-post-slug',
      title: 'Your Post Title',
      date: 'Month D, YYYY',
      category: 'The Dragonfly Board',
      excerpt: 'A short preview sentence that draws people in.',
      paragraphs: [
        'First paragraph of your post.',
        'Second paragraph.',
        'Third paragraph, and so on.'
      ]
    },
    - - - - - - - - - - - - - - - - - - - - - - - - - -
    ===================================================== */

var POSTS = [

  {
    slug: 'a-note-from-kathy',
    title: 'A Note From Kathy',
    date: 'March 15, 2022',
    category: 'The Dragonfly Board',
    excerpt: 'Dear sponsors, donors, family and friends — all of us at DMI want to thank you for your continued support in helping the ladies and their families.',
    paragraphs: [
      'Dear sponsors, donors, family and friends,',
      'All of us at DMI want to thank you for your continued support in helping the ladies and their families in Jinja. It has been a challenging season — for them, and for all of us — but your faithfulness has made it possible to keep the program running through every obstacle.',
      'As we look ahead, we are encouraged by what we see. The nutrition program continues to serve 18–20 families each month, and we are actively working to restore the school sponsorship program that was paused during COVID.',
      'Your generosity is not just dollars on a page — it is food on a table, a uniform on a child, and hope in a community that needs it. Thank you, from the bottom of our hearts.',
      'With gratitude,',
      'Kathy Cernero & the DMI Team'
    ]
  },

  {
    slug: 'on-pause',
    title: 'On Pause ...',
    date: 'September 3, 2021',
    category: 'The Dragonfly Board',
    excerpt: 'COVID-19 was a learning curve many of us never believed would come. For us at DMI it exposed areas of development that we are now working to address.',
    paragraphs: [
      'COVID-19 was a learning curve many of us never believed would come.',
      'For us at DMI, it exposed areas of development that we are now working to address. Schools in Uganda closed for an extended period, placing our education sponsorship program on hold. Our in-country team adapted quickly — pivoting to direct food drops to each family during lockdown — but the disruption reminded us how fragile these systems can be.',
      'We are currently pausing new school sponsorships while we evaluate partnerships with Jinja-area schools that will provide better accountability and transparency for our donors. We want to do this right.',
      'In the meantime, your continued support of the nutrition program means everything. If you have questions about a sponsorship or would like to redirect your giving, please reach out at info@dmionline.org.',
      'We are grateful for your patience and continued trust in DMI.'
    ]
  },

  {
    slug: 'lets-start-over',
    title: "Let's Start Over...",
    date: 'April 22, 2021',
    category: 'The Dragonfly Board',
    excerpt: "Admittedly, it's been too long since we communicated with you. It's been too long since we've been on the ground in Uganda.",
    paragraphs: [
      "Admittedly, it's been too long.",
      "It's been too long since we communicated with you. It's been too long since we've been on the ground in Uganda. And honestly, it's been too long since we've operated as a fully functional non-profit organization.",
      "The pandemic hit DMI like it hit everyone — hard and fast. Our annual trip to Jinja was cancelled. Fundraising stalled. Communication fell through the cracks. And while our in-country team, led by Pastor Godfrey, never stopped serving the families in their care, we on the stateside team let too much time pass in silence.",
      "So: let's start over. We're recommitting to regular communication, to transparent financial reporting, and to getting back in front of the families we serve as soon as it is safe to do so.",
      "If you've stuck with us through the quiet — thank you. We don't take that for granted. Watch this space for more regular updates going forward."
    ]
  }

];
