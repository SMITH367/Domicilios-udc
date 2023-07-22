const setStateOrder = (state) => {
    if (state === 1) {
      return (
        <span style={{ color: "lightgreen", fontWeight: "bold" }}>Creada</span>
      );
    } else if (state === 2) {
      return (
        <span style={{ color: "aqua", fontWeight: "bold" }}>Asignada</span>
      );
    } else if (state === 3) {
      return (
        <span style={{ color: "rgb(255, 0, 0)", fontWeight: "bold" }}>
          En camino
        </span>
      );
    } else if (state === 4) {
      return (
        <span style={{ color: "rgb(51, 255, 0)", fontWeight: "bold" }}>
          Entregado
        </span>
      );
    } else if (state === 0) {
      return (
        <span style={{ color: "#FF0040", fontWeight: "bold" }}>Cancelada</span>
      );
    }
  };

  export {
    setStateOrder
  }