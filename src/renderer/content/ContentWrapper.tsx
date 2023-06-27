import Highlights from './highlights/Highlights';
import SiteContent from './site-content/SiteContent';

import './ContentWrapper.css';

const ContentWrapper = () => {
  return (
    <div className="content-wrapper-root">
      <Highlights />
      <SiteContent />
    </div>
  );
};

export default ContentWrapper;
