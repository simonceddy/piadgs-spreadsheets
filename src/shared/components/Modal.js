function Modal({ children, onClose }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
      <div
        role="presentation"
        className="absolute h-full w-full z-10"
        onClick={onClose}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }}
      />
      <div className="z-20 m-auto">
        {children}
      </div>
    </div>
  );
}

export default Modal;
