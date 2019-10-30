export const PiecewiseGeneric = <Tin, Tout>() => {
  const pieces: {
    domainCheck: (x: Tin) => boolean;
    piecewiseFunction: (x: Tin) => Tout;
  }[] = [];

  const api = {
    add(domainCheck: (x: Tin) => boolean, piecewiseFunction: (x: Tin) => Tout) {
      pieces.push({ domainCheck, piecewiseFunction });
      return api;
    },

    compile() {
      return (x: Tin) => {
        for (let piece of pieces) {
          if (piece.domainCheck(x)) {
            return piece.piecewiseFunction(x);
          }
        }
      };
    },
  };

  return api;
};

export const Piecewise = () => PiecewiseGeneric<number, number>();
export const Piecewise2D = () => PiecewiseGeneric<[number, number], number>();
