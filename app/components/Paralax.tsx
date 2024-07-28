export const Paralax = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/lokalNew.JPG")',
        perspective: "10px",
        overflowY: "scroll",
        overflowX: "hidden",
        backgroundSize: 'cover',
        zIndex: -1
    
      }}
      className="h-96 bg-fixed object-fill"
    >
    </div>
  );
};
