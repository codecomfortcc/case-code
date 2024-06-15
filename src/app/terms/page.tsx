'use client';

import React, { useEffect } from 'react';

const TermsAndConditions = () => {
  useEffect(() => {
    const pdfUrl = '/policy/website_tnc_703369.pdf'; // Update this to match your PDF file location
    window.open(pdfUrl);
  }, []);

  return null; // Return null to indicate no visual content
};

export default TermsAndConditions;
