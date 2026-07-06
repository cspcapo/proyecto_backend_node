export default (req, res, next) => {
  const err = new Error("Ruta no encontrada");
  err.status = 404;
  next(err);
};
