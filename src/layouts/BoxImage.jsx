export default function BoxImage({ parametros }) {
  const { imga, width, height } = parametros;

  return (
    <div className={`${height} ${width} rounded-lg shadow-lg shadow-black overflow-hidden`}>
      <img
        src={imga}
        className="h-full w-full object-center"
        alt="imagen"
      />
    </div>
  );
}
