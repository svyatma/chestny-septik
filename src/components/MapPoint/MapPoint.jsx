import './MapPoint.scss';

function MapPoint({ variant = 'primary', children }) {
  const className = `map-point map-point--${variant}`;
  
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default MapPoint;