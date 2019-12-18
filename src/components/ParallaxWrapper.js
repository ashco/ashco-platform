import React, { useState } from 'react';

const ParallaxWrapper = ({ render }) => {
  const [state, setState] = useState(false);

  console.log('Parallax in the house!');
  return (
    <div>
      {render(state)}
    </div>
  )
}

export default ParallaxWrapper;