import { Helmet } from 'react-helmet-async';

const GA_MEASUREMENT_ID = 'G-4NNBHQL51B';

export const GoogleAnalytics = () => {
  return (
    <Helmet>
      {/* Google tag (gtag.js) */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </script>
    </Helmet>
  );
};
